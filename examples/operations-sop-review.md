# Operations SOP Review

> **v1.0.0 note.** This output is now produced by `sunzi-method` pulling
> [`references/domain-adapters/operations.md`](../references/domain-adapters/operations.md),
> not by a standalone `sunzi-operations-sop-review` skill. The review contract
> is unchanged. See [MIGRATION.md](../docs/MIGRATION.md).

## Scenario

A support team has an escalation SOP for billing incidents, but tickets sit unresolved when payment logs are missing, support and engineering disagree on priority, and customers receive inconsistent updates.

## Verdict

Verdict: revise
Confidence: high

## Operation Under Review

- Trigger: customer reports a billing failure or duplicate charge.
- Promise: acknowledge quickly, determine customer impact, and resolve or escalate with evidence.
- Owner: support shift lead.
- Backup / escalation: payments engineer and product ops owner.
- Failure cost: customer trust loss, refund delay, duplicate work, and compliance exposure.

## SOP State Machine

| State | Input | Decision / owner | Output | Exception / recovery |
|---|---|---|---|---|
| Intake | Customer report, order id, payment id if available | Support shift lead verifies required fields | Ticket classified by severity | Missing data path asks customer for minimum safe details and checks system of record |
| Evidence pull | Payment logs, order status, refund state | Payments engineer confirms transaction state | Evidence packet | If logs unavailable, product ops checks provider dashboard and marks confidence |
| Decision | Evidence packet and customer impact | Support lead chooses refund, retry, or engineering escalation | Customer update and internal task | Conflicting incentives path escalates to incident owner |
| Closeout | Resolution proof | Support lead confirms customer notification and audit log | Ticket closed | Reopen if customer disputes or duplicate event appears |

## Bottleneck Map

- Physical bottleneck: payment-provider response and refund processing time.
- Information bottleneck: missing payment id and stale order-state screenshots.
- Decision latency: time from customer report to accountable refund/escalation decision.
- System of record: payment provider dashboard plus internal ticket.
- Audit log: ticket timeline with evidence packet, owner decisions, and customer messages.

## Pressure Scenarios

| Scenario | Expected SOP behavior | Gap | Required change |
|---|---|---|---|
| Missing data | Support uses a minimum-data checklist and checks system records before asking customer twice | Current SOP lacks required-field rules | Add required-field checklist and fallback lookup |
| Late handoff | Payments engineer has a response SLA and backup owner | No backup owner is named | Add backup / escalation owner |
| Conflicting incentives | Incident owner resolves support vs engineering priority conflict | Priority debate stalls customer update | Add severity matrix and escalation threshold |

## DoD Calibration

- Closest case: `Incident Or Billing Escalation SOP`.
- Source anchor: `The Art of War for Managers`, applied to operational command and prepared response.
- Definition Of Done gap: the SOP names control node, containment path, decision latency, and audit log, but still needs a customer-update SLA and a refund-authority rule for incomplete evidence.
- Stakeholder Reaction to rehearse: support lead frustration when incomplete logs block action and customers wait without a next-update time.
- Evidence Needed Next: last 20 billing incidents, log availability, median decision latency, customer wait time, reopened-ticket rate, and audit-log completeness.

## Selected Lenses

| Lens | Operational mechanism | Ethical translation | Falsifier / misuse risk |
|---|---|---|---|
| 擒賊擒王 | Find the control node that determines resolution | Focus on transaction state and refund authority before debating symptoms | Falsified if the issue is communication-only |
| 以逸待勞 | Prepared evidence packet reduces reactive firefighting | Collect required fields before escalation | Misuse risk: waiting while the customer needs an update |
| 釜底抽薪 | Remove the fuel for repeated delays | Fix missing-data and ownership gaps | Falsified if provider latency is the sole blocker |

## Acceptance Criteria

- Normal path: every billing incident has severity, evidence packet, owner, and next customer update time.
- Exception path: missing data has a defined fallback lookup and safe customer request.
- Escalation: unresolved high-impact tickets route to a named incident owner.
- Rollback: incorrect charge or failed fix has refund/retry guidance and customer notice.
- Monitoring: weekly review of stale tickets and repeated exception reasons.

## Metrics And Kill Criteria

- Flow metric: median time from report to decision.
- Quality metric: reopened billing tickets.
- Decision metric: decision latency for high-impact tickets.
- Human-impact guardrail: support touches per ticket.
- Kill criterion: stop rollout if the SOP increases customer wait time or duplicate support touches for two consecutive weeks.
