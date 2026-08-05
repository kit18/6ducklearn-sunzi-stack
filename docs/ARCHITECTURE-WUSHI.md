# Architecture: The 五事 Spine

How the Sunzi stack is organized, and why it changed.

---

## 1. The problem with the old axis

v0.2.0 organized skills by **artifact domain**: `sunzi-growth-review`,
`sunzi-operations-sop-review`, `sunzi-prd-review`. Three problems:

**It duplicates itself.** The same Sunzi reasoning — terrain, timing, actors,
restraint, kill criteria — is restated in every domain skill. Change the
reasoning and you edit it in four places.

**It collides with better-resourced packs.** "Review my PRD" and "review my
growth loop" are already served by gstack and the PM skill packs. Competing
there means competing on the axis where this pack is weakest.

**It answers the wrong question.** A domain review asks *"is this document
good?"* The question people actually bring to Sunzi is *"should I move, and
where, and when, and what breaks me?"* Those are different questions, and the
second one is the one nobody else is answering.

The fix is to organize by **aspect of strategy**. Sunzi already supplies the
taxonomy, in the opening chapter, and it is better than anything we would
invent.

---

## 2. The canonical spine

始計篇:

> 故經之以五事，校之以計，而索其情：一曰道，二曰天，三曰地，四曰將，五曰法。

Five factors to weigh a situation; seven comparisons to score it. That is the
whole diagnostic architecture, stated 2,500 years ago, and it maps onto modern
business without strain.

| 事 | Canonical text | What it governs | Modern translation | Core considerations (核心考量) |
|---|---|---|---|---|
| **道** | 令民與上同意也，故可以與之死，可以與之生，而不畏危 | Alignment between leadership and the led | Vision and user value; mandate, legitimacy, why anyone follows you | Does the product solve a real pain? Does the incentive structure — equity, comp, pricing — make shareholders, employees, and customers 上下同欲? |
| **天** | 陰陽、寒暑、時制也 | Conditions you do not control | Macro trend and industry window | Technology cycle (e.g. the AI wave), economic cycle, policy direction, capital climate. Are you riding an era dividend or fighting one? |
| **地** | 遠近、險易、廣狹、死生也 | Ground: distance, difficulty, breadth, survivability | Market positioning and channel moats | Which arena — down-market, overseas, niche? Do supply chain, store placement, or your slot in a platform ecosystem (the App Store shelf, the algorithm) constitute a defensible position? |
| **將** | 智、信、仁、勇、嚴也 | The commander's qualities | Leadership and core team | The CEO's 格局 and strategic eye; whether the executive bench can fight a hard campaign; whether top technical and sales talent actually exists in the building |
| **法** | 曲制、官道、主用也 | Organization, chain of command, provisioning | Org structure and operating discipline | KPI/OKR design, equity incentives, SOP rigor, financial compliance, decision latency, **unit economics and burn** |

If the 五事 base is unstable, every clever tactic downstream is 無根之水 —
water without a source. That is not a metaphor in this pack; it is a gate
(see the sequencing doctrine below).

### The sequencing doctrine: 先為不可勝

軍形篇:

> 昔之善戰者，先為不可勝，以待敵之可勝。不可勝在己，可勝在敵。

First make yourself impossible to defeat — that part is within your control —
then wait for the opponent to become defeatable, which is not. The modern
failure mode this doctrine names is precise: founders and CMOs who 迷信三十六計
而荒廢五事 — obsessed with growth hacks, price wars, and PR stunts while the
product solves no pain (無道), the org is chaos (無法), and the team is
mediocre (無將). Such a company can be lifted by a window (天時) and will still
fall, because nothing underneath holds.

The pack enforces the sequence structurally:

- **Inward first**: the 五事 audit (product, team, cash) builds the 不可勝 base.
- **Outward second**: the maneuver tier (marketing war, pricing war, ecosystem
  play) strikes only when the opponent errs or the cycle turns.
- A maneuver skill invoked without a 五事 audit artifact must say so in its
  output header: `⚠ running without foundation audit — tactics without a base`.
  It runs anyway (the user decides), but it never runs silently.

Each of the five becomes one skill. Not a section of a skill — a skill, with
its own modes, its own forcing questions, and its own artifact.

> **Style-derived, not persona.** Every skill in this pack is a modern
> consultant informed by Sunzi. None of them speak as 孫子, and none of them
> treat a classical line as permission for a modern action. The text supplies
> structure and diagnostic pressure. Evidence supplies the answer.

### Provenance — two books, one join

孫子兵法 (Warring States) and 三十六計 (a Ming–Qing folk compilation) are
separate works, roughly two millennia apart, and the pack never pretends
otherwise. The join is architectural, not historical: 五事七計 is the
**diagnosis layer** — systematic, evidence-first, canonical; the stratagems are
a **lens library** screened only after diagnosis, exactly because they are
folk-tactical material with no internal restraint of their own. This is also
why the killing-blow framing (一擊必殺) that popular business writing attaches
to the stratagems is deliberately *not* adopted: 謀攻篇 ranks 不戰而屈人之兵 —
winning without the strike — as 善之善者, and the cost ladder 伐謀 → 伐交 →
伐兵 → 攻城 exists to make the decisive strike the most expensive option, not
the most glorious one.

---

## 3. Skill roster

### Tier 1 — 五事: the diagnosis layer

Five skills. Each answers one question that the other four cannot.

| Skill | 事 | Specialist | The question it forces |
|---|---|---|---|
| `/sunzi-alignment` | 道 | The Legitimacy Auditor | Does anyone actually follow you when it costs them? |
| `/sunzi-timing` | 天 | The Cycle Reader | Is now the moment, and what ends the window? |
| `/sunzi-terrain` | 地 | The Terrain Surveyor | Where can you survive, and where can you not? |
| `/sunzi-command` | 將 | The Command Assessor | Who decides, and are they capable of this decision? |
| `/sunzi-method` | 法 | The Operating System Architect | Can the machine execute it, and what does a day of this cost? |

### Tier 2 — 七計: the comparator

> 主孰有道？將孰有能？天地孰得？法令孰行？兵眾孰強？士卒孰練？賞罰孰明？

Seven head-to-head comparisons against a **named** rival. Sunzi's own scoring
rubric, and the pack's go/no-go gate.

| Skill | Specialist | What it does |
|---|---|---|
| `/sunzi-compare` | The War Room Scorer | Scores you vs. a named rival across the seven comparisons; refuses to score without evidence per row; outputs 廟算 verdict **and a market-position classification** |

始計篇 closes: 夫未戰而廟算勝者，得算多也。The count happens *before* the
campaign. `/sunzi-compare` is that count, and it is allowed to return "you lose
this comparison — do not start."

Beyond go/no-go, the scorecard classifies your position on the board, because
the position determines which stratagem chapters even apply:

| Position (棋局定位) | You are | Scorecard signature |
|---|---|---|
| 龍頭 (leader) | The incumbent with the advantage to protect | Win most of the seven; the risk is complacency, not weakness |
| 挑戰者 (challenger) | Strong enough to contest, not to win head-on | Split the seven; win on 將 or 法, lose on 兵眾/scale |
| 顛覆者 (disruptor) | Playing a different game than the incumbents | Comparisons partially inapplicable — you change the rules rather than win by them |
| 劣勢/轉型 (disadvantaged) | Losing the current game; survival and redeployment are the goals | Lose most of the seven; the question is what to keep alive |

### Tier 3 — maneuver: the choice layer

Once you know the terrain, these decide the move.

| Skill | 篇 | Specialist | The move it governs |
|---|---|---|---|
| `/sunzi-win-without-fighting` | 謀攻 | The Bloodless Strategist | 伐謀 → 伐交 → 伐兵 → 攻城. Forces you down the cost ladder before you accept a head-on fight |
| `/sunzi-find-the-wedge` | 虛實 | The Weakness Finder | 避實而擊虛. Where the incumbent structurally cannot follow you |
| `/sunzi-contingency` | 九變 | The Contingency Planner | Adaptation triggers, kill criteria, and 將有五危 — the five ways a leader gets themselves killed |
| `/sunzi-restraint` | 火攻 | The Restraint Officer | Gate for irreversible and escalatory moves: price wars, litigation, layoffs, public attacks |
| `/sunzi-intelligence` | 用間 | The Intelligence Officer | 先知 — what you need to know, who actually knows it, and how to verify it without crossing a line |

### Position-aware stratagem routing

The maneuver skills still screen the Thirty-Six Stratagems privately and still
output at most 1–3 lenses — that discipline is unchanged. What changes: the
private screening is now **weighted by the position classification** from the
廟算 scorecard. The six 計 chapters map to positions, and a lens from the wrong
chapter for your position carries a burden of proof.

| Position | Primary chapters | Characteristic moves | Public case anchors |
|---|---|---|---|
| 龍頭 (leader) | 勝戰計 | 瞞天過海 — iterate the successor in the dark while the current product wins (Apple building iPhone at iPod's peak). 以逸待勞 — build the platform, let others fight on it, collect the toll (WeChat, Amazon marketplace) | apple-ipod-iphone, platform-ecosystem-toll |
| 挑戰者 (challenger) | 敵戰計 · 攻戰計 | 暗渡陳倉 — visible move masks the real advance into ground incumbents ignore (Pinduoduo's group-buy groups covering a down-market landgrab while Alibaba and JD fought over tier-1 cities). 聲東擊西 — draw the defense to the wrong surface (ByteDance holding Baidu/Tencent's attention on news-feed content while massing on short video) | pinduoduo-flank, bytedance-misdirection |
| 顛覆者 (disruptor) | 混戰計 | 釜底抽薪 — remove the fuel the incumbent's model burns (360's free antivirus draining license-key vendors; Netflix streaming draining Blockbuster's store economics). 借刀殺人 — mobilize a third party's capital or incentive (the Didi/Kuaidi subsidy war fought with Tencent's and Alibaba's money) | 360-free-model, netflix-blockbuster, didi-kuaidi-capital |
| 劣勢/轉型 (disadvantaged) | 敗戰計 | 金蟬脫殼 — shed the shell, keep the organism (IBM selling PC to Lenovo and re-emerging as enterprise services). 走為上計 — cut the losing line while cash remains (Microsoft exiting Windows Phone) | ibm-lenovo-shell, microsoft-wp-exit |
| 同盟/生態 (allied — a *situation*, not a position; can overlay any row above) | 並戰計 | 假道伐虢 — the road you borrow becomes the road that conquers you: platform dependency, the API you build on, the marketplace that hosts you and then ships your feature natively. 偷樑換柱 — the quiet swap of a load-bearing beam: standard capture, default-setting changes, contract-renewal term drift inside a "stable" partnership | platform-sherlock-risk, standard-capture |

並戰計 deserves the extra row because modern companies rarely fight alone:
every platform listing, co-marketing deal, and OEM relationship is an allied
operation, and chapter 5 is the only chapter written for allies — including
what allies do to each other. When the SSR skill simulates partner reactions,
this is the chapter it screens.

Three rules keep this honest:

1. **Anchors are public narratives, not verified data.** They live in the
   Real-life DoD case map as `public-narrative` tier evidence: good for
   mechanism calibration ("does my move rhyme with a real one?"), never
   citable as proof that the move works.
2. **The ethical translation still applies per lens.** 借刀殺人 translates to
   "align a third party's existing incentive," not "burn a rival with
   subsidized losses" — the Didi/Kuaidi anchor is listed *with* its misuse
   flag (predatory-pricing and antitrust exposure), because the mechanism and
   the abuse are the same move at different settings.
3. **Cross-position lenses need justification.** A disadvantaged company
   reaching for 勝戰計, or a leader reaching for 敗戰計, is sometimes right —
   but the skill must state why the classification doesn't bind.

`/sunzi-restraint` deserves its own note. 火攻篇 ends:

> 主不可以怒而興師，將不可以慍而致戰 … 亡國不可以復存，死者不可以復生。

Do not start a campaign out of anger; a destroyed state does not come back.
This is the only chapter that is primarily a warning, and it is the correct
home for the class of business decisions that cannot be undone. Most strategy
tooling has no such gate.

### Deliberately implicit: 形、勢、奇正

Three load-bearing concepts get no skill of their own — the layer count
follows the text, not symmetry — but each has a stated home:

- **形 (disposition, 軍形篇)** lives in the sequencing doctrine. 先為不可勝 *is*
  形 — the shape you build before contact. A separate skill would duplicate
  the 五事 audit.
- **勢 (momentum, 兵勢篇)** lives inside `/sunzi-timing` and
  `/sunzi-find-the-wedge`. 求之於勢，不責於人 — seek victory from the setup,
  not from heroics — is the test both skills apply to any plan whose success
  clause is "the team executes harder." Modern reading: flywheels, compounding
  distribution, sequencing releases so each one raises the ground for the next.
- **奇正 (orthodox / extraordinary, 兵勢篇)** is a mode of the wedge: 以正合，
  以奇勝 — hold with the orthodox, win with the unexpected.
  `/sunzi-find-the-wedge` asks which part of the plan is 正 (must simply not
  lose: product quality, service, unit economics) and which is 奇 (the surprise
  that wins), and rejects plans that are all 奇 — a company of nothing but
  surprises has nothing to hold the line while the surprise develops.

### Retained skills

| Skill | Change | Why |
|---|---|---|
| `sunzi-strategy-consultant` | Becomes the **router/orchestrator** | Routes to 五事 skills, runs 七計, then maneuver. Analogue of `/autoplan` |
| `sunzi-stakeholder-ssr` | Unchanged | Genuinely differentiated; nothing else does synthetic stakeholder pressure testing |
| `strategy-analyst-review` | Unchanged | The quality gate every other skill calls before recommending action |
| `sunzi-decision-review` | Unchanged | Personal and everyday decisions; deliberately outside the 五事 spine |
| `strategic-situation-analysis` | Folded into 地 + the maneuver tier | Its first-principles map is the 地 survey; its stratagem lensing moves to maneuver skills |
| `sunzi-focus-group-skill-review` | Unchanged | Meta-skill for reviewing skills; orthogonal to the spine |

### Demoted to references

`sunzi-growth-review`, `sunzi-operations-sop-review`, `sunzi-prd-review` stop
being skills and become **domain adapters** under
`references/domain-adapters/`. They supply evidence lanes and output checks that
the 五事 skills pull in. Growth work still gets growth-specific rigor — it
arrives as an adapter to a terrain survey, not as a separate review.

### The 未戰 lane — every adapter must serve the pre-launch case

The v0.2.0 adapters demanded funnel data, channel mix, conversion, and
retention as *inputs* — which silently excluded the most common strategy
client: someone pre-revenue, pre-funnel, deciding whether to start. The
canonical position is the opposite of that exclusion. 廟算 happens 未戰 —
before the campaign — and 用間篇 is explicit about where pre-campaign
knowledge comes from:

> 先知者，不可取於鬼神，不可象於事，不可驗於度，必取於人。

Foreknowledge comes from people, not divination and not extrapolation. So
every domain adapter carries a mandatory **未戰 lane** alongside its operating
lane:

- **Evidence is probe-based, and labeled so.** 無中生有 and 拋磚引玉 are the
  governing lenses: a low-cost probe (mock bundles, preorder page, priced
  waitlist, supplier sample round) creates real information before
  commitment. Probe evidence is tiered below operating evidence and the
  scorecard says which tier each row rests on.
- **Proxy metrics must falsify the actual thesis.** A retention thesis needs a
  pre-launch retention proxy (a priced subscribe option, a refill preorder) —
  a traffic or add-to-cart proxy cannot stand in for it, and the adapter must
  reject the substitution.
- **The economics gate still runs**, on quotes and benchmarks instead of
  actuals, with every estimated row marked. Pre-launch is precisely when the
  break-even arithmetic is cheapest to act on — 夫未戰而廟算勝者，得算多也.

---

## 4. Modes and forcing questions

This is the structural pattern the pack was missing. Every skill gets a set of
**forcing questions** it must ask before producing output, and the diagnostic
skills get 2–4 **modes**. Forcing questions prevent the agent from writing
plausible strategy prose without evidence; modes prevent one-size analysis.

Modes are not universal, deliberately. The 五事 skills, `sunzi-compare`, and
`sunzi-retro` each face genuinely different situations that call for different
depth — a terrain survey and a withdrawal assessment are not the same job — so
they carry modes. The maneuver skills do not: their structure *is* the mode.
The 謀攻 ladder is walked in one order, the wedge is found by one test, the
contingency layer is built the same way every time, and the restraint gate runs
all four tests or none. Bolting modes onto them would be ceremony, not
discipline.

### 道 — `/sunzi-alignment`

**Modes:** MANDATE AUDIT · COALITION BUILD · FRACTURE REPAIR

1. What user pain does this actually solve, and what is the evidence someone pays to have it solved?
2. Who pays a real cost to follow you, and what is the cost?
3. Does the distribution of upside — equity, comp, pricing — make the people you need 上下同欲, or are you asking for loyalty you haven't funded?
4. If you are wrong about this, who tells you — by name?
5. Whose incentive is opposed to this, and are they inside your tent or outside it?
6. If this fails publicly, who defends you without being asked?

### 天 — `/sunzi-timing`

**Modes:** WINDOW SCAN · 以逸待勞 (WAIT) · STRIKE NOW · ALREADY LATE

1. What must be true about the world for this to work, and is it true *yet*?
2. What is the cost of waiting one more quarter — in currency, not vibes?
3. Who else can see this window, and what is their lead time?
4. What event closes this window?
5. Is the urgency real, or is it your runway?

Question 5 is the one that matters. Most "we must move now" is a financing
constraint wearing a market-timing costume, and 天 is precisely the factor you
do not control.

### 地 — `/sunzi-terrain`

**Modes:** SURVEY · POSITION · 走為上 (WITHDRAW)

九地篇 gives nine ground types. Six translate cleanly and are used as a
position classifier:

| 地 | Canonical condition | Modern position | Doctrine |
|---|---|---|---|
| 散地 | Fighting on your own soil; troops scatter | Your core market, low urgency | 無戰 — do not fight here, consolidate |
| 爭地 | Ground both sides need | Contested category everyone wants | 無攻 — do not attack head-on; get there first or not at all |
| 交地 | Open ground, freely traversed | Low switching cost, no lock-in | 無絕 — keep continuity; you cannot hold this by force |
| 衢地 | Ground connecting three states | Platform / standard / integration hub | 合交 — win by alliance, not conquest |
| 圍地 | Encircled, narrow entry | Boxed by a platform, regulator, or dependency | 則謀 — stratagem, not force |
| 死地 | Survive only by fighting | Runway measured in weeks | 則戰 — commit fully; half-measures kill you |

Forcing questions:

1. Which of the nine grounds are you standing on? Defend the classification.
2. Where is your line of supply — cash, distribution, a single channel — and who can cut it?
3. If you needed to withdraw, could you? What does withdrawal cost?
4. What ground would you refuse to fight on, even if it looked attractive?

### 將 — `/sunzi-command`

**Modes:** SELF-AUDIT · COUNTERPART · BENCH REVIEW (decision-rights *mapping*
lives in 法/官道; 將 assesses the mapped holders)

Rubric is 智信仁勇嚴, scored with evidence. The failure taxonomy is 九變篇's
將有五危 — five ways a commander gets themselves killed, and every one has a
modern equivalent:

| 危 | Canonical | Modern failure |
|---|---|---|
| 必死可殺 | Recklessness — can be killed | All-in on one bet with no fallback |
| 必生可虜 | Cowardice — can be captured | So risk-averse you get acquired on someone else's terms |
| 忿速可侮 | Quick temper — can be provoked | Baited into a price war or a public fight |
| 廉潔可辱 | Delicacy of honor — can be shamed | Reputation-sensitive to the point of paralysis |
| 愛民可煩 | Over-solicitude — can be harassed | Cannot make anyone unhappy, so cannot decide |

Forcing questions:

1. Who has the authority to stop this, and have they used that authority before?
2. Which of the five 危 does the decision-maker actually exhibit? Cite behavior, not self-report.
3. What is the decision latency from signal to action — measured, not estimated?
4. 將能而君不御者勝 — is the operator being second-guessed by someone with less information?

### 法 — `/sunzi-method`

**Modes:** ORG (曲制) · DECISION RIGHTS (官道) · PROVISIONING (主用)

法 is 曲制、官道、主用 — organization, chain of command, and **provisioning**.
The third is where 作戰篇 lives, and 作戰篇 opens by counting cost:

> 凡用兵之法：馳車千駟，革車千乘，帶甲十萬，千里饋糧 … 日費千金，然後十萬之師舉矣。

A thousand pieces of gold *per day*, before a single engagement. Sunzi's second
chapter is a cost model. That makes 法 the correct and canonical home for the
economics layer this pack was missing entirely — burn, contribution margin,
CAC payback, cash conversion.

> 兵貴勝，不貴久 — victory is prized; prolonged campaigns are not.

That is CAC payback stated as doctrine. PROVISIONING mode refuses to return a
verdict without a computed break-even, because a strategy whose arithmetic
fails is not a strategy. The computational contract — the contribution ladder,
break-even CAC, allowable CAC, payback vs. runway, and the required output
block — lives in [`references/unit-economics-gate.md`](../references/unit-economics-gate.md);
PROVISIONING mode enforces it row by row, writing `insufficient evidence` where
the data does not exist rather than skipping the row.

Forcing questions:

1. What does one day of this cost, fully loaded?
2. At what point does the campaign cost more than the position is worth?
3. 因糧於敵 — what resource can you take from the field rather than ship from home? (Partner inventory, someone else's distribution, customer-funded development.)
4. Who can spend money without asking, up to what limit?
5. Do the KPI/OKR and equity structures reward the behavior this strategy needs — or the behavior the last strategy needed?
6. Would the SOP and the books survive an audit — by an acquirer, a regulator, or a hostile journalist?
7. What is the break-even, computed? Show the arithmetic or return `insufficient evidence`.

---

## 5. Artifact chaining

Skills write artifacts that downstream skills read — that is what turns a
collection of prompts into a process. v0.2.0 skills only *named* each other
and passed nothing; this is the single most important structural pattern the
rebuild adopts.

```
/sunzi-terrain      → terrain-survey.md      ┐
/sunzi-timing       → window-assessment.md   │
/sunzi-alignment    → mandate-audit.md       ├→ /sunzi-compare → miaosuan-scorecard.md
/sunzi-command      → command-assessment.md  │                        │
/sunzi-method       → operating-model.md     ┘                        ▼
                                                          scorecard carries verdict +
                                                          position (龍頭 / 挑戰者 /
                                                          顛覆者 / 劣勢); maneuver tier
                                                          routes stratagem chapters
                                                          by that position
                                                                      │
                                                                      ▼
                                              /sunzi-restraint gates irreversible moves
                                                                      │
                                                                      ▼
                                              strategy-analyst-review → decision memo
```

Artifacts are plain Markdown in the working directory. No daemon, no state
directory, no `~/.sunzi/`. The pack stays dependency-free and host-agnostic.

### The campaign loop — 審 → 算 → 謀 → 驗 → 斷 → 省

The pack is a process, not a pile of prompts. Six stages, each with its own
skills and its own canonical anchor:

| Stage | Meaning | Skills | Canonical anchor |
|---|---|---|---|
| **審** audit | Weigh the five factors | 五事 tier (all five, any order) | 經之以五事 |
| **算** count | Score against a named rival; classify position | `/sunzi-compare` | 校之以計，而索其情 |
| **謀** devise | Choose the move, cheapest rung first | `/sunzi-win-without-fighting` → maneuver tier | 上兵伐謀 |
| **驗** test | Stress the plan against people and falsifiers | `sunzi-stakeholder-ssr` + `strategy-analyst-review` | 知彼知己；多算勝，少算不勝 |
| **斷** decide | Gate irreversible moves; commit the memo | `/sunzi-restraint` → decision memo | 非利不動，非得不用，非危不戰 |
| **省** reflect | Re-score after contact; diff the counts | `/sunzi-retro` | 兵無常勢，水無常形 |

驗 is one stage with two gates — stakeholder pressure and analytic falsification
— where an engineering pack would split "review" from "test." Strategy doesn't
support that split: both are challenges mounted *before* commitment, and
separating them only manufactures a stage. The loop is six stages because that
is what 始計篇 supports, not seven to match anything else. Readers who know
engineering skill packs will recognize the silhouette (think → plan → build →
review → ship → reflect); the resemblance is convergent — Sunzi was running
this order first.

`/sunzi-retro` is the one skill the loop adds beyond the roster above, because
a pipeline without a reflect stage never learns. After a campaign — a launch,
a negotiation, a quarter — it re-runs the seven comparisons against what
actually happened, diffs the two scorecards, and records which 事 was
misjudged and which lens was decoration. 虛實篇 supplies the anchor: 兵無常勢，
水無常形 — the shape of the water changes, so the map must be redrawn after
every engagement. The diff artifact (`miaosuan-recalibration.md`) is what the
*next* campaign's `/sunzi-compare` reads first — compounding memory, done with
plain files.

The router (`sunzi-strategy-consultant`), invoked bare, walks the whole loop
and surfaces only the decisions that are genuinely the user's — which rival to
score against, which position claim to accept, which irreversible move to
authorize.

---

## 6. Skill authoring contract

Every skill in the rebuilt pack conforms to this shape:

```markdown
---
name: sunzi-<aspect>
version: <semver>
description: <one line, ends with (sunzi)>
allowed-tools: [Read, Write, Grep, Glob, WebSearch, AskUserQuestion]
triggers:
  - <natural language phrase>
---

## When to invoke this skill
## When NOT to invoke this skill      ← routes to the correct sibling
## Canonical grounding                 ← the 篇 and line this derives from
## Modes                               ← 2–4, with selection criteria
## Forcing questions                   ← asked before any output
## Workflow                            ← numbered, deterministic
## Output                              ← fenced template, chainable artifact
## Hard rules                          ← including the ethical floor
## Anti-patterns                       ← what a bad run looks like
```

The contract is **machine-enforced**, not aspirational. `scripts/validate-stack.mjs`
asserts, per skill: semver `version`, `allowed-tools`, at least three natural-language
`triggers`, a `When NOT to invoke` section, a workflow section, `Output`, hard rules,
the stage-routing block, and ASCII-only artifact filenames. Loop skills additionally
require `When to invoke this skill`, `Canonical grounding`, `Forcing questions`, and
`Anti-patterns`. Versions must agree across `package.json`, `stack.json`, the agent
profile, and every skill's frontmatter. The four retained v0.2.0 skills
(`sunzi-decision-review`, `sunzi-stakeholder-ssr`, `strategy-analyst-review`,
`sunzi-focus-group-skill-review`) meet the universal contract; the loop-skill
additions are scoped to the rebuilt thirteen, and the orchestrator is exempt from
forcing questions and self-routing only.

Two rules carried from v0.2.0, unchanged, because they are what keep this pack
honest:

- **Never dump the stratagem matrix.** Screen privately, output 1–3 lenses that
  materially change the recommendation, or `None selected`.
- **Classical text is diagnostic structure, never moral permission.** If a move
  would destroy trust on disclosure, that is a finding, not a tactic.

And one new rule, from the sequencing doctrine:

- **Maneuver before foundation is flagged, always.** Any Tier-3 skill that runs
  without a 五事 audit artifact in reach prints the
  `⚠ running without foundation audit` header. The named anti-pattern is
  迷信三十六計而荒廢五事 — tactics-first companies that die on a good wind.

---

## 7. Migration from v0.2.0

Breaking. Ships as v1.0.0.

| v0.2.0 | v1.0.0 |
|---|---|
| `sunzi-growth-review` | `references/domain-adapters/growth.md` + `/sunzi-terrain` |
| `sunzi-operations-sop-review` | `references/domain-adapters/operations.md` + `/sunzi-method` |
| `sunzi-prd-review` | `references/domain-adapters/product.md` + `/sunzi-method` |
| `strategic-situation-analysis` | `/sunzi-terrain` (survey) + maneuver tier (lensing) |
| everything else | unchanged |

`docs/MIGRATION.md` carries the table plus a compatibility note for anyone who
copied the v0.2.0 skills into a host directory.
