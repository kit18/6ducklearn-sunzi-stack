---
name: sunzi-compare
version: 1.0.0
description: Use when a market entry, competitive campaign, product launch, pricing move, or fight-or-wait decision needs a pre-commitment go / no-go count against a named rival — the 七計 scorecard, market-position classification, and 廟算 verdict that the maneuver skills read before any tactic is chosen.
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - WebSearch
  - AskUserQuestion
triggers:
  - should we enter this market
  - can we beat them
  - go or no-go
  - compare us against
  - are we ready to fight
  - 廟算
  - 七計
---

# Sunzi Compare (七計 / 廟算)

The war-room scorer. Before a campaign is designed, count. This skill compares
you against a **named rival** across Sunzi's seven comparisons, classifies your
position on the board, and issues the verdict the rest of the pack builds on —
including the verdict nobody wants: *do not start*.

## When to invoke this skill

- A market-entry, launch, pricing, or competitive decision is on the table and
  no one has counted whether it is winnable.
- A 五事 audit exists and the user asks "so should we do it?"
- The user proposes tactics ("let's undercut them", "let's run a referral
  loop") before any position assessment exists.
- A prior campaign ended and `廟算-recalibration.md` exists — re-count before
  the next one.

## When NOT to invoke this skill

- No rival and no decision — a standing self-assessment belongs to the 五事
  tier skills.
- Mid-campaign learning review — that is `/sunzi-retro`.
- Personal or everyday decisions — route to `sunzi-decision-review`.
- Simulating how stakeholders react to a chosen move — route to
  `sunzi-stakeholder-ssr`.
- Choosing *which* tactic once position is known — route to the maneuver tier.

## Canonical grounding

始計篇:

> 校之以計，而索其情。曰：主孰有道？將孰有能？天地孰得？法令孰行？兵眾孰強？士卒孰練？賞罰孰明？吾以此知勝負矣。

Seven questions, each comparative, each answerable with evidence. And the close:

> 夫未戰而廟算勝者，得算多也；未戰而廟算不勝者，得算少也。多算勝，少算不勝，而況於無算乎！

The count happens in the temple, before the fighting. More counts win; fewer
counts lose; no count at all — the question answers itself. This skill is the
temple count. It is not a pep talk, and a count that always says "go" is 無算
wearing a spreadsheet.

## Modes

Select one; state it in the output header.

| Mode | When | What changes |
|---|---|---|
| **FULL COUNT** | One decision, one primary rival | All seven rows, evidence per row, verdict + position |
| **MULTI-RIVAL** | Contested market, 2–3 relevant rivals | One column per rival; position derives from the pattern across rivals; fatal rows tracked per rival |
| **未戰 PROBE** | Pre-launch, pre-revenue, no operating data | Same seven rows, but evidence comes from probes, quotes, and benchmarks; every row carries its evidence tier and the scorecard states it runs on probe-grade data |

## Forcing questions

Ask before scoring. Do not fill the table until these are answered.

1. **Name the rival.** "The market" and "competitors generally" are not
   rivals. If no direct rival exists, the rival is the customer's status quo —
   name *that* (the spreadsheet, the incumbent habit, the do-nothing option).
2. **What decision does this count gate?** A count with no decision attached
   is a vanity exercise.
3. **Which comparison matters most for this decision, and why?** Weighting
   must be justified before scores exist, not fitted to them afterward.
4. **What evidence exists per row, and at what tier?** Operating data > probe
   result > public narrative > assumption. Rows without evidence score 不知.
5. **What could change the count within 90 days?** A count is a snapshot;
   name its movers.
6. **If the count says lose, what would you have to believe to proceed
   anyway?** Surface the override before the verdict so it can be examined
   instead of improvised.

## The seven comparisons

| # | 計 | Question | Modern comparison |
|---|---|---|---|
| 1 | 主孰有道 | Whose mandate is real? | User love, mission credibility, stakeholder alignment — who would be missed if they vanished |
| 2 | 將孰有能 | Whose command is abler? | Leadership quality, decision latency, track record in *this kind* of fight |
| 3 | 天地孰得 | Who holds timing and ground? | Who the current cycle favors; whose position, channels, and moats fit the window |
| 4 | 法令孰行 | Whose discipline executes? | Whether strategy survives contact with the org: SOP rigor, compliance, decisions that actually ship |
| 5 | 兵眾孰強 | Whose forces are stronger? | Capital, distribution scale, brand mass, balance-sheet depth |
| 6 | 士卒孰練 | Whose troops are better trained? | Talent density and craft: engineering, sales, support; shipping cadence as the observable |
| 7 | 賞罰孰明 | Whose incentives are clearer? | Comp, equity, KPI/OKR coherence — are the right behaviors rewarded, and are consequences real |

Row verdicts are deterministic labels, never invented numerals: **勝** (win,
evidence-backed) · **負** (lose, evidence-backed) · **爭** (contested) ·
**不知** (unknown — evidence missing). 不知 counts against *confidence*, never
against the rival.

## Workflow

1. **Read the memory first.** If `廟算-recalibration.md` exists in the working
   directory, read it before anything else — it records which 事 was misjudged
   last time. Then gather the 五事 artifacts (`terrain-survey.md`,
   `window-assessment.md`, `mandate-audit.md`, `command-assessment.md`,
   `operating-model.md`). List what was found and what is missing in the
   output header. Missing artifacts do not block the count; they lower its
   ceiling.
2. **Run the forcing questions.** Use `AskUserQuestion` when the rival or the
   gated decision is ambiguous. Do not guess the rival.
3. **Select the mode** from the table above; 未戰 PROBE is mandatory when no
   operating data exists — do not dress probe evidence as operating evidence.
4. **Score the seven rows.** Each row: your claim, the rival's claim, the
   evidence with its tier, the verdict label, and — for 爭 and 不知 rows —
   the single cheapest artifact that would settle it (`needed next`).
5. **Run the economics gate when money is the campaign.** For growth,
   ecommerce, pricing, or market-entry decisions, complete the
   [unit economics gate](../../references/unit-economics-gate.md) block inside
   row 5 (兵眾) — a rival with worse capital but better contribution per order
   outlasts you. `insufficient evidence` rows are written as such.
6. **Count and issue the 廟算 verdict**: `start` / `start narrow probe` /
   `do not start` / `insufficient count` (too many 不知 rows to responsibly
   verdict). 多算勝，少算不勝 — the verdict must follow the rows it sits on,
   and a fatal row (a 負 on the comparison the user weighted most) caps the
   verdict at `start narrow probe` unless the position claim reframes it.
7. **Classify the position** (棋局定位): 龍頭 / 挑戰者 / 顛覆者 / 劣勢, plus
   the 同盟 overlay when a platform or partner dependency shapes the fight.
   Defend the classification from the row pattern. A 顛覆者 claim must state
   *which rows are inapplicable and what different game makes them so* — 顛覆者
   is a different scoring geometry, not an amnesty for lost rows.
8. **Write the artifact** `廟算-scorecard.md` to the working directory. The
   maneuver tier and `/sunzi-retro` read it; a count that lives only in chat
   is a count that gets re-litigated from memory.
9. **Route.** By position: 龍頭 → 勝戰計-weighted maneuver screening; 挑戰者 →
   敵戰/攻戰; 顛覆者 → 混戰; 劣勢 → 敗戰; 同盟 overlay → 並戰 screened in
   `sunzi-stakeholder-ssr` partner simulation. By verdict: `do not start` →
   back to the weakest 事 skill; `insufficient count` → the `needed next`
   column is the work plan.

## Output

```markdown
# 廟算 Scorecard

Date: · Decision gated: · Mode:
Rival (named): 
Foundation artifacts read: [list] / ⚠ none — count runs on session evidence only
Prior recalibration read: yes ([date]) / none

## Seven Comparisons
| # | 計 | You | Rival | Evidence (tier) | Verdict | Needed next |
|---|---|---|---|---|---|---|
| 1 | 主孰有道 |  |  |  |  |  |
| 2 | 將孰有能 |  |  |  |  |  |
| 3 | 天地孰得 |  |  |  |  |  |
| 4 | 法令孰行 |  |  |  |  |  |
| 5 | 兵眾孰強 |  |  | (incl. unit-economics gate when applicable) |  |  |
| 6 | 士卒孰練 |  |  |  |  |  |
| 7 | 賞罰孰明 |  |  |  |  |  |

Count: 勝 _ · 負 _ · 爭 _ · 不知 _
Weighted comparison (from forcing Q3): 
Fatal row: none / #_ — [why it is fatal]

## Verdict
廟算: start / start narrow probe / do not start / insufficient count
Confidence: low / medium / high — capped by 不知 count and evidence tiers
90-day movers: 

## Position (棋局定位)
Position: 龍頭 / 挑戰者 / 顛覆者 / 劣勢
同盟 overlay: none / [dependency named]
Defense from row pattern: 
If 顛覆者 — inapplicable rows and the different game: 

## Route
Next skill: 
Chapter weighting for maneuver screening: 
```

## Hard rules

- Never score a row without naming its evidence and tier. 不知 is a
  respectable verdict; manufactured confidence is not.
- Never accept an unnamed rival. The status quo is a valid rival; "the
  market" is not.
- `do not start` is a first-class outcome. A session where the user's plan
  dies at the count is a *successful* session — 未戰而廟算不勝 is the cheapest
  possible defeat.
- No stratagem lenses in this skill. The count is diagnosis; lens selection
  belongs to the maneuver tier, downstream of position.
- Rival evidence comes from public and legitimate sources only — filings,
  pricing pages, hiring pages, public interviews, user reviews. No pretexting,
  no scraping behind auth, no misrepresentation (see
  [ethical strategy guardrails](../../references/ethical-strategy-guardrails.md)).
- Position classification binds the downstream chapter weighting; a
  cross-position lens later must argue against this scorecard explicitly.
- The artifact write is not optional. No `廟算-scorecard.md`, no completed run.

## Anti-patterns

- **The flattery count** — seven 勝 rows scored from vibes. If every row wins,
  the evidence column will expose it; if the evidence column can't, the run
  failed.
- **Numeric theater** — "we're a 7/10 on talent." Labels are deterministic
  because numbers without instruments are costumes.
- **不知 laundering** — treating an unknown as a win because the rival's
  weakness "seems likely."
- **顛覆者-washing** — renaming lost rows as "different game" without showing
  the game.
- **Counting after committing** — running the scorecard to justify a decision
  already made; the 90-day movers and override question (forcing Q6) exist to
  catch this.
- **The chat-only count** — no artifact written, so next quarter the same
  argument happens again from scratch.
