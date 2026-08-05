# Domain Review Contracts

Use this reference when a Sunzi skill needs domain-specific judgment without bloating the main skill file. The goal is a reusable decision contract: clear trigger, scoped artifact, evidence ledger, acceptance criteria, metrics, open questions, and stop rules.

## Library Quality Bar

| Principle | Sunzi standard |
|---|---|
| Composable | Keep each adapter narrow enough to combine with `sunzi-terrain` and `strategy-analyst-review`. |
| Trigger clarity | The frontmatter description should say when to use the skill, not summarize every step. |
| Progressive disclosure | Put reusable details here; keep each `SKILL.md` focused on the workflow and output. |
| Evidence before advice | Every important claim needs a source, artifact, metric, observation, or explicitly marked assumption. |
| Pressure-testable | Each skill should produce headings, phrases, metrics, or behavior that case-study tests can validate. |
| Simulation-aware | SSR outputs are hypothesis, not proof; use them to decide what evidence to collect next. |
| Public-safe | Do not include private runtime code, secrets, customer records, private memory, billing internals, OAuth flows, or proprietary partner text. |

## Shared Review Skeleton

```markdown
Verdict: go / revise / stop
Confidence:

Decision / Artifact Under Review
- Owner:
- Domain:
- Horizon:
- Stakes:

Scope
- In scope:
- Out of scope:
- Assumptions:

Evidence Ledger
| Claim | Source / artifact | Quality | Missing / falsifier |
|---|---|---|---|

Review Findings
| Area | Finding | Severity | Required change |
|---|---|---|---|

Acceptance Criteria
- Functional:
- Operational:
- Safety / trust:

Metrics
- Leading:
- Lagging:
- Guardrail:
- Kill criterion:

Open Questions
1.
2.
3.
```

## Growth Review Contract

Use for growth loops, GTM experiments, community distribution, lifecycle campaigns, ecommerce conversion, referral loops, and paid-channel plans.

Required checks:

- Name the growth loop: acquisition, activation, retention, referral, revenue, or learning loop.
- Identify the constraint before prescribing the channel: audience, trust, inventory, onboarding, pricing, product value, content supply, or measurement.
- Separate channel tactic from mechanism. Example: "post in community" is a tactic; "help a narrow segment solve a recurring pain and earn repeat visits" is a mechanism.
- Define the ethical line: no fake scarcity, fake reviews, hidden fees, deceptive discounts, spam, astroturfing, unsupported claims, dark patterns, or manipulative urgency.
- Require a baseline, one reversible experiment, one learning metric, one business metric, and one trust guardrail.
- Include a stop rule before scaling spend, automation, or community posting.

Useful metrics:

| Area | Examples |
|---|---|
| Activation | first meaningful action, setup completion, first saved artifact, time to value |
| Retention | repeat session, day-7 return, workflow completion, subscription renewal |
| Distribution | qualified visits, community replies, demo starts, partner referrals |
| Economics | CAC, contribution margin, payback period, refund rate |
| Trust | complaint rate, unsubscribe rate, spam reports, support burden |

## Operations And SOP Review Contract

Use for operating models, SOPs, runbooks, handoffs, queues, incident playbooks, support workflows, supply-chain processes, QA routines, and recurring business operations.

Required checks:

- Model the SOP as a state machine: trigger, input, decision point, handoff, output, exception, recovery, and closeout.
- Name the physical bottleneck and information bottleneck. If no physical bottleneck exists, say that and identify the real control point.
- Map owners with RACI or an equivalent owner/backup/escalation table.
- Define normal path, exception path, escalation path, and rollback path.
- Identify the system of record and the audit log.
- Define decision latency: time between a signal arriving and an accountable decision.
- Test the SOP with at least three pressure scenarios: missing data, late handoff, and conflicting incentives.
- Add a stop rule if the SOP increases cycle time, hides risk, or shifts burden to customers or frontline teams.

Useful metrics:

| Area | Examples |
|---|---|
| Flow | cycle time, queue age, handoff count, rework rate |
| Quality | defect escape rate, SOP compliance, exception recurrence |
| Decision | decision latency, escalation time, stale ticket count |
| Reliability | missed SLA, incident recurrence, rollback success |
| Human impact | frontline load, training time, customer complaint rate |

## Product / PRD Review Contract

Use for business use cases, product value reviews, PRDs, product requirements, API or event contracts, SDK changes, feature specs, acceptance criteria, rollout plans, and QA scope.

Required checks:

- State document status, owner, reviewers, product area, platform, and scope boundary.
- Start with the office-hours demand gate: demand reality, status quo, desperate specificity, narrowest wedge, observation, and future-fit.
- Explain background as user pain, business need, and technical constraint, not just solution preference.
- Separate product value from implementation shape.
- Separate objectives from requirements.
- Provide in-scope and out-of-scope lists.
- Define terms and entities that could otherwise be ambiguous.
- Include use cases with priority.
- Align with existing APIs, events, components, data models, or workflows before inventing new ones.
- For each requirement, provide trigger, contract, field rules, limitations, and acceptance criteria.
- Add QA coverage, tracking metrics, release phases, open questions, and definition of done.
- Mark TRD or engineering-confirmation gaps explicitly instead of hiding uncertainty.

PRD review table:

| Area | Review question |
|---|---|
| Demand | Does a specific user have urgent pain, or are we admiring a plausible feature? |
| Status quo | What workaround or existing tool is the real competitor? |
| Wedge | What is the smallest useful version that proves value? |
| Problem | Is the user or partner pain concrete and observable? |
| Scope | Are in-scope and out-of-scope boundaries crisp enough to prevent expansion? |
| Contract | Are payloads, fields, states, and errors defined? |
| Acceptance | Can QA verify every P0 requirement? |
| Rollout | Are phases, limitations, fallback behavior, and owner handoffs clear? |
| Metrics | Is success measurable without vanity metrics? |
| Open questions | Are technical gaps visible before implementation starts? |
