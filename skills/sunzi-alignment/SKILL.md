---
name: sunzi-alignment
version: 1.0.0
description: Use when the question is whether anyone will actually follow — product-pain reality, incentive distribution across shareholders, employees, and customers (上下同欲), coalition strength before a hard push, or repairing a fracture after a broken promise; the mandate examination behind every strategy that needs people to move.
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - WebSearch
  - AskUserQuestion
triggers:
  - will the team follow
  - do users actually want this
  - is our mandate real
  - why is nobody bought in
  - alignment check
  - 上下同欲
---

# Sunzi Alignment (道)

The legitimacy examiner. 道 is listed first among the five factors because it
is the one that cannot be bought mid-campaign: whether the people you need —
team, customers, capital, partners — follow you when following costs them
something. Strategies do not fail at the whiteboard; they fail when the third
hard month arrives and the mandate turns out to have been a slide.

## When to invoke this skill

- Before any campaign that needs sustained effort from people who could
  choose otherwise — a pivot, a hard launch, a turnaround, a migration.
- Someone asks "why is nobody bought in?" or execution is dragging without an
  execution explanation (if the machine is the problem, that is `/sunzi-method`).
- A product-market question is really a mandate question: does anyone hurt
  enough to pay, switch, or evangelize?
- Equity, comp, or pricing is being restructured and the question is whether
  the new split creates 上下同欲 or resentment.
- A promise was broken — layoff handled badly, repriced customers, missed
  commitment — and the fracture needs repair before the next campaign.

## When NOT to invoke this skill

- The machine can't execute (structure, latency, economics) → `/sunzi-method`.
- The leader is the question → `/sunzi-command`.
- The window is the question → `/sunzi-timing`.
- Simulating specific stakeholder reactions to a specific move →
  `sunzi-stakeholder-ssr` — that skill pressure-tests a plan; this one
  examines the standing mandate the plan will draw on.

## Canonical grounding

始計篇:

> 道者，令民與上同意也，故可以與之死，可以與之生，而民不畏危。

道 is what makes the led and the leadership of one mind — able to face death
and life together without fear of the danger. Strip the military register and
the definition is precise: alignment is measured by **what people are willing
to risk alongside you**, not by what they applaud.

謀攻篇 gives the victory condition:

> 上下同欲者勝。

Those above and below wanting the same thing — the only one of the five
victory-knowings that is purely about alignment. It is a statement about
*wanting*, which is why incentive distribution is a 道 question, not a
compensation detail: people want what they are structurally given reason to
want.

## Modes

| Mode | When | What changes |
|---|---|---|
| **MANDATE AUDIT** | Standing check before a campaign | Full examination: pain reality, incentive map, followership evidence |
| **COALITION BUILD** | A specific hard push needs specific backers | Maps the minimum winning coalition: who must actively support, who must merely not block, and what each needs |
| **FRACTURE REPAIR** | A broken promise damaged the mandate | Names the breach precisely, what was lost, what repair costs, and what cannot be repaired — repair that skips the naming is re-injury |

## Forcing questions

1. **What user pain does this actually solve, and what is the evidence someone
   pays to have it solved?** Payment, switching, or workflow change — not
   applause, signups, or polite interviews.
2. **Who pays a real cost to follow you, and what is the cost?** Career risk,
   switching cost, opportunity cost. Alignment that costs nothing proves nothing.
3. **Does the distribution of upside — equity, comp, pricing — make the people
   you need 上下同欲, or are you asking for loyalty you haven't funded?**
4. **If you are wrong about this, who tells you — by name?** A mandate with no
   internal dissent channel is a mandate nobody has tested.
5. **Whose incentive is opposed to this, and are they inside your tent or
   outside it?** Inside opponents with unaddressed incentives become the
   campaign's second front.
6. **If this fails publicly, who defends you without being asked?** The
   answer measures the mandate's depth better than any engagement survey.

## Workflow

1. **Read the memory first.** `廟算-recalibration.md` if present, then prior
   `mandate-audit.md` — a mandate that needed repair last campaign starts
   this one lower. List artifacts found and missing.
2. **Fix the decision** this examination gates, and select the mode.
3. **Run the forcing questions.** `AskUserQuestion` where the constituency is
   ambiguous — "the team" is usually three constituencies with three
   different incentive positions.
4. **Map the constituencies.** For each group whose effort or money the
   strategy needs: what they are asked to risk, what they are structurally
   given for it, evidence of current followership (tier-labeled: behavior >
   survey > management impression), and their named dissent channel.
5. **Test the pain claim** (forcing Q1) against behavioral evidence. In 未戰
   situations use probe evidence — priced preorders, waitlists with skin in
   the game — labeled as probe tier; interviews alone do not settle a pain claim.
6. **Find the opposed incentives** (forcing Q5) and state each as a specific
   structural conflict, not a personality.
7. **In FRACTURE REPAIR mode**: name the breach, the constituency, what
   specifically was promised and broken, current cost in followership, the
   repair options with their prices, and what is unrepairable. 民不畏危 is
   earned back slowly or not at all.
8. **Write the artifact** `mandate-audit.md`. `/sunzi-compare` reads it for
   row 1 (主孰有道); `sunzi-stakeholder-ssr` uses the constituency map as its
   persona base.
9. **Route.** Mandate weak on pain evidence → back to probes before any
   spend. Mandate weak on incentives → `/sunzi-method` (賞罰 mechanics).
   Mandate strong → `/sunzi-compare`.

## Output

```markdown
# Mandate Audit (道)

Date: · Decision gated: · Mode:
Foundation artifacts read: [list] / none
未戰 lane: yes/no

## Pain Reality
Claimed pain: 
Behavioral evidence (tier): 
What the evidence cannot yet show: 

## Constituency Map
| Constituency | Asked to risk | Structurally given | Followership evidence (tier) | Dissent channel (named person) |
|---|---|---|---|---|

## Opposed Incentives
| Actor | Structural conflict | Inside/outside the tent | Addressed how |
|---|---|---|---|

## The Depth Tests
Who tells you when you are wrong (by name): 
Who defends you unasked if this fails publicly: 

## Mode-specific
[COALITION: minimum winning coalition table]
[FRACTURE: breach / cost / repair options / unrepairable]

## Verdict
Mandate: strong / conditional / weak / fractured
The condition (if conditional): 
Needed next: 
```

## Hard rules

- Pain claims are settled by **behavioral** evidence — payment, switching,
  workflow change — or marked unsettled. Applause is not evidence; 上下同欲
  is about 欲, and 欲 is revealed by cost accepted, not words offered.
- Every constituency row names a real dissent channel or records `none` — and
  `none` is a finding, not a blank.
- Opposed incentives are stated structurally ("comp plan pays X for the old
  motion") — never as character judgments.
- FRACTURE REPAIR must name what is unrepairable. Pretending everything heals
  is how the next fracture is scheduled.
- No stratagem lenses; diagnosis only.
- Followership evidence carries tiers like every other evidence in the pack.
- The artifact write is not optional. No `mandate-audit.md`, no completed run.

## Anti-patterns

- **Applause accounting** — NPS, all-hands energy, and polite user interviews
  recorded as mandate evidence.
- **The unfunded ask** — demanding startup-level commitment on salary-level
  upside and recording the gap as a culture problem.
- **Dissent theater** — an anonymous survey standing in for a named person
  who actually tells the leader no.
- **Tent blindness** — mapping external opposition carefully while the
  opposed incentive sitting in the leadership team goes unnamed.
- **Repair by announcement** — declaring the fracture healed because an
  apology was published; repair is measured in the constituency's behavior,
  not the leadership's communications.
