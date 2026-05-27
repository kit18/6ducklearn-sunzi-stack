---
name: strategy-analyst-review
description: Use to audit a proposed strategy, strategy memo, growth plan, market-risk thesis, ecommerce plan, negotiation move, or Thirty-Six Stratagems lens selection for evidence quality, falsifiers, ethics, second-order effects, metrics, and kill criteria.
---

# Strategy Analyst Review

Use this skill as the quality gate for strategy work before action. It is especially useful after `strategic-situation-analysis`, but it also works on ordinary strategy memos.

## Review Workflow

1. Restate the decision and recommendation in one sentence.
2. Separate facts, assumptions, interpretation, missing data, and adversarial possibilities.
3. Score the strategy on bottleneck clarity, actor mapping, incentive mapping, evidence quality, falsifier strength, ethical and legal safety, second-order effects, reversibility, metrics, and kill criteria.
4. If a Thirty-Six Stratagems lens is used, verify the lens mechanism against the evidence and source-story invariant. Do not reward clever naming.
5. Force one competing diagnosis and one "do nothing / exit" option.
6. Rewrite unsafe or manipulative moves into detection, defense, compliance, truthful growth, or fair competition.
7. Return a go / revise / stop recommendation.

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

