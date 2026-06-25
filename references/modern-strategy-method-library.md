# Modern Strategy Method Library

Use this reference as a supplemental method screen before selecting Sunzi or
Thirty-Six Stratagems lenses. It exists to improve business rigor, not to replace
the stack's evidence-first strategic spine. For deeper reader-digest synthesis
and capability family-tree mapping, use [Tool-Book Family Tree For AI Agent
Strategy Work](./tool-book-family-tree.md).

Core rule: privately screen the method library, then output only 1 to 2 selected
methods that materially improve the diagnosis. Do not dump a framework catalog.

## Public-Safe Source Boundary

- Modern business books are bibliographic anchors only.
- User-provided reading notes can be synthesized into an original reader digest
  or insight brief, but the output must be based on the user's notes plus the
  agent's original analysis.
- Do not reproduce copyrighted text, chapter-by-chapter summaries, distinctive
  tables, diagrams, case wording, or author-specific phrasing.
- Do not launder third-party online book summaries into the public pack.
- Public-domain classical source text may be grounded to Wikisource; modern
  business books should be title / author / link / topic anchors only.
- Do not imply endorsement by authors, publishers, platforms, companies, or
  training programs.
- Do not repeat prestige claims such as "largest global circulation" or
  "Fortune 500 training material" unless the implementation has a direct public
  source for the claim.

## Book And Framework Anchors

Use these anchors to classify the strategy job, not to borrow prose.

| Anchor | Use in this stack | Public-safe use |
|---|---|---|
| Gerald A. Michaelson, [Sun Tzu: The Art of War for Managers](https://books.google.com/books/about/Sun_Tzu_The_Art_of_War_for_Managers.html?id=IujsDQAAQBAJ) | Management, competition, and leadership translation of Sun Tzu. | Cite as a management application anchor; write original checks. |
| Donald G. Krause, [The Art of War for Executives](https://books.google.com/books/about/The_Art_of_War_for_Executives.html?id=fnFQPgAACAAJ) | Executive judgment, organizational discipline, and leadership framing. | Cite as an executive application anchor; avoid unsourced training claims. |
| David Brown, [The Art of Business Wars](https://www.harpercollins.com/products/the-art-of-business-wars-david-brown) | Business rivalry cases and leadership lessons. | Use as a case-learning anchor; do not retell proprietary chapter cases in detail. |
| Michael Porter, [Five Forces](https://www.isc.hbs.edu/strategy/business-strategy/Pages/the-five-forces.aspx) | Industry structure, profit pool, and competitive pressure. | Use the five forces as evidence lanes for market structure. |
| PDCA / PDSA cycle, [AHRQ Plan-Do-Check-Act](https://digital.ahrq.gov/health-it-tools-and-resources/evaluation-resources/workflow-assessment-health-it-toolkit/all-workflow-tools/plan-do-check-act-cycle) | Operating loops, experiments, process improvement, and after-action review. | Use as an iteration contract with owner, cadence, metric, and adjustment rule. |

## User-Read Book Synthesis

Use this only when the user supplies their own reading notes, authorized
excerpts, or concrete takeaways and wants the stack to turn them into strategy
skill material. If the user has not supplied notes or takeaways, use public
metadata only and ask for notes before producing a digest.

Allowed output:

- Reader digest: 5 to 9 original bullets that compress the user's takeaways
  into business-useful ideas.
- Consultant insight: what the book changes about diagnosis, sequencing,
  stakeholder risk, evidence, or kill criteria.
- Prompt application: how the insight should change a skill instruction,
  output template, review gate, or example.
- Presentation angle: the one-slide message a consultant could defend in front
  of executives.

Required boundaries:

- Label the source as `user-provided reading notes` when the insight comes from
  the user's reading.
- Use `public metadata only` when the book itself has not been supplied.
- Do not claim the digest is an authoritative summary of the full book.
- Do not include long quotes, distinctive tables, chapter structures, or detailed
  case retellings from modern copyrighted books.
- Keep repo text original and compatible with the CC BY 4.0 content license.

## Consultant-Agency Presentation Review

Use this review after drafting method-library or skill changes that are meant to
improve executive readability.

Simulated reviewer stance:

- Label clearly as a synthetic consultant-agency presentation review, not a real
  consultant, agency, publisher, or author endorsement.
- Return `Verdict: go / revise / stop`, a one-slide headline, three evidence
  bullets, a risk / stop-rule line, and exact wording cuts.
- Judge whether the output has a one-slide storyline: decision, tension,
  evidence, strategic move, risk, and stop rule.
- Check whether the new method insight improves the presentation or merely adds
  jargon.
- Require the final wording to be shorter, sharper, and safer when a section
  feels like book-report prose.
- Preserve the Sunzi stack identity: modern method framing supports terrain and
  lensing; it does not become the main product.

## Method Selection Rules

| Method | Use when | Evidence required | Visible output | Misuse risk |
|---|---|---|---|---|
| MECE / logic tree | The problem is tangled, multi-cause, or option-heavy. | Branches, assumptions, missing data, and falsifiers for each branch. | A short decomposition of the controlling branches. | Template theater: neat branches without evidence. |
| 3C | Positioning depends on customer, company, and competitor fit. | Current customer behavior, internal capability, and competitor response evidence. | The one mismatch or leverage point across customer, company, and competitor. | Treating competitor moves as more important than customer reality. |
| Porter Five Forces | The decision depends on industry attractiveness, profit pool, or market structure. | Buyer power, supplier power, substitutes, rivalry, entrants, and trend evidence. | The force that most changes strategic freedom or margin. | Applying an industry tool to a narrow feature or internal workflow. |
| SWOT | The evidence ledger already exists and needs synthesis. | Evidence for each quadrant, plus missing data and falsifier. | A compact synthesis table only after evidence is gathered. | Starting with SWOT before analysis, causing vague positives and negatives. |
| PDCA | The work is an SOP, operations loop, rollout, or reversible experiment. | Owner, cadence, leading metric, learning rule, stop / adjust criterion. | The next cycle: plan, do, check, act. | Endless iteration without a decision threshold. |

## Modern Strategy Frame (Optional, Evidence-Gated)

When useful, add this optional short section after `Decision` and before
`First-Principles Map`.

```markdown
## Modern Strategy Frame (optional, evidence-gated)

- Method selected:
- Strategic tension:
- Governing choice:
- Proof signal:
- Stop / retreat trigger:
```

Keep it to 3 to 5 bullets. If no modern method materially improves the diagnosis,
omit the section and say so only if the user asked for method review.

## Review Questions

Before final recommendation, ask:

1. Did the method reveal evidence the lens alone would miss?
2. Is each method claim tied to the source/evidence ledger?
3. Are we using a method because the situation fits, or because the framework is
   familiar?
4. Did the method change the recommended move, metric, or kill criterion?
5. Would the output still make sense if the Sunzi lens names were removed?
