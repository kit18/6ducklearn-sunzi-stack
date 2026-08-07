---
name: sunzi-decision-review
description: Use when reviewing everyday or professional decisions, negotiation choices, career moves, workplace conflict, resource tradeoffs, crisis response, defensive tactic detection, or whether to act, wait, prepare, or retreat where terrain, incentives, timing, status quo, and ethical restraint matter.
version: 1.0.2
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - WebSearch
  - AskUserQuestion
triggers:
  - should I take this
  - how do I handle this conversation
  - should I wait or act
  - how should I respond
  - someone is pressuring me
---

# Sunzi Decision Review

Use this skill when the user needs a decision, not an artifact. This is the root applied-use skill for daily life, work, career, negotiation, conflict, crisis, and opportunity choices.

Core rule: do not start with a stratagem. Start with the terrain, the status quo, the user's agency, and the cost of action versus inaction.

## When NOT to invoke this skill

- The decision is a company-level campaign with a rival and a market → the 五事 skills and `sunzi-compare`.
- The question is whether the org can execute or afford it → `sunzi-method`.
- The move is irreversible and organizational (litigation, layoffs, price war) → `sunzi-restraint`.

## Not sure this is your stage?

If you cannot tell which stage your question belongs to, invoke
`sunzi-strategy-consultant` instead — it triages, dispatches, and carries the
artifacts. Running this skill alone is also a supported, first-class use; you
do not have to run the whole loop to get value from one stage.

## Workflow

1. Define the decision: what must be decided, by whom, by when, and what happens if no decision is made.
2. Choose the mode: act, defend/detect, negotiate, wait/prepare, retreat/exit, or observe/learn.
3. Map terrain: actors, incentives, constraints, timing, information asymmetry, trust, relationship value, resources, and status quo.
4. Identify the user's agency: what they can do, request, verify, refuse, delay, delegate, or exit.
5. State the ethical line: no coercion, deception, harassment, hidden terms, impersonation, or trust-destroying tactic.
6. Run DoD calibration against the closest real-life case, especially `Personal Career Move Or Promotion Ask`, `Negotiation With Future Relationship Value`, or `Talent Retention And Motivation`.
7. Privately screen the full canonical Thirty-Six Stratagems matrix as a candidate library against the decision mode, terrain, user agency, timing, trust risk, and retreat / stop-rule need. Do not show the screening, rejected lenses, scores, or full matrix. Output only 1 to 3 lenses whose mechanism materially improves the decision options; if no lens improves the analysis, say `None selected`.
8. Translate each selected lens into an ethical decision move with a falsifier and misuse risk. Do not reward clever name matching.
9. Generate options: direct move, indirect move, alliance/help move, wait/prepare move, and retreat/exit move.
10. Run `strategy-analyst-review`: evidence quality, alternate diagnosis, misuse risk, second-order effect, stop rule, and kill criterion.
11. Recommend one small next move with a trigger to continue, stop, or change course.

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


## Asking the user

This skill's forcing questions may need a direct answer. Use `AskUserQuestion`
when the host provides it; when it does not — Codex, OpenCode, Cursor, headless
runs — ask in prose and end the turn rather than guessing, and in genuinely
non-interactive runs proceed under a header-stated assumption with confidence
capped at medium. Full protocol and the decisions that may never be assumed:
[Interactive questioning and fallback](../../references/interactive-questioning.md).

## Hard Rules

- Do not coach romantic or sexual manipulation, coercion, harassment, public shaming, impersonation, fraud, false evidence, market manipulation, or covert access.
- Do not frame another person as an enemy when the real goal is cooperation, repair, learning, or boundary-setting.
- Do not approve a move that would destroy trust if disclosed.
- Never output a checklist of all 36 stratagems, rejected lenses, or an internal screening table. Lenses are optional diagnostic analogies, secondary to terrain, user agency, ethical line, options, evidence, and retreat trigger.
- If the user is under pressure or possible manipulation, prioritize detection, documentation, support, boundaries, and safe exit over counter-manipulation.
- Trading, investing, legal, medical, and employment-law-sensitive outputs are analytical only and need appropriate professional judgment.
