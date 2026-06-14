# Sunzi Real-Life DoD Case Simulations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first 10 real-life Definition of Done case simulations for applying the Thirty-Six Stratagems across business, operations, growth, management, negotiation, and daily professional life.

**Implementation status:** Completed on 2026-06-14. The first slice produced an expected RED case-study failure before the shared example existed; cases 2-10 produced expected RED failures before their sections existed; final validation is green with `npm test`, `npm run test:case-studies`, `git diff --check`, placeholder scan, and private-boundary scan.

**Architecture:** Add a public-safe DoD case map, then implement one vertical slice per case: write a failing case-study fixture, run it red, create the simulation output, run it green, and only then refactor shared docs or validators. Each case must be source-anchored to a famous applied Sunzi or Thirty-Six Stratagems book/page and must treat simulation as hypothesis, not proof.

**Tech Stack:** Markdown references and examples, JSON case-study fixtures, Node.js validation scripts, `npm run test:case-studies`, `npm test`, and sensitive-info scans.

---

## File Structure

- Create `references/real-life-dod-case-map.md`: the top 10 case catalog, source anchors, selected stratagem lenses, DoD gates, and unsafe boundaries.
- Create `examples/dod-case-simulations.md`: all 10 simulation outputs in one public-safe example file for v1. Use separate sections per case to keep manifest growth small.
- Create 10 case-study specs under `case-studies/`, one per DoD case, each pointing to `examples/dod-case-simulations.md`.
- Modify `stack.json`: register the new reference, example, and 10 fixtures.
- Modify `scripts/validate-stack.mjs`: register the new reference/example/fixtures and add DoD-case validation gates.
- Optionally modify `README.md` and `docs/ADOPTION-CHECKLIST.md`: mention the real-life DoD case pack after tests pass.

## Top 10 Cases For V1

1. **Market Entry Without Head-On War**
   - Source anchor: Harro von Senger, `The 36 Stratagems for Business`; Beijing Review interview on politics/economics/human-relations stratagem literacy.
   - Topic: business growth and competitive entry.
   - Lenses: `圍魏救趙`, `遠交近攻`, `走為上計`.
   - DoD: identifies indirect constraint, alliance option, no-go/retreat trigger, and evidence needed before entering.

2. **Community Growth Without Spam**
   - Source anchor: Michaelson, `Sun Tzu Strategies for Marketing`; repo SSR growth/community case.
   - Topic: growth and distribution.
   - Lenses: `拋磚引玉`, `打草驚蛇`, `釜底抽薪`, `走為上計`.
   - DoD: separates growth mechanism from tactic, protects community trust, blocks fake urgency, and defines a reversible experiment.

3. **Manager Delegation Under Pressure**
   - Source anchor: `Sun Tzu: The Art of War for Managers`; Chinese workplace Sunzi titles describing practical management and delegation.
   - Topic: company operation and people management.
   - Lenses: `以逸待勞`, `擒賊擒王`, `連環計`.
   - DoD: names decision rights, owner/backup, escalation threshold, frontline burden, and audit trail.

4. **Talent Retention And Motivation**
   - Source anchor: `管人36計` / talent-management Thirty-Six Stratagems applied to selecting, using, developing, and retaining people.
   - Topic: HR, management, and team operating system.
   - Lenses: `李代桃僵`, `借屍還魂`, `反客為主`.
   - DoD: avoids manipulation, maps employee incentives, names retention risk, and proposes a transparent trust-preserving move.

5. **Negotiation With Future Relationship Value**
   - Source anchor: Hiroshi Moriya, `The 36 Strategies of the Martial Arts`, positioned for war, business, and life; repo decision-review adapter.
   - Topic: workplace negotiation, partnership, and conflict.
   - Lenses: `圍魏救趙`, `欲擒故縱`, `反客為主`, `走為上計`.
   - DoD: includes BATNA, relationship asset, ethical line, exact ask, and retreat trigger.

6. **API Or Platform Migration Rollout**
   - Source anchor: repo SSR API migration pattern plus business-strategy application from von Senger/Michaelson.
   - Topic: product/API, customer success, and operations.
   - Lenses: `打草驚蛇`, `釜底抽薪`, `假道伐虢`, `連環計`.
   - DoD: includes stakeholder loss/fear, migration workload, technical blind spot, cost trust risk, and safe response.

7. **Incident Or Billing Escalation SOP**
   - Source anchor: `The Art of War for Managers` for operational command and control; repo operations/billing SSR.
   - Topic: operations, support, and SOP.
   - Lenses: `擒賊擒王`, `關門捉賊`, `以逸待勞`, `釜底抽薪`.
   - DoD: names control node, containment path, decision latency, audit log, owner, and customer-update SLA.

8. **Personal Career Move Or Promotion Ask**
   - Source anchor: `Sun Tzu for Success`, which applies Art of War principles to personal goals and adversity; repo career negotiation case.
   - Topic: daily/professional life.
   - Lenses: `以逸待勞`, `圍魏救趙`, `走為上計`.
   - DoD: includes status quo, user agency, trust-preserving ask, evidence of contribution, and retreat/exit trigger.

9. **Pricing And Packaging Change**
   - Source anchor: business and marketing Sunzi applications from von Senger and Michaelson.
   - Topic: monetization, customer success, and sales.
   - Lenses: `假道伐虢`, `反客為主`, `釜底抽薪`, `走為上計`.
   - DoD: detects bait-and-switch perception, renewal risk, buyer escalation, grandfathering or migration path, and real evidence needed.

10. **Executive AI Transformation Push**
    - Source anchor: `Sun Tzu: The Art of War for Managers` and modern management applications; repo AI transformation case.
    - Topic: executive strategy, operations, governance, and adoption.
    - Lenses: `借屍還魂`, `李代桃僵`, `連環計`, `擒賊擒王`.
    - DoD: requires quick ROI use case, capability foundation, human fallback, governance owner, adoption telemetry, and kill criteria.

## Simulation-Driven Development Loop

Use a TDD twist called **DoD Simulation Driven Development**:

1. Pick exactly one case.
2. RED: add one `case-studies/dod-<slug>.json` fixture with headings, required lenses, required DoD phrases, and blocked unsafe phrases. Do not use `max_lenses` for these fixtures because all 10 point to the same shared output file.
3. Run `npm run test:case-studies`.
4. Confirm failure is expected: missing `examples/dod-case-simulations.md` or missing required phrases.
5. GREEN: add only the minimum section in `examples/dod-case-simulations.md` for that case.
6. Run `npm run test:case-studies`.
7. REFACTOR: only after green, update `references/real-life-dod-case-map.md`, manifest entries, and validator registration for that vertical slice.
8. Repeat for the next case.

Rules:

- Do not write all 10 simulations before testing.
- Do not invent non-canonical stratagem names.
- Do not present SSR as real user evidence.
- Do not coach deception, coercion, fake scarcity, hidden terms, harassment, impersonation, or trust-destroying tactics.
- Every case must include `Definition Of Done`, `Simulation Output`, `Stakeholder Reaction`, `Safe Response`, and `Evidence Needed Next`.

## Task 1: Create The DoD Case Map

**Files:**
- Create: `references/real-life-dod-case-map.md`
- Modify: `stack.json`
- Modify: `scripts/validate-stack.mjs`

- [ ] **Step 1: Add the reference file**

Create `references/real-life-dod-case-map.md` with this structure:

```markdown
# Real-Life DoD Case Map

Use this reference to select the first 10 real-life Definition of Done cases for Sunzi and Thirty-Six Stratagems simulation.

## Source Anchors

- Harro von Senger, `The 36 Stratagems for Business`: business and economic competition.
- Beijing Review interview with Harro von Senger: politics, economics, human relations, trap detection, and observation.
- Hiroshi Moriya, `The 36 Strategies of the Martial Arts`: war, business, and life.
- Gerald and Steven Michaelson, `Sun Tzu for Success`: personal goals, adversity, and long-term achievement.
- Gerald and Steven Michaelson, `Sun Tzu: The Art of War for Managers`: management and leadership.
- Gerald and Steven Michaelson, `Sun Tzu Strategies for Marketing`: customer and market strategy.
- `管人36計`: talent management using Sunzi and Thirty-Six Stratagems.
- `職場孫子兵法`: workplace survival, management, negotiation, and business strategy.

## DoD Case Template

```markdown
### [Case Name]

- Source anchor:
- Topic:
- Scenario:
- Stakeholders:
- Candidate lenses:
- Definition Of Done:
- Simulation outputs:
- Safe response:
- Evidence needed next:
- Blocked moves:
```

## Top 10 V1 Cases

The implementation must copy the exact 10-case catalog from the `Top 10 Cases For V1` section in this plan, preserving case names, source anchors, topics, lenses, DoD gates, and unsafe boundaries.
```

- [ ] **Step 2: Register the reference in the manifest**

Modify `stack.json` references:

```json
"references/real-life-dod-case-map.md"
```

- [ ] **Step 3: Register the reference in validation**

Modify `scripts/validate-stack.mjs`:

```js
expectedReferences.push('references/real-life-dod-case-map.md');
```

- [ ] **Step 4: Verify RED/GREEN for reference registration**

Run:

```bash
npm test
```

Expected after all three steps: PASS.

## Task 2: Add The Shared Simulation Example File

**Files:**
- Create: `examples/dod-case-simulations.md`
- Modify: `stack.json`
- Modify: `scripts/validate-stack.mjs`

- [ ] **Step 1: Create the empty example shell**

Create `examples/dod-case-simulations.md`:

```markdown
# Real-Life DoD Case Simulations

Each section is a synthetic simulation, not a real quote, survey result, or proof of demand.

## Case Index

1. Market Entry Without Head-On War
2. Community Growth Without Spam
3. Manager Delegation Under Pressure
4. Talent Retention And Motivation
5. Negotiation With Future Relationship Value
6. API Or Platform Migration Rollout
7. Incident Or Billing Escalation SOP
8. Personal Career Move Or Promotion Ask
9. Pricing And Packaging Change
10. Executive AI Transformation Push
```

- [ ] **Step 2: Register the example in the manifest**

Modify `stack.json` examples:

```json
"examples/dod-case-simulations.md"
```

- [ ] **Step 3: Register the example in validation**

Modify `scripts/validate-stack.mjs`:

```js
expectedExamples.push('examples/dod-case-simulations.md');
```

- [ ] **Step 4: Run validation**

Run:

```bash
npm test
```

Expected: PASS if no case fixtures require sections yet.

## Task 3: Implement Case 1 Vertical Slice

**Files:**
- Create: `case-studies/dod-market-entry-without-head-on-war.json`
- Modify: `examples/dod-case-simulations.md`
- Modify: `stack.json`
- Modify: `scripts/validate-stack.mjs`

- [ ] **Step 1: Write the failing fixture**

Create:

```json
{
  "name": "DoD Case 1 Market Entry Without Head-On War",
  "scenario": "A small B2B SaaS team wants to enter a crowded workflow market where incumbents own direct comparison keywords and enterprise relationships.",
  "output": "examples/dod-case-simulations.md",
  "required_headings": [
    "## Case 1: Market Entry Without Head-On War",
    "### Definition Of Done",
    "### Simulation Output",
    "### Stakeholder Reaction",
    "### Safe Response",
    "### Evidence Needed Next"
  ],
  "required_lenses": ["圍魏救趙", "遠交近攻", "走為上計"],
  "required_phrases": [
    "The 36 Stratagems for Business",
    "hypothesis, not proof",
    "indirect constraint",
    "alliance option",
    "retreat trigger",
    "safe response"
  ],
  "blocked_phrases": [
    "fake competitor review",
    "mislead customers",
    "steal customer data",
    "guaranteed win"
  ]
}
```

- [ ] **Step 2: Run RED**

Run:

```bash
npm run test:case-studies
```

Expected: FAIL because the case section is missing.

- [ ] **Step 3: Add the minimum simulation section**

Append a `## Case 1: Market Entry Without Head-On War` section containing the required headings, lenses, source anchor, synthetic label, stakeholder reaction, safe response, and evidence needed next.

- [ ] **Step 4: Run GREEN**

Run:

```bash
npm run test:case-studies
```

Expected: PASS for Case 1.

- [ ] **Step 5: Register the fixture**

Add `case-studies/dod-market-entry-without-head-on-war.json` to `stack.json` and `expectedCaseStudies` in `scripts/validate-stack.mjs`.

- [ ] **Step 6: Run full validation**

Run:

```bash
npm test
```

Expected: PASS.

## Task 4: Repeat Vertical Slices For Cases 2-10

**Files:**
- Create: 9 more `case-studies/dod-*.json` files.
- Modify: `examples/dod-case-simulations.md`
- Modify: `stack.json`
- Modify: `scripts/validate-stack.mjs`

For each case, follow the same RED/GREEN/REFACTOR pattern from Task 3. Use these fixture slugs and required checks:

| Case | Fixture | Required lenses | Required DoD phrases | Blocked phrases |
|---|---|---|---|---|
| 2 Community Growth Without Spam | `case-studies/dod-community-growth-without-spam.json` | `拋磚引玉`, `打草驚蛇`, `釜底抽薪`, `走為上計` | `Sun Tzu Strategies for Marketing`, `community trust`, `reversible experiment`, `spam reports`, `safe response` | `fake scarcity`, `hidden discount terms`, `spam automation` |
| 3 Manager Delegation Under Pressure | `case-studies/dod-manager-delegation-under-pressure.json` | `以逸待勞`, `擒賊擒王`, `連環計` | `The Art of War for Managers`, `decision rights`, `owner`, `backup`, `audit trail` | `blame frontline`, `no owner needed`, `skip escalation` |
| 4 Talent Retention And Motivation | `case-studies/dod-talent-retention-and-motivation.json` | `李代桃僵`, `借屍還魂`, `反客為主` | `管人36計`, `employee incentives`, `retention risk`, `transparent move`, `trust-preserving` | `manipulate employees`, `threaten resignation`, `fake promotion` |
| 5 Negotiation With Future Relationship Value | `case-studies/dod-negotiation-with-future-relationship-value.json` | `圍魏救趙`, `欲擒故縱`, `反客為主`, `走為上計` | `The 36 Strategies of the Martial Arts`, `BATNA`, `relationship asset`, `exact ask`, `retreat trigger` | `coerce`, `public shaming`, `fake evidence` |
| 6 API Or Platform Migration Rollout | `case-studies/dod-api-platform-migration-rollout.json` | `打草驚蛇`, `釜底抽薪`, `假道伐虢`, `連環計` | `migration workload`, `technical blind spot`, `cost trust risk`, `sandbox`, `grace period` | `hide pricing change`, `force migration silently`, `token value` |
| 7 Incident Or Billing Escalation SOP | `case-studies/dod-incident-billing-escalation-sop.json` | `擒賊擒王`, `關門捉賊`, `以逸待勞`, `釜底抽薪` | `control node`, `containment path`, `decision latency`, `audit log`, `customer-update SLA` | `hide billing risk`, `dashboard is enough`, `delay refunds` |
| 8 Personal Career Move Or Promotion Ask | `case-studies/dod-personal-career-move-promotion-ask.json` | `以逸待勞`, `圍魏救趙`, `走為上計` | `Sun Tzu for Success`, `status quo`, `user agency`, `trust-preserving ask`, `exit trigger` | `fake offer`, `threaten manager`, `romantic manipulation` |
| 9 Pricing And Packaging Change | `case-studies/dod-pricing-packaging-change.json` | `假道伐虢`, `反客為主`, `釜底抽薪`, `走為上計` | `bait-and-switch perception`, `renewal risk`, `buyer escalation`, `grandfathering`, `evidence needed next` | `hidden terms`, `surprise fee`, `lock customers in secretly` |
| 10 Executive AI Transformation Push | `case-studies/dod-executive-ai-transformation-push.json` | `借屍還魂`, `李代桃僵`, `連環計`, `擒賊擒王` | `The Art of War for Managers`, `quick ROI use case`, `human fallback`, `governance owner`, `adoption telemetry` | `replace all humans`, `skip compliance`, `launch without review` |

After each case:

```bash
npm run test:case-studies
```

After registering each case:

```bash
npm test
```

## Task 5: Add DoD-Specific Validator Gates

**Files:**
- Modify: `scripts/validate-stack.mjs`

- [ ] **Step 1: Add a `validateDodCases()` function**

Add this function near `validateSsrSafety()`:

```js
function validateDodCases() {
  const dodReference = read('references/real-life-dod-case-map.md');
  const dodExample = read('examples/dod-case-simulations.md');

  for (const required of [
    'Definition Of Done',
    'Simulation Output',
    'Stakeholder Reaction',
    'Safe Response',
    'Evidence Needed Next',
    'hypothesis, not proof',
  ]) {
    if (!dodReference.includes(required) && !dodExample.includes(required)) {
      fail(`DoD case pack must include ${required}`);
    }
  }

  const expectedCaseHeadings = [
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

  for (const heading of expectedCaseHeadings) {
    if (!dodReference.includes(heading) || !dodExample.includes(heading)) {
      fail(`DoD case pack must include ${heading}`);
    }
  }
}
```

- [ ] **Step 2: Call the validator**

Add:

```js
validateDodCases();
```

before `validateStackManifest();`.

- [ ] **Step 3: Run full validation**

Run:

```bash
npm test
```

Expected: PASS.

## Task 6: Documentation And Final Proof

**Files:**
- Modify: `README.md`
- Modify: `docs/ADOPTION-CHECKLIST.md`

- [ ] **Step 1: Update README**

Add `Real-life DoD case simulations` to examples and explain that the first pack covers 10 source-anchored situations.

- [ ] **Step 2: Update adoption checklist**

Add a behavior gate:

```markdown
- Real-life DoD cases: each case includes source anchor, canonical lenses, Definition Of Done, simulation output, stakeholder reaction, safe response, and evidence needed next.
```

- [ ] **Step 3: Run final verification**

Run:

```bash
npm test
npm run test:case-studies
git diff --check
```

Expected:

- `npm test`: PASS.
- `npm run test:case-studies`: PASS.
- `git diff --check`: no output.
- Sensitive scan: run the standard private-boundary scan used by this repo outside tracked plan text; no private hits except intentional leak-detector regexes inside `scripts/validate-stack.mjs`.

## Plan Review Checklist

- Spec coverage: the plan covers top 10 cases, book/source anchors, DoD criteria, simulation output, stakeholder reaction, and TDD-style vertical slices.
- Missing-detail scan: all tasks name concrete files, commands, expected results, and pass/fail behavior.
- Type consistency: all new fixtures point to `examples/dod-case-simulations.md`; all manifest and validator changes use the same file paths.
- Scope control: this is v1. It creates the first 10 cases only, not all 36 stratagem-specific cases.
