import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const allowedModes = new Set(['synthetic_proxy', 'real_respondent']);
const allowedSyntheticMetrics = new Set([
  'buying_intention',
  'purchase_intent_proxy',
  'nps_proxy',
  'pmf_proxy',
  'willingness_to_pay_proxy',
  'adoption_intent',
  'switching_cost',
  'task_fit',
  'custom',
]);
const allowedRealMetrics = new Set([
  ...allowedSyntheticMetrics,
  'purchase_intent',
  'nps',
  'pmf',
  'willingness_to_pay',
]);

function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function round1(value) {
  return Math.round(value * 10) / 10;
}

function validateString(value, fieldName) {
  invariant(typeof value === 'string' && value.trim().length > 0, `${fieldName} must be a non-empty string`);
}

function validateMetric(mode, metric) {
  const allowed = mode === 'synthetic_proxy' ? allowedSyntheticMetrics : allowedRealMetrics;
  invariant(allowed.has(metric), `${mode} cannot use metric "${metric}"`);
}

function validateDimension(dimension, index) {
  validateString(dimension.name, `dimensions[${index}].name`);
  invariant(/^[a-z][a-z0-9_]*$/.test(dimension.name), `dimensions[${index}].name must be snake_case`);
  invariant(Number.isFinite(dimension.weight) && dimension.weight > 0, `dimensions[${index}].weight must be positive`);
  invariant(['positive', 'negative'].includes(dimension.polarity), `dimensions[${index}].polarity must be positive or negative`);

  const scale = dimension.scale ?? {};
  const min = scale.min ?? 0;
  const max = scale.max ?? 5;
  invariant(Number.isFinite(min), `dimensions[${index}].scale.min must be numeric`);
  invariant(Number.isFinite(max) && max > min, `dimensions[${index}].scale.max must be greater than min`);
  validateString(scale.min_anchor, `dimensions[${index}].scale.min_anchor`);
  validateString(scale.max_anchor, `dimensions[${index}].scale.max_anchor`);
}

function validateScoringContract(contract) {
  invariant(contract && typeof contract === 'object', 'scoring_contract must be an object');
  invariant(
    contract.formula_type === 'weighted_normalized_1_to_10',
    'scoring_contract.formula_type must be weighted_normalized_1_to_10',
  );
  invariant(
    contract.frozen_stage === 'after_comments_before_structured_signal_extraction',
    'scoring_contract.frozen_stage must be after_comments_before_structured_signal_extraction',
  );
  invariant(
    contract.generated_by_skill === true,
    'scoring_contract.generated_by_skill must be true',
  );
  invariant(
    contract.allow_model_supplied_final_scores === false,
    'scoring_contract.allow_model_supplied_final_scores must be false',
  );
  invariant(Array.isArray(contract.dimensions) && contract.dimensions.length > 0, 'scoring_contract.dimensions is required');

  const seen = new Set();
  let totalWeight = 0;
  contract.dimensions.forEach((dimension, index) => {
    validateDimension(dimension, index);
    invariant(!seen.has(dimension.name), `duplicate dimension "${dimension.name}"`);
    seen.add(dimension.name);
    totalWeight += dimension.weight;
  });

  invariant(Math.abs(totalWeight - 100) < 0.001, `dimension weights must sum to 100; got ${round1(totalWeight)}`);
}

function normalizeSignal(rawValue, dimension) {
  const scale = dimension.scale ?? {};
  const min = scale.min ?? 0;
  const max = scale.max ?? 5;
  invariant(Number.isFinite(rawValue), `signal "${dimension.name}" must be numeric`);
  invariant(rawValue >= min && rawValue <= max, `signal "${dimension.name}" must be between ${min} and ${max}`);

  const normalized = (rawValue - min) / (max - min);
  return dimension.polarity === 'negative' ? 1 - normalized : normalized;
}

function fallbackSignal(dimension) {
  const scale = dimension.scale ?? {};
  const min = scale.min ?? 0;
  const max = scale.max ?? 5;
  if (dimension.missing_strategy === 'neutral') {
    return min + (max - min) / 2;
  }
  return dimension.polarity === 'negative' ? max : min;
}

function scoreResponse(response, contract) {
  invariant(response && typeof response === 'object', 'response must be an object');
  validateString(response.id, 'response.id');
  validateString(response.respondent_type, `response ${response.id} respondent_type`);
  validateString(response.text, `response ${response.id} text`);
  invariant(!('score' in response), `response ${response.id} must not include a model-supplied score`);
  invariant(!('final_score' in response), `response ${response.id} must not include a model-supplied final_score`);
  invariant(!('llm_score' in response), `response ${response.id} must not include a model-supplied llm_score`);
  invariant(response.signals && typeof response.signals === 'object', `response ${response.id} signals are required`);

  const missingEvidence = [];
  let weightedTotal = 0;

  for (const dimension of contract.dimensions) {
    const hasSignal = Object.prototype.hasOwnProperty.call(response.signals, dimension.name);
    const rawValue = hasSignal ? response.signals[dimension.name] : fallbackSignal(dimension);
    if (!hasSignal) {
      missingEvidence.push(dimension.name);
    }
    weightedTotal += dimension.weight * normalizeSignal(rawValue, dimension);
  }

  return {
    id: response.id,
    respondent_type: response.respondent_type,
    score_1_to_10: round1(1 + 9 * (weightedTotal / 100)),
    missing_evidence: missingEvidence,
  };
}

function confidenceFor(mode, scoredResponses) {
  const hasMissingEvidence = scoredResponses.some((response) => response.missing_evidence.length > 0);
  if (mode === 'synthetic_proxy' || hasMissingEvidence) {
    return hasMissingEvidence ? 'low' : 'medium';
  }
  return scoredResponses.length >= 3 ? 'high' : 'medium';
}

export function scoreFixture(fixture) {
  validateString(fixture.name, 'name');
  validateString(fixture.mode, 'mode');
  invariant(allowedModes.has(fixture.mode), `mode must be one of ${[...allowedModes].join(', ')}`);
  validateString(fixture.metric, 'metric');
  validateMetric(fixture.mode, fixture.metric);
  validateString(fixture.scenario, 'scenario');
  validateString(fixture.respondent_type, 'respondent_type');
  validateScoringContract(fixture.scoring_contract);
  invariant(Array.isArray(fixture.responses) && fixture.responses.length > 0, 'responses must be a non-empty array');

  const scoredResponses = fixture.responses.map((response) => scoreResponse(response, fixture.scoring_contract));
  const aggregateScore = round1(
    scoredResponses.reduce((total, response) => total + response.score_1_to_10, 0) / scoredResponses.length,
  );
  const missingEvidence = [
    ...new Set(scoredResponses.flatMap((response) => response.missing_evidence)),
  ];

  return {
    name: fixture.name,
    mode: fixture.mode,
    metric: fixture.metric,
    scenario: fixture.scenario,
    respondent_type: fixture.respondent_type,
    score_label: fixture.mode === 'synthetic_proxy' ? 'synthetic proxy / hypothesis, not real research evidence' : 'real respondent deterministic score',
    aggregate_score_1_to_10: aggregateScore,
    confidence: confidenceFor(fixture.mode, scoredResponses),
    warnings: fixture.mode === 'synthetic_proxy'
      ? ['Synthetic proxy only: do not present as real NPS, PMF, WTP, market proof, or percent-would-buy evidence.']
      : [],
    missing_evidence: missingEvidence,
    responses: scoredResponses,
  };
}

function readJson(relativeOrAbsolutePath) {
  const absolutePath = path.isAbsolute(relativeOrAbsolutePath)
    ? relativeOrAbsolutePath
    : path.join(root, relativeOrAbsolutePath);
  return JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : '';
const currentPath = fileURLToPath(import.meta.url);

if (invokedPath === currentPath) {
  const fixturePath = process.argv[2];
  if (!fixturePath) {
    console.error('Usage: node scripts/score-user-intention.mjs <fixture.json>');
    process.exit(1);
  }

  try {
    const result = scoreFixture(readJson(fixturePath));
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error(`score-user-intention: ${error.message}`);
    process.exit(1);
  }
}
