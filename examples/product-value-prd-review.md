# Product Value PRD Review

## Scenario

A platform team wants to build a partner-facing automation builder for merchants. The proposal says partners can create workflows faster, but the current PRD mostly describes configuration screens and event payloads. It does not prove which merchant job is painful enough to justify the product.

## Verdict

Verdict: revise
Confidence: medium

## Product / PRD Under Review

- Status: concept PRD before technical review.
- Owner: product manager.
- Reviewers: design, engineering, QA, developer relations, product ops, support, and one pilot partner.
- Product area / platform: partner automation builder.
- Release phase: discovery to P0 wedge.

## Office-Hours Demand Gate

| Question | Current answer | Evidence quality | Gap / falsifier |
|---|---|---|---|
| Demand reality | Partners say merchant automations take too long to launch | Medium | Need examples where delay caused lost revenue, churn risk, or repeated support pain |
| Status quo | Partners use custom scripts, spreadsheets, support tickets, and one-off engineering work | Medium | Need to know which workaround is most expensive and most frequent |
| Desperate specificity | Small and mid-market merchants with recurring post-purchase operations appear most urgent | Low | Segment is still too broad; find one merchant workflow with repeated pain |
| Narrowest wedge | Start with one post-purchase exception workflow, not a generic automation builder | Medium | Prove one workflow is used weekly by pilot merchants |
| Observation | Support tickets and partner calls mention manual follow-up | Medium | Need direct observation of a partner doing the manual workflow |
| Future-fit | If the wedge works, it can become a governed workflow layer for partner apps | Low | Future platform value depends on adoption and permissions model |

## Problem And Scope

- User / partner pain: partners manually coordinate merchant operations across tickets, spreadsheets, and custom scripts.
- Business need: reduce partner integration time, support load, and repeated one-off engineering requests.
- Technical constraint: workflow actions need permissions, audit logs, rollback behavior, and reliable event triggers.
- Why now: partner requests are repeating, but building a generic builder too early risks a broad surface with weak adoption.
- In scope: one high-frequency workflow, pilot partner setup, permission model, audit log, rollback, and measurable activation.
- Out of scope: generic workflow marketplace, all merchant verticals, unlimited event/action coverage, no-code editor polish, and automated billing.
- Future / separate PRD: workflow templates, partner marketplace distribution, advanced branching, and cross-app analytics.

## Business Use Cases

| Use case | User segment | Job to be done | Current workaround | Product value | Priority |
|---|---|---|---|---|---|
| Post-purchase exception follow-up | Partners serving merchants with high support volume | Detect an exception and coordinate the next action without manual ticket chasing | Spreadsheet plus support ticket plus custom script | Faster resolution, fewer missed follow-ups, clearer ownership | P0 wedge |
| Merchant onboarding checklist | Implementation partners | Track setup steps across merchant, partner, and internal teams | Shared doc and chat reminders | Lower onboarding delay | P1 |
| Campaign-triggered fulfillment task | Marketing partners | Turn campaign events into operational tasks | Manual export and task assignment | Better campaign execution | Future |

## Requirements Contract

| Requirement | Trigger | Contract / payload / state | Acceptance criteria | Gap |
|---|---|---|---|---|
| Workflow trigger | selected post-purchase exception event occurs | event id, merchant id, workflow id, idempotency key, timestamp | pilot workflow starts once and records source event | event coverage needs engineering confirmation |
| Human task creation | workflow condition passes | assignee, due time, reason, source artifact, rollback state | owner receives task with enough context to act | owner and escalation rules need product ops input |
| Audit log | every workflow action | actor, action, previous state, new state, timestamp | support can reconstruct what happened | retention and privacy policy need review |
| Rollback | incorrect task or failed action | cancellation reason, previous state, notification | bad action can be reversed or clearly marked | rollback scope needs technical design |

## QA Coverage

| Scenario | Expected behavior | Priority | Owner |
|---|---|---|---|
| Duplicate trigger | workflow runs once with idempotency proof | P0 | QA |
| Missing assignee | workflow enters exception path and alerts owner | P0 | QA + product ops |
| Failed action | workflow records failure and exposes rollback state | P0 | QA |
| Pilot partner setup | partner can configure the wedge workflow without engineering help | P0 | developer relations |
| Audit review | support can explain a workflow outcome from the audit log | P0 | support |

## DoD Calibration

- Closest case: `API Or Platform Migration Rollout`.
- Source anchor: public business-strategy applications from von Senger and Michaelson, plus the stack's platform-migration SSR pattern.
- Definition Of Done gap: the PRD names audit log, rollback, and idempotency, but still needs direct partner observation, permission boundaries, technical blind spots, and support-cost proof before platformizing the builder.
- Stakeholder Reaction to rehearse: pilot partner concern that a broad automation builder creates setup workload, permission risk, and support ambiguity before proving one painful workflow.
- Evidence Needed Next: direct observation of the manual workflow, pilot partner setup time, failed-action taxonomy, support load, permission review, and weekly active pilot merchant usage.

## Metrics

- Adoption: number of pilot merchants running the P0 wedge weekly.
- Time-to-value: time from partner setup to first successful workflow.
- Quality / defect: duplicate actions, failed actions, and missing-owner exceptions.
- Support or trust guardrail: customer complaints or support confusion caused by automation.

## Open Questions

1. Which single workflow has the most frequent pain and clearest owner?
2. Which partner can provide direct observation before build starts?
3. What is the minimum permission model for the P0 wedge?
4. What rollback actions are technically possible in the first release?

## Definition Of Done

- PRD review: product, design, engineering, QA, product ops, developer relations, support, and pilot partner agree on the P0 wedge.
- Technical review: trigger, idempotency, permissions, audit log, and rollback are designed.
- QA coverage: every P0 behavior has a scenario, including duplicate trigger, missing owner, and failed action.
- Documentation: pilot partner guide explains setup, limitations, audit log, and rollback.
- POC or rollout proof: one pilot partner runs the workflow on real merchant operations.
- Product-value proof: at least one pilot merchant uses the workflow weekly and reports less manual coordination.

## Selected Lenses

| Lens | Product-review mechanism | Ethical translation | Falsifier / misuse risk |
|---|---|---|---|
| 釜底抽薪 | Remove the root cause of manual coordination pain | Solve the repeated operational bottleneck before building a broad editor | Falsified if partner delay is mostly sales priority, not workflow friction |
| 擒賊擒王 | Find the control node in the use case | Pick the one workflow where ownership, trigger, and business value are clearest | Misuse risk: overfitting to one loud partner |
| 走為上計 | Retreat from premature platform breadth | Defer generic marketplace and no-code polish until the wedge has real usage | Misuse risk: deferring important governance work |
