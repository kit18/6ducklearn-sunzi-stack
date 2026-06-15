---
name: sunzi-focus-group-skill-review
description: Use when evaluating whether a skill, skill pack, agent workflow, prompt library, or AI operating method is good enough through a PM/UED-led focus group with multiple stakeholder or industry-leader archetypes, scorecards, dissent, risk review, and improvement recommendations.
---

# Sunzi Focus Group Skill Review

Use this skill to evaluate skill quality through a PM/UED-led focus group. The panel should combine product judgment, user research, operational realism, technical feasibility, trust/safety, and adoption pressure.

Core rule: never rely on one reviewer. A single expert can miss adoption friction, unsafe incentives, support burden, or user confusion that a cross-functional panel will expose.

## Workflow

1. Define the artifact under review: skill name, target users, trigger conditions, expected output, adoption context, and known risks.
2. Design the panel using [Panel Contract](references/panel-contract.md). Include at least six roles; default to eight when stakes are product, growth, operations, or customer-facing.
3. Label the review as synthetic panel simulation, not real quotes, unless real interview notes are supplied by the user.
4. Give each panelist an independent scorecard before synthesis: task fit, usability, evidence discipline, safety, adoption friction, testability, and one required change.
5. Run stakeholder simulation with at least four reactions from people affected by the skill, such as end user, operator, manager, engineer, customer-success lead, or buyer.
6. Surface dissent before consensus. Name the strongest disagreement, what evidence would resolve it, and whether the skill should go, revise, or stop.
7. Connect the review to `strategy-analyst-review` when the skill may influence product, growth, operations, pricing, policy, migration, or executive decisions.
8. End with recommended changes, priority, owner, evidence needed next, and retest scenarios.

## References

- [Panel Contract](references/panel-contract.md)
- [Domain review contracts](../../references/domain-review-contracts.md)
- [Stakeholder Stress-Reaction Simulation](../../references/stakeholder-stress-reaction.md)

## Output

```markdown
## Panel Design
- Review label: synthetic panel simulation, not real quotes
- Review goal:
- Panel roles:
- Excluded perspectives:
- Evidence available:

## Artifact Under Review
- Skill / workflow:
- Target user:
- Trigger:
- Expected output:
- Adoption context:
- Known risk:

## Individual Reviews
| Panelist | Score | What works | Main concern | Required change |
|---|---:|---|---|---|

## Stakeholder Simulation
| Stakeholder | Synthetic reaction | Risk exposed | Evidence needed |
|---|---|---|---|

## Cross-Panel Synthesis
- Consensus:
- Dissent:
- Blind spot:
- Adoption risk:
- Safety / trust risk:

## Decision
Verdict: go / revise / stop
Confidence:

## Recommended Changes
1.
2.
3.

## Evidence Needed Next
- User evidence:
- Operational evidence:
- Technical evidence:
- Retest scenario:
```

## Hard Rules

- Do not impersonate real named industry leaders. Use public-safe archetypes unless the user provides authorized source material.
- Do not present synthetic panel output as real interview evidence or real quotes.
- Do not give a single-reviewer verdict for multi-stakeholder skill quality decisions.
- Do not reward impressive language without trigger clarity, user fit, output contract, evidence discipline, safety, and testability.
- Do not hide dissent. If the panel disagrees, preserve the disagreement and name the evidence needed next.
