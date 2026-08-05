---
name: sunzi-intelligence
version: 1.0.0
description: Use when the plan depends on knowing something you don't — what the rival intends, what customers actually do, what the channel really thinks — and the knowledge must come from people and legitimate sources rather than guesses; the 用間 discipline of collection, verification, and the ethical line that keeps intelligence from becoming espionage.
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - WebSearch
  - AskUserQuestion
triggers:
  - what do we know about them
  - find out what they're planning
  - we're guessing about the market
  - competitive intelligence
  - who would know this
  - 先知
---

# Sunzi Intelligence (用間)

The intelligence officer. Every artifact in this pack has an evidence column,
and this skill is where the evidence comes from: what the campaign needs to
know, who actually knows it, how to collect it without crossing a line, and
how to verify it before it steers money. 用間篇 is the *last* chapter of the
thirteen for a reason — everything upstream runs on what it supplies.

## When to invoke this skill

- A scorecard, survey, or wedge analysis is full of 不知 rows and the
  `needed next` column has become the real work plan.
- The plan's load-bearing assumption is about the rival's intent, capacity,
  or timeline — and nobody can name its source.
- A signal arrived (a rival's move, a market rumor, a sudden metric shift)
  and needs verification before anyone reacts to it.
- Collection is already happening ad hoc and needs discipline before someone
  improvises across the ethical line.

## When NOT to invoke this skill

- The evidence exists and needs weighing → the skill that owns the artifact.
- The question is what people would *do* in a scenario →
  `sunzi-stakeholder-ssr` (simulation); this skill collects what *is*.
- Market-signal manipulation screening (pump patterns, spoofed momentum) →
  the [market signal forensics](../../references/market-signal-forensics.md)
  reference, pulled in by whichever skill hit the signal.

## Not sure this is your stage?

If you cannot tell which stage your question belongs to, invoke
`sunzi-strategy-consultant` instead — it triages, dispatches, and carries the
artifacts. Running this skill alone is also a supported, first-class use; you
do not have to run the whole loop to get value from one stage.

## Canonical grounding

用間篇 opens by pricing ignorance:

> 相守數年，以爭一日之勝，而愛爵祿百金，不知敵之情者，不仁之至也。

Armies hold position for years to contest a single day's victory — and to
begrudge the modest cost of knowing the other side is the height of
irresponsibility. Modern translation: teams spend millions on a launch and
skip the five customer calls that would have re-aimed it.

Then the epistemology:

> 先知者，不可取於鬼神，不可象於事，不可驗於度，必取於人，知敵之情者也。

Foreknowledge cannot come from spirits, analogy, or extrapolation — it must
be taken from people who know the actual situation. Dashboards extrapolate;
people know. The chapter's five collection channels translate to legitimate
modern equivalents:

| 間 | Canonical | Legitimate modern channel |
|---|---|---|
| 鄉間 | Local people | Customers, users, community members in the arena — interviews, support conversations, reviews, forums |
| 內間 | Officials of the other side | *Former* insiders speaking within their legal bounds: ex-employees in public interviews, alumni networks, published post-mortems. Never current employees induced to breach duties |
| 反間 | The rival's own scouts | The rival's public collection turned into signal: their job postings, their analyst questions, their sales teams' claims about you — what they probe reveals what they plan |
| 死間 | Expendable misinformation | **Not translated.** Feeding false information through channels is deception the guardrails prohibit; the modern lesson is defensive — assume your own visible signals are read, and manage what you broadcast |
| 生間 | Returning observers | Your own people in the field: sales call notes, win/loss interviews, conference conversations, partner check-ins — collected systematically instead of evaporating |

## Forcing questions

1. **What decision does this intelligence change?** Collection without a
   consuming decision is surveillance hobbyism; name the artifact row it
   fills.
2. **Who actually knows this?** Not "the market" — the named category of
   person: the rival's channel partners, their ex-PMs, your shared
   customers, the regulator's public docket.
3. **Is the channel legitimate?** The line, explicitly: public record,
   consented conversations, published material, observed market behavior —
   yes. Pretexting, induced breach of confidence or contract, misrepresented
   identity, scraped private data, current-employee poaching for secrets —
   no, at any value.
4. **How will it be verified before it steers money?** Single-source
   intelligence is a hypothesis; the corroboration plan is part of the
   collection plan.
5. **What are you broadcasting?** The 反間 mirror: your postings, demos,
   pitch decks, and supplier RFQs are the rival's collection. What does the
   current broadcast reveal, and is that intended?

## Workflow

1. **Read the artifacts** — the 不知 rows and `needed next` columns of
   `miaosuan-scorecard.md`, `terrain-survey.md`, and `maneuver-brief.md` are the
   requirements list. Missing scorecard → foundation warning, proceed.
2. **Write the requirements table** (Q1): each unknown → the decision it
   gates → the artifact row it fills → its priority (what money moves on it).
3. **Map sources** (Q2) per requirement using the five-channel table;
   `WebSearch` for the public layer (filings, postings, dockets, archives,
   reviews) before any human collection is planned.
4. **Run the legitimacy screen** (Q3) on every planned collection step;
   anything on the wrong side of the line is struck and replaced with the
   nearest legitimate alternative, in writing.
5. **Set the verification plan** (Q4): corroboration source, consistency
   checks (does the claim fit observed behavior?), and the confidence tier
   the intelligence enters the artifacts at.
6. **Run the broadcast review** (Q5) and record what your own visible
   surface currently tells a competent rival collector.
7. **Write the artifact** `intelligence-brief.md`: requirements, sources,
   collection status, verification state, broadcast findings. Feed verified
   items back into the artifacts they were collected for, at their tier.
8. **Route.** Requirements filled → back to the skill that was blocked.
   Signal verified as manipulated or spoofed → market signal forensics
   handling in the consuming skill.

## Output

```markdown
# Intelligence Brief (用間)

Date: · Campaign: 
Foundation: [artifacts read] / ⚠ running without foundation audit

## Requirements
| Unknown | Decision it gates | Artifact row it fills | Priority |
|---|---|---|---|

## Source Map
| Requirement | Channel (鄉/內/反/生) | Named source category | Legitimacy screen |
|---|---|---|---|

## Collection Status
| Item | Collected from | Verified by | Confidence tier | Fed into |
|---|---|---|---|---|

## Broadcast Review (反間 mirror)
What your visible surface reveals: 
Intended: yes/no · Adjustment: 

## Struck Items
| Proposed collection | Why struck | Legitimate replacement |
|---|---|---|

## Route
Unblocked skills: · Remaining 不知 rows: 
```

## Hard rules

- **The legitimacy line is absolute and precedes value.** No pretexting, no
  misrepresented identity, no induced breach of confidence, contract, or
  duty, no scraped private data, no soliciting current employees for
  secrets — at any intelligence value. Struck items are recorded with their
  replacement, so the line leaves a paper trail instead of a temptation.
- 死間 is not translated into practice. This pack does not design
  misinformation, seeding, or deceptive signaling — the row exists in the
  table to teach the defensive mirror only.
- Single-source intelligence enters artifacts flagged as such and cannot be
  the sole support of a `start` verdict row.
- Every collection step names the decision it serves. Standing surveillance
  of rivals with no consuming decision is struck.
- Verification happens before the intelligence steers money, not after.
- The broadcast review is mandatory — collection discipline without
  emission discipline is half the chapter.
- The artifact write is not optional.

## Anti-patterns

- **Dashboard divination** — 不可驗於度: extrapolating the rival's intent
  from your own metrics because talking to a human felt slow.
- **The intelligence hobby** — a beautifully maintained competitor wiki that
  no decision has ever consumed.
- **Single-source certainty** — one ex-employee's recollection steering the
  quarter.
- **The gray-zone drift** — each collection step slightly bolder than the
  last because no line was written down at the start.
- **Broadcast blindness** — meticulous collection on them while your own
  job postings announce your roadmap quarterly.
- **Rumor velocity** — reacting to a rival signal before verifying it;
  unverified signal moving money is the definition of being someone else's
  死間.
