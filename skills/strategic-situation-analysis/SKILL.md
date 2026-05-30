---
name: strategic-situation-analysis
description: Use when analyzing strategic business, market, trading, growth, ecommerce, macro, operations, or competitive situations where incentives, constraints, timing, deception risk, evidence quality, or second-order effects matter; selects 2-4 source-grounded Thirty-Six Stratagems lenses and returns a decision memo with guardrails and kill criteria.
---

# Strategic Situation Analysis

Use this skill when the task is to diagnose a strategic situation and design a decision, not when the user only needs a summary.

Core rule: use the Thirty-Six Stratagems as lenses, not as slogans. Evidence comes first. Cleverness comes last.

## Workflow

1. Define the decision: objective, arena, horizon, and what the user must decide.
2. Build the first-principles map: actors, incentives, constraints, information, timing, feedback, optionality, asymmetry, and failure mode.
3. Classify the situation:
   - 勝戰: advantage and momentum
   - 敵戰: rivalry and contested signals
   - 攻戰: discovery and pressure
   - 混戰: disorder and multi-party conflict
   - 並戰: alliances, substitutions, and control shifts
   - 敗戰: downside, exit, and recovery
4. Select 2 to 4 canonical lenses from the source-story reference. For each lens, explain why it fits and what evidence would falsify it.
5. Use the domain adapters to name the domain-specific evidence lanes and output checks.
6. Translate each lens into a legal, ethical, modern business move.
7. Run the strategy-analyst review loop:
   - Check lens fit against evidence, falsifiers, and source-story mechanism.
   - Identify ethical misuse risk and rewrite unsafe moves as detection, defense, compliance, or fair competition.
   - Force one alternative lens and one "do nothing / retreat" option when the situation is high stakes.
   - Add metrics and kill criteria before any recommendation.
8. Write the decision memo with a source/evidence ledger.

## References

- [Thirty-Six Stratagems source-story reference](./references/thirty-six-stratagems-source-stories.md)
- [Thirty-Six Stratagems matrix](../../references/thirty-six-stratagems-matrix.md)
- [Domain adapters](../../references/domain-adapters.md)
- [Market signal forensics](../../references/market-signal-forensics.md)
- [Strategy output template](../../references/strategy-output-template.md)
- [Consulting case validation corpus](../../references/consulting-case-validation-corpus.md)
- [Ethical use guardrails](../../references/ethical-use-guardrails.md)
- Public-domain Wikisource source: https://zh.wikisource.org/wiki/%E4%B8%89%E5%8D%81%E5%85%AD%E8%A8%88

## Decision Memo

```markdown
Decision
- Objective:
- Arena/domain:
- Time horizon:
- Recommendation:
- Confidence:

First-Principles Map
| Variable | Evidence | Interpretation | Missing / falsifier |
|---|---|---|---|
| Actors |  |  |  |
| Incentives |  |  |  |
| Constraints |  |  |  |
| Information |  |  |  |
| Timing |  |  |  |
| Feedback |  |  |  |
| Failure mode |  |  |  |

Selected Lenses
| Lens | Why it fits | Ethical business translation | Falsifier / misuse risk |
|---|---|---|---|
|  |  |  |  |

Strategy-Analyst Review
- Alternative lens:
- Do nothing / retreat option:
- Ethical rewrite:
- Kill criterion:

Evidence Ledger
| Source / artifact | Claim supported | Quality | Missing / next check |
|---|---|---|---|
|  |  |  |  |

Action Plan
1. First reversible move:
2. Sequence:
3. Owner:
4. Leading metric:
5. Stop condition:
```

## Guardrails

- Use only canonical Thirty-Six Stratagems names as lenses.
- Do not use invented or non-canonical labels as stratagem names.
- Do not present classical stratagems as moral permission. They are diagnostic analogies, not licenses for manipulation.
- Do not help execute fraud, market manipulation, deception against customers, harassment, coercion, illegal conduct, covert access, impersonation, sexual/romantic manipulation, self-harm, or public shaming.
- For harmful requests, reframe toward detection, defense, compliance, truthful growth, or ethical alternatives.
- Trading and crypto outputs are analytical only, not financial advice.
