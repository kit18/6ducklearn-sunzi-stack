import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const expectedSkills = [
  'sunzi-decision-review',
  'sunzi-stakeholder-ssr',
  'strategy-analyst-review',
  'sunzi-focus-group-skill-review',
  'sunzi-strategy-consultant',
  'sunzi-compare',
  'sunzi-terrain',
  'sunzi-method',
  'sunzi-alignment',
  'sunzi-timing',
  'sunzi-command',
  'sunzi-win-without-fighting',
  'sunzi-find-the-wedge',
  'sunzi-contingency',
  'sunzi-restraint',
  'sunzi-intelligence',
  'sunzi-retro',
];

// Skills rebuilt to the v1.0 authoring contract (docs/ARCHITECTURE-WUSHI.md section 6).
// The four retained v0.2.0 skills follow the universal contract only.
const loopSkills = [
  'sunzi-strategy-consultant',
  'sunzi-compare',
  'sunzi-terrain',
  'sunzi-method',
  'sunzi-alignment',
  'sunzi-timing',
  'sunzi-command',
  'sunzi-win-without-fighting',
  'sunzi-find-the-wedge',
  'sunzi-contingency',
  'sunzi-restraint',
  'sunzi-intelligence',
  'sunzi-retro',
];

// The orchestrator surfaces user decisions instead of asking forcing questions,
// and routes to itself, so it is exempt from those two checks only.
const orchestratorSkill = 'sunzi-strategy-consultant';

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
  'references/modern-strategy-method-library.md',
  'references/tool-book-family-tree.md',
  'references/consulting-case-validation-corpus.md',
  'references/sunzi-business-consultant-soul.md',
  'references/strategy-focus-group-evaluation.md',
  'references/user-intention-metric-contract.md',
  'skills/sunzi-focus-group-skill-review/references/panel-contract.md',
  'references/thirty-six-stratagems-source-stories.md',
  'references/unit-economics-gate.md',
  'references/domain-adapters/growth.md',
  'references/domain-adapters/operations.md',
  'references/domain-adapters/product.md',
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
  'examples/focus-group-skill-review.md',
  'examples/focus-group-strategy-evaluation.md',
  'examples/industry-leader-smoke-test.md',
  'examples/tool-book-family-tree-ai-agent-plan.md',
  'examples/ai-agent-operating-cadence-review.md',
  'examples/campaign-loop-dtc-launch.md',
  'examples/v1-pack-focus-group-review.md',
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
  'case-studies/focus-group-skill-review.json',
  'case-studies/focus-group-strategy-evaluation.json',
  'case-studies/growth-community-ssr.json',
  'case-studies/macro-public-sector.json',
  'case-studies/market-risk-no-trade.json',
  'case-studies/operations-billing-ssr.json',
  'case-studies/operations-supply-chain.json',
  'case-studies/growth-loop-review.json',
  'case-studies/industry-leader-smoke-test.json',
  'case-studies/operations-sop-review.json',
  'case-studies/product-value-prd-review.json',
  'case-studies/strategy-review-marketplace.json',
  'case-studies/unsafe-manipulation-reframe.json',
];

const expectedScoringArtifacts = [
  'scripts/score-user-intention.mjs',
  'scripts/test-user-intention-scorer.mjs',
  'fixtures/user-intention-scoring/valid/shoe-comments-synthetic.json',
  'fixtures/user-intention-scoring/valid/saas-adoption-real.json',
  'fixtures/user-intention-scoring/valid/missing-evidence-synthetic.json',
  'fixtures/user-intention-scoring/invalid/synthetic-real-nps-claim.json',
  'fixtures/user-intention-scoring/invalid/bad-weight-sum.json',
  'fixtures/user-intention-scoring/invalid/model-supplied-score.json',
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
const localOnlyExclusions = ['docs/internal-enablement/', 'private-drafts/', 'worktrees/', '.worktrees/'];
const requiredPacklistPaths = [
  'README.md',
  'docs/INSTALL.md',
  'references/user-intention-metric-contract.md',
  'skills/sunzi-strategy-consultant/SKILL.md',
];

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

function hasConfigLine(content, expectedLine) {
  return content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .includes(expectedLine);
}

function runGit(args) {
  return execFileSync('git', args, {
    cwd: root,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') {
      continue;
    }
    const absolute = path.join(dir, entry.name);
    const relativePath = path.relative(root, absolute).replaceAll(path.sep, '/');
    if (entry.isDirectory() && localOnlyExclusions.some((excluded) => `${relativePath}/` === excluded)) {
      continue;
    }
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
    ...expectedScoringArtifacts,
    'stack.json',
  ]) {
    if (!fileExists(relativePath)) {
      fail(`missing ${relativePath}`);
    }
  }

  const sourceRef = read('references/thirty-six-stratagems-source-stories.md');
  if (!sourceRef.includes('Wikisource')) {
    fail('source-story reference must cite Wikisource');
  }

  for (const stratagemName of stratagemNames) {
    const matches = sourceRef.match(new RegExp(stratagemName, 'g')) ?? [];
    if (matches.length !== 1) {
      fail(`${stratagemName} must appear exactly once in source-story reference; found ${matches.length}`);
    }
  }

  const methodLibrary = read('references/modern-strategy-method-library.md');
  for (const required of [
    'bibliographic anchors only',
    'Do not reproduce copyrighted text',
    'User-Read Book Synthesis',
    'user-provided reading notes',
    'reader digest',
    'Consultant-Agency Presentation Review',
    'synthetic consultant-agency presentation review',
    'one-slide headline',
    'Modern Strategy Frame',
    'MECE / logic tree',
    'Advantage / portfolio allocation',
    'Advantage / Portfolio Allocation Rules',
    'Where to play',
    'How to win',
    'Capability system / moat hypothesis',
    'Investment tier',
    'Scale / pause / kill reallocation trigger',
    'Porter Five Forces',
    'SWOT',
    'PDCA',
    'framework catalog',
  ]) {
    if (!methodLibrary.includes(required)) {
      fail(`modern strategy method library must include ${required}`);
    }
  }

  const toolBookFamilyTree = read('references/tool-book-family-tree.md');
  for (const required of [
    'Tool-book learning for AI agents',
    'Reader Digest Contract',
    'MECE Issue-Tree Contract',
    'Synthetic Top-Consultancy Panel',
    'McKinsey-style issue-tree partner',
    'Bain-style customer-economics operator',
    'BCG-style advantage',
    'Advantage / portfolio family',
    'Large-consultancy-style transformation and deck lead',
    'AI-Agent Application Plan',
    'Customer Economics Scorecard',
    'AI Agent Operating Cadence',
    'adoption telemetry',
    'customer economics signal',
    'not affiliated with McKinsey, Bain, BCG, Deloitte, Accenture',
    'No copied copyrighted book content',
  ]) {
    if (!toolBookFamilyTree.includes(required)) {
      fail(`tool-book family tree reference must include ${required}`);
    }
  }

  for (const [relativePath, label] of [
    ['references/strategy-output-template.md', 'strategy output template'],
    ['references/decision-memo-template.md', 'decision memo template'],
  ]) {
    const template = read(relativePath);
    for (const required of [
      'Issue Tree / Controlling Branches',
      'Root question',
      'MECE check',
      'Evidence',
      'Falsifier',
      'Decision impact',
      'Unknown lane',
      'Advantage / Portfolio Choice',
      'Where to play',
      'How to win',
      'Capability system / moat hypothesis',
      'Investment tier',
      'Scale / pause / kill reallocation trigger',
    ]) {
      if (!template.includes(required)) {
        fail(`${label} must include ${required}`);
      }
    }
  }

  if (!read('references/consulting-case-validation-corpus.md').includes('validation corpus only')) {
    fail('consulting case validation corpus must include local validation-only disclaimer');
  }
}

function validateAgents() {
  const agentsDoc = read('AGENTS.md');
  const profile = read('agents/sunzi-strategy-consultant.yaml');

  for (const required of [
    'sunzi-strategy-consultant',
    'sunzi-decision-review',
    'sunzi-stakeholder-ssr',
    'sunzi-alignment',
    'sunzi-timing',
    'sunzi-terrain',
    'sunzi-command',
    'sunzi-method',
    'sunzi-compare',
    'sunzi-win-without-fighting',
    'sunzi-restraint',
    'sunzi-retro',
    'strategy-analyst-review',
    'sunzi-focus-group-skill-review',
    'source/evidence ledger',
    'literal historical figure',
    'hypothesis, not proof',
    'Safe response',
    'Issue Tree / Controlling Branches',
    'Advantage / Portfolio Choice',
    'scale / pause / kill reallocation trigger',
    'Modern Strategy Frame',
    'bibliographic anchors only',
    'user-provided reading notes',
    'synthetic consultant-agency presentation review',
  ]) {
    if (!agentsDoc.includes(required)) {
      fail(`AGENTS.md must include ${required}`);
    }
  }

  for (const required of [
    'literal_historical_persona: false',
    'sunzi-decision-review',
    'sunzi-stakeholder-ssr',
    'sunzi-alignment',
    'sunzi-timing',
    'sunzi-terrain',
    'sunzi-command',
    'sunzi-method',
    'sunzi-compare',
    'sunzi-win-without-fighting',
    'sunzi-find-the-wedge',
    'sunzi-contingency',
    'sunzi-restraint',
    'sunzi-intelligence',
    'sunzi-retro',
    'strategy-analyst-review',
    'sunzi-focus-group-skill-review',
    'sunzi-strategy-consultant',
    'references/ssr-evaluation-scenarios.md',
    'references/modern-strategy-method-library.md',
    'references/tool-book-family-tree.md',
    'hypothesis not proof',
    'safe response',
    'Issue Tree / Controlling Branches',
    'Advantage / Portfolio Choice',
    'scale / pause / kill reallocation trigger',
    'Modern Strategy Frame',
    'Tool-Book Family Placement',
    'reader digest',
    'synthetic consultant-agency presentation review',
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
      required: ['Modern Strategy Frame (optional, evidence-gated)', 'evidence-gated', 'Proof signal', 'Stop / retreat trigger', 'fake scarcity', 'fake reviews', 'hidden fees', 'checkout completion', 'Evidence Ledger'],
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
      path: 'examples/v1-pack-focus-group-review.md',
      required: [
        'synthetic panel simulation, not real quotes',
        'Frozen Formula',
        'Deterministic Scores',
        'Verdict: revise',
        'Dissent',
        'Retest',
        'Method limitation',
      ],
    },
    {
      path: 'examples/campaign-loop-dtc-launch.md',
      required: [
        'Synthetic case',
        'Unit Economics Gate',
        'not viable',
        'Break-even CAC',
        '廟算 verdict',
        'start narrow probe',
        'Fatal row',
        'Refusals',
        'Inheritance',
        'Lens audit',
      ],
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
    {
      path: 'examples/focus-group-skill-review.md',
      required: ['synthetic panel simulation', 'not real quotes', 'PM lead', 'UED researcher', 'scorecard', 'dissent', 'Interview Responses', 'Segment Simulation', '360 Comments', 'Dynamic Scoring Contract', 'Frozen Formula', 'Structured Signals', 'Deterministic Scores', 'Verdict: revise'],
    },
    {
      path: 'examples/focus-group-strategy-evaluation.md',
      required: ['Source-Grounded Strategy Set', 'Focus Group Method', 'Definition Of Done', 'Evaluation Result', 'Iteration 1', 'Iteration 2', 'works after revision', 'ready for real validation'],
    },
    {
      path: 'examples/industry-leader-smoke-test.md',
      required: ['synthetic industry-leader agent smoke test', 'Top 3 Problems', 'Sunzi Strategy Consultant', 'Research Metrics Safety Check', 'Synthetic SSR Output', 'Focus Group Review', 'Strategy Analyst Gate', 'Evidence Needed Next', 'works after revision'],
    },
    {
      path: 'examples/tool-book-family-tree-ai-agent-plan.md',
      required: ['Input basis: user-provided reading notes', 'Reader Digest', 'Tool Family Placement', 'MECE Issue-Tree Contract', 'AI-Agent Behavior Change', 'Evidence Needed', 'Misuse Risk', 'Presentation Angle', 'Family Tree', 'Synthetic Consultancy Panel Review', 'not affiliated with McKinsey, Bain, BCG, Deloitte, Accenture', 'One-slide headline', 'Risk / stop-rule line', 'Exact wording cuts'],
    },
    {
      path: 'examples/ai-agent-operating-cadence-review.md',
      required: ['Original Reader Digest', 'AI Agent Operating Cadence', 'Customer Economics Scorecard', 'Decision rule', 'Adoption telemetry', 'customer economics', 'not affiliated with McKinsey, Bain, BCG, Deloitte, Accenture', 'Risk / stop-rule line'],
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
      path: 'references/domain-adapters/growth.md',
      required: [
        'DoD calibration',
        'Community Growth Without Spam',
        'Market Entry Without Head-On War',
        'Privately screen',
        'Do not show the screening',
        '1 to 3',
        'Never output a checklist of all 36',
      ],
    },
    {
      path: 'references/domain-adapters/operations.md',
      required: [
        'DoD calibration',
        'Manager Delegation Under Pressure',
        'Incident Or Billing Escalation SOP',
        'Privately screen',
        'Do not show the screening',
        '1 to 3',
        'Never output a checklist of all 36',
      ],
    },
    {
      path: 'references/domain-adapters/product.md',
      required: [
        'DoD calibration',
        'API Or Platform Migration Rollout',
        'Pricing And Packaging Change',
        'Privately screen',
        'Do not show the screening',
        '1 to 2',
        'Never output a checklist of all 36',
      ],
    },
    {
      path: 'skills/sunzi-decision-review/SKILL.md',
      required: [
        'DoD calibration',
        'Personal Career Move Or Promotion Ask',
        'Negotiation With Future Relationship Value',
        'Privately screen',
        'Do not show the screening',
        '1 to 3',
        'Never output a checklist of all 36',
      ],
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

function validateFocusGroupSkillReview() {
  const skill = read('skills/sunzi-focus-group-skill-review/SKILL.md');
  const panel = read('skills/sunzi-focus-group-skill-review/references/panel-contract.md');
  const example = read('examples/focus-group-skill-review.md');
  const metricContract = read('references/user-intention-metric-contract.md');
  const scorer = read('scripts/score-user-intention.mjs');
  const stack = readJson('stack.json');

  for (const required of [
    'never rely on one reviewer',
    'Panel Design',
    'Interview Responses',
    'Segment Simulation',
    '360 Comments',
    'Dynamic Scoring Contract',
    'Frozen Formula',
    'Structured Signals',
    'Deterministic Scores',
    'Stakeholder Simulation',
    'Cross-Panel Synthesis',
    'Evidence Needed Next',
    'not real quotes',
    'do not let the LLM invent final scores',
    'minimum three-response gate',
    'convergence gate',
    'statistically significant',
    'after_comments_before_structured_signal_extraction',
  ]) {
    if (!skill.includes(required)) {
      fail(`sunzi-focus-group-skill-review must include ${required}`);
    }
  }

  for (const role of [
    'PM lead',
    'UED researcher',
    'growth leader',
    'operations/SOP leader',
    'enterprise buyer',
    'platform engineer',
    'trust/safety reviewer',
    'customer-support lead',
  ]) {
    if (!panel.includes(role) || !example.includes(role)) {
      fail(`focus group review must include panel role ${role}`);
    }
  }

  for (const required of [
    'synthetic panel simulation',
    'not real quotes',
    'scorecard',
    'dissent',
    'synthetic_proxy',
    'Node.js deterministic scorer',
    'Synthetic proxy only',
    'Loyal live shopper',
    'Basket-builder household buyer',
    'minimum three-response gate',
    'no new viewpoint categories',
    'revise',
  ]) {
    if (!example.includes(required)) {
      fail(`focus group review example must include ${required}`);
    }
  }

  for (const required of [
    'buying intention',
    'NPS proxy',
    'PMF proxy',
    'willingness-to-pay proxy',
    'adoption intent',
    'switching cost',
    'task-fit',
    'dynamic deterministic scoring contract',
    'Segment Simulation Report',
    'minimum three-response gate',
    'convergence gate',
    'Research validity note',
    'Synthetic proxy only',
    'percent-would-buy evidence',
  ]) {
    if (!metricContract.includes(required)) {
      fail(`user intention metric contract must include ${required}`);
    }
  }

  for (const required of [
    'scoreFixture',
    'allowedSyntheticMetrics',
    'allow_model_supplied_final_scores',
    'weighted_normalized_1_to_10',
    'cannot use metric',
  ]) {
    if (!scorer.includes(required)) {
      fail(`score-user-intention.mjs must include ${required}`);
    }
  }

  if (!Array.isArray(stack.behavior_gates?.focus_group_skill_review)) {
    fail('stack.json behavior_gates.focus_group_skill_review must exist');
  }
}

function validateStrategyFocusGroupEvaluation() {
  const reference = read('references/strategy-focus-group-evaluation.md');
  const example = read('examples/focus-group-strategy-evaluation.md');
  const stack = readJson('stack.json');

  for (const required of [
    'Source Anchors',
    'Top 10 Strategy Set',
    'Focus Group Method',
    'DoD Template',
    'Safety Boundary',
    'synthetic panel simulation',
    'not real quotes',
    'User Intention Metric Contract',
    'ready for real validation',
  ]) {
    if (!reference.includes(required)) {
      fail(`strategy focus group reference must include ${required}`);
    }
  }

  for (const caseName of [
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
  ]) {
    if (!reference.includes(caseName) || !example.includes(caseName)) {
      fail(`strategy focus group evaluation must include ${caseName}`);
    }
  }

  for (const required of [
    'Definition Of Done',
    'Stakeholder Simulation',
    'Evaluation Result',
    'Iteration 1',
    'Iteration 2',
    'works after revision',
    'PM lead',
    'UED researcher',
    'trust/safety reviewer',
    'ready for real validation',
  ]) {
    if (!example.includes(required)) {
      fail(`strategy focus group example must include ${required}`);
    }
  }

  if (!Array.isArray(stack.behavior_gates?.strategy_focus_group_evaluation)) {
    fail('stack.json behavior_gates.strategy_focus_group_evaluation must exist');
  }
}

function validateIndustryLeaderSmokeTest() {
  const example = read('examples/industry-leader-smoke-test.md');
  const spec = readJson('case-studies/industry-leader-smoke-test.json');
  const stack = readJson('stack.json');

  for (const industry of [
    'B2B SaaS / PLG Growth Agent',
    'Ecommerce / Retail Operations Agent',
    'Fintech / Regulated Financial Services Agent',
    'Enterprise AI Platform / Developer Tooling Agent',
  ]) {
    if (!example.includes(industry)) {
      fail(`industry leader smoke test must include ${industry}`);
    }
  }

  for (const caseName of [
    'AI Feature Commoditization Repositioning',
    'Discount Trap Recovery',
    'Real-Time Payments Fraud Strategy',
    'Governed Support Triage Agent',
  ]) {
    if (!example.includes(caseName)) {
      fail(`industry leader smoke test must include case ${caseName}`);
    }
  }

  for (const required of [
    'synthetic industry-leader agent smoke test',
    'not real quotes',
    'Top 3 Problems',
    'Sunzi Strategy Consultant',
    'Synthetic SSR Output',
    'Research Metrics Safety Check',
    'Focus Group Review',
    'Strategy Analyst Gate',
    'works after revision',
    'kill criteria',
  ]) {
    if (!example.includes(required)) {
      fail(`industry leader smoke test must include ${required}`);
    }
  }

  if (!Array.isArray(spec.required_headings) || spec.required_headings.length < 10) {
    fail('industry leader smoke test spec must require the industry and case headings');
  }

  if (!Array.isArray(stack.behavior_gates?.industry_leader_smoke_test)) {
    fail('stack.json behavior_gates.industry_leader_smoke_test must exist');
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
    'focus_group_skill_review',
    'strategy_focus_group_evaluation',
    'industry_leader_smoke_test',
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

  const strategyReviewGate = JSON.stringify(behaviorGates.strategy_review ?? []);
  for (const required of [
    'modern strategy methods',
    'evidence-gated',
    'user-provided reading notes',
    'Tool-book family reviews',
    'advantage / portfolio',
    'customer economics',
    'adoption telemetry',
    'Synthetic consultant-agency presentation reviews',
    'kill criterion',
  ]) {
    if (!strategyReviewGate.includes(required)) {
      fail(`stack.json behavior_gates.strategy_review must include ${required}`);
    }
  }

  const boundaries = JSON.stringify(stack.public_boundaries ?? []);
  for (const required of [
    'No private 6DuckLearn product code',
    'No secrets',
    'No literal historical-persona claim',
    'No synthetic SSR output presented as real customer evidence',
    'Modern business books are bibliographic anchors only unless the user supplies reading notes',
    'do not reproduce copyrighted text',
    'Synthetic consultant-agency presentation reviews must be labeled as simulation',
  ]) {
    if (!boundaries.includes(required)) {
      fail(`stack.json public_boundaries must include ${required}`);
    }
  }

  for (const trackedPath of [
    'references/modern-strategy-method-library.md',
    'references/tool-book-family-tree.md',
    'examples/tool-book-family-tree-ai-agent-plan.md',
    'examples/ai-agent-operating-cadence-review.md',
  ]) {
    const tracked = runGit(['ls-files', '--', trackedPath]).trim();
    if (tracked !== trackedPath) {
      fail(`${trackedPath} must be tracked because public files reference it`);
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

function validateReleaseHygiene() {
  const gitignore = read('.gitignore');
  const npmignore = read('.npmignore');

  for (const excludedPath of localOnlyExclusions) {
    if (!hasConfigLine(gitignore, excludedPath)) {
      fail(`.gitignore must exclude local-only path ${excludedPath}`);
    }
    if (!hasConfigLine(npmignore, excludedPath)) {
      fail(`.npmignore must exclude local-only path ${excludedPath}`);
    }

    const trackedFiles = runGit(['ls-files', '--', excludedPath])
      .split(/\r?\n/)
      .filter(Boolean);
    if (trackedFiles.length > 0) {
      fail(`${excludedPath} must not contain tracked public-release files: ${trackedFiles.join(', ')}`);
    }
  }

  for (const requiredSnippet of [
    'mkdir -p ~/.codex/skills ~/.codex/references',
    'cp -R references/* ~/.codex/references/',
  ]) {
    if (!read('README.md').includes(requiredSnippet)) {
      fail(`README.md install instructions must include ${requiredSnippet}`);
    }
    if (!read('docs/INSTALL.md').includes(requiredSnippet)) {
      fail(`docs/INSTALL.md install instructions must include ${requiredSnippet}`);
    }
  }

  let packlist;
  try {
    packlist = JSON.parse(execFileSync('npm', ['pack', '--dry-run', '--json'], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }));
  } catch (error) {
    fail(`npm pack --dry-run --json must succeed: ${error.message}`);
    return;
  }

  const packFiles = packlist.flatMap((pack) => (pack.files ?? []).map((file) => file.path));
  for (const excludedPath of localOnlyExclusions) {
    const leakedFiles = packFiles.filter((filePath) => filePath.startsWith(excludedPath));
    if (leakedFiles.length > 0) {
      fail(`npm pack must exclude ${excludedPath}: ${leakedFiles.join(', ')}`);
    }
  }

  for (const requiredPath of requiredPacklistPaths) {
    if (!packFiles.includes(requiredPath)) {
      fail(`npm pack must include required public asset ${requiredPath}`);
    }
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


function validateSkillContract() {
  const packVersion = readJson('package.json').version;
  const seenVersions = new Set();

  for (const skillName of expectedSkills) {
    const relativePath = `skills/${skillName}/SKILL.md`;
    if (!fileExists(relativePath)) continue;

    const content = read(relativePath);
    const frontmatter = parseFrontmatter(content, relativePath);
    const isLoopSkill = loopSkills.includes(skillName);

    // --- universal contract: frontmatter shape ---
    if (!frontmatter.version) {
      fail(`${relativePath} frontmatter must declare a version`);
    } else {
      if (!/^\d+\.\d+\.\d+$/.test(frontmatter.version)) {
        fail(`${relativePath} version must be semver, got "${frontmatter.version}"`);
      }
      seenVersions.add(frontmatter.version);
    }

    const rawFrontmatter = content.split('---')[1] ?? '';
    for (const block of ['allowed-tools:', 'triggers:']) {
      if (!rawFrontmatter.includes(block)) {
        fail(`${relativePath} frontmatter must declare ${block.replace(':', '')}`);
      }
    }
    const triggerCount = (rawFrontmatter.split('triggers:')[1] ?? '')
      .split(/^[a-z-]+:/m)[0]
      .split('\n')
      .filter((line) => /^\s+-\s+\S/.test(line)).length;
    if (triggerCount < 3) {
      fail(`${relativePath} must declare at least 3 natural-language triggers, found ${triggerCount}`);
    }

    // --- universal contract: required sections ---
    const universalSections = [
      { label: 'When NOT to invoke', test: /^## When NOT to invoke/m },
      { label: 'a workflow section', test: /^## .*Workflow/mi },
      { label: 'Output', test: /^## Output/m },
      { label: 'hard rules', test: /^## Hard [Rr]ules/m },
    ];
    for (const section of universalSections) {
      if (!section.test.test(content)) {
        fail(`${relativePath} must include ${section.label}`);
      }
    }

    // --- universal contract: stage routing (orchestrator routes to itself) ---
    if (skillName !== orchestratorSkill && !content.includes('Not sure this is your stage?')) {
      fail(`${relativePath} must include the stage-routing block`);
    }

    // --- loop-skill contract: the full v1.0 authoring shape ---
    if (isLoopSkill) {
      const loopSections = [
        { label: 'When to invoke this skill', test: /^## When to invoke this skill/m },
        { label: 'Canonical grounding', test: /^## Canonical grounding/m },
        { label: 'Anti-patterns', test: /^## Anti-patterns/m },
      ];
      for (const section of loopSections) {
        if (!section.test.test(content)) {
          fail(`${relativePath} must include ${section.label} (v1.0 loop-skill contract)`);
        }
      }
      if (skillName !== orchestratorSkill && !/^## Forcing questions/m.test(content)) {
        fail(`${relativePath} must include Forcing questions (v1.0 loop-skill contract)`);
      }
    }

    // --- artifact filenames must be ASCII-typeable (v1.0.1 accessibility fix) ---
    for (const match of content.matchAll(/`([^`]*\.md)`/g)) {
      if (/[\u3400-\u9fff]/.test(match[1])) {
        fail(`${relativePath} references a non-ASCII artifact filename: ${match[1]}`);
      }
    }
  }

  // --- version alignment across the pack ---
  if (seenVersions.size > 1) {
    fail(`skill frontmatter versions must be uniform, found ${[...seenVersions].sort().join(', ')}`);
  }
  const [skillVersion] = [...seenVersions];
  if (skillVersion && skillVersion !== packVersion) {
    fail(`skill frontmatter version ${skillVersion} must match package.json ${packVersion}`);
  }
  const agentProfile = read('agents/sunzi-strategy-consultant.yaml');
  if (!hasConfigLine(agentProfile, `version: ${packVersion}`)) {
    fail(`agents/sunzi-strategy-consultant.yaml must declare version: ${packVersion}`);
  }
}

validateSkills();
validateSkillContract();
validateReferences();
validateAgents();
validateExamples();
validateSsrSafety();
validateDodCases();
validateDodWorkflowIntegration();
validateFocusGroupSkillReview();
validateStrategyFocusGroupEvaluation();
validateIndustryLeaderSmokeTest();
validateStackManifest();
validateLicenses();
validateReleaseHygiene();
validateLeakage();

if (!process.exitCode) {
  console.log('Sunzi strategy stack validation passed.');
}
