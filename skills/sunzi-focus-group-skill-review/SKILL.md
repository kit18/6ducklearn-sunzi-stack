---
name: sunzi-focus-group-skill-review
description: Use when evaluating whether a skill, skill pack, agent workflow, prompt library, AI operating method, product concept, or user-intention question is good enough through a PM/UED-led focus group with dynamic segment simulation, a minimum three-response segment gate, convergence checking, scorecards, dissent, risk review, deterministic scoring, and improvement recommendations.
version: 1.0.1
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - Bash
  - WebSearch
triggers:
  - is this skill good
  - review this workflow
  - would people adopt this
  - score this concept
  - focus group this
---

# Sunzi Focus Group Skill Review

Use this skill to evaluate skill quality and user intention through a PM/UED-led focus group. The panel should combine product judgment, user research, operational realism, technical feasibility, trust/safety, adoption pressure, and deterministic scoring when the user asks for buying intention, NPS proxy, PMF proxy, willingness-to-pay proxy, adoption intent, switching cost, task-fit, or custom criteria.

Core rule: never rely on one reviewer. A single expert can miss adoption friction, unsafe incentives, support burden, or user confusion that a cross-functional panel will expose.

Scoring rule: do not let the LLM invent final scores. The LLM may simulate comments, produce 360 comments, draft a dynamic scoring contract, and extract structured signals. Final 1-10 scores must come from the deterministic Node.js scorer or an equivalent deterministic implementation.

## When NOT to invoke this skill

- The artifact is a strategy decision rather than a skill or workflow → `sunzi-strategy-consultant`.
- You need falsification of a plan's logic → `strategy-analyst-review`.
- You need reactions to a specific business move → `sunzi-stakeholder-ssr`.

## Not sure this is your stage?

If you cannot tell which stage your question belongs to, invoke
`sunzi-strategy-consultant` instead — it triages, dispatches, and carries the
artifacts. Running this skill alone is also a supported, first-class use; you
do not have to run the whole loop to get value from one stage.

## Workflow

1. Define the artifact under review: skill name, target users, trigger conditions, expected output, adoption context, and known risks.
2. Design the panel using [Panel Contract](references/panel-contract.md). Include at least six roles; default to eight when stakes are product, growth, operations, or customer-facing.
3. Label the review as synthetic panel simulation, not real quotes, unless real interview notes are supplied by the user.
4. Generate Segment Simulation and diverse Interview Responses first: target users, buyers, skeptics, fans, operators, support, and edge-case users. Each dynamic segment must start with a minimum three-response gate; use 3-5 varied responses as the first pass, then continue in small batches if new viewpoints still appear. Vary respondent seeds across buying trigger, objection/confusion, operational or trust concern, price/effort sensitivity, and edge-case behavior when relevant. Stop only after a convergence gate: the latest added responses introduce no new viewpoint category. These can be synthetic proxy comments or real respondent notes supplied by the user.
5. Generate 360 Comments from PM, UED/research, growth, sales/buyer, support, trust/safety, engineering/ops, and any domain-specific reviewer.
6. Give each panelist an independent scorecard before synthesis: task fit, usability, evidence discipline, safety, adoption friction, testability, and one required change.
7. If scoring is needed, use [User Intention Metric Contract](../../references/user-intention-metric-contract.md) to draft a dynamic deterministic scoring contract from the scenario, metric goal, respondent types, Interview Responses, and 360 Comments.
8. Freeze the formula at `after_comments_before_structured_signal_extraction` before extracting signals or calculating scores.
9. Extract Structured Signals from each response using only the frozen formula dimensions.
10. Run deterministic scoring for Deterministic Scores. Use `synthetic_proxy` for simulated comments and `real_respondent` only for real qualified responses. Synthetic scores are proxy / hypothesis only.
11. Run stakeholder simulation with at least four reactions from people affected by the skill, such as end user, operator, manager, engineer, customer-success lead, or buyer.
12. Surface dissent before consensus. Name the strongest disagreement, what evidence would resolve it, and whether the skill should go, revise, or stop.
13. Connect the review to `strategy-analyst-review` when the skill may influence product, growth, operations, pricing, policy, migration, or executive decisions.
14. End with recommended changes, priority, owner, evidence needed next, and retest scenarios.

## References

- [Panel Contract](references/panel-contract.md)
- [User Intention Metric Contract](../../references/user-intention-metric-contract.md)
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

## Interview Responses
| Respondent | Mode | Comment | Signal candidate | Evidence boundary |
|---|---|---|---|---|

## Segment Simulation
| Segment | Simulated responses (min 3; extend until convergence) | New viewpoint categories | Convergence status | Score | Main friction | Best fix |
|---|---|---|---|---:|---|---|

## 360 Comments
| Reviewer | Lens | Comment | Risk / opportunity | Required change |
|---|---|---|---|---|

## Individual Reviews
| Panelist | Score | What works | Main concern | Required change |
|---|---:|---|---|---|

## Dynamic Scoring Contract
- Metric:
- Mode: synthetic_proxy / real_respondent
- Respondent type:
- Formula type: weighted_normalized_1_to_10
- Generated by skill: true
- Formula source: scenario + Interview Responses + 360 Comments

## Frozen Formula
```json
{
  "formula_type": "weighted_normalized_1_to_10",
  "generated_by_skill": true,
  "frozen_stage": "after_comments_before_structured_signal_extraction",
  "allow_model_supplied_final_scores": false,
  "dimensions": []
}
```

## Structured Signals
| Response | Dimension signals | Missing evidence | Notes |
|---|---|---|---|

## Deterministic Scores
| Response | Score 1-10 | Confidence | Warning |
|---|---:|---|---|

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
- Do not present synthetic scores as real NPS, PMF, willingness-to-pay proof, market proof, customer evidence, or percent-would-buy evidence.
- Do not score a focus-group segment from one or two synthetic quotes. Start with at least three varied simulated responses per dynamic segment, then extend beyond 3-5 when new viewpoint categories keep appearing.
- Do not stop because the response count reached 3-5. Stop only when the convergence gate is met: no new buying trigger, objection/confusion, operational or trust concern, price/effort sensitivity, or edge-case behavior appears in the latest added responses.
- Do not describe synthetic convergence as statistically significant or real questionnaire evidence. It is synthetic_proxy coverage for hypothesis generation and questionnaire design; real validity requires real respondents, a defined sampling plan, and an appropriate research instrument.
- Do not let the LLM provide final 1-10 scores directly. Draft a dynamic scoring contract, freeze the formula, extract structured signals, then calculate deterministically.
- Do not output executable scoring code as the formula. Use declarative JSON only.
- Do not give a single-reviewer verdict for multi-stakeholder skill quality decisions.
- Do not reward impressive language without trigger clarity, user fit, output contract, evidence discipline, safety, and testability.
- Do not hide dissent. If the panel disagrees, preserve the disagreement and name the evidence needed next.
