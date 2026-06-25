---
name: strategic-situation-analysis
description: Use when diagnosing strategic business, market, trading, growth, ecommerce, macro, operations, or competitive situations where incentives, constraints, timing, deception risk, evidence quality, or second-order effects matter.
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
4. Privately screen modern methods from the Modern Strategy Method Library after the first-principles map, not before evidence. Output a short `Modern Strategy Frame` only when 1 to 2 selected methods materially improve the diagnosis.
5. Select 2 to 4 canonical lenses from the source-story reference. For each lens, explain why it fits and what evidence would falsify it.
6. Use the domain adapters to name the domain-specific evidence lanes and output checks.
7. If the user needs an everyday/professional choice rather than a business artifact, route through `sunzi-decision-review`.
8. If the user needs synthetic stakeholder reaction artifacts, route through `sunzi-stakeholder-ssr`.
9. If the user is reviewing a growth plan, SOP/runbook, or PRD/product contract, route the artifact through `sunzi-growth-review`, `sunzi-operations-sop-review`, or `sunzi-prd-review`.
10. Translate each lens into a legal, ethical, modern business move.
11. Run the strategy-analyst review loop:
   - Check lens fit against evidence, falsifiers, and source-story mechanism.
   - Check modern method fit against evidence and reject template theater.
   - Identify ethical misuse risk and rewrite unsafe moves as detection, defense, compliance, or fair competition.
   - Force one alternative lens and one "do nothing / retreat" option when the situation is high stakes.
   - Add metrics and kill criteria before any recommendation.
12. Write the decision memo with a source/evidence ledger.

## References

- [Thirty-Six Stratagems source-story reference](./references/thirty-six-stratagems-source-stories.md)
- [Thirty-Six Stratagems matrix](../../references/thirty-six-stratagems-matrix.md)
- [Applied use case map](../../references/applied-use-case-map.md)
- [Stakeholder Stress-Reaction Simulation](../../references/stakeholder-stress-reaction.md)
- [SSR evaluation scenarios](../../references/ssr-evaluation-scenarios.md)
- [Domain adapters](../../references/domain-adapters.md)
- [Domain review contracts](../../references/domain-review-contracts.md)
- [Market signal forensics](../../references/market-signal-forensics.md)
- [Strategy output template](../../references/strategy-output-template.md)
- [Consulting case validation corpus](../../references/consulting-case-validation-corpus.md)
- [Ethical use guardrails](../../references/ethical-use-guardrails.md)
- [Modern Strategy Method Library](../../references/modern-strategy-method-library.md)
- Public-domain Wikisource source: https://zh.wikisource.org/wiki/%E4%B8%89%E5%8D%81%E5%85%AD%E8%A8%88

## Decision Memo

```markdown
Decision
- Objective:
- Arena/domain:
- Time horizon:
- Recommendation:
- Confidence:

Modern Strategy Frame (optional, evidence-gated)
Include only when 1 to 2 methods change the recommendation, metric, or stop / retreat trigger.
- Method selected:
- Strategic tension:
- Governing choice:
- Proof signal:
- Stop / retreat trigger:

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
- Do not dump modern frameworks. Privately screen methods and output only 1 to 2 that materially improve the diagnosis.
- Modern business books are bibliographic anchors only; do not reproduce copyrighted text, chapter summaries, distinctive tables, or author-specific phrasing.
- Do not use invented or non-canonical labels as stratagem names.
- Do not present classical stratagems as moral permission. They are diagnostic analogies, not licenses for manipulation.
- Do not help execute fraud, market manipulation, deception against customers, harassment, coercion, illegal conduct, covert access, impersonation, sexual/romantic manipulation, self-harm, or public shaming.
- For harmful requests, reframe toward detection, defense, compliance, truthful growth, or ethical alternatives.
- Trading and crypto outputs are analytical only, not financial advice.
