# Strategy Focus Group Evaluation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Run PM/UED-style focus group simulation across the top-10 real-world Sunzi/Thirty-Six Stratagems strategy cases, define DoD, evaluate results, and iterate until each case reaches a usable recommendation.

**Architecture:** Reuse the existing real-life DoD case map and `sunzi-focus-group-skill-review` panel contract. Add one source-grounded evaluation reference, one example containing all 10 strategy focus-group simulations, and one case-study fixture that validates DoD/evaluation/iteration behavior. Register the reference, example, and fixture in the manifest and validators.

**Tech Stack:** Markdown references/examples, JSON case-study fixtures, Node.js validation scripts, `npm run test:case-studies`, `npm test`.

---

## Scope Check

This is V1 for the existing top-10 real-world cases, not all 36 stratagems. It uses public-safe book/page anchors and simulated stakeholder archetypes. It does not claim that real industry leaders participated.

## File Structure

- Create `references/strategy-focus-group-evaluation.md`: source anchors, focus-group evaluation protocol, DoD, iteration rules.
- Create `case-studies/focus-group-strategy-evaluation.json`: failing fixture for strategy-by-strategy focus-group evaluation.
- Create `examples/focus-group-strategy-evaluation.md`: the full top-10 strategy simulation/evaluation artifact.
- Modify `stack.json`: register the new reference, example, and case study.
- Modify `scripts/validate-stack.mjs`: register inventory and require evaluation protocol phrases.
- Modify `README.md`: list the reference, example, and case-study coverage.
- Modify `docs/ADOPTION-CHECKLIST.md`: add the strategy focus-group evaluation gate.

## Task 1: Add A Failing Case Fixture

**Files:**
- Create: `case-studies/focus-group-strategy-evaluation.json`

- [x] **Step 1: Create the fixture**

Create a JSON fixture that points to `examples/focus-group-strategy-evaluation.md` and requires:

- headings: `## Source-Grounded Strategy Set`, `## Focus Group Method`, `## Case 1` through `## Case 10`, `## Cross-Case Evaluation`, `## Iteration Log`
- phrases: `synthetic panel simulation`, `not real quotes`, `PM lead`, `UED researcher`, `trust/safety reviewer`, `Definition Of Done`, `Evaluation Result`, `Iteration 1`, `Iteration 2`, `works after revision`
- blocked phrases: `real industry leader said`, `single reviewer is enough`, `guaranteed success`, `no evidence needed`

- [x] **Step 2: Run RED**

Run:

```bash
npm run test:case-studies
```

Expected: FAIL because `examples/focus-group-strategy-evaluation.md` is missing.

## Task 2: Add The Source-Grounded Evaluation Reference

**Files:**
- Create: `references/strategy-focus-group-evaluation.md`

- [x] **Step 1: Create the reference**

The reference must include:

- source anchors from the real-life DoD map
- top-10 strategy set
- focus group method
- DoD template
- iteration rule
- safety boundary that generated reactions are synthetic and not real quotes

## Task 3: Add The Strategy Evaluation Example

**Files:**
- Create: `examples/focus-group-strategy-evaluation.md`

- [x] **Step 1: Create the example**

Create one example containing all 10 cases. Each case must include:

- source anchor
- panel focus
- Definition Of Done
- stakeholder simulation
- Evaluation Result
- Iteration 1
- Iteration 2
- final state: `works after revision`

- [x] **Step 2: Run GREEN**

Run:

```bash
npm run test:case-studies
```

Expected: PASS.

## Task 4: Register And Validate

**Files:**
- Modify: `stack.json`
- Modify: `scripts/validate-stack.mjs`
- Modify: `README.md`
- Modify: `docs/ADOPTION-CHECKLIST.md`

- [x] **Step 1: Register the reference, example, and fixture**

Add:

- `references/strategy-focus-group-evaluation.md`
- `examples/focus-group-strategy-evaluation.md`
- `case-studies/focus-group-strategy-evaluation.json`

- [x] **Step 2: Add validator coverage**

Update `scripts/validate-stack.mjs` so full validation requires the source-grounded strategy focus-group evaluation protocol, all 10 case names, and iteration phrases.

- [x] **Step 3: Run full validation**

Run:

```bash
npm test
```

Expected: PASS.

## Task 5: Final Verification

**Files:**
- Verify all touched files.

- [x] **Step 1: Run final commands**

Run:

```bash
npm run test:case-studies
npm test
git diff --check
```

Expected: all pass.

- [x] **Step 2: Run safety scans**

Run the standard no-placeholder scan on the new artifacts and the standard private-boundary scan from the repo root.

Expected: no placeholder hits; no private-boundary hits except intentional validator regexes.

## Self-Review

- Spec coverage: the plan researches famous applied-strategy anchors, runs focus-group simulation across the V1 strategy set, defines DoD, evaluates results, and iterates to a final working state.
- Placeholder scan: no implementation placeholders are present.
- Type consistency: `focus-group-strategy-evaluation` is used consistently across reference, example, fixture, manifest, and validator.
