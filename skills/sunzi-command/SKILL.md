---
name: sunzi-command
version: 1.0.1
description: Use when the decision-maker is the variable — assessing whether you or your leadership bench can actually run the campaign being planned, reading a rival CEO's or counterpart negotiator's command profile, or checking a leader's exposure to the five classical command failures (將有五危) before a high-pressure fight.
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - WebSearch
  - AskUserQuestion
triggers:
  - can I actually lead this
  - assess their CEO
  - read the counterpart
  - is our leadership ready
  - leadership risk check
  - 將有五危
---

# Sunzi Command (將)

The command assessor. Strategy documents assume a commander who executes them;
this skill examines that assumption. It scores command against the canonical
five qualities, screens for the five classical ways a commander destroys
themselves, and reads the rival's command with the same instruments — because
將孰有能 is a comparison, and comparisons need both sides.

## When to invoke this skill

- A campaign is being planned and the honest question is whether the person
  planning it can run it — the self-audit nobody schedules.
- A rival's or counterpart's behavior needs reading: an incumbent CEO's
  pattern under pressure, a negotiation counterpart's temperament, an
  acquirer's decision style.
- The exec bench is about to be load-tested — a launch, a crisis, a
  turnaround — and capability is assumed rather than assessed.
- `/sunzi-method` found decision rights held by people whose capability for
  those decisions is untested; this skill assesses the holders.
- A leader keeps getting baited — into price wars, public fights, defensive
  launches — and the pattern needs naming.

## When NOT to invoke this skill

- Who *holds* which decision, and at what latency → `/sunzi-method` (官道).
  This skill assesses the holders that map identified.
- Whether people follow the leader → `/sunzi-alignment` (道). Followership is
  mandate; this is capability.
- Personal career decisions → `sunzi-decision-review`.
- Simulating a counterpart's reaction to a specific move →
  `sunzi-stakeholder-ssr`; this skill profiles the standing pattern, SSR
  plays out the scenario.

## Not sure this is your stage?

If you cannot tell which stage your question belongs to, invoke
`sunzi-strategy-consultant` instead — it triages, dispatches, and carries the
artifacts. Running this skill alone is also a supported, first-class use; you
do not have to run the whole loop to get value from one stage.

## Canonical grounding

始計篇 gives the rubric:

> 將者，智、信、仁、勇、嚴也。

Five qualities, in order: judgment (智), trustworthiness (信), care for people
(仁), decisiveness under risk (勇), and discipline (嚴). The order is not
decorative — judgment leads, and discipline without the first four is just
harshness.

九變篇 gives the failure taxonomy:

> 故將有五危：必死可殺，必生可虜，忿速可侮，廉潔可辱，愛民可煩。

Five exposures, each an over-rotation of a virtue, each exploitable by an
opponent who reads it. And 謀攻篇 names the structural failure above the
commander:

> 將能而君不御者勝。

The side whose able commander is not micromanaged from above wins — a test of
the board, the founder, or the parent org, not of the commander.

## Modes

| Mode | When | What changes |
|---|---|---|
| **SELF-AUDIT** | You (or your principal) will run the campaign | The five qualities and five exposures scored on your own record; requires behavioral evidence, not self-image — the mode is honest or it is worthless |
| **COUNTERPART** | A rival CEO, negotiator, or acquirer must be read | Same instruments applied from public record: decisions under pressure, bait responses, pattern of promises kept; feeds `/sunzi-compare` row 2 |
| **BENCH REVIEW** | The exec team's capability for a specific campaign | Each named leader against the specific demands of this fight — capability is per-campaign, not general; the gap list is the finding |

## The instruments

**The five qualities (智信仁勇嚴)** — each scored from cited behavior:

| 質 | What it is | Behavioral evidence looks like |
|---|---|---|
| 智 | Judgment: reading situations correctly, updating when wrong | Called decisions that aged well; visible updates on new evidence; the absence of repeated identical mistakes |
| 信 | Trustworthiness: promises kept, information reliable | Commitments landed on time or renegotiated early; no surprise reversals sprung on their own side |
| 仁 | Care: people fight for them, not just under them | Retention of strong people through hard periods; costs personally absorbed before being passed down |
| 勇 | Decisiveness under risk: commits when the moment is short | Named decisions made without complete information that were made *on time*; reversals owned publicly |
| 嚴 | Discipline: standards enforced, including on themselves | Consequences applied to high performers too; own rules followed when inconvenient |

**The five exposures (將有五危)** — each an over-rotation, each with its
modern bait:

| 危 | Canonical | Modern failure | The bait that exploits it |
|---|---|---|---|
| 必死可殺 | Reckless — can be killed | All-in on one bet, no fallback | An opponent offering a glorious decisive battle |
| 必生可虜 | Timid — can be captured | So risk-averse the company drifts into acquisition on someone else's terms | Slow strangulation that never presents a single alarming moment |
| 忿速可侮 | Quick-tempered — can be provoked | Baited into price wars, public feuds, rushed counter-launches | A rival's taunt priced at exactly one news cycle |
| 廉潔可辱 | Honor-proud — can be shamed | Reputation-managed into paralysis; cannot take a necessary ugly decision | Campaigns that make the right move look bad |
| 愛民可煩 | Over-solicitous — can be harassed | Cannot make anyone unhappy, so cannot decide; harassed by every constituency in turn | Sustained low-grade complaints that consume all decision bandwidth |

## Forcing questions

1. **Who has the authority to stop this campaign, and have they ever used
   it?** A stop authority never exercised is untested brakes.
2. **Which of the five exposures does the assessed leader actually exhibit?
   Cite behavior, not self-report** — the last three baited decisions, the
   last all-in, the last unmade decision that a constituency's unhappiness
   explains.
3. **What is the record under *this kind* of pressure?** Capability is
   campaign-specific: a brilliant peacetime operator with no crisis record is
   an unknown in a crisis, and the row scores 不知.
4. **將能而君不御 — is the operator second-guessed by someone with less
   information?** Board, founder, parent org. If yes, the command assessment
   must cover the second-guesser too, because they are in the chain whether
   the org chart admits it or not.
5. **For COUNTERPART mode: what bait has worked on them before?** Their five-危
   profile is your restraint officer's early-warning list — and note the
   mirror: your own profile is theirs.

## Workflow

1. **Read the memory first.** `miaosuan-recalibration.md` if present, then
   `operating-model.md` (the decision-rights map names who to assess) and
   prior `command-assessment.md`. List artifacts found and missing.
2. **Fix the campaign** the assessment is *for* — capability is per-fight —
   and select the mode.
3. **Run the forcing questions.** `AskUserQuestion` when the principal to
   assess is ambiguous. In COUNTERPART mode use `WebSearch` on the public
   record: interviews, earnings calls, past crisis handling, litigation
   conduct, exec departures.
4. **Score the five qualities** from cited behavior, tier-labeled. In
   SELF-AUDIT mode require at least one uncomplimentary citation per quality
   — a self-audit with five clean scores is an anti-pattern, not a result.
5. **Screen the five exposures**: for each, the behavioral evidence for and
   against, and — where exposed — the specific bait shape that exploits it.
6. **Run the 君不御 test** (Q4) and record the chain as it actually operates.
7. **In BENCH REVIEW mode**: map each named leader against this campaign's
   specific demands; the output is the gap list and what closes each gap
   (hire, pair, scope change, or accept-with-eyes-open).
8. **Write the artifact** `command-assessment.md`. `/sunzi-compare` reads it
   for row 2 (將孰有能); `/sunzi-restraint` reads the exposure profile as its
   provocation watch-list; SSR uses the counterpart profile for persona
   grounding.
9. **Route.** Serious self-exposure found → `/sunzi-restraint` gets the
   watch-list before any escalatory move. Bench gaps on a live campaign →
   `/sunzi-method` (can the org close them) then the decision owner.
   Assessment clean → `/sunzi-compare`.

## Output

```markdown
# Command Assessment (將)

Date: · Campaign assessed for: · Mode:
Principal(s) assessed: 
Foundation artifacts read: [list] / none

## Five Qualities (智信仁勇嚴)
| 質 | Verdict (strong/adequate/weak/不知) | Cited behavior (tier) | Campaign relevance |
|---|---|---|---|

## Five Exposures (將有五危)
| 危 | Exposed? | Evidence for / against | Bait shape that exploits it |
|---|---|---|---|

## Chain Test (君不御)
Stop authority: [who] · Ever exercised: yes/no
Second-guessing risk: none / [who, and on what class of decision]

## Mode-specific
[COUNTERPART: bait history · promises-kept record · read-confidence]
[BENCH: campaign demands vs named leaders · gap list · closure options]

## Verdict
Command for this campaign: ready / ready-with-guardrails / gapped / 不知
Guardrails required (if any): 
Watch-list for /sunzi-restraint: 
Needed next: 
```

## Hard rules

- **Every score cites behavior.** Self-report, reputation, and charisma are
  not evidence; 不知 is the honest score for an untested quality.
- **SELF-AUDIT requires at least one uncomplimentary citation per quality**
  or the run is void — the mode exists to find the exposures before a rival
  does.
- Exposure findings are stated as bait shapes, not character attacks — the
  output is defensive: know which provocations to pre-commit against.
- COUNTERPART assessments use public, legitimate sources only (see
  [ethical strategy guardrails](../../references/ethical-strategy-guardrails.md));
  the profile is for anticipating behavior, never for personal attack,
  harassment, or manufactured shame — 廉潔可辱 in your hands is a warning
  about *your* exposure, not a weapon.
- Capability verdicts are per-campaign. No general "great leader" scores.
- No stratagem lenses; diagnosis only.
- The artifact write is not optional. No `command-assessment.md`, no
  completed run.

## Anti-patterns

- **The clean self-audit** — five strong qualities, zero exposures, written
  by the assessed. Void by rule.
- **Halo scoring** — one genuine strength (usually 智 or 勇) silently filling
  in the other four rows.
- **Reputation as record** — press coverage and conference keynotes cited
  where decisions under pressure were required.
- **General-purpose greatness** — "proven leader" with no mapping to what
  this specific campaign demands.
- **Weaponized profiling** — using a counterpart's 五危 read to design
  humiliation or harassment; the rule above exists because the line is real.
- **Assessing everyone but the second-guesser** — a rigorous bench review
  that politely skips the founder who overrides it weekly.
