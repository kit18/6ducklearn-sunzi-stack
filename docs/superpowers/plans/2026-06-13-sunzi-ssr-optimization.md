# Sunzi SSR Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Optimize the Sunzi stack around Stakeholder Stress-Reaction Simulation as the cross-domain evaluation method, with PRD review as one adapter rather than the root use case.

**Architecture:** Keep the current skill family. Add a public glossary, an SSR evaluation reference, and new case-study fixtures that force the stack to demonstrate growth and operations SSR behavior before editing skill wording. Use `strategy-analyst-review` as the final gate after SSR outputs.

**Tech Stack:** Markdown skills and references, JSON case-study fixtures, Node.js validation scripts, `npm test`, and `npm run test:case-studies`.

---

## File Structure

- `CONTEXT.md`: domain glossary and resolved terminology from the grill-with-docs pass.
- `references/ssr-evaluation-scenarios.md`: research-backed SSR evaluation rubric and QA scenarios.
- `examples/growth-community-ssr.md` and `examples/operations-billing-ssr.md`: synthetic stakeholder simulations used by tests.
- `case-studies/growth-community-ssr.json` and `case-studies/operations-billing-ssr.json`: behavior tests for the new examples.
- Existing routing/docs/manifest files: update only to register SSR as the cross-domain evaluation core.

## Task 1: Red Tests For SSR Breadth

**Files:**
- Create: `case-studies/growth-community-ssr.json`
- Create: `case-studies/operations-billing-ssr.json`

- [x] **Step 1: Write failing case-study specs**

The growth spec requires community moderator, power-user, and support-lead reactions. The operations spec requires support, payments engineering, and customer-success reactions.

- [x] **Step 2: Verify RED**

Run: `npm run test:case-studies`

Expected: FAIL because `examples/growth-community-ssr.md` and `examples/operations-billing-ssr.md` do not exist.

## Task 2: Consolidate The Method

**Files:**
- Create: `CONTEXT.md`
- Create: `references/ssr-evaluation-scenarios.md`
- Modify: `README.md`
- Modify: `AGENTS.md`
- Modify: `agents/sunzi-strategy-consultant.yaml`

- [x] **Step 1: Capture domain terms**

Add glossary entries for Sunzi Strategy Stack, Stakeholder Stress-Reaction Simulation, stress lens, office-hours demand gate, and strategy-analyst review.

- [x] **Step 2: Register SSR as cross-domain**

Docs and routing should say SSR is used for growth, operations, product/API, pricing, policy, migration, and executive strategy pressure tests.

- [x] **Step 3: Keep PRD review as an adapter**

Docs should not imply the stack is primarily a PRD reviewer. Product-value review keeps the office-hours gate, but SSR owns simulation and stakeholder reaction.

## Task 3: Implement SSR Scenario Examples

**Files:**
- Create: `examples/growth-community-ssr.md`
- Create: `examples/operations-billing-ssr.md`

- [x] **Step 1: Add growth/community SSR output**

Include synthetic labels, stress lenses, moderator reaction, power-user reply, support escalation, strategic read, and safe response.

- [x] **Step 2: Add operations/billing SSR output**

Include synthetic labels, support shift lead Slack, payments engineer note, customer-success escalation, strategic read, missing-log risk, decision latency, audit log, frontline burden, and safe response.

- [x] **Step 3: Verify GREEN for case studies**

Run: `npm run test:case-studies`

Expected: PASS after the new examples satisfy the specs.

## Task 4: Wire The Public Contract

**Files:**
- Modify: `stack.json`
- Modify: `scripts/validate-stack.mjs`
- Modify: `skills/sunzi-stakeholder-ssr/SKILL.md`
- Modify: `references/stakeholder-stress-reaction.md`
- Modify: `references/applied-use-case-map.md`
- Modify: `skills/sunzi-strategy-consultant/SKILL.md`
- Modify: `skills/strategy-analyst-review/SKILL.md`

- [x] **Step 1: Add manifest entries**

Register the SSR evaluation reference, examples, and case-study fixtures.

- [x] **Step 2: Strengthen validator gates**

Validation should require SSR hypothesis language, multi-stakeholder coverage, safe response, and all registered examples/case studies.

- [x] **Step 3: Update skill instructions narrowly**

Add only the SSR evaluation loop needed by the tests: define stakeholders, simulate artifacts, label as hypothesis, extract strategic read, choose safe response, and send through analyst review.

## Task 5: Final Verification

**Files:**
- All changed public files.

- [x] **Step 1: Run tests**

Run: `npm test`

Expected: `Sunzi strategy stack validation passed.` and `Sunzi strategy case study tests passed.`

- [x] **Step 2: Run direct case-study tests**

Run: `npm run test:case-studies`

Expected: `Sunzi strategy case study tests passed.`

- [x] **Step 3: Check whitespace**

Run: `git diff --check`

Expected: no output.

- [x] **Step 4: Check public/private leakage**

Run the existing sensitive-info scan for private-company strings.

Expected: no hits except leak-detector patterns inside `scripts/validate-stack.mjs`.
