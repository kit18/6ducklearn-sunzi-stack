---
name: sunzi-operations-sop-review
description: Use when reviewing or designing SOPs, runbooks, handoffs, support workflows, incident procedures, supply-chain processes, QA routines, operating cadences, or recurring operational systems where bottlenecks, decision rights, exceptions, and auditability matter.
---

# Sunzi Operations SOP Review

Use this skill to review an operating process as a living system, not a checklist. The output should make the normal path, exception path, owner handoff, telemetry, and stop rule clear enough for a team to run.

Core rule: an SOP is only real when it changes behavior under pressure.

## Workflow

1. Define the operation: trigger, customer or internal promise, owner, backup owner, horizon, and failure cost.
2. Model the SOP as a state machine: input, decision point, handoff, output, exception, recovery, and closeout.
3. Identify the physical bottleneck and information bottleneck. If one does not apply, state the actual control point.
4. Map decision rights: RACI, escalation path, approval threshold, rollback authority, and audit trail.
5. Run three pressure scenarios: missing data, late handoff, and conflicting incentives.
6. Run DoD calibration against the closest real-life case, especially `Manager Delegation Under Pressure`, `Incident Or Billing Escalation SOP`, or `API Or Platform Migration Rollout`.
7. Privately screen the full canonical Thirty-Six Stratagems matrix as a candidate library against bottleneck removal, prepared capacity, sequencing, trust / compliance risk, and retreat / stop-rule need. Do not show the screening, rejected lenses, scores, or full matrix. Output only 1 to 3 lenses whose mechanism materially improves the SOP design; if no lens improves the analysis, say `None selected`.
8. Translate each selected lens into an ethical operational move with a falsifier and misuse risk. Do not reward clever name matching.
9. Run `strategy-analyst-review` before approving the SOP: second-order effects, frontline burden, customer trust, compliance, metrics, and kill criterion.
10. Output a revised SOP review with required changes, acceptance criteria, and monitoring plan.

## References

- [Domain review contracts](../../references/domain-review-contracts.md)
- [Real-life DoD case map](../../references/real-life-dod-case-map.md)
- [Business war-room template](../../references/business-war-room-template.md)
- [Strategy output template](../../references/strategy-output-template.md)
- [Ethical use guardrails](../../references/ethical-use-guardrails.md)

## Output

```markdown
Verdict: go / revise / stop
Confidence:

Operation Under Review
- Trigger:
- Promise:
- Owner:
- Backup / escalation:
- Failure cost:

SOP State Machine
| State | Input | Decision / owner | Output | Exception / recovery |
|---|---|---|---|---|

Bottleneck Map
- Physical bottleneck:
- Information bottleneck:
- Decision latency:
- System of record:
- Audit log:

Pressure Scenarios
| Scenario | Expected SOP behavior | Gap | Required change |
|---|---|---|---|
| Missing data |  |  |  |
| Late handoff |  |  |  |
| Conflicting incentives |  |  |  |

DoD Calibration
- Closest case:
- Source anchor:
- Definition Of Done gap:
- Stakeholder Reaction to rehearse:
- Evidence Needed Next:

Selected Lenses
| Lens | Operational mechanism | Ethical translation | Falsifier / misuse risk |
|---|---|---|---|

Acceptance Criteria
- Normal path:
- Exception path:
- Escalation:
- Rollback:
- Monitoring:

Metrics And Kill Criteria
- Flow metric:
- Quality metric:
- Decision metric:
- Human-impact guardrail:
- Kill criterion:
```

## Hard Rules

- Do not approve an SOP without owner, backup, exception path, rollback path, and audit trail.
- Do not hide operational risk from customers, frontline teams, regulators, or decision makers.
- Do not call a dashboard an operating model unless decision rights and cadence change.
- Never output a checklist of all 36 stratagems, rejected lenses, or an internal screening table. Lenses are optional diagnostic analogies, secondary to the state machine, bottleneck map, pressure scenarios, decision rights, metrics, and kill criterion.
- If the SOP shifts burden to users or frontline staff, mark that as a risk and require a guardrail.
