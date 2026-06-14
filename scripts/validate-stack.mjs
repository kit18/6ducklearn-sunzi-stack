import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const expectedSkills = [
  'strategic-situation-analysis',
  'sunzi-decision-review',
  'sunzi-stakeholder-ssr',
  'strategy-analyst-review',
  'sunzi-growth-review',
  'sunzi-operations-sop-review',
  'sunzi-prd-review',
  'sunzi-strategy-consultant',
];

const expectedReferences = [
  'references/decision-memo-template.md',
  'references/business-war-room-template.md',
  'references/ethical-strategy-guardrails.md',
  'references/ethical-use-guardrails.md',
  'references/thirty-six-stratagems-matrix.md',
  'references/applied-use-case-map.md',
  'references/stakeholder-stress-reaction.md',
  'references/ssr-evaluation-scenarios.md',
  'references/real-life-dod-case-map.md',
  'references/domain-adapters.md',
  'references/domain-review-contracts.md',
  'references/market-signal-forensics.md',
  'references/strategy-output-template.md',
  'references/consulting-case-validation-corpus.md',
  'references/sunzi-business-consultant-soul.md',
  'skills/strategic-situation-analysis/references/thirty-six-stratagems-source-stories.md',
];

const expectedAgents = [
  'AGENTS.md',
  'agents/sunzi-strategy-consultant.yaml',
];

const expectedDocs = [
  'CONTEXT.md',
  'docs/INSTALL.md',
  'docs/ADOPTION-CHECKLIST.md',
  'docs/superpowers/plans/2026-06-13-sunzi-ssr-optimization.md',
  'docs/superpowers/plans/2026-06-13-sunzi-real-life-dod-case-simulations.md',
];

const expectedExamples = [
  'examples/ecommerce-growth-decision-memo.md',
  'examples/career-negotiation-decision-review.md',
  'examples/api-migration-ssr.md',
  'examples/growth-community-ssr.md',
  'examples/operations-billing-ssr.md',
  'examples/dod-case-simulations.md',
  'examples/operations-supply-chain-decision-memo.md',
  'examples/ai-transformation-decision-memo.md',
  'examples/macro-public-sector-decision-memo.md',
  'examples/market-risk-no-trade-review.md',
  'examples/strategy-analyst-review-sample.md',
  'examples/unsafe-manipulation-reframe.md',
  'examples/growth-loop-review.md',
  'examples/operations-sop-review.md',
  'examples/product-value-prd-review.md',
];

const expectedCaseStudies = [
  'case-studies/ai-transformation.json',
  'case-studies/api-migration-ssr.json',
  'case-studies/career-negotiation-decision-review.json',
  'case-studies/dod-api-platform-migration-rollout.json',
  'case-studies/dod-community-growth-without-spam.json',
  'case-studies/dod-executive-ai-transformation-push.json',
  'case-studies/dod-incident-billing-escalation-sop.json',
  'case-studies/dod-manager-delegation-under-pressure.json',
  'case-studies/dod-market-entry-without-head-on-war.json',
  'case-studies/dod-negotiation-with-future-relationship-value.json',
  'case-studies/dod-personal-career-move-promotion-ask.json',
  'case-studies/dod-pricing-packaging-change.json',
  'case-studies/dod-talent-retention-and-motivation.json',
  'case-studies/ecommerce-growth.json',
  'case-studies/growth-community-ssr.json',
  'case-studies/macro-public-sector.json',
  'case-studies/market-risk-no-trade.json',
  'case-studies/operations-billing-ssr.json',
  'case-studies/operations-supply-chain.json',
  'case-studies/growth-loop-review.json',
  'case-studies/operations-sop-review.json',
  'case-studies/product-value-prd-review.json',
  'case-studies/strategy-review-marketplace.json',
  'case-studies/unsafe-manipulation-reframe.json',
];

const stratagemNames = [
  '瞞天過海',
  '圍魏救趙',
  '借刀殺人',
  '以逸待勞',
  '趁火打劫',
  '聲東擊西',
  '無中生有',
  '暗渡陳倉',
  '隔岸觀火',
  '笑裏藏刀',
  '李代桃僵',
  '順手牽羊',
  '打草驚蛇',
  '借屍還魂',
  '調虎離山',
  '欲擒故縱',
  '拋磚引玉',
  '擒賊擒王',
  '釜底抽薪',
  '混水摸魚',
  '金蟬脫殼',
  '關門捉賊',
  '遠交近攻',
  '假道伐虢',
  '偷樑換柱',
  '指桑罵槐',
  '假癡不癲',
  '上屋抽梯',
  '樹上開花',
  '反客為主',
  '美人計',
  '空城計',
  '反間計',
  '苦肉計',
  '連環計',
  '走為上計',
];

const leakagePatterns = [
  /\/Users\/kit18/i,
  /service[_-]?role/i,
  /token_hash/i,
  /supabase\/functions/i,
  /VITE_SUPABASE/i,
  /DATABASE_URL/i,
  /OPENAI_API_KEY/i,
  /ANTHROPIC_API_KEY/i,
  /-----BEGIN [A-Z ]*PRIVATE KEY-----/,
];

const processSummaryDescriptionPattern = /\b(selects|returns|generates|delivers|routes|audits|simulates)\b/i;

function fail(message) {
  console.error(`validate-stack: ${message}`);
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
    return {};
  }
}

function fileExists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') {
      continue;
    }
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(absolute, files);
    } else {
      files.push(absolute);
    }
  }
  return files;
}

function parseFrontmatter(content, relativePath) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    fail(`${relativePath} is missing YAML frontmatter`);
    return {};
  }

  const fields = {};
  for (const line of match[1].split('\n')) {
    const fieldMatch = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (fieldMatch) {
      fields[fieldMatch[1]] = fieldMatch[2].trim();
    }
  }
  return fields;
}

function validateSkills() {
  for (const skillName of expectedSkills) {
    const relativePath = `skills/${skillName}/SKILL.md`;
    if (!fileExists(relativePath)) {
      fail(`missing ${relativePath}`);
      continue;
    }

    const content = read(relativePath);
    const frontmatter = parseFrontmatter(content, relativePath);
    if (frontmatter.name !== skillName) {
      fail(`${relativePath} frontmatter name must be ${skillName}`);
    }
    if (!frontmatter.description || frontmatter.description.length < 80) {
      fail(`${relativePath} needs a useful trigger description`);
    }
    if (processSummaryDescriptionPattern.test(frontmatter.description ?? '')) {
      fail(`${relativePath} description should describe trigger conditions, not summarize workflow`);
    }

    for (const match of content.matchAll(/\]\((\.{1,2}\/[^)]+)\)/g)) {
      const target = path.normalize(path.join(path.dirname(path.join(root, relativePath)), match[1]));
      if (!target.startsWith(root) || !fs.existsSync(target)) {
        fail(`${relativePath} references missing local file ${match[1]}`);
      }
    }
  }
}

function validateReferences() {
  for (const relativePath of [
    ...expectedReferences,
    ...expectedAgents,
    ...expectedDocs,
    ...expectedExamples,
    ...expectedCaseStudies,
    'stack.json',
  ]) {
    if (!fileExists(relativePath)) {
      fail(`missing ${relativePath}`);
    }
  }

  const sourceRef = read('skills/strategic-situation-analysis/references/thirty-six-stratagems-source-stories.md');
  if (!sourceRef.includes('Wikisource')) {
    fail('source-story reference must cite Wikisource');
  }

  for (const stratagemName of stratagemNames) {
    const matches = sourceRef.match(new RegExp(stratagemName, 'g')) ?? [];
    if (matches.length !== 1) {
      fail(`${stratagemName} must appear exactly once in source-story reference; found ${matches.length}`);
    }
  }
}

function validateAgents() {
  const agentsDoc = read('AGENTS.md');
  const profile = read('agents/sunzi-strategy-consultant.yaml');

  for (const required of [
    'sunzi-strategy-consultant',
    'sunzi-decision-review',
    'sunzi-stakeholder-ssr',
    'strategic-situation-analysis',
    'strategy-analyst-review',
    'sunzi-growth-review',
    'sunzi-operations-sop-review',
    'sunzi-prd-review',
    'source/evidence ledger',
    'literal historical figure',
    'hypothesis, not proof',
    'Safe response',
  ]) {
    if (!agentsDoc.includes(required)) {
      fail(`AGENTS.md must include ${required}`);
    }
  }

  for (const required of [
    'literal_historical_persona: false',
    'sunzi-decision-review',
    'sunzi-stakeholder-ssr',
    'strategic-situation-analysis',
    'strategy-analyst-review',
    'sunzi-growth-review',
    'sunzi-operations-sop-review',
    'sunzi-prd-review',
    'sunzi-strategy-consultant',
    'references/ssr-evaluation-scenarios.md',
    'hypothesis not proof',
    'safe response',
    'Evidence Ledger',
    'fraud',
    'market manipulation',
    'truthful growth',
  ]) {
    if (!profile.includes(required)) {
      fail(`agents/sunzi-strategy-consultant.yaml must include ${required}`);
    }
  }
}

function validateExamples() {
  const exampleExpectations = [
    {
      path: 'examples/ecommerce-growth-decision-memo.md',
      required: ['fake scarcity', 'fake reviews', 'hidden fees', 'checkout completion', 'Evidence Ledger'],
    },
    {
      path: 'examples/career-negotiation-decision-review.md',
      required: ['Verdict: negotiate', 'Status quo', 'BATNA', 'trust-preserving', 'Retreat trigger'],
    },
    {
      path: 'examples/api-migration-ssr.md',
      required: ['Synthetic SSR Output', 'synthetic stakeholder simulation', 'hypothesis, not proof', 'OAuth 2.0', 'dynamic billing', 'idempotent'],
    },
    {
      path: 'examples/growth-community-ssr.md',
      required: ['Synthetic SSR Output', 'Community Moderator Reaction', 'Power User Reply', 'Support Lead Escalation', 'hypothesis, not proof', 'safe response'],
    },
    {
      path: 'examples/operations-billing-ssr.md',
      required: ['Synthetic SSR Output', 'Support Shift Lead Slack', 'Payments Engineer Note', 'Customer Success Escalation', 'hypothesis, not proof', 'safe response'],
    },
    {
      path: 'examples/dod-case-simulations.md',
      required: ['Real-Life DoD Case Simulations', 'Case 1: Market Entry Without Head-On War', 'Definition Of Done', 'Simulation Output', 'Stakeholder Reaction', 'Safe Response', 'Evidence Needed Next'],
    },
    {
      path: 'examples/operations-supply-chain-decision-memo.md',
      required: ['Physical bottleneck', 'information bottleneck', 'decision latency', 'Evidence Ledger'],
    },
    {
      path: 'examples/ai-transformation-decision-memo.md',
      required: ['dual-track plan', 'human fallback', 'adoption telemetry', 'Evidence Ledger'],
    },
    {
      path: 'examples/macro-public-sector-decision-memo.md',
      required: ['transmission mechanism', 'governance vehicle', 'qualified investment pipeline', 'Evidence Ledger'],
    },
    {
      path: 'examples/market-risk-no-trade-review.md',
      required: ['not financial advice', 'no-trade', 'manipulation', 'detection and defense'],
    },
    {
      path: 'examples/strategy-analyst-review-sample.md',
      required: ['Verdict: revise', 'Evidence Audit', 'Competing Diagnosis', 'Kill'],
    },
    {
      path: 'examples/growth-loop-review.md',
      required: ['Verdict: revise', 'Growth Decision', 'Mechanism Before Tactic', 'Trust guardrail', 'Kill criterion'],
    },
    {
      path: 'examples/operations-sop-review.md',
      required: ['Verdict: revise', 'SOP State Machine', 'Physical bottleneck', 'Information bottleneck', 'Audit log'],
    },
    {
      path: 'examples/product-value-prd-review.md',
      required: ['Verdict: revise', 'Office-Hours Demand Gate', 'Business Use Cases', 'Demand reality', 'Product-value proof'],
    },
  ];

  for (const expectation of exampleExpectations) {
    const content = read(expectation.path);
    for (const phrase of expectation.required) {
      if (!content.includes(phrase)) {
        fail(`${expectation.path} must include behavior-gate phrase: ${phrase}`);
      }
    }
  }
}

function validateSsrSafety() {
  const ssrSkill = read('skills/sunzi-stakeholder-ssr/SKILL.md');
  const ssrReference = read('references/stakeholder-stress-reaction.md');
  const ssrEvaluationReference = read('references/ssr-evaluation-scenarios.md');
  const ssrExample = read('examples/api-migration-ssr.md');
  const growthSsrExample = read('examples/growth-community-ssr.md');
  const operationsSsrExample = read('examples/operations-billing-ssr.md');

  for (const required of [
    'synthetic stakeholder simulation, not a real quote',
    'synthetic artifact, not a real message',
    'hypothesis, not proof',
    'Do not present synthetic text as a real stakeholder quote',
    'Do not present SSR as product validation',
    'Do not include private customer data',
  ]) {
    if (!ssrSkill.includes(required) && !ssrExample.includes(required)) {
      fail(`SSR safety contract must include ${required}`);
    }
  }

  for (const required of [
    'Not a real customer quote',
    'Not a survey result',
    'Use stratagems as **stress lenses**',
    'Synthetic stakeholder voice',
    'hypothesis, not proof',
    'SSR Evaluation Loop',
  ]) {
    if (!ssrReference.includes(required)) {
      fail(`SSR reference must include ${required}`);
    }
  }

  for (const required of [
    'Evaluation Contract',
    'Growth Community SSR',
    'Operations Billing SSR',
    'API Migration SSR',
    'hypotheses',
  ]) {
    if (!ssrEvaluationReference.includes(required)) {
      fail(`SSR evaluation reference must include ${required}`);
    }
  }

  for (const [relativePath, content] of [
    ['examples/api-migration-ssr.md', ssrExample],
    ['examples/growth-community-ssr.md', growthSsrExample],
    ['examples/operations-billing-ssr.md', operationsSsrExample],
  ]) {
    for (const required of [
      'synthetic stakeholder simulation',
      'synthetic artifact, not a real message',
      'hypothesis, not proof',
      'Strategic Read',
      'Evidence Needed Next',
    ]) {
      if (!content.includes(required)) {
        fail(`${relativePath} must include SSR evaluation phrase: ${required}`);
      }
    }
  }
}

function validateDodCases() {
  const dodReference = read('references/real-life-dod-case-map.md');
  const dodExample = read('examples/dod-case-simulations.md');

  for (const required of [
    'Source Anchors',
    'DoD Case Template',
    'Case-Study Fixture Contract',
    'dod_contract',
    'Top 10 V1 Cases',
    'Definition Of Done',
    'Simulation Output',
    'Stakeholder Reaction',
    'Safe Response',
    'Evidence Needed Next',
  ]) {
    if (!dodReference.includes(required) && !dodExample.includes(required)) {
      fail(`DoD case pack must include ${required}`);
    }
  }

  const expectedCaseNames = [
    'Market Entry Without Head-On War',
    'Community Growth Without Spam',
    'Manager Delegation Under Pressure',
    'Talent Retention And Motivation',
    'Negotiation With Future Relationship Value',
    'API Or Platform Migration Rollout',
    'Incident Or Billing Escalation SOP',
    'Personal Career Move Or Promotion Ask',
    'Pricing And Packaging Change',
    'Executive AI Transformation Push',
  ];

  for (const caseName of expectedCaseNames) {
    if (!dodReference.includes(caseName) || !dodExample.includes(caseName)) {
      fail(`DoD case pack must include ${caseName}`);
    }
  }

  for (const required of [
    'The 36 Stratagems for Business',
    'hypothesis, not proof',
    'indirect constraint',
    'alliance option',
    'retreat trigger',
    'safe response',
  ]) {
    if (!dodExample.includes(required)) {
      fail(`Case 1 DoD simulation must include ${required}`);
    }
  }
}

function validateDodWorkflowIntegration() {
  const expectations = [
    {
      path: 'skills/sunzi-strategy-consultant/SKILL.md',
      required: ['Real-life DoD case map', 'DoD calibration', 'source anchor', 'Definition Of Done'],
    },
    {
      path: 'skills/sunzi-stakeholder-ssr/SKILL.md',
      required: ['Real-life DoD case map', 'DoD calibration', 'source anchor', 'Stakeholder Reaction'],
    },
    {
      path: 'skills/sunzi-growth-review/SKILL.md',
      required: ['DoD calibration', 'Community Growth Without Spam', 'Market Entry Without Head-On War'],
    },
    {
      path: 'skills/sunzi-operations-sop-review/SKILL.md',
      required: ['DoD calibration', 'Manager Delegation Under Pressure', 'Incident Or Billing Escalation SOP'],
    },
    {
      path: 'skills/sunzi-prd-review/SKILL.md',
      required: ['DoD calibration', 'API Or Platform Migration Rollout', 'Pricing And Packaging Change'],
    },
    {
      path: 'skills/sunzi-decision-review/SKILL.md',
      required: ['DoD calibration', 'Personal Career Move Or Promotion Ask', 'Negotiation With Future Relationship Value'],
    },
    {
      path: 'skills/strategy-analyst-review/SKILL.md',
      required: ['DoD calibration', 'source anchor', 'Definition Of Done', 'blocked moves'],
    },
    {
      path: 'scripts/run-case-study-tests.mjs',
      required: ['validateDodContract', 'getScopedOutput', 'dod_contract', 'requiredDodSections'],
    },
  ];

  for (const expectation of expectations) {
    const content = read(expectation.path);
    for (const phrase of expectation.required) {
      if (!content.includes(phrase)) {
        fail(`${expectation.path} must include DoD workflow phrase: ${phrase}`);
      }
    }
  }
}

function validateStackManifest() {
  const stack = readJson('stack.json');
  const packageJson = readJson('package.json');
  const discoveredCaseStudies = fs
    .readdirSync(path.join(root, 'case-studies'))
    .filter((entry) => entry.endsWith('.json'))
    .map((entry) => `case-studies/${entry}`)
    .sort();

  if (stack.name !== packageJson.name) {
    fail('stack.json name must match package.json name');
  }
  if (stack.version !== packageJson.version) {
    fail('stack.json version must match package.json version');
  }
  if (stack.public_repo !== 'https://github.com/kit18/6ducklearn-sunzi-stack') {
    fail('stack.json public_repo must point to the public GitHub repo');
  }
  if (stack.runtime_soul_md !== 'projection-only') {
    fail('stack.json must state runtime_soul_md is projection-only');
  }

  const manifestSkillNames = (stack.skills ?? []).map((skill) => skill.name).sort();
  if (JSON.stringify(manifestSkillNames) !== JSON.stringify([...expectedSkills].sort())) {
    fail('stack.json skills must match expected skills');
  }

  for (const skill of stack.skills ?? []) {
    if (!skill.path || !fileExists(skill.path)) {
      fail(`stack.json skill path is missing: ${skill.path}`);
    }
  }

  for (const agent of stack.agents ?? []) {
    if (!agent.path || !fileExists(agent.path)) {
      fail(`stack.json agent path is missing: ${agent.path}`);
    }
    if (!agent.entrypoint || !fileExists(agent.entrypoint)) {
      fail(`stack.json agent entrypoint is missing: ${agent.entrypoint}`);
    }
  }

  for (const relativePath of [...expectedReferences, ...expectedExamples, ...expectedCaseStudies]) {
    if (
      ![
        ...(stack.references ?? []),
        ...(stack.examples ?? []),
        ...(stack.case_studies ?? []),
      ].includes(relativePath)
    ) {
      fail(`stack.json must list ${relativePath}`);
    }
  }

  if (JSON.stringify([...(stack.case_studies ?? [])].sort()) !== JSON.stringify(discoveredCaseStudies)) {
    fail('stack.json case_studies must list every case-studies/*.json file');
  }

  const behaviorGates = stack.behavior_gates ?? {};
  for (const gate of [
    'ecommerce',
    'operations',
    'ai_transformation',
    'macro_public_sector',
    'market_risk',
    'strategy_review',
    'decision_review',
    'stakeholder_ssr',
    'growth_review',
    'operations_sop_review',
    'prd_review',
    'dod_cases',
  ]) {
    if (!Array.isArray(behaviorGates[gate]) || behaviorGates[gate].length < 2) {
      fail(`stack.json behavior_gates.${gate} must contain at least two checks`);
    }
  }

  const ssrGate = JSON.stringify(behaviorGates.stakeholder_ssr ?? []);
  for (const required of ['hypothesis', 'safe response', 'real evidence needed next']) {
    if (!ssrGate.includes(required)) {
      fail(`stack.json behavior_gates.stakeholder_ssr must include ${required}`);
    }
  }

  const boundaries = JSON.stringify(stack.public_boundaries ?? []);
  for (const required of [
    'No private 6DuckLearn product code',
    'No secrets',
    'No literal historical-persona claim',
    'No synthetic SSR output presented as real customer evidence',
  ]) {
    if (!boundaries.includes(required)) {
      fail(`stack.json public_boundaries must include ${required}`);
    }
  }
}

function validateLicenses() {
  for (const relativePath of ['LICENSE', 'LICENSE-CONTENT', 'NOTICE', 'SECURITY.md', 'TRADEMARK.md']) {
    if (!fileExists(relativePath)) {
      fail(`missing ${relativePath}`);
    }
  }

  if (!read('LICENSE').includes('Apache License')) {
    fail('LICENSE must contain Apache-2.0 text for scripts');
  }
  if (!read('LICENSE-CONTENT').includes('Creative Commons Attribution 4.0')) {
    fail('LICENSE-CONTENT must describe CC BY 4.0 content terms');
  }
}

function validateLeakage() {
  for (const absolutePath of walk(root)) {
    const relativePath = path.relative(root, absolutePath);
    if (relativePath === 'scripts/validate-stack.mjs') {
      continue;
    }
    const content = fs.readFileSync(absolutePath, 'utf8');
    for (const pattern of leakagePatterns) {
      if (pattern.test(content)) {
        fail(`${relativePath} matches private/leakage pattern ${pattern}`);
      }
    }
  }
}

validateSkills();
validateReferences();
validateAgents();
validateExamples();
validateSsrSafety();
validateDodCases();
validateDodWorkflowIntegration();
validateStackManifest();
validateLicenses();
validateLeakage();

if (!process.exitCode) {
  console.log('Sunzi strategy stack validation passed.');
}
