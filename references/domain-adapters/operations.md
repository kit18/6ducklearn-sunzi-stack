# Domain Adapter: Operations And SOP

Pulled in by the 五事 skills — chiefly `/sunzi-method` — and the maneuver tier
whenever the decision concerns SOPs, runbooks, handoffs, support workflows,
incident procedures, supply-chain processes, QA routines, or operating
cadences. This adapter supplies the evidence lanes and output checks; the
invoking skill supplies the diagnosis. (Replaces the v0.2.0
`sunzi-operations-sop-review` skill — see `docs/MIGRATION.md`.)

Core rule: an SOP is only real when it changes behavior under pressure.

## Evidence lanes (operating)

- Capacity, cycle time, inventory, yield, labor, data visibility,
  supplier/customer volatility, quality, operating cadence.
- The SOP modeled as a state machine: input, decision point, handoff,
  output, exception, recovery, closeout.
- Physical bottleneck and information bottleneck, separately; if one does
  not apply, the actual control point stated.

## 未戰 lane (mandatory when the process does not exist yet)

- Pilot-tier evidence, labeled: tabletop walkthroughs, shadow runs, single-
  lane pilots with real volume.
- The three pressure scenarios run on the pilot before scale: missing data,
  late handoff, conflicting incentives.
- Cost per exception estimated from the pilot, marked as estimate.

## Required output checks (the invoking skill's artifact must contain)

- State machine table with owner and backup per decision point.
- Decision rights: RACI, escalation path, approval threshold, rollback
  authority, audit trail.
- Pressure-scenario table (missing data / late handoff / conflicting
  incentives) with gaps and required changes.
- Acceptance criteria for normal path, exception path, escalation,
  rollback, and monitoring.
- Flow, quality, and decision metrics; human-impact guardrail; kill
  criterion.

## DoD calibration

Run DoD calibration against the closest real-life case in the
[Real-life DoD case map](../real-life-dod-case-map.md), especially
`Manager Delegation Under Pressure`, `Incident Or Billing Escalation SOP`,
or `API Or Platform Migration Rollout`: copy the source anchor, compare
against the Definition Of Done, state the Evidence Needed Next.

## Lens discipline

Privately screen the canonical matrix against bottleneck removal, prepared
capacity, sequencing, trust / compliance risk, and retreat / stop-rule
need, weighted by scorecard position. Do not show the screening, rejected
lenses, scores, or full matrix. Output only 1 to 3 lenses whose mechanism
materially improves the SOP design; if none, say `None selected`. Useful
patterns on this ground: `釜底抽薪` (root cost, waste, or manual-work
drivers), `以逸待勞` (predictive planning over reactive firefighting),
`連環計` (linked planning, data, governance, capability moves), `調虎離山`
(moving the bottleneck from buffers to information flow).

## Hard rules

- No SOP approved without owner, backup, exception path, rollback path, and
  audit trail.
- No hiding operational risk from customers, frontline teams, regulators,
  or decision makers.
- A dashboard is not an operating model unless decision rights and cadence
  change.
- Never output a checklist of all 36 stratagems, rejected lenses, or an
  internal screening table.
- Burden shifted to users or frontline staff is a named risk requiring a
  guardrail.
