---
name: strategy-analyst-review
description: Use to audit a proposed strategy, strategy memo, growth plan, market-risk thesis, ecommerce plan, negotiation move, or Thirty-Six Stratagems lens selection for evidence quality, falsifiers, ethics, second-order effects, metrics, and kill criteria.
---

# Strategy Analyst Review

Use this skill as the quality gate for strategy work before action. It is especially useful after `strategic-situation-analysis`, `sunzi-decision-review`, `sunzi-stakeholder-ssr`, `sunzi-growth-review`, `sunzi-operations-sop-review`, or `sunzi-prd-review`, but it also works on ordinary strategy memos.

## Review Workflow

1. Restate the decision and recommendation in one sentence.
2. Separate facts, assumptions, interpretation, missing data, and adversarial possibilities.
3. Build a source/evidence ledger that names the artifact or source behind every important claim.
4. Score the strategy on bottleneck clarity, actor mapping, incentive mapping, evidence quality, falsifier strength, ethical and legal safety, second-order effects, reversibility, metrics, and kill criteria.
5. If a Thirty-Six Stratagems lens is used, verify the lens mechanism against the evidence and source-story invariant. Do not reward clever naming.
6. Force one competing diagnosis and one "do nothing / exit" option.
7. Rewrite unsafe or manipulative moves into detection, defense, compliance, truthful growth, or fair competition.
8. Return a go / revise / stop recommendation.

## Domain Add-Ons

- Growth reviews must include mechanism before tactic, baseline, leading metric, trust guardrail, and channel stop rule.
- Decision reviews must include mode, status quo, user agency, trust/relationship value, options, and retreat trigger.
- SSR reviews must label outputs as synthetic, mark them as hypothesis not proof, and check hidden terrain, root objection, escalation path, technical blind spot, evidence needed next, and safe response.
- Operations and SOP reviews must include state machine, owner/backup, exception path, rollback path, system of record, audit log, and pressure scenarios.
- PRD reviews must include scope boundaries, requirement contracts, acceptance criteria, QA coverage, release phase, open questions, and definition of done.
- DoD calibration reviews must name the source anchor, compare the recommendation with the case Definition Of Done, inspect Stakeholder Reaction, list blocked moves, and require Evidence Needed Next before action.

## References

- [Real-life DoD case map](../../references/real-life-dod-case-map.md)
- [Domain review contracts](../../references/domain-review-contracts.md)

## Output

```markdown
Verdict: go / revise / stop
Confidence:

Decision Under Review
- Recommendation:
- Horizon:
- Stakes:

Evidence Audit
| Claim | Evidence | Quality | Missing / falsifier |
|---|---|---|---|
|  |  |  |  |

Source Ledger
| Source / artifact | Claim supported | Quality | Next check |
|---|---|---|---|
|  |  |  |  |

Lens Audit
| Lens or frame | Mechanism claimed | Evidence match | Misuse risk | Better alternative |
|---|---|---|---|---|
|  |  |  |  |  |

Risk Review
- Legal/compliance:
- Customer/user trust:
- Data/privacy:
- Market/manipulation:
- Operational second-order effect:
- Reversibility:

DoD Calibration
- Closest case:
- Source anchor:
- Definition Of Done match:
- Stakeholder Reaction covered:
- Blocked moves:
- Evidence Needed Next:

Required Changes
1.
2.
3.

Metrics and Kill Criteria
- Leading metric:
- Lagging metric:
- Stop rule:
```

## Hard Rules

- Do not approve a strategy that relies on false proof, covert access, hidden material terms, impersonation, harassment, coercion, market manipulation, sexual/romantic manipulation, or public shaming.
- Do not approve a strategy without falsifiers and stop rules.
- If evidence is weak, say what evidence would change the verdict.
- If the user asks for harmful execution, refuse that execution and provide a safe review or defense alternative.
