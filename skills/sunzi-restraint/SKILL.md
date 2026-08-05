---
name: sunzi-restraint
version: 1.0.0
description: Use before any irreversible or escalatory move is approved — price wars, litigation, layoffs, public attacks, burning a partnership, betting the company — the 火攻 gate that tests the move against anger, profit, necessity, and the fact that some destroyed things do not come back.
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - WebSearch
  - AskUserQuestion
triggers:
  - should we go to war over this
  - thinking about suing
  - want to hit back
  - burn the bridge
  - point of no return
  - 非利不動
---

# Sunzi Restraint (火攻)

The restraint officer. Fire, in the canon, is the weapon that cannot be
recalled — and 火攻篇 is the only chapter that is primarily a warning. This
skill is the mandatory gate between a campaign and its irreversible moves:
the class of decisions where being wrong is not expensive but *permanent*.

## When to invoke this skill

Mandatory before approving any move on the irreversible list:

- Price wars and public discount escalations (price levels rarely recover).
- Litigation against a rival, partner, or former employee.
- Layoffs and public restructurings.
- Public attacks: naming a rival in negative campaigns, public feuds.
- Burning a platform, channel, or partnership relationship.
- Bet-the-company commitments: all-in pivots, covenant-heavy financing,
  exclusive lock-ins.
- Any maneuver-brief item tagged `restraint required` by an upstream skill.

Also: when a leader is angry and a decision is imminent — this skill exists
for exactly that afternoon.

## When NOT to invoke this skill

- Reversible moves — the rest of the pack handles them; over-gating
  everything teaches the team to route around the gate.
- Designing the move itself → maneuver tier upstream.
- Assessing whether the leader is *prone* to provoked moves → `/sunzi-command`
  (whose watch-list this skill reads).

## Not sure this is your stage?

If you cannot tell which stage your question belongs to, invoke
`sunzi-strategy-consultant` instead — it triages, dispatches, and carries the
artifacts. Running this skill alone is also a supported, first-class use; you
do not have to run the whole loop to get value from one stage.

## Canonical grounding

火攻篇 ends the chapter — and effectively the book's operational teaching —
with the gate:

> 非利不動，非得不用，非危不戰。
> 主不可以怒而興師，將不可以慍而致戰。
> 怒可以復喜，慍可以復悅；亡國不可以復存，死者不可以復生。

No move without gain; no deployment without prospect of success; no battle
except in danger. A ruler must not launch from anger, a commander must not
fight from resentment — anger returns to joy, resentment to cheer, but a
destroyed state does not return to existence, and the dead do not return to
life. The asymmetry is the entire argument: emotions are reversible, and the
moves they trigger are not.

And the standard of the completed check:

> 明主慮之，良將修之。非利不動。

The enlightened leader deliberates it; the able commander executes the
discipline.

## The four tests

Every gated move passes all four, in writing, or does not proceed:

| Test | Canonical | Question | Failure looks like |
|---|---|---|---|
| **Anger test** | 主不可以怒而興師 | Would this move still be chosen by a calm decision-maker three weeks from now? What specifically happened in the last 30 days that put it on the table? | The move's timeline traces to a provocation, not a strategy |
| **Profit test** | 非利不動 | What is the computed gain if it works — and does it exceed the full cost including the irreversible part? | Gain is expressed as satisfaction, "sending a message," or deterrence with no mechanism |
| **Necessity test** | 非得不用 · 攻城之法為不得已 | Has every reversible alternative been priced? (The 謀攻 ladder run for this specific move.) | Alternatives dismissed in a sentence; the irreversible version preferred *because* it is dramatic |
| **Survival test** | 非危不戰 · 亡國不可以復存 | If this goes wrong, does the company survive the failure mode? Name what cannot be rebuilt: the relationship, the price level, the reputation, the team's trust | The worst case has never been written down, only the best case |

## Forcing questions

1. **What exactly is irreversible here?** Name the thing that does not come
   back. If nothing — this move doesn't need the gate; route back.
2. **Run the four tests** (above), each answered in writing with evidence.
3. **Whose 危 is driving this?** Check `command-assessment.md`'s watch-list:
   is this move a known bait shape for this leader (忿速可侮)? If the rival
   engineered the provocation, responding is their plan working.
4. **What does the counterpart do next?** The move's second order: litigation
   invites counterclaims and discovery; price wars invite matching; public
   attacks invite archives. War-game one round further than the plan does —
   route to `sunzi-stakeholder-ssr` when the reaction model is load-bearing.
5. **What is the smallest irreversible commitment that achieves the gain?**
   If the profit test passes, can the same gain be bought with less
   permanence — a sealed demand letter before a public suit, a targeted
   price response before a general war?
6. **Who says no?** The named person with authority to stop this move, their
   independent read, and confirmation they were actually asked before the
   gate closes.

## Workflow

1. **Read the artifacts**: `maneuver-brief.md` (the move and its tag),
   `command-assessment.md` (watch-list), `miaosuan-scorecard.md`,
   `operating-model.md` (the survival test needs the balance sheet
   reality). Missing scorecard → foundation warning, proceed — but a missing
   *survival-test evidence base* blocks the gate outright.
2. **Confirm the move belongs here** (forcing Q1).
3. **Run the four tests** in order, in writing. The anger test includes the
   30-day provenance check; the necessity test includes a run of the 謀攻
   ladder scoped to this move; the survival test includes the named
   unrebuildables.
4. **Run the bait check and the second-order war-game** (Q3–Q4).
5. **Search for the smaller commitment** (Q5) and present it alongside.
6. **Verify the dissenting authority** (Q6) was consulted, by name.
7. **Issue the gate verdict** and append to `maneuver-brief.md`:
   `pass` / `pass-reduced` (the smaller commitment) / `hold` (a test
   failed; what would change it) / `refuse` (fails profit or survival —
   the gate does not approve moves whose failure the company does not
   survive for gains it cannot state).
8. **Route.** Pass → `strategy-analyst-review` for the final quality gate.
   Hold on the anger test → the calendar is the remedy: a named re-review
   date, not a workaround.

## Output

```markdown
# Restraint Gate (火攻)

Date: · Move gated: · Requested by: 
Foundation: [artifacts read] / ⚠ running without foundation audit

## What Is Irreversible
The thing that does not come back: 

## The Four Tests
| Test | Verdict | Evidence |
|---|---|---|
| Anger (30-day provenance) |  |  |
| Profit (computed gain vs full cost) |  |  |
| Necessity (ladder run for this move) |  |  |
| Survival (named unrebuildables; worst case written) |  |  |

## Bait Check
Watch-list match (from command-assessment): yes/no — [which 危]
If provoked: whose plan is this move executing? 

## Second Order
Counterpart's likely next move: 
One round further: 

## The Smaller Commitment
Available: yes/no — [what it is, what gain it preserves]

## Dissenting Authority
Named: · Consulted: yes/no · Their read: 

## Gate Verdict
pass / pass-reduced / hold (re-review date: ) / refuse
Reason: 
```

## Hard rules

- **All four tests, in writing, every time.** A verbal pass is not a pass.
- **The anger test's remedy is time, never expedited process.** A hold on
  anger sets a re-review date; the gate does not negotiate with urgency it
  cannot evidence (see `/sunzi-timing`'s runway test — anger and runway are
  the two great urgency counterfeiters).
- **Survival-test failure is a refuse, not a hold.** The gate does not
  approve moves whose failure the company does not survive — at any claimed
  upside. 亡國不可以復存 admits no expected-value override.
- The dissenting authority is consulted before the verdict, by name, and
  their read is recorded even when — especially when — it disagrees.
- The smaller commitment is always searched for and presented; the requester
  chooses, but never for lack of the option.
- This gate cannot be delegated downward or split into sub-approvals that
  each look reversible.
- No lenses here. The gate weighs; it does not scheme.

## Anti-patterns

- **Gate shopping** — re-asking the gate weekly until a hold erodes;
  re-reviews happen on the named date with named new evidence.
- **Message economics** — "sending a message" as the stated gain; messages
  have no computed value and the profit test knows it.
- **Retaliation dressed as strategy** — the 30-day provenance check exists
  because the answer is so often "their launch event."
- **Survival optimism** — the worst case sketched as "we'd take a hit"
  instead of named unrebuildables with the balance sheet consulted.
- **The salami** — one irreversible move served as six reversible-looking
  slices, each below the gate's radar.
- **Dissent theater** — the no-sayer chosen for reliability of their yes.
