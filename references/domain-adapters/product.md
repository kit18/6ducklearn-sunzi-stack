# Domain Adapter: Product Value And PRD

Pulled in by the 五事 skills — chiefly `/sunzi-alignment` (demand reality)
and `/sunzi-method` (requirement contracts) — whenever the decision concerns
business use cases, product value, PRDs, feature specs, SDK/API/event
contracts, acceptance criteria, QA coverage, or release phases. This adapter
supplies the evidence lanes and output checks; the invoking skill supplies
the diagnosis. (Replaces the v0.2.0 `sunzi-prd-review` skill — see
`docs/MIGRATION.md`.)

Core rule: a PRD is not ready because it sounds reasonable. It is ready when
the business use case is real, the user pain is specific, and engineering,
QA, design, product ops, and stakeholders can verify the same contract.

## Evidence lanes (operating)

- The demand gate, run before any implementation review:
  - Demand reality: what painful job is the user already trying to do?
  - Status quo: what workaround, spreadsheet, script, agency, or existing
    tool is the real competitor?
  - Desperate specificity: which exact segment has the most urgent pain?
  - Narrowest wedge: the smallest useful version that proves value.
  - Observation: what direct behavior, ticket, call, or usage data proves
    the pain?
  - Future-fit: what larger product does the wedge unlock?
- Existing alignment before new invention: APIs, events, data models, UI
  components, support process, docs, rollout path.

## 未戰 lane (mandatory when demand evidence is pre-launch)

- Probe-tier demand evidence, labeled: priced preorders, prototype
  walkthroughs with the named segment, support-ticket mining of the
  workaround.
- A weak demand gate caps the verdict at `revise` or `stop` — implementation
  detail cannot compensate for unevidenced demand.

## Required output checks (the invoking skill's artifact must contain)

- Demand-gate table with evidence quality and falsifier per question.
- Scope separation: product value, use cases, objectives, requirements,
  non-goals, future work — with no P0 leakage from future work.
- Per-P0 requirement: trigger, contract, field/state rules, fallback,
  limitations, acceptance criteria.
- QA coverage table, tracking metrics, release phases, open questions, and
  Definition Of Done.

## DoD calibration

Run DoD calibration against the closest real-life case in the
[Real-life DoD case map](../real-life-dod-case-map.md), especially
`API Or Platform Migration Rollout`, `Pricing And Packaging Change`, or
`Executive AI Transformation Push`: copy the source anchor, compare against
the Definition Of Done, state the Evidence Needed Next.

## Lens discipline

Privately screen the canonical matrix against demand reality, scope
control, dependency leverage, sequencing, trust risk, and retreat /
stop-rule need, weighted by scorecard position. Do not show the screening,
rejected lenses, scores, or full matrix. Output only 1 to 2 lenses whose
mechanism materially improves the readiness review; if none, say
`None selected`.

## Hard rules

- No PRD marked ready with the business use case, user segment, demand
  evidence, P0 scope, acceptance criteria, QA coverage, owner, or open
  questions missing.
- Implementation detail never hides weak demand.
- Engineering-confirmation and TRD gaps marked explicitly, never buried.
- No requirements that depend on hidden terms, deceptive UX, unsupported
  claims, or unverifiable success metrics.
- Never output a checklist of all 36 stratagems, rejected lenses, or an
  internal screening table.
