import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const caseStudyDir = path.join(root, 'case-studies');
const sourceStoryReferencePath =
  'skills/strategic-situation-analysis/references/thirty-six-stratagems-source-stories.md';

function fail(message) {
  console.error(`case-study-test: ${message}`);
  process.exitCode = 1;
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function readJson(relativePath) {
  try {
    return JSON.parse(read(relativePath));
  } catch (error) {
    fail(`${relativePath} must be valid JSON: ${error.message}`);
    return null;
  }
}

function includesAll(content, phrases, context) {
  for (const phrase of phrases ?? []) {
    if (!content.includes(phrase)) {
      fail(`${context} must include "${phrase}"`);
    }
  }
}

function excludesAll(content, phrases, context) {
  for (const phrase of phrases ?? []) {
    if (content.toLowerCase().includes(phrase.toLowerCase())) {
      fail(`${context} must not include blocked phrase "${phrase}"`);
    }
  }
}

function loadCanonicalLenses() {
  return [
    ...read(sourceStoryReferencePath).matchAll(/^\|\s*\d+\s*\|\s*([^|]+?)\s*\|/gm),
  ].map((match) => match[1].trim());
}

const requiredDodSections = [
  'Definition Of Done',
  'Simulation Output',
  'Stakeholder Reaction',
  'Safe Response',
  'Evidence Needed Next',
];

function isDodCaseStudy(relativePath) {
  return path.basename(relativePath).startsWith('dod-');
}

function getDodCaseHeading(spec) {
  return (spec.required_headings ?? []).find((heading) => heading.startsWith('## Case '));
}

function getDodCaseNumberFromHeading(heading) {
  const match = heading?.match(/^## Case (\d+):/);
  return match ? Number.parseInt(match[1], 10) : null;
}

function getScopedOutput(relativePath, spec, output) {
  if (!isDodCaseStudy(relativePath)) {
    return output;
  }

  const heading = getDodCaseHeading(spec);
  if (!heading) {
    fail(`${relativePath} must define a DoD case heading`);
    return '';
  }

  const start = output.indexOf(heading);
  if (start === -1) {
    fail(`${relativePath} scoped output is missing DoD case heading "${heading}"`);
    return '';
  }

  const next = output.indexOf('\n## Case ', start + heading.length);
  return output.slice(start, next === -1 ? undefined : next);
}

function validateDodContract(relativePath, spec, scopedOutput) {
  if (!isDodCaseStudy(relativePath)) {
    return;
  }

  const contract = spec.dod_contract;
  if (!contract || typeof contract !== 'object') {
    fail(`${relativePath} must define dod_contract`);
    return;
  }

  if (!Number.isInteger(contract.case_number) || contract.case_number < 1 || contract.case_number > 10) {
    fail(`${relativePath} dod_contract.case_number must be an integer from 1 to 10`);
  }

  const headingCaseNumber = getDodCaseNumberFromHeading(getDodCaseHeading(spec));
  if (headingCaseNumber !== contract.case_number) {
    fail(`${relativePath} dod_contract.case_number must match its ## Case N heading`);
  }

  if (seenDodCaseNumbers.has(contract.case_number)) {
    fail(
      `${relativePath} duplicates dod_contract.case_number ${contract.case_number} from ${seenDodCaseNumbers.get(contract.case_number)}`,
    );
  } else {
    seenDodCaseNumbers.set(contract.case_number, relativePath);
  }

  for (const field of ['case_name', 'source_anchor', 'domain']) {
    if (!contract[field] || typeof contract[field] !== 'string') {
      fail(`${relativePath} dod_contract.${field} must be a non-empty string`);
    }
  }

  if (contract.case_name && !spec.name.includes(contract.case_name)) {
    fail(`${relativePath} name must include dod_contract.case_name`);
  }

  if (contract.source_anchor && !scopedOutput.includes(contract.source_anchor)) {
    fail(`${relativePath} scoped output must include source anchor "${contract.source_anchor}"`);
  }

  for (const section of requiredDodSections) {
    if (!(spec.required_headings ?? []).includes(`### ${section}`)) {
      fail(`${relativePath} required_headings must include ### ${section}`);
    }
    if (!scopedOutput.includes(`### ${section}`)) {
      fail(`${relativePath} scoped output must include ### ${section}`);
    }
  }

  if (!scopedOutput.includes('Label: synthetic stakeholder simulation, not a real quote. This is hypothesis, not proof.')) {
    fail(`${relativePath} scoped output must include the synthetic simulation label`);
  }

  if (!Array.isArray(contract.evidence_needed_next) || contract.evidence_needed_next.length < 3) {
    fail(`${relativePath} dod_contract.evidence_needed_next must contain at least three evidence phrases`);
    return;
  }

  const lowerScopedOutput = scopedOutput.toLowerCase();
  for (const evidencePhrase of contract.evidence_needed_next) {
    if (!lowerScopedOutput.includes(String(evidencePhrase).toLowerCase())) {
      fail(`${relativePath} scoped output must include evidence phrase "${evidencePhrase}"`);
    }
  }
}

const canonicalLenses = loadCanonicalLenses();
const seenDodCaseNumbers = new Map();

function validateCaseStudy(relativePath) {
  const spec = readJson(relativePath);
  if (!spec) {
    return;
  }

  const context = `${relativePath} -> ${spec.output}`;
  if (!spec.name || !spec.scenario || !spec.output) {
    fail(`${relativePath} must define name, scenario, and output`);
    return;
  }

  const outputPath = path.join(root, spec.output);
  if (!fs.existsSync(outputPath)) {
    fail(`${relativePath} output is missing: ${spec.output}`);
    return;
  }

  const output = fs.readFileSync(outputPath, 'utf8');
  const scopedOutput = getScopedOutput(relativePath, spec, output);
  includesAll(scopedOutput, spec.required_headings, context);
  includesAll(scopedOutput, spec.required_phrases, context);
  includesAll(scopedOutput, spec.required_lenses, context);
  excludesAll(scopedOutput, spec.blocked_phrases, context);
  validateDodContract(relativePath, spec, scopedOutput);

  if (spec.verdict && !output.includes(`Verdict: ${spec.verdict}`)) {
    fail(`${context} must include Verdict: ${spec.verdict}`);
  }

  if (spec.max_lenses) {
    const foundLensCount = canonicalLenses.filter((lens) => output.includes(lens)).length;
    if (foundLensCount > spec.max_lenses) {
      fail(`${context} has ${foundLensCount} canonical lenses, above max ${spec.max_lenses}`);
    }
  }
}

if (!fs.existsSync(caseStudyDir)) {
  fail('missing case-studies directory');
} else {
  const caseStudyFiles = fs
    .readdirSync(caseStudyDir)
    .filter((entry) => entry.endsWith('.json'))
    .sort();

  if (caseStudyFiles.length < 3) {
    fail('expected at least 3 case study specs');
  }

  for (const fileName of caseStudyFiles) {
    validateCaseStudy(path.join('case-studies', fileName));
  }
}

if (!process.exitCode) {
  console.log('Sunzi strategy case study tests passed.');
}
