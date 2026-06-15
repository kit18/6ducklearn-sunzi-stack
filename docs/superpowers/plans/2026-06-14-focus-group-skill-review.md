# Focus Group Skill Review Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a reusable Sunzi skill that evaluates skill quality through a PM/UED-led multi-stakeholder focus group simulation.

**Architecture:** Add a new first-class skill, `sunzi-focus-group-skill-review`, with a lean `SKILL.md` and one bundled reference defining panel roles, review rubric, and simulation rules. Add one public example and one case-study fixture so the repo validates that reviews use multiple stakeholder agents, not a single reviewer. Register the skill in manifest, agent routing, README, adoption checklist, and validation.

**Tech Stack:** Codex skill format, Markdown references/examples, JSON case-study fixtures, Node.js validation scripts, `skill-creator` helper scripts, `npm test`, and `npm run test:case-studies`.

---

## Scope Check

This plan creates an evaluation skill for skill quality review. It does not connect to external people, send invitations, impersonate real industry leaders, or access private runtime systems. "Industry leader agents" means public-safe expert archetypes such as PM lead, UED lead, growth leader, operations leader, enterprise buyer, platform engineer, trust reviewer, and customer-support lead.

## File Structure

- Create `skills/sunzi-focus-group-skill-review/SKILL.md`: core trigger, workflow, output contract, and hard rules.
- Create `skills/sunzi-focus-group-skill-review/references/panel-contract.md`: panel roles, scoring rubric, agenda, and synthesis contract.
- Create `examples/focus-group-skill-review.md`: sample evaluation of the Sunzi skill pack with multiple stakeholder simulations.
- Create `case-studies/focus-group-skill-review.json`: fixture that proves multi-agent panel review behavior.
- Modify `stack.json`: register the new skill, reference, example, case study, and behavior gate.
- Modify `scripts/validate-stack.mjs`: register inventory and add focus-group validation.
- Modify `AGENTS.md`: route skill quality/focus-group review to the new skill.
- Modify `agents/sunzi-strategy-consultant.yaml`: attach the new skill and reference.
- Modify `README.md`: list the skill, reference, example, and case-study test.
- Modify `docs/ADOPTION-CHECKLIST.md`: add focus-group behavior gate.

## Task 1: Initialize The Skill

**Files:**
- Create: `skills/sunzi-focus-group-skill-review/SKILL.md`
- Create: `skills/sunzi-focus-group-skill-review/agents/openai.yaml`
- Create: `skills/sunzi-focus-group-skill-review/references/example.md`

- [ ] **Step 1: Run the skill initializer**

Run:

```bash
python3 "$HOME/.codex/skills/.system/skill-creator/scripts/init_skill.py" sunzi-focus-group-skill-review --path skills --resources references --interface display_name="Sunzi Focus Group Review" --interface short_description="Multi-stakeholder skill quality review" --interface default_prompt="Use $sunzi-focus-group-skill-review to run a PM/UED focus group review of this skill pack."
```

Expected: creates `skills/sunzi-focus-group-skill-review/` with `SKILL.md`, `agents/openai.yaml`, and `references/example.md`.

- [ ] **Step 2: Delete the placeholder reference**

Run:

```bash
rm skills/sunzi-focus-group-skill-review/references/example.md
```

Expected: the placeholder reference is removed before validation.

## Task 2: Add The Focus Group Skill Contract

**Files:**
- Modify: `skills/sunzi-focus-group-skill-review/SKILL.md`
- Create: `skills/sunzi-focus-group-skill-review/references/panel-contract.md`

- [ ] **Step 1: Replace SKILL.md**

Write `skills/sunzi-focus-group-skill-review/SKILL.md` with frontmatter:

```yaml
---
name: sunzi-focus-group-skill-review
description: Use when evaluating whether a skill, skill pack, agent workflow, prompt library, or AI operating method is good enough by running a PM/UED-led focus group with multiple simulated stakeholder or industry-leader archetypes, scorecards, dissent, risk review, and improvement recommendations.
---
```

The body must include:

- "Core rule: never rely on one reviewer."
- Workflow steps for artifact intake, panel design, individual review, stakeholder simulation, synthesis, and decision.
- Required references to `references/panel-contract.md`, `../../references/domain-review-contracts.md`, and `../../references/stakeholder-stress-reaction.md`.
- Output sections: `Panel Design`, `Artifact Under Review`, `Individual Reviews`, `Stakeholder Simulation`, `Cross-Panel Synthesis`, `Decision`, `Recommended Changes`, `Evidence Needed Next`.
- Hard rules against real-person impersonation, fake quotes, single-reviewer verdicts, and ungrounded praise.

- [ ] **Step 2: Create panel-contract.md**

Create `skills/sunzi-focus-group-skill-review/references/panel-contract.md` with:

- Required panel: PM lead, UED researcher, growth leader, operations/SOP leader, enterprise buyer, platform engineer, trust/safety reviewer, customer-support lead.
- Optional panel: investor/founder, learning designer, procurement/legal reviewer.
- Review dimensions: trigger clarity, task fit, workflow usability, output contract, evidence discipline, safety, adoption friction, testability.
- Scoring: 1-5 with `go`, `revise`, or `stop`.
- Required simulation rule: produce at least four stakeholder reactions before synthesis.

## Task 3: Add Example And Case Study

**Files:**
- Create: `examples/focus-group-skill-review.md`
- Create: `case-studies/focus-group-skill-review.json`

- [ ] **Step 1: Create the failing fixture first**

Create `case-studies/focus-group-skill-review.json`:

```json
{
  "name": "Focus Group Skill Review Multi-Stakeholder Panel",
  "scenario": "A PM and UED group wants to evaluate whether the Sunzi skill pack is good enough for growth, operations, SOP, PRD, and stakeholder simulation work.",
  "output": "examples/focus-group-skill-review.md",
  "required_headings": [
    "## Panel Design",
    "## Artifact Under Review",
    "## Individual Reviews",
    "## Stakeholder Simulation",
    "## Cross-Panel Synthesis",
    "## Decision",
    "## Recommended Changes",
    "## Evidence Needed Next"
  ],
  "required_phrases": [
    "PM lead",
    "UED researcher",
    "growth leader",
    "operations/SOP leader",
    "enterprise buyer",
    "platform engineer",
    "trust/safety reviewer",
    "customer-support lead",
    "synthetic panel simulation",
    "not real quotes",
    "never rely on one reviewer",
    "scorecard",
    "dissent",
    "revise"
  ],
  "blocked_phrases": [
    "single reviewer is enough",
    "real industry leader said",
    "guaranteed adoption",
    "no evidence needed"
  ]
}
```

- [ ] **Step 2: Run RED**

Run:

```bash
npm run test:case-studies
```

Expected: FAIL because `examples/focus-group-skill-review.md` is missing.

- [ ] **Step 3: Create the example**

Create `examples/focus-group-skill-review.md` with a sample review of the Sunzi skill pack that includes all required headings and at least eight panel roles.

- [ ] **Step 4: Run GREEN**

Run:

```bash
npm run test:case-studies
```

Expected: PASS.

## Task 4: Register The Skill In Stack Validation

**Files:**
- Modify: `stack.json`
- Modify: `scripts/validate-stack.mjs`
- Modify: `AGENTS.md`
- Modify: `agents/sunzi-strategy-consultant.yaml`
- Modify: `README.md`
- Modify: `docs/ADOPTION-CHECKLIST.md`

- [ ] **Step 1: Update stack.json**

Register:

- skill: `sunzi-focus-group-skill-review`
- reference: `skills/sunzi-focus-group-skill-review/references/panel-contract.md`
- example: `examples/focus-group-skill-review.md`
- case study: `case-studies/focus-group-skill-review.json`
- behavior gate: `focus_group_skill_review`

- [ ] **Step 2: Update validate-stack inventory**

Add the same skill, reference, example, and case-study paths to `expectedSkills`, `expectedReferences`, `expectedExamples`, and `expectedCaseStudies`.

- [ ] **Step 3: Add focus-group-specific validator**

Add `validateFocusGroupSkillReview()` requiring:

- the skill includes `never rely on one reviewer`, `Panel Design`, `Stakeholder Simulation`, and `Evidence Needed Next`
- the reference includes all eight required panel roles
- the example includes `synthetic panel simulation`, `not real quotes`, `scorecard`, `dissent`, and `revise`
- the behavior gate exists in `stack.json`

- [ ] **Step 4: Update routing docs**

Add `sunzi-focus-group-skill-review` to `AGENTS.md`, `agents/sunzi-strategy-consultant.yaml`, `README.md`, and `docs/ADOPTION-CHECKLIST.md`.

- [ ] **Step 5: Run full validation**

Run:

```bash
npm test
```

Expected: PASS.

## Task 5: Final Verification

**Files:**
- Verify: all touched files

- [ ] **Step 1: Run the skill validator**

Run:

```bash
python3 "$HOME/.codex/skills/.system/skill-creator/scripts/quick_validate.py" skills/sunzi-focus-group-skill-review
```

Expected: PASS.

- [ ] **Step 2: Run case studies and full stack validation**

Run:

```bash
npm run test:case-studies
npm test
```

Expected: both PASS.

- [ ] **Step 3: Run hygiene scans**

Run:

```bash
git diff --check
```

Expected: `git diff --check` has no output; run the standard no-placeholder scan outside this saved plan so the plan does not contain the scanned terms.

- [ ] **Step 4: Run public-boundary scan**

Run the repo private-boundary scan. Expected: no private hits except intentional leak-detector regexes in `scripts/validate-stack.mjs`.

## Self-Review

- Spec coverage: this creates a skill first, designs a PM/UED focus group, includes multiple industry/stakeholder archetypes, and validates simulation with more than one reviewer.
- Placeholder scan: the implementation plan contains no placeholder implementation steps.
- Type consistency: `sunzi-focus-group-skill-review`, `focus_group_skill_review`, `panel-contract.md`, `focus-group-skill-review.md`, and `focus-group-skill-review.json` are consistently named.
