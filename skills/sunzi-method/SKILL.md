---
name: sunzi-method
version: 1.1.0
description: Use when the question is whether the machine can actually execute and afford the strategy — org structure, decision rights and latency, KPI/OKR and equity incentives, SOP and compliance discipline, burn, and the computed unit economics behind any go / no-go on a money campaign.
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - WebSearch
  - AskUserQuestion
triggers:
  - can we afford this
  - can the org execute this
  - what does this cost per day
  - unit economics check
  - who decides what
  - operating model review
  - 主用
---

# Sunzi Method (法)

The operating-system architect. 法 is the least romantic of the five factors
and the one that kills the most campaigns: the org that cannot execute the
strategy it chose, the incentive plan that rewards last year's behavior, and
the arithmetic that was never computed. This skill examines the machine —
structure, command, and provisioning — and it does not accept prose where a
number is required.

## When to invoke this skill

- A strategy exists and someone must answer "can we actually run this, and
  what does a day of it cost?"
- A growth, ecommerce, pricing, or market-entry decision needs its economics
  computed before `/sunzi-compare` counts row 5.
- Execution keeps failing and nobody can say whether the problem is people,
  structure, incentives, or cash.
- KPI/OKR, equity, or reorg design is on the table and needs to be tested
  against the strategy it is supposed to serve.
- The terrain survey classified any battlefield 死地 — the runway arithmetic
  is due *today*.

## When NOT to invoke this skill

- Whether the strategy is right — `/sunzi-compare` and the 五事 siblings.
- Whether the leader can lead it — `/sunzi-command` (將). This skill maps who
  *holds* decision rights; assessing the holder's capability is 將's work.
- Whether the market wants it — `/sunzi-alignment` (道) and `/sunzi-terrain` (地).
- Reviewing a specific SOP document line by line — use the operations domain
  adapter lane inside this skill only when the SOP question is strategic
  (decision rights, latency, auditability), not editorial.

## Not sure this is your stage?

If you cannot tell which stage your question belongs to, invoke
`sunzi-strategy-consultant` instead — it triages, dispatches, and carries the
artifacts. Running this skill alone is also a supported, first-class use; you
do not have to run the whole loop to get value from one stage.

## Canonical grounding

始計篇 defines the factor:

> 法者，曲制、官道、主用也。

Organization, chain of command, and provisioning — the three modes of this
skill, unchanged in 2,500 years.

作戰篇 is a cost model before it is anything else:

> 凡用兵之法：馳車千駟，革車千乘，帶甲十萬，千里饋糧 … 日費千金，然後十萬之師舉矣。

A thousand gold pieces a day, counted *before* the first engagement. Its
governing doctrine:

> 兵貴勝，不貴久。

Speed of victory over length of campaign — payback period as doctrine. And its
provisioning principle:

> 因糧於敵。故智將務食於敵。

Feed from the field. The able commander takes resources where the campaign
happens instead of shipping everything from home.

## Modes

| Mode | 法 element | When | What changes |
|---|---|---|---|
| **曲制 ORG** | Organization | Structure, reorg, team design questions | Maps units to the strategy's required capabilities; finds the work no unit owns |
| **官道 DECISION RIGHTS** | Chain of command | Latency, bottleneck, "who decides" questions | Maps every recurring decision to its holder, its latency, and its escalation path |
| **主用 PROVISIONING** | Provisioning | Money campaigns, burn, pricing, market entry | Enforces the [unit economics gate](../../references/unit-economics-gate.md) row by row; computes break-even or writes `insufficient evidence` — never skips |

Most real engagements run one mode deep and the other two shallow; state the
depth chosen in the output header.

## Forcing questions

1. **What does one day of this cost, fully loaded?** 日費千金 — if no one can
   answer within 20%, that is itself the finding.
2. **At what point does the campaign cost more than the position is worth?**
   Name the number that turns victory pyrrhic.
3. **因糧於敵 — what can be taken from the field rather than shipped from
   home?** Partner inventory, someone else's distribution, marketplace
   demand, customer-funded preorders, open-source leverage.
4. **Who can spend money without asking, up to what limit?** If the answer is
   "no one," the campaign's decision latency is its burn rate's best friend.
5. **Do the KPI/OKR and equity structures reward the behavior this strategy
   needs — or the behavior the last strategy needed?** Name one metric that
   actively fights the new plan.
6. **Would the SOP and the books survive an audit** — by an acquirer, a
   regulator, or a hostile journalist? 法令孰行 is scored by outsiders
   eventually; better to score it first.
7. **What is the break-even, computed?** Show the ladder from the unit
   economics gate or return `insufficient evidence` per row. Prose does not
   satisfy this question.

## Workflow

1. **Read the memory first.** `miaosuan-recalibration.md` if present, then prior
   `operating-model.md` and `terrain-survey.md` (a 死地 classification changes
   everything below). List artifacts found and missing.
2. **Fix the decision** this examination gates, and select the deep mode.
3. **Run the forcing questions.** `AskUserQuestion` where spend authority or
   metric ownership is ambiguous — these are exactly the questions orgs answer
   vaguely on purpose.
4. **曲制 — map the organization against the strategy.** List the strategy's
   required capabilities; for each, the unit that owns it, or `unowned`. The
   unowned list is usually the finding.
5. **官道 — map the recurring decisions.** For each: holder, measured (not
   estimated) latency where evidence exists, escalation path, and the
   decisions that currently require the founder/CEO but shouldn't. 將能而君
   不御者勝 applies inside companies too.
6. **主用 — run the economics.** Complete the unit economics gate output
   block: contribution ladder, break-even CAC, allowable CAC vs. observed
   category CAC, payback vs. runway. In 未戰 situations use quotes and
   benchmarks with every estimated row marked. Apply the gate's hard checks —
   a "minimum acceptable COGS" that yields negative contribution at category
   CAC is a trap, not a floor; retention theses need retention proxies.
7. **Test incentives against the strategy** (forcing Q5) and compliance
   against disclosure (forcing Q6); record specific conflicts, not vibes.
8. **Write the artifact** `operating-model.md`. `/sunzi-compare` reads it for
   rows 4 (法令孰行), 5 (兵眾孰強), and 7 (賞罰孰明); `/sunzi-retro` diffs it
   after contact.
9. **Route.** Economics fail → back to the decision owner with the
   restructure options (raise AOV, change channel, 因糧於敵) before any
   maneuver skill runs. Decision-rights failure → `/sunzi-command` for the
   holder assessment. All green → `/sunzi-compare`.

## Output

```markdown
# Operating Model (法)

Date: · Decision gated: · Deep mode: 曲制 / 官道 / 主用
Foundation artifacts read: [list] / none
未戰 lane: yes/no

## 曲制 — Organization vs. Strategy
| Required capability | Owning unit | Evidence it functions | Unowned / conflicted? |
|---|---|---|---|

## 官道 — Decision Rights
| Recurring decision | Holder | Latency (measured/estimated) | Escalation path | Should move to |
|---|---|---|---|---|
Spend authority without approval: [role → limit] / none exists

## 主用 — Provisioning
Daily fully-loaded cost of the campaign: $ (±%)
Pyrrhic threshold: $
因糧於敵 opportunities: 

### Unit Economics Gate
- Price / AOV:            $
- Landed COGS:            $   (source: quote / estimate / benchmark)
- Payment + fulfillment:  $
- Returns reserve:        $   (rate assumed: %)
- Contribution:           $
- Break-even CAC:         $
- Allowable CAC:          $   (target margin: %)
- Category CAC range:     $–$ (source)
- Payback period:         (vs. runway: )
- Verdict on economics:   viable / viable-if / not viable
- Kill criterion:         (the number that stops the campaign)

## Incentive Conflicts (賞罰)
| Metric or incentive | Behavior it rewards | Conflict with strategy |
|---|---|---|

## Compliance / Audit Exposure
| Area | State | Would survive audit? | Fix owner |
|---|---|---|---|

## Verdict
The machine can run this strategy: yes / yes-if / no
Binding constraint: 
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

- **Numbers or `insufficient evidence` — never prose in a numeric row.** The
  economics gate is enforced cell by cell; a skipped row is a failed run.
- **No verdict on a money campaign without break-even vs. category CAC.**
  "Watch contribution margin" is not an output of this skill.
- The daily-cost question (forcing Q1) is always asked, in every mode. 日費千金
  was the *opening* of the cost chapter, not a footnote.
- Decision-rights rows use measured latency where any evidence exists; mark
  estimates as estimates.
- This skill maps who holds authority; it does not assess whether they are
  good at it — that boundary with `/sunzi-command` keeps both skills honest.
- No stratagem lenses; diagnosis only.
- Incentive findings name specific metrics and specific conflicts. "Culture
  issues" is not a finding.
- The artifact write is not optional. No `operating-model.md`, no completed run.

## Anti-patterns

- **The uncosted campaign** — strategy prose approved while nobody can state
  the daily burn within 20%.
- **The floor that is a trap** — a "minimum acceptable COGS" that loses money
  at category CAC, presented as a safe bound.
- **Latency folklore** — "we move fast" recorded as evidence; measure a real
  decision's clock time instead.
- **Metric archaeology** — KPIs from the previous strategy left running
  because removing them is awkward; they are now paying people to fight the
  plan.
- **Audit optimism** — compliance marked green because no one has looked.
- **Org-chart realism** — mapping the org as drawn instead of as it actually
  decides; the map must follow the decisions, not the boxes.
