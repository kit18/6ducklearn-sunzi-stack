---
name: sunzi-contingency
version: 1.0.0
description: Use when a chosen plan needs its adaptation layer before launch — the triggers that change the plan mid-flight, the kill criteria that stop it, the roads deliberately not taken (九變), and the blended gain-and-harm view that keeps a committed team from marrying its own plan.
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - WebSearch
  - AskUserQuestion
triggers:
  - what if it goes wrong
  - plan b
  - kill criteria
  - when do we adapt
  - contingency plan
  - 九變
---

# Sunzi Contingency (九變)

The contingency planner. A plan is a bet on a snapshot; this skill builds the
layer that keeps it alive when the snapshot ages — named triggers, pre-agreed
adaptations, kill criteria with owners, and the list of things the campaign
will *not* do no matter how tempting they become mid-fight.

## When to invoke this skill

- A maneuver is designed (`maneuver-brief.md` exists) and launch is near —
  this skill runs before `strategy-analyst-review` signs off.
- A live campaign is drifting and nobody can say which signal would have
  triggered a change, because none were set.
- The team is deep in sunk-cost country and needs the pre-agreed exits it
  should have written at launch (write them now; late is better than never).

## When NOT to invoke this skill

- The plan itself isn't chosen yet → maneuver tier upstream.
- The change being considered is irreversible → `/sunzi-restraint` gates it.
- Post-campaign learning → `/sunzi-retro`.

## Not sure this is your stage?

If you cannot tell which stage your question belongs to, invoke
`sunzi-strategy-consultant` instead — it triages, dispatches, and carries the
artifacts. Running this skill alone is also a supported, first-class use; you
do not have to run the whole loop to get value from one stage.

## Canonical grounding

九變篇 — the chapter of variations — first names the deliberate refusals:

> 途有所不由，軍有所不擊，城有所不攻，地有所不爭，君命有所不受。

Roads not taken, forces not attacked, cities not besieged, ground not
contested, orders not obeyed. Strategy is defined as much by pre-committed
refusals as by moves — the refusals are what keep a mid-campaign temptation
from becoming a mid-campaign disaster.

Then the doctrine of blended sight:

> 是故智者之慮，必雜於利害。雜於利而務可信也，雜於害而患可解也。

The wise deliberation always blends gain and harm: seeing the harm inside the
opportunity keeps commitments credible; seeing the gain inside the threat
keeps problems solvable. A contingency layer built only from fear (all harm)
or only from confidence (all gain) fails this test.

And the preparation standard:

> 故用兵之法：無恃其不來，恃吾有以待之；無恃其不攻，恃吾有所不可攻也。

Do not rely on the rival not coming; rely on being ready. Contingency is not
pessimism — it is the substance of readiness.

## Forcing questions

1. **What are the three most likely ways this plan meets reality and loses?**
   Concrete scenarios, not categories — pull from the scorecard's 爭/不知
   rows and the wedge's falsifiers.
2. **For each: what early signal arrives first, and who is watching it?** A
   trigger nobody owns is a post-mortem exhibit.
3. **What adaptation is pre-agreed per trigger?** Decided now, while calm —
   mid-campaign is when judgment is most expensive and worst.
4. **What are the refusals (所不)** — the roads this campaign will not take
   even if they open invitingly? Price floors you won't breach, segments you
   won't chase, claims you won't make, the rival provocation you won't answer
   (from `/sunzi-command`'s watch-list).
5. **What kills the campaign entirely, who calls it, and what survives?**
   The kill criterion needs a number, an owner with authority to invoke it,
   and a demobilization sketch — what is kept, redeployed, or shut down.
6. **利害 blend: what is the harm inside the plan's best case, and the gain
   inside its worst?** Overwhelming success has its own failure modes
   (capacity, quality, attention); a killed campaign has salvage.

## Workflow

1. **Read the artifacts**: `maneuver-brief.md` (the plan and its stated kill
   criteria), `miaosuan-scorecard.md` (the 爭 and 不知 rows are the likeliest
   trigger sources), `command-assessment.md` (the watch-list becomes
   refusals), `window-assessment.md` (the window's closing event is always a
   trigger). Missing scorecard → foundation warning, proceed.
2. **Build the trigger table** (Q1–Q3): scenario → earliest signal → owner →
   pre-agreed adaptation → review cadence. Signals must be observable with
   current instrumentation, or the instrumentation gap is itself a finding.
3. **Write the refusals list** (Q4) — each with the temptation it forecloses
   and the reason it holds even mid-fight. 君命有所不受 applies: name any
   anticipated pressure from above that the refusal must survive, and get it
   pre-agreed now.
4. **Set the kill layer** (Q5): criterion with number, owner, invocation
   path, and the demobilization sketch. Cross-check against the unit
   economics gate's kill criterion if a money campaign — they must agree or
   the discrepancy is resolved here.
5. **Run the 利害 blend** (Q6) both directions and record it.
6. **Append to `maneuver-brief.md`** the contingency section. Route: any
   adaptation that is itself irreversible → tagged for `/sunzi-restraint` at
   invocation time, not at planning time. Then → `strategy-analyst-review`.

## Output

```markdown
# Maneuver Brief — 九變 Contingency Layer

Date: · Campaign: 
Foundation: [artifacts read] / ⚠ running without foundation audit

## Trigger Table
| Loss scenario | Earliest signal | Watcher (named) | Pre-agreed adaptation | Review cadence |
|---|---|---|---|---|

Instrumentation gaps: 

## Refusals (所不)
| Refusal | Temptation it forecloses | Holds against (incl. pressure from above) |
|---|---|---|

## Kill Layer
Kill criterion (number): · Agrees with economics gate: yes/no/resolved
Owner with authority: · Invocation path: 
Demobilization: kept / redeployed / shut down

## 利害 Blend
Harm inside the best case: 
Gain inside the worst case: 

## Route
Adaptations requiring /sunzi-restraint at invocation: [list / none]
→ strategy-analyst-review
```

## Hard rules

- **Every trigger has a named watcher and a pre-agreed adaptation.** Signals
  without owners and adaptations decided "when we get there" void the layer.
- **The refusals list is mandatory and non-empty.** A campaign with no 所不
  has not been thought about under temptation.
- Kill criteria carry numbers and owners with real authority; "leadership
  will assess" is not an owner.
- The kill criterion must agree with the unit-economics gate's kill criterion
  on money campaigns, or the run resolves the conflict explicitly.
- The 利害 blend runs both directions, every time.
- No new maneuvers here — adaptation of the chosen plan only; a "contingency"
  that is secretly a second campaign goes back up the tier.
- Lens discipline as everywhere: private screening, 1–3 or `None selected`.
- Foundation warning prints when the scorecard is absent.

## Anti-patterns

- **The confidence layer** — contingencies written as formalities because
  the plan "won't need them"; all 利, no 害.
- **The fear layer** — twelve triggers, no campaign; all 害, no 利.
- **Watcherless signals** — a beautiful trigger table that no one is assigned
  to read.
- **Mid-fight legislation** — adaptations invented during the crisis by
  whoever is loudest, because none were pre-agreed.
- **The immortal campaign** — kill criterion set, then re-set, then
  "temporarily suspended," because its owner reports to the campaign's
  sponsor.
- **Refusal amnesia** — the price floor breached in month two because the
  refusal existed in a doc nobody re-read; refusals need the same review
  cadence as triggers.
