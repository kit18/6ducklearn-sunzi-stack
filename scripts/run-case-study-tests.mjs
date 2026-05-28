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

const canonicalLenses = loadCanonicalLenses();

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
  includesAll(output, spec.required_headings, context);
  includesAll(output, spec.required_phrases, context);
  includesAll(output, spec.required_lenses, context);
  excludesAll(output, spec.blocked_phrases, context);

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
