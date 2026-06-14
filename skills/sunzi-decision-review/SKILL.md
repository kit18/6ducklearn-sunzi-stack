---
name: sunzi-decision-review
description: Use when reviewing everyday or professional decisions, negotiation choices, career moves, workplace conflict, resource tradeoffs, crisis response, defensive tactic detection, or whether to act, wait, prepare, or retreat where terrain, incentives, timing, status quo, and ethical restraint matter.
---

# Sunzi Decision Review

Use this skill when the user needs a decision, not an artifact. This is the root applied-use skill for daily life, work, career, negotiation, conflict, crisis, and opportunity choices.

Core rule: do not start with a stratagem. Start with the terrain, the status quo, the user's agency, and the cost of action versus inaction.

## Workflow

1. Define the decision: what must be decided, by whom, by when, and what happens if no decision is made.
2. Choose the mode: act, defend/detect, negotiate, wait/prepare, retreat/exit, or observe/learn.
3. Map terrain: actors, incentives, constraints, timing, information asymmetry, trust, relationship value, resources, and status quo.
4. Identify the user's agency: what they can do, request, verify, refuse, delay, delegate, or exit.
5. State the ethical line: no coercion, deception, harassment, hidden terms, impersonation, or trust-destroying tactic.
6. Run DoD calibration against the closest real-life case, especially `Personal Career Move Or Promotion Ask`, `Negotiation With Future Relationship Value`, or `Talent Retention And Motivation`.
7. Select 1 to 3 canonical Thirty-Six Stratagems lenses only if they clarify timing, leverage, defense, preparation, or retreat.
8. Generate options: direct move, indirect move, alliance/help move, wait/prepare move, and retreat/exit move.
9. Run `strategy-analyst-review`: evidence quality, alternate diagnosis, misuse risk, second-order effect, stop rule, and kill criterion.
10. Recommend one small next move with a trigger to continue, stop, or change course.

## References

- [Applied use case map](../../references/applied-use-case-map.md)
- [Real-life DoD case map](../../references/real-life-dod-case-map.md)
- [Thirty-Six Stratagems matrix](../../references/thirty-six-stratagems-matrix.md)
- [Ethical strategy guardrails](../../references/ethical-strategy-guardrails.md)
- [Ethical use guardrails](../../references/ethical-use-guardrails.md)

## Output

```markdown
Verdict: act / negotiate / wait / defend / retreat / observe
Confidence:

Decision
- Decision needed:
- Deadline:
- Default if no action:
- Stakes:

Mode And Terrain
| Area | Evidence | Interpretation | Missing / falsifier |
|---|---|---|---|
| Status quo |  |  |  |
| Actors |  |  |  |
| Incentives |  |  |  |
| Constraints |  |  |  |
| Timing |  |  |  |
| Information asymmetry |  |  |  |
| Trust / relationship value |  |  |  |
| User agency |  |  |  |

Selected Lenses
| Lens | What it reveals | Ethical translation | Falsifier / misuse risk |
|---|---|---|---|

DoD Calibration
- Closest case:
- Source anchor:
- Definition Of Done gap:
- Stakeholder Reaction to rehearse:
- Evidence Needed Next:

Options
| Option | When it fits | Cost | Risk | Stop rule |
|---|---|---|---|---|
| Direct move |  |  |  |  |
| Indirect move |  |  |  |  |
| Alliance/help move |  |  |  |  |
| Wait/prepare move |  |  |  |  |
| Retreat/exit move |  |  |  |  |

Recommendation
- Next move:
- Exact ask or action:
- Leading signal:
- Guardrail:
- Retreat trigger:
```

## Hard Rules

- Do not coach romantic or sexual manipulation, coercion, harassment, public shaming, impersonation, fraud, false evidence, market manipulation, or covert access.
- Do not frame another person as an enemy when the real goal is cooperation, repair, learning, or boundary-setting.
- Do not approve a move that would destroy trust if disclosed.
- If the user is under pressure or possible manipulation, prioritize detection, documentation, support, boundaries, and safe exit over counter-manipulation.
- Trading, investing, legal, medical, and employment-law-sensitive outputs are analytical only and need appropriate professional judgment.
