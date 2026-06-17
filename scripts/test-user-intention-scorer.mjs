import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { scoreFixture } from './score-user-intention.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function fail(message) {
  console.error(`user-intention-scorer-test: ${message}`);
  process.exitCode = 1;
}

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));
}

function assertEqual(actual, expected, context) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    fail(`${context}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

function assertIncludes(actual, expected, context) {
  if (!String(actual).includes(expected)) {
    fail(`${context}: expected "${actual}" to include "${expected}"`);
  }
}

const validFixtures = [
  'fixtures/user-intention-scoring/valid/shoe-comments-synthetic.json',
  'fixtures/user-intention-scoring/valid/saas-adoption-real.json',
  'fixtures/user-intention-scoring/valid/missing-evidence-synthetic.json',
];

for (const fixturePath of validFixtures) {
  const fixture = readJson(fixturePath);
  let result;
  try {
    result = scoreFixture(fixture);
  } catch (error) {
    fail(`${fixturePath} should be valid: ${error.message}`);
    continue;
  }

  assertEqual(result.aggregate_score_1_to_10, fixture.expected.aggregate_score_1_to_10, `${fixturePath} aggregate`);
  assertEqual(
    result.responses.map((response) => response.score_1_to_10),
    fixture.expected.response_scores_1_to_10,
    `${fixturePath} response scores`,
  );
  assertEqual(result.confidence, fixture.expected.confidence, `${fixturePath} confidence`);
  assertIncludes(result.score_label, fixture.expected.score_label_includes, `${fixturePath} score label`);
}

const invalidFixtures = [
  {
    path: 'fixtures/user-intention-scoring/invalid/synthetic-real-nps-claim.json',
    message: 'synthetic_proxy cannot use metric "nps"',
  },
  {
    path: 'fixtures/user-intention-scoring/invalid/bad-weight-sum.json',
    message: 'dimension weights must sum to 100',
  },
  {
    path: 'fixtures/user-intention-scoring/invalid/model-supplied-score.json',
    message: 'must not include a model-supplied score',
  },
];

for (const fixture of invalidFixtures) {
  try {
    scoreFixture(readJson(fixture.path));
    fail(`${fixture.path} should be invalid`);
  } catch (error) {
    assertIncludes(error.message, fixture.message, `${fixture.path} failure message`);
  }
}

if (!process.exitCode) {
  console.log('Sunzi user-intention scorer tests passed.');
}
