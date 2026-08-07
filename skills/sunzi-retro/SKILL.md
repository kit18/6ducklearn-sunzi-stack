---
name: sunzi-retro
version: 1.0.2
description: Use after a campaign, launch, negotiation, or quarter ends — or when one visibly diverges from plan — to re-score the seven comparisons against what actually happened, diff the prediction against reality, and record which factor was misjudged so the next count starts smarter; the 省 stage that makes the pack compound.
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - AskUserQuestion
triggers:
  - campaign retro
  - what did we get wrong
  - re-score after the launch
  - strategy post-mortem
  - recalibrate
  - 校計
---

# Sunzi Retro (省)

The recalibrator. A pipeline without a reflect stage never learns; this skill
closes the loop by holding the pack's own artifacts to account. It re-runs
the seven comparisons against what contact with reality revealed, diffs the
two scorecards, and writes the recalibration that the *next* campaign's
`/sunzi-compare` reads first — compounding memory, done with plain files.

## When to invoke this skill

- A campaign ended: launched, won, lost, killed, or quietly faded.
- A quarter closed on a plan the pack's artifacts gated.
- A live campaign has diverged enough that the original scorecard reads like
  someone else's company — recalibrate mid-flight rather than at the wake.
- A kill criterion fired (or should have and didn't) — both cases are
  first-class retro material.

## When NOT to invoke this skill

- Pre-commitment challenge of a plan → `strategy-analyst-review`.
- The campaign is fine and someone wants reassurance → no skill for that.
- Adapting the live plan to a trigger → `/sunzi-contingency` owns the
  adaptation; this skill records what the trigger's firing *taught*.

## Not sure this is your stage?

If you cannot tell which stage your question belongs to, invoke
`sunzi-strategy-consultant` instead — it triages, dispatches, and carries the
artifacts. Running this skill alone is also a supported, first-class use; you
do not have to run the whole loop to get value from one stage.

## Canonical grounding

虛實篇:

> 夫兵形象水 … 兵無常勢，水無常形。能因敵變化而取勝者，謂之神。

Forces have no constant disposition, as water has no constant shape; the
ability to adjust to the other side's changes is the highest skill. The map
must be redrawn after every engagement — not because the map was bad, but
because the engagement changed the territory.

And the standard the retro holds the original count to — 始計篇:

> 多算勝，少算不勝。

The count predicted. Reality voted. The retro measures the gap, row by row,
because a count that is never checked against outcomes becomes a ritual.

## Modes

| Mode | When | What changes |
|---|---|---|
| **FULL 校計** | Campaign or quarter ended | All seven rows re-scored from outcomes; full diff; lens audit; doctrine notes |
| **MID-FLIGHT** | Live campaign diverging from its scorecard | Only the diverged rows re-scored; feeds `/sunzi-contingency` triggers rather than closing the campaign |
| **KILL REVIEW** | A kill criterion fired, or should have and didn't | Focused on the kill layer: was the number right, did the owner invoke it, what did the delay or the firing cost |

## Forcing questions

1. **What did the original scorecard predict, row by row — and what
   happened?** Pull the artifact; memory of the prediction is not the
   prediction. No original scorecard → the retro's first finding is that the
   campaign ran uncounted, and it reconstructs a best-effort baseline
   labeled as reconstruction.
2. **Which 事 was misjudged, and in which direction?** 道/天/地/將/法 — the
   diff usually concentrates in one or two factors; name them.
3. **Was the misjudgment in the evidence or the reading?** Wrong data, or
   right data wrongly weighed? The fix differs: collection discipline
   (`/sunzi-intelligence`) vs. scoring discipline (`/sunzi-compare`).
4. **Which selected lenses earned their place, and which were decoration?**
   A lens earned its place if removing it would have changed the move.
   Decoration is recorded so the screening tightens.
5. **Did the refusals hold, and did the triggers fire in time?** The
   contingency layer gets audited too: refusals breached, signals missed,
   adaptations that were legislated mid-fight.
6. **What does the next count inherit?** The one-paragraph version a future
   `/sunzi-compare` reads first: the standing correction ("we overrate our
   法 by one grade under deadline pressure"), not the war story.

## Workflow

1. **Gather the artifact trail**: `miaosuan-scorecard.md`, `maneuver-brief.md`
   (ladder, wedge, contingency, restraint sections), `terrain-survey.md`,
   `window-assessment.md`, `mandate-audit.md`, `command-assessment.md`,
   `operating-model.md`, `intelligence-brief.md` — whichever exist. Also any
   prior `miaosuan-recalibration.md`: the retro checks whether its own past
   corrections were absorbed or ignored.
2. **Select the mode**; `AskUserQuestion` if the campaign's end state is
   itself disputed (it often is).
3. **Re-score the seven rows** from outcomes, same 勝/負/爭/不知 labels, and
   build the diff table: predicted vs. actual, with the misjudged 事 and the
   evidence-vs-reading attribution (Q2–Q3).
4. **Audit the lenses** (Q4) and **audit the contingency layer** (Q5).
5. **Audit the timing claims** — `window-assessment.md` made the pack's most
   falsifiable predictions (closing events, rival clocks, the runway test);
   score them explicitly. Weather-blaming is checked here: a miss the
   assessment predicted and was overridden on is an override finding, not a
   timing finding.
6. **Write the inheritance** (Q6): standing corrections, at most three —
   corrections nobody can hold in mind don't correct anything.
7. **Write the artifact** `miaosuan-recalibration.md`: the diff, the
   attributions, the lens audit, the inheritance. Date-stamped; prior
   recalibrations are appended to, not overwritten — the drift across
   retros is itself signal.
8. **Route.** Evidence-class misjudgments → `/sunzi-intelligence` gets the
   collection gap. Reading-class → the owning 事 skill's next run cites the
   correction. Kill-layer failures → `/sunzi-contingency` and, where the
   owner didn't invoke, `/sunzi-command`.

## Output

```markdown
# 廟算 Recalibration (省) — miaosuan-recalibration.md

Date: · Campaign: · Mode: 
Original scorecard: [date] / ⚠ none — campaign ran uncounted; baseline reconstructed
Prior recalibrations absorbed: yes / partially / ignored

## The Diff
| # | 計 | Predicted | Actual | Misjudged 事 | Evidence or reading? |
|---|---|---|---|---|---|

## Lens Audit
| Lens selected | Earned / decoration | Would its removal have changed the move? |
|---|---|---|

## Contingency Audit
Refusals held: · Triggers fired in time: 
Kill layer: correct number / wrong number / right number, not invoked

## Timing Audit
| Claim (from window-assessment) | Outcome | Overridden? |
|---|---|---|

## Inheritance (max 3 standing corrections)
1. 
2. 
3. 

## Route
Collection gaps → intelligence: · Reading corrections → [事 skill]: 
```


## Asking the user

This skill's forcing questions may need a direct answer. Use `AskUserQuestion`
when the host provides it; when it does not — Codex, OpenCode, Cursor, headless
runs — ask in prose and end the turn rather than guessing, and in genuinely
non-interactive runs proceed under a header-stated assumption with confidence
capped at medium. Full protocol and the decisions that may never be assumed:
[Interactive questioning and fallback](../../references/interactive-questioning.md).

## Hard rules

- **The diff runs against the written artifact, never against memory.** If
  no artifact exists, that absence is the lead finding and the baseline is
  labeled a reconstruction.
- Every misjudgment gets the evidence-vs-reading attribution — the two
  failure classes have different owners and different fixes.
- The lens audit is mandatory. Decoration recorded without blame; screening
  discipline is the point, not embarrassment.
- The inheritance is capped at three corrections and written for a reader
  who wasn't there.
- Recalibrations append; they never overwrite. The file is the pack's
  memory, and memory that rewrites itself is not memory.
- Overridden predictions are scored as overrides, not as model failures —
  and repeated overrides of correct predictions are named as the pattern
  they are.
- No new strategy here. The retro learns; it does not plan the next
  campaign in the epilogue.

## Anti-patterns

- **The victory lap** — retro run only on wins, scored by outcome instead
  of prediction quality; a lucky win with a wrong count is a *negative*
  finding.
- **Memory diffing** — "we basically expected this" against a scorecard
  nobody re-opened.
- **The scapegoat 事** — every miss attributed to 天 (bad timing, bad
  market) because the other four factors have names attached.
- **Inheritance inflation** — eleven lessons learned, none of which the
  next count will read.
- **Retro theater** — the recalibration written, filed, and never read;
  checked structurally: the next scorecard's header line `Prior
  recalibration read:` is this skill's real success metric.
