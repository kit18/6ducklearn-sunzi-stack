---
name: sunzi-terrain
version: 1.0.0
description: Use when a strategy, market entry, launch, channel choice, or survival question needs a ground-truth map before any move is chosen — market structure, position, supply lines, category boundaries, 九地 ground classification, and where you can and cannot survive; the terrain survey that the 七計 count and the maneuver skills stand on.
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - WebSearch
  - AskUserQuestion
triggers:
  - map the market
  - where should we play
  - what ground are we on
  - can we survive here
  - should we exit this market
  - terrain survey
  - 九地
---

# Sunzi Terrain (地)

The terrain surveyor. Before the count and long before any tactic, someone has
to walk the ground: what the market's structure actually is, where you stand
in it, what feeds your position, and where you would die. This skill produces
that map. It chooses no moves — a surveyor who starts recommending attacks has
stopped surveying.

## When to invoke this skill

- A market-entry, expansion, channel, or category decision needs a map before
  `/sunzi-compare` can count.
- Someone says "we should enter X" and nobody has stated what kind of ground X is.
- The business feels stuck and the question is whether the problem is the
  position, not the effort.
- Exit is on the table — 走為上 mode exists precisely for "should we leave,
  and what does leaving cost."
- A 五事 audit is underway and the 地 artifact (`terrain-survey.md`) is the
  missing input.

## When NOT to invoke this skill

- The map exists and the question is "can we win?" — that is `/sunzi-compare`.
- The question is *when*, not *where* — cycle, window, and macro timing belong
  to `/sunzi-timing` (天); this skill records only how the ground fits the
  present moment.
- Choosing the move on known ground — maneuver tier.
- Org, economics, and execution capacity — `/sunzi-method` (法).
- Simulating how people react to a move — `sunzi-stakeholder-ssr`.

## Not sure this is your stage?

If you cannot tell which stage your question belongs to, invoke
`sunzi-strategy-consultant` instead — it triages, dispatches, and carries the
artifacts. Running this skill alone is also a supported, first-class use; you
do not have to run the whole loop to get value from one stage.

## Canonical grounding

始計篇 defines the factor:

> 地者，遠近、險易、廣狹、死生也。

Distance, difficulty, breadth, and survivability — four axes, all still load-
bearing: how far the customer and channel are from you, how hard the ground is
to cross, how wide the category is, and whether a position there lives or dies.

地形篇 states the skill's job description and its limit:

> 夫地形者，兵之助也。料敵制勝，計險阨遠近，上將之道也。

Terrain is the *aid* of the campaign, not the campaign — reckoning the
distances and the choke points is the commander's craft. And the chapter's
close is the standard this survey is held to:

> 知彼知己，勝乃不殆；知天知地，勝乃可全。

Know the other and yourself and victory is not endangered; know the sky and
the ground and it can be complete. The survey therefore always maps the ground
**as the rival sees it too** — terrain is symmetric, and a map drawn only from
your own side is half a map.

## Modes

| Mode | When | What changes |
|---|---|---|
| **SURVEY** | New ground, or no current map | Full first-principles map + ground classification + supply lines |
| **POSITION** | Ground known; evaluating a specific place to stand | Classification assumed from prior survey; deep dive on one position's supply, defensibility, and death conditions |
| **走為上 WITHDRAW** | Exit, retreat, or line-of-business shutdown is on the table | Withdrawal cost, what is kept alive, sequencing, and the 謀攻 test: 少則能逃之，不若則能避之 — being able to leave is a capability, not a defeat |

## Forcing questions

1. **Which ground are you standing on?** Classify against the table below and
   defend the classification — what evidence puts you there, and what
   observation would reclassify you?
2. **Where is your line of supply, and who can cut it?** Cash, a single
   channel, one platform's algorithm, one anchor customer, one supplier. A
   position is only as strong as its most cuttable line.
3. **How does this same ground look from the rival's side?** Which of your
   "moats" do they see as a door?
4. **If you had to withdraw, could you?** What does withdrawal cost, what
   survives it, and does anyone on the team know the answer today?
5. **What ground do you refuse to fight on, even if it looks attractive?**
   A survey with no refused ground has not found the edges of the map.
6. **Which evidence lane applies?** Pull the matching
   [domain adapter](../../references/domain-adapters.md) (growth/ecommerce,
   operations, AI transformation, macro, trading) — and when there is no
   operating data yet, run the 未戰 lane: probe-tier evidence, labeled as such,
   never dressed as operating data.

## The ground classifier (九地)

九地篇 names nine grounds; six translate cleanly to business position and are
the classifier this skill uses:

| 地 | Canonical condition | Modern position | Doctrine |
|---|---|---|---|
| 散地 | Fighting on your own soil; troops scatter | Your core market, low urgency, defenders drift | 散地則無戰 — do not start fights here; consolidate |
| 爭地 | Ground advantageous to whoever holds it | Contested category every serious player wants | 爭地則無攻 — do not attack a held position head-on; arrive first or not at all |
| 交地 | Open ground, freely traversed | Low switching costs, no lock-in | 交地則無絕 — keep continuity and presence; this ground cannot be held by force |
| 衢地 | Ground joining three states | Platform, standard, or integration hub | 衢地則合交 — win by alliances, not conquest |
| 圍地 | Enclosed ground, narrow entry | Boxed in by a platform, regulator, or single dependency | 圍地則謀 — stratagem, not force; flag the 同盟 overlay for the scorecard |
| 死地 | Survival only through immediate battle | Runway measured in weeks; position dies by default | 死地則戰 — commit fully or exit now; half-measures are the one fatal choice |

The classification is a **falsifiable claim**, not a mood: state what evidence
puts you on that ground and what would move you off it. Position can differ
per segment or per product line — classify each battlefield, not the company.

## The first-principles map

The survey's core table — every variable filled with evidence or explicitly
marked missing:

| Variable | What it captures |
|---|---|
| Actors | Everyone who can help, block, copy, fund, regulate, or abandon |
| Incentives | What each actor is actually paid or driven to do — not what they say |
| Constraints | What physically or legally cannot flex: inventory, capacity, licenses, capital |
| Information | Who knows what; where signals can be spoofed or are simply absent |
| Timing | How the ground fits the present window (deep timing analysis → `/sunzi-timing`) |
| Feedback | Which metrics would reveal position change fastest |
| Failure modes | How positions on this ground have historically died |

## Workflow

1. **Read the memory first.** `miaosuan-recalibration.md` if present (which 事 was
   misjudged last time), then any prior `terrain-survey.md` — note what
   changed since. List artifacts found and missing in the output header.
2. **Fix the decision.** What choice does this survey inform? A map with no
   decision attached is scenery.
3. **Select the mode**; run the forcing questions, using `AskUserQuestion`
   where the battlefield or segment is ambiguous.
4. **Build the first-principles map** — every row carries evidence with its
   tier (operating / probe / public narrative / assumption) and a
   missing/falsifier column. Use `WebSearch` for public structure: market
   reports, competitor filings, pricing pages, regulatory texts.
5. **Trace the supply lines.** Name each line (cash, channel, platform,
   supplier, key account), who can cut it, and the early signal that it is
   being cut.
6. **Classify the ground** per battlefield with the 九地 table; apply the
   matching doctrine and flag 同盟 overlay where 衢地/圍地 dependencies exist.
7. **Draw the rival's map.** One short section: the same ground as the
   strongest rival sees it — their supply lines across it, which of your
   barriers they price as trivial.
8. **In 走為上 mode**: compute the withdrawal — what is sold, kept, or killed;
   the cost in cash, reputation, and option value; the sequencing; and the
   条件 under which withdrawal beats holding. 亡國不可以復存 — positions can be
   rebuilt only while the company survives them.
9. **State refused grounds** — attractive-looking positions the survey rules
   out, with the reason.
10. **Write the artifact** `terrain-survey.md`. `/sunzi-compare` reads it as
    the 天地孰得 evidence base; the maneuver tier reads the classification for
    doctrine; `/sunzi-retro` diffs it after contact.
11. **Route.** Survey feeding a decision → `/sunzi-compare`. Ground classified
    死地 → `/sunzi-method` for the runway arithmetic *today*, and
    `/sunzi-restraint` before any desperation move. 衢地 → alliance work via
    `sunzi-stakeholder-ssr` partner simulation.

## Output

```markdown
# Terrain Survey (地)

Date: · Decision informed: · Mode:
Battlefield(s): 
Foundation artifacts read: [list] / none
Evidence lane: [domain adapter] · 未戰 lane: yes/no

## Ground Classification
| Battlefield | 地 | Evidence for | Would reclassify if | Doctrine |
|---|---|---|---|---|

## First-Principles Map
| Variable | Evidence (tier) | Interpretation | Missing / falsifier |
|---|---|---|---|
| Actors |  |  |  |
| Incentives |  |  |  |
| Constraints |  |  |  |
| Information |  |  |  |
| Timing |  |  |  |
| Feedback |  |  |  |
| Failure modes |  |  |  |

## Supply Lines
| Line | Feeds | Who can cut it | Early signal of cutting |
|---|---|---|---|

## The Rival's Map
Strongest rival: · How they classify this ground: 
Your barriers they price as doors: 

## Withdrawal (always assessed; expanded in 走為上 mode)
Could you leave: yes / no / partially
Cost of leaving: · What survives: 
Withdrawal beats holding when: 

## Refused Grounds
| Ground | Why refused despite attraction |
|---|---|

## Needed Next
1. 
```

## Hard rules

- **No moves, no lenses.** The survey diagnoses; stratagem selection belongs
  to the maneuver tier, downstream of the count. A survey that recommends an
  attack has exceeded its commission.
- Every map row and classification carries evidence at a named tier, or is
  marked missing. A confident map on absent evidence is fiction with a legend.
- The supply-lines section is mandatory. A survey that skips it has mapped
  the scenery and missed the logistics — 軍無輜重則亡.
- The rival's-map section is mandatory: 知彼知己 — terrain read from one side
  only is half a map.
- Withdrawal is always assessed, in every mode. Not planning an exit is not
  optimism; it is a missing map sheet.
- Public and legitimate sources only for rival and market evidence (see
  [ethical strategy guardrails](../../references/ethical-strategy-guardrails.md)).
- The artifact write is not optional. No `terrain-survey.md`, no completed run.

## Anti-patterns

- **Ground-shopping** — picking the classification that flatters the existing
  plan, instead of the one the evidence supports.
- **Scenery mapping** — pages of market description with no decision named
  and no falsifier column.
- **The one-sided map** — moats listed from your side only; the rival's-map
  section left generic.
- **Permanent-moat syndrome** — barriers recorded without the early signal
  that they are eroding.
- **Exit taboo** — treating the withdrawal section as defeatism and leaving
  it blank; 走為上 exists in the canon because leaving well is a skill.
- **Company-level classification** — one 地 label slapped on a multi-segment
  business; classify battlefields, not the org chart.
