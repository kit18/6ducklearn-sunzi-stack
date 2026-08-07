---
name: sunzi-win-without-fighting
version: 1.0.2
description: Use when a competitive fight is being planned and the cheaper rungs have not been checked — defeating the rival's plan, winning through alliances, or restructuring the situation so the fight never happens; the 謀攻 cost ladder every campaign must walk before any head-on move is approved.
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - WebSearch
  - AskUserQuestion
triggers:
  - do we have to fight them
  - cheaper way to win
  - avoid the price war
  - win without fighting
  - 不戰而屈人之兵
  - 上兵伐謀
---

# Sunzi Win Without Fighting (謀攻)

The bloodless strategist. The maneuver tier's entry gate: before any tactic is
chosen, this skill forces the campaign down the cost ladder — and most
campaigns die pleasantly on an upper rung, which is the point.

## When to invoke this skill

- `/sunzi-compare` returned `start` or `start narrow probe` and the maneuver
  is about to be designed — this skill runs *first* in the tier.
- Someone proposes a head-on move (price war, feature war, land grab) as the
  opening move rather than the last resort.
- A conflict with a partner, platform, or regulator is escalating and the
  de-escalation rungs haven't been priced.

## When NOT to invoke this skill

- No count exists → `/sunzi-compare` first (this skill will still run without
  it, but prints the foundation warning).
- The fight is chosen and the question is the weak point → `/sunzi-find-the-wedge`.
- The move is irreversible and needs its gate → `/sunzi-restraint`.

## Not sure this is your stage?

If you cannot tell which stage your question belongs to, invoke
`sunzi-strategy-consultant` instead — it triages, dispatches, and carries the
artifacts. Running this skill alone is also a supported, first-class use; you
do not have to run the whole loop to get value from one stage.

## Canonical grounding

謀攻篇:

> 百戰百勝，非善之善者也；不戰而屈人之兵，善之善者也。
> 故上兵伐謀，其次伐交，其次伐兵，其下攻城。

Winning a hundred battles is not excellence; making the fight unnecessary is.
The ladder, top rung cheapest:

| Rung | Canonical | Modern move |
|---|---|---|
| 伐謀 | Defeat the plan | Make the rival's strategy obsolete or pointless: change the standard, reframe the category, remove the premise their plan needs, occupy the position before their plan matures |
| 伐交 | Defeat the alliances | Win the ecosystem instead of the enemy: partnerships, distribution deals, platform relationships, standards bodies, the rival's own channel partners choosing you |
| 伐兵 | Defeat the forces | The direct competitive contest — feature, price, talent, channel — accepted only with the count in hand |
| 攻城 | Storm the walls | Attacking an entrenched position at full price: displacing a locked-in incumbent, hostile entry into a defended category. 攻城之法，為不得已 — only when there is no alternative |

And the sizing doctrine that governs rung 3:

> 故用兵之法：十則圍之，五則攻之，倍則分之，敵則能戰之，少則能逃之，不若則能避之。

Force ratios decide the shape of the direct fight — surround, attack, divide,
engage, evade, avoid — and evading with inferior forces is listed as *skill*,
not shame.

## Forcing questions

1. **What is the rival's plan, and what premise does it need?** 伐謀 attacks
   the premise. If nobody can state their plan, route to `/sunzi-intelligence`
   before choosing any rung.
2. **Whose alliance would make this fight unnecessary?** Name the partner,
   platform, channel, or standard whose alignment changes the board.
3. **What does the fight cost even if you win?** Full price: cash, talent
   attrition, price-level damage to the category, management attention. A won
   fight at ruinous price is 攻城 with better PR.
4. **What is the force ratio, honestly?** From the 廟算 scorecard rows 5–6.
   The 十/五/倍/敵/少/不若 doctrine binds: inferior forces choosing head-on
   contact is the scorecard being overridden, and the output must say so.
5. **What would 全勝 look like here** — the intact win where the rival's
   position, the category's economics, and your trust surplus all survive?

## Workflow

1. **Read the artifacts**: `miaosuan-scorecard.md` (verdict, position, chapter
   weighting), the 五事 set if present. Missing scorecard → print
   `⚠ running without foundation audit — tactics without a base` and proceed.
2. **Walk the ladder top-down.** For each rung: the concrete move available at
   this rung, its price, its evidence requirement, and why it is or is not
   sufficient. **A lower rung may not be chosen while an upper rung is
   unpriced.** "We considered partnerships" without a named partner and a
   priced attempt is not a walked rung.
3. **Screen lenses** privately against the position's weighted chapters (per
   the scorecard). Output 1–3 whose mechanism materially changes the chosen
   rung's design, or `None selected`.
4. **Design the chosen rung's move** with owner, reversibility, leading
   metric, trust guardrail, and kill criterion.
5. **Write the artifact** `maneuver-brief.md` (shared by the maneuver tier —
   append, don't overwrite). Route: chosen move irreversible or escalatory →
   `/sunzi-restraint` mandatory. Direct fight chosen → `/sunzi-find-the-wedge`
   for the point of contact. Then `strategy-analyst-review` before commitment.

## Output

```markdown
# Maneuver Brief — 謀攻 Ladder

Date: · Campaign: · Position (from scorecard): 
Foundation: [artifacts read] / ⚠ running without foundation audit

## The Ladder Walked
| Rung | Concrete move available | Price | Sufficient? Why / why not |
|---|---|---|---|
| 伐謀 |  |  |  |
| 伐交 |  |  |  |
| 伐兵 |  |  |  |
| 攻城 |  |  |  |

Force ratio (rows 5–6): · Sizing doctrine applied: 

## Selected Lenses
| Lens | Mechanism it changes | Ethical translation | Falsifier / misuse risk |
|---|---|---|---|
(or: None selected)

## Chosen Rung And Move
Rung: · Move: · Owner: · Reversible: 
Leading metric: · Trust guardrail: · Kill criterion: 
全勝 statement — what survives intact: 

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

- **The ladder is walked in order, every run.** Skipping to 伐兵 with upper
  rungs unpriced voids the run.
- 攻城 requires a written 不得已 justification: what was tried or priced on
  every other rung, and why each fails.
- Inferior force ratio + head-on choice = explicit scorecard override,
  recorded as such with the user's name on it.
- Lens discipline: private screening, 1–3 output or `None selected`, chapter
  weighting from position, no matrix dumps.
- 伐交 means winning allies, never sabotaging the rival's existing
  relationships through deception, defamation, or induced breach — the
  [ethical strategy guardrails](../../references/ethical-strategy-guardrails.md)
  bind every rung.
- The foundation warning prints whenever the scorecard is absent. Never
  silently.

## Anti-patterns

- **Ladder theater** — one dismissive sentence per upper rung, then the
  price war the team wanted anyway.
- **伐交 as buzzword** — "partnerships" listed with no named partner, no
  priced attempt, no reason the partner would say yes.
- **Won-the-battle accounting** — declaring victory on the fight while the
  category's price level, the team, and the trust surplus absorbed the real
  cost.
- **全勝 amnesia** — no statement of what an intact win looks like, so every
  win is scored by damage dealt instead of position gained.
