---
name: sunzi-prd-review
description: Use when reviewing business use cases, product value, PRDs, product requirements, feature specs, SDK/API/event contracts, acceptance criteria, QA coverage, release phases, or product-open-question lists where demand reality, scope discipline, and implementation clarity matter.
---

# Sunzi Product Value And PRD Review

Use this skill to decide whether a product idea deserves a PRD, then make the PRD implementable and reviewable. It should turn fuzzy value claims into observable use cases, demand evidence, scope, contracts, acceptance criteria, metrics, and open questions.

Core rule: a PRD is not ready because it sounds reasonable. It is ready when the business use case is real, the user pain is specific, and engineering, QA, design, product ops, and stakeholders can verify the same contract.

## Workflow

1. Identify document status, owner, reviewers, product area, platform, release phase, and decision needed.
2. Run the office-hours demand gate before reviewing implementation:
   - Demand reality: what painful job is the user already trying to do?
   - Status quo: what workaround, spreadsheet, script, agency, manual process, or existing tool is the real competitor?
   - Desperate specificity: which exact user segment has the most urgent pain?
   - Narrowest wedge: what is the smallest useful version that proves value?
   - Observation: what direct user behavior, support ticket, sales call, usage data, or manual workflow proves the pain?
   - Future-fit: if this wedge works, what larger product or platform does it unlock?
3. Restate the background as observable user or partner pain, business need, technical constraint, and why now.
4. Separate product value, use cases, objectives, requirements, non-goals, and future work.
5. Check existing alignment before new invention: APIs, events, data models, UI components, support process, docs, and rollout path.
6. For each P0 requirement, require trigger, contract, field or state rules, fallback behavior, limitations, and acceptance criteria.
7. Add QA coverage, tracking metrics, release phases, open questions, and definition of done.
8. Run DoD calibration against the closest real-life case, especially `API Or Platform Migration Rollout`, `Pricing And Packaging Change`, or `Executive AI Transformation Push`.
9. Select 1 to 2 canonical Thirty-Six Stratagems lenses only if they clarify scope control, dependency leverage, sequencing, or retreat.
10. Run `strategy-analyst-review` before marking ready: demand evidence, scope creep, implementation gaps, customer trust, metrics, and kill criterion.

## References

- [Domain review contracts](../../references/domain-review-contracts.md)
- [Decision memo template](../../references/decision-memo-template.md)
- [Real-life DoD case map](../../references/real-life-dod-case-map.md)
- [Ethical strategy guardrails](../../references/ethical-strategy-guardrails.md)

## Output

```markdown
Verdict: ready / revise / stop
Confidence:

Product / PRD Under Review
- Status:
- Owner:
- Reviewers:
- Product area / platform:
- Release phase:

Office-Hours Demand Gate
| Question | Current answer | Evidence quality | Gap / falsifier |
|---|---|---|---|
| Demand reality |  |  |  |
| Status quo |  |  |  |
| Desperate specificity |  |  |  |
| Narrowest wedge |  |  |  |
| Observation |  |  |  |
| Future-fit |  |  |  |

Problem And Scope
- User / partner pain:
- Business need:
- Technical constraint:
- Why now:
- In scope:
- Out of scope:
- Future / separate PRD:

Business Use Cases
| Use case | User segment | Job to be done | Current workaround | Product value | Priority |
|---|---|---|---|---|---|

Requirements Contract
| Requirement | Trigger | Contract / payload / state | Acceptance criteria | Gap |
|---|---|---|---|---|

QA Coverage
| Scenario | Expected behavior | Priority | Owner |
|---|---|---|---|

Metrics
- Adoption:
- Time-to-value:
- Quality / defect:
- Support or trust guardrail:

Open Questions
1.
2.
3.

Definition Of Done
- PRD review:
- Technical review:
- QA coverage:
- Documentation:
- POC or rollout proof:
- Product-value proof:

DoD Calibration
- Closest case:
- Source anchor:
- Definition Of Done gap:
- Stakeholder Reaction to rehearse:
- Evidence Needed Next:

Selected Lenses
| Lens | Product-review mechanism | Ethical translation | Falsifier / misuse risk |
|---|---|---|---|
```

## Hard Rules

- Do not mark a PRD ready if the business use case, user segment, demand evidence, P0 scope, acceptance criteria, QA coverage, owner, or open questions are missing.
- Do not let implementation details hide weak demand. If the office-hours gate is weak, verdict is `revise` or `stop`.
- Do not bury implementation uncertainty; mark engineering-confirmation or TRD gaps explicitly.
- Do not let future work leak into P0 without a release-phase decision.
- Do not approve requirements that depend on hidden terms, deceptive UX, unsupported claims, or unverifiable success metrics.
