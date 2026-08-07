---
name: sunzi-timing
version: 1.0.2
description: Use when the question is when, not whether — whether a market window is open, how long it stays open, what the cost of waiting is, whether urgency is real or manufactured by runway, and whether the right move is to strike now, prepare and wait (以逸待勞), or accept being late; the 天 examination behind every "why now?".
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - WebSearch
  - AskUserQuestion
triggers:
  - is now the right time
  - why now
  - should we wait
  - are we too late
  - is the window closing
  - timing check
  - 以逸待勞
---

# Sunzi Timing (天)

The cycle reader. 天 is the factor you do not control — technology cycles,
capital climate, regulation, macro weather — and therefore the factor most
often lied about, because "the window is now" is the easiest claim to make
and the most expensive to be wrong about. This skill separates the state of
the sky from the state of your runway.

## When to invoke this skill

- A plan contains the words "now or never," "land grab," "window," or
  "first-mover" and nobody has evidenced the clock.
- Deciding between moving now and preparing to move — the 以逸待勞 question.
- A wave is visibly forming (technology shift, regulatory change, category
  unlock) and the question is whether it is yours to ride.
- Post-hoc suspicion: the team keeps declaring urgency, and someone should
  check whether the urgency lives in the market or in the burn rate.
- A 五事 audit is underway and the 天 artifact (`window-assessment.md`) is
  the missing input.

## When NOT to invoke this skill

- The ground, not the clock, is the question → `/sunzi-terrain`. (This skill
  owns *when*; terrain owns *where*. 天地孰得 in the count reads both.)
- Whether you can afford to wait — the arithmetic of runway — is computed in
  `/sunzi-method`; this skill *consumes* that number to test urgency claims.
- The decision is whether to fight at all → `/sunzi-compare`.
- Choosing the maneuver once timing is known → maneuver tier.

## Not sure this is your stage?

If you cannot tell which stage your question belongs to, invoke
`sunzi-strategy-consultant` instead — it triages, dispatches, and carries the
artifacts. Running this skill alone is also a supported, first-class use; you
do not have to run the whole loop to get value from one stage.

## Canonical grounding

始計篇 defines the factor:

> 天者，陰陽、寒暑、時制也。

Cycles, seasons, and constraints of time — conditions that act on every player
and answer to none. The modern sky: technology maturity curves, interest-rate
and capital cycles, regulatory calendars, platform policy shifts, cultural
attention.

兵勢篇 supplies the strike condition:

> 是故善戰者，其勢險，其節短。勢如彍弩，節如發機。

The able strategist's momentum is intense and the release is short — energy
like a drawn crossbow, timing like the trigger. A window strategy has both a
*draw* (preparation while waiting) and a *release* (the short moment of
commitment); most timing failures are a release with no draw, or a draw that
never releases.

軍爭篇 warns about the race itself:

> 舉軍而爭利，則不及；委軍而爭利，則輜重捐。

Race with everything and you arrive too late; race light and you abandon your
supply train. Chasing a window can cost the logistics that make arriving
worthwhile — the check that "land grab" plans systematically skip.

## Modes

| Mode | When | What changes |
|---|---|---|
| **WINDOW SCAN** | Standing question: what windows exist for us? | Surveys the cycles acting on the arena; names each window, its opener, its closer, and whose window it structurally is |
| **以逸待勞 WAIT** | The move is real but the moment may not be | Designs the *prepared wait*: what to build while waiting, the trigger that converts waiting into striking, and the cost meter on the wait |
| **STRIKE NOW** | Someone claims the window is open and closing | Adversarially tests the urgency claim; if it survives, states the release plan and its 節 (the short commitment moment) |
| **ALREADY LATE** | The window looks closed | Tests whether late entry has a different game (second-mover economics, consolidation, picks-and-shovels) or whether the honest answer is "this one is gone" |

## Forcing questions

1. **What must be true about the world for this to work — and is it true
   *yet*?** List the enabling conditions and evidence each one, separately.
   "AI makes this possible now" is three claims wearing one sentence.
2. **What is the cost of waiting one more quarter — in currency, not vibes?**
   Lost accounts, closed channel, rival lock-in: named and priced, or the
   urgency is unevidenced.
3. **Who else can see this window, and what is their lead time?** A window
   visible to a faster rival is their window with your name on the pitch deck.
4. **What event closes this window?** A window with no closing event is not a
   window; it is a market, and markets reward preparation over haste.
5. **Is the urgency real, or is it your runway?** The question that matters
   most. Most "we must move now" is a financing constraint wearing a
   market-timing costume — and 天 is precisely the factor that does not care
   about your runway. Check the claimed close date against the cash-out date
   from `operating-model.md`; if they suspiciously agree, say so.
6. **If you wait, what are you building while waiting?** 以逸待勞 is a
   *prepared* wait — waiting without a draw is just being slow.

## Workflow

1. **Read the memory first.** `miaosuan-recalibration.md` if present (timing
   misjudgments are the most common recalibration finding), then
   `terrain-survey.md` (which ground the window opens onto) and
   `operating-model.md` (runway, for forcing Q5). List artifacts found and
   missing.
2. **Fix the decision** the timing verdict gates, and select the mode.
3. **Run the forcing questions.** Use `WebSearch` for the sky: regulatory
   calendars, platform policy announcements, funding-cycle data, technology
   benchmark trajectories. Use `AskUserQuestion` when the claimed window and
   the claimed decision don't obviously connect.
4. **Decompose the window claim** into enabling conditions (forcing Q1),
   each with evidence tier and a falsifier. Mark the conditions that are
   *trends* (moving your way) versus *thresholds* (already crossed) — windows
   built entirely on trends are forecasts, not windows.
5. **Price the wait and the haste.** Cost of one more quarter (Q2) against
   the 軍爭 check: what supply train does moving now abandon? Both numbers in
   the artifact.
6. **Run the runway test** (Q5) explicitly and record the answer, including
   the uncomfortable case.
7. **In WAIT mode**: design the draw — capabilities built during the wait,
   the named trigger event that releases, the review cadence on the trigger,
   and the wait's kill criterion (the date or signal at which waiting is
   declared to have been the wrong call).
8. **In ALREADY LATE mode**: state the different late game if one exists,
   with its own economics — or state plainly that the window is gone and
   route the ambition elsewhere. Late entry priced as early entry is the
   most expensive purchase in strategy.
9. **Write the artifact** `window-assessment.md`. `/sunzi-compare` reads it
   for row 3 (天地孰得); `/sunzi-retro` diffs claimed windows against what
   actually happened — timing claims are the most falsifiable thing in the
   pack, and the retro holds them to it.
10. **Route.** Verdict strike → `/sunzi-compare` before commitment. Verdict
    wait → the draw plan plus a scheduled re-run. Verdict late-different-game
    → `/sunzi-terrain` for the new ground. Urgency exposed as runway →
    `/sunzi-method` and an honest conversation, not a campaign.

## Output

```markdown
# Window Assessment (天)

Date: · Decision gated: · Mode:
Foundation artifacts read: [list] / none

## The Window Claim
Claimed window: 
Opens because: · Closes when/because: 
Whose window is it structurally: 

## Enabling Conditions
| Condition | Trend or threshold | Evidence (tier) | Falsifier |
|---|---|---|---|

## The Two Prices
Cost of waiting one quarter: $ / [named losses]
Cost of hasty entry (abandoned supply train): 

## The Runway Test
Claimed close date: · Cash-out date: 
Verdict on urgency: market-real / partially runway / runway wearing a costume

## Rival Clocks
| Who else sees it | Their lead time | Their likely release |
|---|---|---|

## Mode-specific
[WAIT: the draw / trigger event / review cadence / wait kill criterion]
[STRIKE: release plan / 節 — the short commitment moment]
[LATE: the different late game and its economics, or "gone"]

## Verdict
Timing: strike / prepared wait / late-different-game / gone / insufficient evidence
Confidence: 
Needed next: 
```


## Asking the user

This skill's forcing questions may need a direct answer. Use `AskUserQuestion`
when the host provides it; when it does not — Codex, OpenCode, Cursor, headless
runs — ask in prose and end the turn rather than guessing, and in genuinely
non-interactive runs proceed under a header-stated assumption with confidence
capped at medium. Full protocol and the decisions that may never be assumed:
[Interactive questioning and fallback](../../references/interactive-questioning.md).

## Hard rules

- **The runway test runs in every mode**, and its answer is recorded even
  when — especially when — it is uncomfortable. Urgency claims that trace to
  burn are reported as such, plainly.
- A window requires a *closing event*. No closer named → the output says
  "market, not window" and the urgency framing is corrected.
- Enabling conditions are evidenced one by one; compound claims are split
  before scoring.
- Waiting verdicts must include the draw (what gets built) and the wait's
  kill criterion. An unpriced, unbounded wait is not 以逸待勞; it is drift.
- Cost of waiting and cost of haste are both priced. One-sided timing
  analysis is advocacy.
- No stratagem lenses; diagnosis only. (勢 informs the strike condition; the
  lens screening still belongs downstream.)
- The artifact write is not optional. No `window-assessment.md`, no
  completed run.

## Anti-patterns

- **Runway cosplay** — the burn rate dressed as a market window; the two
  dates agreeing to the month and nobody remarking on it.
- **The windowless window** — urgency with no closing event, sustained for
  six consecutive quarters.
- **Trend-stacking** — five "moving our way" curves presented as an open
  window when zero thresholds have actually been crossed.
- **The unprepared wait** — deciding to wait and building nothing, so the
  trigger arrives and finds the crossbow undrawn.
- **Late entry at early prices** — paying land-grab CAC in a consolidated
  market because the deck was written two years ago.
- **Weather-blaming** — recording every miss as bad timing in the retro when
  the window assessment predicted exactly this and was overridden.
