# DoD Fixture Schema Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Make the top-10 real-life DoD simulations independently testable by adding explicit fixture metadata and section-scoped validation.

**Architecture:** Keep the existing Markdown examples and JSON case-study fixture model. Harden `scripts/run-case-study-tests.mjs` so DoD fixtures validate only their own `## Case N` section, require a `dod_contract`, and check source anchor plus evidence phrases. Then document the contract in the DoD reference and keep the stack validator aware of the new schema.

**Tech Stack:** Node.js ES modules, JSON fixtures, Markdown examples, `npm run test:case-studies`, `npm test`.

---

## Scope Check

This plan touches one subsystem: public case-study validation for the Sunzi DoD simulation pack. It does not change skill routing, add new skills, or modify private 6DuckLearn runtime behavior.

The current worktree already contains uncommitted public-stack changes from this optimization session, so this plan does not run git commits. After review, a maintainer can selectively stage the touched files.

## File Structure

- Modify `scripts/run-case-study-tests.mjs`: add DoD-only fixture schema checks and section-scoped content validation.
- Modify `case-studies/dod-market-entry-without-head-on-war.json`: add `dod_contract` metadata for Case 1.
- Modify `case-studies/dod-community-growth-without-spam.json`: add `dod_contract` metadata for Case 2.
- Modify `case-studies/dod-manager-delegation-under-pressure.json`: add `dod_contract` metadata for Case 3.
- Modify `case-studies/dod-talent-retention-and-motivation.json`: add `dod_contract` metadata for Case 4.
- Modify `case-studies/dod-negotiation-with-future-relationship-value.json`: add `dod_contract` metadata for Case 5.
- Modify `case-studies/dod-api-platform-migration-rollout.json`: add `dod_contract` metadata for Case 6.
- Modify `case-studies/dod-incident-billing-escalation-sop.json`: add `dod_contract` metadata for Case 7.
- Modify `case-studies/dod-personal-career-move-promotion-ask.json`: add `dod_contract` metadata for Case 8.
- Modify `case-studies/dod-pricing-packaging-change.json`: add `dod_contract` metadata for Case 9.
- Modify `case-studies/dod-executive-ai-transformation-push.json`: add `dod_contract` metadata for Case 10.
- Modify `references/real-life-dod-case-map.md`: document the fixture contract.
- Modify `scripts/validate-stack.mjs`: require the documented fixture contract and validator integration.

## Task 1: Add Section-Scoped DoD Contract Validation

**Files:**
- Modify: `scripts/run-case-study-tests.mjs`

- [x] **Step 1: Add DoD helper functions**

Insert these functions after `loadCanonicalLenses()`:

```js
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

function getScopedOutput(relativePath, spec, output) {
  if (!isDodCaseStudy(relativePath)) {
    return output;
  }

  const heading = getDodCaseHeading(spec);
  if (!heading) {
    fail(`${relativePath} must define a DoD case heading`);
    return output;
  }

  const start = output.indexOf(heading);
  if (start === -1) {
    return output;
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
```

- [x] **Step 2: Scope content checks to each DoD case section**

In `validateCaseStudy()`, replace:

```js
  const output = fs.readFileSync(outputPath, 'utf8');
  includesAll(output, spec.required_headings, context);
  includesAll(output, spec.required_phrases, context);
  includesAll(output, spec.required_lenses, context);
  excludesAll(output, spec.blocked_phrases, context);
```

with:

```js
  const output = fs.readFileSync(outputPath, 'utf8');
  const scopedOutput = getScopedOutput(relativePath, spec, output);
  includesAll(scopedOutput, spec.required_headings, context);
  includesAll(scopedOutput, spec.required_phrases, context);
  includesAll(scopedOutput, spec.required_lenses, context);
  excludesAll(scopedOutput, spec.blocked_phrases, context);
  validateDodContract(relativePath, spec, scopedOutput);
```

- [x] **Step 3: Run the case-study suite to verify RED**

Run:

```bash
npm run test:case-studies
```

Expected: FAIL with messages like:

```text
case-study-test: case-studies/dod-market-entry-without-head-on-war.json must define dod_contract
```

## Task 2: Add DoD Contract Metadata To All 10 Fixtures

**Files:**
- Modify: `case-studies/dod-market-entry-without-head-on-war.json`
- Modify: `case-studies/dod-community-growth-without-spam.json`
- Modify: `case-studies/dod-manager-delegation-under-pressure.json`
- Modify: `case-studies/dod-talent-retention-and-motivation.json`
- Modify: `case-studies/dod-negotiation-with-future-relationship-value.json`
- Modify: `case-studies/dod-api-platform-migration-rollout.json`
- Modify: `case-studies/dod-incident-billing-escalation-sop.json`
- Modify: `case-studies/dod-personal-career-move-promotion-ask.json`
- Modify: `case-studies/dod-pricing-packaging-change.json`
- Modify: `case-studies/dod-executive-ai-transformation-push.json`

- [x] **Step 1: Add Case 1 metadata**

In `case-studies/dod-market-entry-without-head-on-war.json`, insert after `scenario`:

```json
  "dod_contract": {
    "case_number": 1,
    "case_name": "Market Entry Without Head-On War",
    "source_anchor": "The 36 Stratagems for Business",
    "domain": "business growth and competitive entry",
    "evidence_needed_next": ["buyer interviews", "partner interview", "concierge pilot", "Retreat trigger"]
  },
```

- [x] **Step 2: Add Case 2 metadata**

In `case-studies/dod-community-growth-without-spam.json`, insert after `scenario`:

```json
  "dod_contract": {
    "case_number": 2,
    "case_name": "Community Growth Without Spam",
    "source_anchor": "Sun Tzu Strategies for Marketing",
    "domain": "growth and distribution",
    "evidence_needed_next": ["Moderator review", "Cohort activation", "Support tags", "stop rule"]
  },
```

- [x] **Step 3: Add Case 3 metadata**

In `case-studies/dod-manager-delegation-under-pressure.json`, insert after `scenario`:

```json
  "dod_contract": {
    "case_number": 3,
    "case_name": "Manager Delegation Under Pressure",
    "source_anchor": "Sun Tzu: The Art of War for Managers",
    "domain": "company operation and people management",
    "evidence_needed_next": ["Current work-in-progress", "Decision log", "open risks", "Capacity check"]
  },
```

- [x] **Step 4: Add Case 4 metadata**

In `case-studies/dod-talent-retention-and-motivation.json`, insert after `scenario`:

```json
  "dod_contract": {
    "case_number": 4,
    "case_name": "Talent Retention And Motivation",
    "source_anchor": "管人36計",
    "domain": "HR, management, and team operating system",
    "evidence_needed_next": ["Workload history", "Impact evidence", "Compensation band", "Employee preference"]
  },
```

- [x] **Step 5: Add Case 5 metadata**

In `case-studies/dod-negotiation-with-future-relationship-value.json`, insert after `scenario`:

```json
  "dod_contract": {
    "case_number": 5,
    "case_name": "Negotiation With Future Relationship Value",
    "source_anchor": "The 36 Strategies of the Martial Arts",
    "domain": "workplace negotiation, partnership, and conflict",
    "evidence_needed_next": ["Counterpart incentives", "User BATNA", "Relationship value", "Retreat trigger"]
  },
```

- [x] **Step 6: Add Case 6 metadata**

In `case-studies/dod-api-platform-migration-rollout.json`, insert after `scenario`:

```json
  "dod_contract": {
    "case_number": 6,
    "case_name": "API Or Platform Migration Rollout",
    "source_anchor": "von Senger and Michaelson",
    "domain": "product/API, customer success, and operations",
    "evidence_needed_next": ["dependency inventory", "Sandbox failure results", "Billing impact forecast", "rollback owner"]
  },
```

- [x] **Step 7: Add Case 7 metadata**

In `case-studies/dod-incident-billing-escalation-sop.json`, insert after `scenario`:

```json
  "dod_contract": {
    "case_number": 7,
    "case_name": "Incident Or Billing Escalation SOP",
    "source_anchor": "The Art of War for Managers",
    "domain": "operations, support, and SOP",
    "evidence_needed_next": ["Last 20 billing incidents", "Median decision latency", "Audit log completeness", "Customer wait time"]
  },
```

- [x] **Step 8: Add Case 8 metadata**

In `case-studies/dod-personal-career-move-promotion-ask.json`, insert after `scenario`:

```json
  "dod_contract": {
    "case_number": 8,
    "case_name": "Personal Career Move Or Promotion Ask",
    "source_anchor": "Sun Tzu for Success",
    "domain": "daily and professional life",
    "evidence_needed_next": ["Contribution record", "Current workload", "Manager decision rights", "Exit trigger"]
  },
```

- [x] **Step 9: Add Case 9 metadata**

In `case-studies/dod-pricing-packaging-change.json`, insert after `scenario`:

```json
  "dod_contract": {
    "case_number": 9,
    "case_name": "Pricing And Packaging Change",
    "source_anchor": "von Senger and Michaelson",
    "domain": "monetization, customer success, and sales",
    "evidence_needed_next": ["Usage cohorts", "Renewal calendar", "Price sensitivity", "customer interviews"]
  },
```

- [x] **Step 10: Add Case 10 metadata**

In `case-studies/dod-executive-ai-transformation-push.json`, insert after `scenario`:

```json
  "dod_contract": {
    "case_number": 10,
    "case_name": "Executive AI Transformation Push",
    "source_anchor": "The Art of War for Managers",
    "domain": "executive strategy, operations, governance, and adoption",
    "evidence_needed_next": ["Workflow telemetry", "Data readiness", "Quality defect taxonomy", "Adoption telemetry"]
  },
```

- [x] **Step 11: Run the case-study suite to verify GREEN**

Run:

```bash
npm run test:case-studies
```

Expected: PASS with:

```text
Sunzi strategy case study tests passed.
```

## Task 3: Document And Guard The Fixture Contract

**Files:**
- Modify: `references/real-life-dod-case-map.md`
- Modify: `scripts/validate-stack.mjs`

- [x] **Step 1: Add the fixture contract reference**

Append this section after `## DoD Case Template` in `references/real-life-dod-case-map.md`:

````markdown
## Case-Study Fixture Contract

Every `case-studies/dod-*.json` fixture must include `dod_contract`:

```json
"dod_contract": {
  "case_number": 1,
  "case_name": "Market Entry Without Head-On War",
  "source_anchor": "The 36 Stratagems for Business",
  "domain": "business growth and competitive entry",
  "evidence_needed_next": ["buyer interviews", "partner interview", "concierge pilot"]
}
````

Validation rules:

- `case_number` must be an integer from 1 to 10.
- `case_name` must match the case name in the fixture `name`.
- `source_anchor` must appear inside that case's simulation section.
- Each DoD case is validated against its own `## Case N` section, not the whole shared example file.
- Each fixture must require `Definition Of Done`, `Simulation Output`, `Stakeholder Reaction`, `Safe Response`, and `Evidence Needed Next`.
- Each fixture must include at least three evidence phrases that appear in its scoped simulation section.
```

- [x] **Step 2: Require the fixture contract in stack validation**

In `validateDodCases()` in `scripts/validate-stack.mjs`, add these required phrases to the existing `required` array:

```js
    'Case-Study Fixture Contract',
    'dod_contract',
```

- [x] **Step 3: Require the runner integration in stack validation**

In `validateDodWorkflowIntegration()` in `scripts/validate-stack.mjs`, add this expectation object:

```js
    {
      path: 'scripts/run-case-study-tests.mjs',
      required: ['validateDodContract', 'getScopedOutput', 'dod_contract', 'requiredDodSections'],
    },
```

- [x] **Step 4: Run full validation**

Run:

```bash
npm test
```

Expected: PASS with:

```text
Sunzi strategy stack validation passed.
Sunzi strategy case study tests passed.
```

## Task 4: Final Verification

**Files:**
- Verify: all files touched in Tasks 1-3

- [x] **Step 1: Run the focused case-study suite**

Run:

```bash
npm run test:case-studies
```

Expected: PASS with:

```text
Sunzi strategy case study tests passed.
```

- [x] **Step 2: Run full stack validation**

Run:

```bash
npm test
```

Expected: PASS with:

```text
Sunzi strategy stack validation passed.
Sunzi strategy case study tests passed.
```

- [x] **Step 3: Run whitespace validation**

Run:

```bash
git diff --check
```

Expected: no output.

- [x] **Step 4: Run public-boundary scan**

Run the repo's standard private-boundary scan from the project root. Expected: no private terms, with only intentional secret-detector regexes allowed inside `scripts/validate-stack.mjs`.

## Self-Review

- Spec coverage: the plan covers plan-first execution, step-by-step TDD, fixture schema hardening, section-scoped SSR validation, documentation, and final verification.
- Placeholder scan: no red-flag placeholder text is present in implementation steps.
- Type consistency: `dod_contract`, `case_number`, `case_name`, `source_anchor`, `domain`, and `evidence_needed_next` are consistently named across fixtures, runner code, and documentation.
