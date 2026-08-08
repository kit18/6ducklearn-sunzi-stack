---
name: sunzi-find-the-wedge
version: 1.1.0
description: Use when the fight is chosen and the question is where — finding the point the incumbent structurally cannot defend without abandoning what makes them strong, splitting the plan into the orthodox holding line and the unexpected winning move (奇正), and making the rival respond to you rather than you to them.
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - WebSearch
  - AskUserQuestion
triggers:
  - where do we attack
  - find their weak point
  - where can they not follow us
  - what is our wedge
  - 避實擊虛
  - 以正合以奇勝
---

# Sunzi Find The Wedge (虛實)

The weakness finder. Once `/sunzi-win-without-fighting` has walked the ladder
and a direct contest is genuinely necessary, this skill locates the point of
contact: not where the rival is weak in general, but where their *strength
itself* prevents them from defending — the wedge that widens because closing
it would cost them their core.

## When to invoke this skill

- The 謀攻 ladder ended at 伐兵 and the point of attack must be chosen.
- A challenger position (from the scorecard) needs its flank: where the
  incumbent structurally cannot follow.
- The team is about to attack the rival's *strongest* surface out of pride or
  symmetry ("their flagship vs our flagship").
- A defensive read is needed: where is *your* structural 虛 — the wedge a
  challenger would drive into you?

## When NOT to invoke this skill

- The ladder hasn't been walked → `/sunzi-win-without-fighting` first.
- The weakness is unknown because the rival is unknown → `/sunzi-intelligence`.
- Position unknown → `/sunzi-compare`; the wedge's shape depends on it.

## Not sure this is your stage?

If you cannot tell which stage your question belongs to, invoke
`sunzi-strategy-consultant` instead — it triages, dispatches, and carries the
artifacts. Running this skill alone is also a supported, first-class use; you
do not have to run the whole loop to get value from one stage.

## Canonical grounding

虛實篇:

> 夫兵形象水，水之形避高而趨下，兵之形避實而擊虛。

Like water: avoid the solid, strike the empty. And the initiative doctrine
that makes wedges work:

> 凡先處戰地而待敵者佚，後處戰地而趨戰者勞。故善戰者，致人而不致於人。

Arrive first and rest; arrive second and exhaust. The able strategist *makes
the other side come to them*. A true wedge forces the incumbent to respond on
ground you chose — every response costs them more than your move cost you.

兵勢篇 supplies the mechanics (the 奇正 home named in the architecture):

> 凡戰者，以正合，以奇勝。

Hold with the orthodox, win with the unexpected. Every wedge plan has two
parts: the 正 that must simply not lose (product quality, service, unit
economics, the reliable baseline) and the 奇 that wins (the move the incumbent
did not price). Plans that are all 奇 have nothing holding the line while the
surprise develops; plans that are all 正 are a war of attrition against a
larger force.

## Forcing questions

1. **What makes the rival strong, and what does that strength commit them
   to?** The wedge lives in the commitment: the margin structure they cannot
   cannibalize, the channel they cannot bypass, the customer base they cannot
   annoy, the org they cannot pivot. 虛 created by their 實.
2. **If you take this point, what does their cheapest response cost them?**
   A wedge they can close with a feature flag is a feature request, not a
   wedge. The test: closing it must cost them their strength.
3. **Which part of your plan is 正 and which is 奇?** Name both. What must
   simply not lose while the surprise develops — and is it funded?
4. **致人而不致於人 — does this move make them respond to you?** If your plan
   is a sequence of responses to their moves, you are the one being wedged.
5. **Where is your own 虛?** The symmetric read: the wedge a challenger would
   drive into you, and what watching for it costs.

## Workflow

1. **Read the artifacts**: `miaosuan-scorecard.md` (position, chapter weighting),
   `maneuver-brief.md` (the ladder's conclusion), `terrain-survey.md` (the
   rival's-map section is the wedge's raw material). Missing scorecard →
   print the foundation warning and proceed.
2. **Map the rival's commitments** (forcing Q1): each strength, what it
   structurally commits them to, and the 虛 that commitment creates.
   `WebSearch` for the observable commitments: pricing structure, channel
   contracts, public margin profile, org shape, stated strategy.
3. **Score candidate wedges** by the closing-cost test (Q2): for each, the
   rival's cheapest close and what that close costs them. Keep only wedges
   whose close is expensive *for them*.
4. **Split the plan into 正 and 奇** (Q3) — and verify the 正 is funded and
   owned; reject the plan if it is all 奇.
5. **Run the initiative test** (Q4) and the defensive read (Q5).
6. **Screen lenses** privately, chapter-weighted by position; output 1–3 that
   materially change the wedge design, or `None selected`. (挑戰者 positions
   will often surface 暗渡陳倉 / 聲東擊西 here; the mechanism must be shown,
   not the name matched.)
7. **Append to `maneuver-brief.md`** the wedge section. Route: wedge move
   irreversible or escalatory → `/sunzi-restraint`; otherwise →
   `strategy-analyst-review` before commitment.

## Output

```markdown
# Maneuver Brief — 虛實 Wedge

Date: · Campaign: · Position: 
Foundation: [artifacts read] / ⚠ running without foundation audit

## Rival Commitments → 虛
| Their strength | What it commits them to | The 虛 it creates | Evidence (tier) |
|---|---|---|---|

## Candidate Wedges — Closing-Cost Test
| Wedge | Their cheapest close | What the close costs them | Verdict |
|---|---|---|---|

## 正 / 奇 Split
正 (must not lose): · Funded and owned by: 
奇 (wins): · Why they haven't priced it: 

## Initiative Test (致人而不致於人)
Their forced response to this move: 
What that response costs them vs. what the move cost you: 

## Your Own 虛 (defensive read)
| Your strength | Its commitment | The wedge it exposes | Early signal |
|---|---|---|---|

## Selected Lenses
(1–3 with mechanism, ethical translation, falsifier — or: None selected)

## Chosen Wedge
Wedge: · Owner: · Reversible: 
Leading metric: · Trust guardrail: · Kill criterion: 

## Route
→ /sunzi-restraint required: yes/no · → next skill: 
```


## Asking the user

This skill's forcing questions may need a direct answer. Use `AskUserQuestion`
when the host provides it; when it does not — Codex, OpenCode, Cursor, headless
runs — ask in prose and end the turn rather than guessing, and in genuinely
non-interactive runs proceed under a header-stated assumption with confidence
capped at medium. Full protocol and the decisions that may never be assumed:
[Interactive questioning and fallback](../../references/interactive-questioning.md).

## Hard rules

- **Every kept wedge passes the closing-cost test** — the close must cost the
  rival their strength, with the cost stated. "They're bad at X" is not a
  wedge; it's a to-do item on their roadmap.
- **The 正/奇 split is mandatory, and all-奇 plans are rejected** — that is
  the architecture's rule made operational.
- The defensive read (your own 虛) is mandatory. 知彼知己 cuts both ways.
- Wedges exploit *structural* commitments — margin, channel, org — never
  deception of customers, fake products, or manufactured scandals; the
  [ethical strategy guardrails](../../references/ethical-strategy-guardrails.md)
  bind.
- Lens discipline: private screening, chapter-weighted, 1–3 or `None
  selected`, mechanism shown.
- Foundation warning prints when the scorecard is absent.

## Anti-patterns

- **Symmetric attack** — hitting their strongest surface because it is the
  famous one; 攻其無備 inverted.
- **The feature-flag wedge** — a "weakness" they can close in a sprint,
  discovered because it was the easiest thing to notice.
- **All-奇 romance** — a plan that is entirely surprise with nothing holding
  the baseline; the surprise develops and the company underneath it has
  churned out.
- **Response chains** — a "strategy" that is really a queue of reactions to
  the rival's last three moves; 致於人.
- **Defensive blindness** — brilliant offensive wedge analysis with your own
  虛 section left blank.
