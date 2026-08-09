# 6DuckLearn Sunzi Strategy Stack

Public strategy skills that run a complete campaign loop for modern business
decisions: foundation audit, war-room count, maneuver design, stakeholder
stress test, restraint gate, and post-campaign recalibration — with a
first-class "do not start" verdict and evidence discipline at every stage.

This repository is intentionally standalone. It is shaped by the install-flow
clarity and validation ethos of public agent-skill stacks, but it does not
copy `gstack` content and it does not expose private 6DuckLearn product code.

## The Campaign Loop

The skills run in the order a campaign runs — 審 → 算 → 謀 → 驗 → 斷 → 省 —
each stage writing a plain-Markdown artifact the next stage reads:

| Stage | Skills | Artifact |
|---|---|---|
| **審** audit the five factors | `sunzi-alignment` 道 · `sunzi-timing` 天 · `sunzi-terrain` 地 · `sunzi-command` 將 · `sunzi-method` 法 | `mandate-audit.md`, `window-assessment.md`, `terrain-survey.md`, `command-assessment.md`, `operating-model.md` |
| **算** count before fighting | `sunzi-compare` — the 七計 scorecard vs. a named rival, position classification, 廟算 verdict | `miaosuan-scorecard.md` |
| **謀** devise the move | `sunzi-win-without-fighting` (謀攻 cost ladder) · `sunzi-find-the-wedge` (虛實) · `sunzi-contingency` (九變) · `sunzi-intelligence` (用間) | `maneuver-brief.md`, `intelligence-brief.md` |
| **驗** stress the plan | `sunzi-stakeholder-ssr` + `strategy-analyst-review` | labeled synthetic SSR + review findings |
| **斷** decide | `sunzi-restraint` (火攻 gate for irreversible moves) → decision memo | restraint verdict, memo |
| **省** reflect | `sunzi-retro` — re-score the seven comparisons against what happened | `miaosuan-recalibration.md` (the next count reads it first) |

`sunzi-strategy-consultant` is the orchestrator: give it a whole situation and
it walks the loop, surfacing only the decisions that are genuinely yours (the
rival to count against, position claims, overrides, irreversible moves, the
kill criterion). The expected output is a decision memo with an artifact
trail — not a motivational essay — and an engagement that ends at
`do not start` is a completed engagement.

## Quick Start

**From npm** (no clone needed):

```bash
npm install @6ducklearn/sunzi-stack && mkdir -p ~/.codex/skills ~/.codex/references \
  && cp -R node_modules/@6ducklearn/sunzi-stack/skills/* ~/.codex/skills/ \
  && cp -R node_modules/@6ducklearn/sunzi-stack/references/* ~/.codex/references/
```

Or install it and copy from `node_modules/@6ducklearn/sunzi-stack/`:

```bash
npm install @6ducklearn/sunzi-stack
mkdir -p ~/.codex/skills ~/.codex/references
cp -R node_modules/@6ducklearn/sunzi-stack/skills/* ~/.codex/skills/
cp -R node_modules/@6ducklearn/sunzi-stack/references/* ~/.codex/references/
```

**From source:**

```bash
git clone https://github.com/kit18/6ducklearn-sunzi-stack.git
cd 6ducklearn-sunzi-stack
npm test
mkdir -p ~/.codex/skills ~/.codex/references
cp -R skills/* ~/.codex/skills/
cp -R references/* ~/.codex/references/
```

Adjust the target path for your host — `~/.claude/skills/`, `~/.cursor/skills/`, and so on.
**Upgrading from v0.2.0?** Remove the four skills deleted in v1.0.0 first — see [Migration](./docs/MIGRATION.md).

Then ask your agent to use `sunzi-strategy-consultant` on a real decision —
or a single stage skill (`sunzi-compare`, `sunzi-timing`, `sunzi-restraint`)
when you know which question you are asking.

For agent-host wiring, use [AGENTS.md](./AGENTS.md) or the machine-readable profile at [agents/sunzi-strategy-consultant.yaml](./agents/sunzi-strategy-consultant.yaml).

## Which Skill To Use First

If you are unsure, start with `sunzi-strategy-consultant` and let it dispatch.

| User need | Start with | Reference example |
|---|---|---|
| Full strategy recommendation, board-ready memo | `sunzi-strategy-consultant` | [**Full campaign loop: DTC launch**](./examples/campaign-loop-dtc-launch.md) · [Ecommerce growth decision memo](./examples/ecommerce-growth-decision-memo.md) |
| "Should we enter / can we beat them / go or no-go?" | `sunzi-compare` | — |
| "Is now the moment?" / "are we too late?" | `sunzi-timing` | — |
| "What ground are we on?" / market map / exit question | `sunzi-terrain` | — |
| "Can we afford this / can the org execute it?" | `sunzi-method` | — |
| "Will anyone follow us?" / mandate or coalition check | `sunzi-alignment` | — |
| Leadership readiness, rival CEO read, bait-risk check | `sunzi-command` | — |
| "Do we have to fight?" / cheaper-rung search | `sunzi-win-without-fighting` | — |
| "Where do we attack / where are we exposed?" | `sunzi-find-the-wedge` | — |
| Kill criteria, triggers, plan-B design | `sunzi-contingency` | — |
| Price war, litigation, layoff, public fight — before committing | `sunzi-restraint` | — |
| "What do we actually know about them?" | `sunzi-intelligence` | — |
| Post-campaign or post-quarter learning | `sunzi-retro` | — |
| Everyday or professional decision, negotiation, conflict | `sunzi-decision-review` | [Career negotiation decision review](./examples/career-negotiation-decision-review.md) |
| Stakeholder reaction, backlash, migration objection, rollout stress test | `sunzi-stakeholder-ssr` | [API migration stakeholder SSR](./examples/api-migration-ssr.md) |
| Skill quality, adoption readiness, PM/UED focus group, user-intention scoring, or industry-leader archetype review | `sunzi-focus-group-skill-review` | [Industry leader smoke test](./examples/industry-leader-smoke-test.md) |

Growth, operations/SOP, and product/PRD reviews are served by the 五事 skills
pulling the matching deep [domain adapter](./references/domain-adapters.md)
([growth](./references/domain-adapters/growth.md) ·
[operations](./references/domain-adapters/operations.md) ·
[product](./references/domain-adapters/product.md)) — in v0.2.0 these were
standalone skills; see [Migration](./docs/MIGRATION.md).

## Included Skills

**The loop:**

- `sunzi-strategy-consultant`: the orchestrator — walks 審→算→謀→驗→斷→省 end to end and surfaces only the genuinely human decisions.
- `sunzi-alignment` (道), `sunzi-timing` (天), `sunzi-terrain` (地), `sunzi-command` (將), `sunzi-method` (法): the five-factor foundation audit, each with modes, forcing questions, and a chained artifact.
- `sunzi-compare`: the 七計 war-room count against a named rival — evidence-gated rows (勝/負/爭/不知), market-position classification (龍頭/挑戰者/顛覆者/劣勢 + 同盟 overlay), and a 廟算 verdict that includes `do not start`.
- `sunzi-win-without-fighting`: the 謀攻 cost ladder (伐謀→伐交→伐兵→攻城), walked in order, with force-ratio sizing doctrine.
- `sunzi-find-the-wedge`: 虛實 weakness-finding via the closing-cost test, with the mandatory 正/奇 split.
- `sunzi-contingency`: 九變 triggers, refusals (所不), and kill layers with named owners.
- `sunzi-restraint`: the 火攻 gate for irreversible moves — four written tests; the anger test's only remedy is time.
- `sunzi-intelligence`: 用間 collection discipline with an absolute legitimacy line and the broadcast (反間) mirror.
- `sunzi-retro`: 省 recalibration — the diff between what the count predicted and what happened, appended to the pack's memory.

**Standing skills:**

- `sunzi-decision-review`: everyday and professional decisions, negotiation, workplace conflict, defensive tactic detection, waiting, preparation, and retreat.
- `sunzi-stakeholder-ssr`: cross-domain stakeholder stress-reaction simulation for growth, operations, product/API, pricing, policy, migration, outage, and executive-strategy pressure tests.
- `strategy-analyst-review`: the quality gate for proposed strategies, lens choices, risks, falsifiers, and kill criteria.
- `sunzi-focus-group-skill-review`: PM/UED-led multi-stakeholder focus group review for skill quality, adoption risk, user-intention simulation, 360 comments, dynamic deterministic scoring, dissent, and improvement recommendations.

See [examples/campaign-loop-dtc-launch.md](./examples/campaign-loop-dtc-launch.md)
for one decision run through all six stages, including the unit-economics gate
catching a cost target that looked like a floor and was actually a trap.

### The quick path

**You do not have to run the whole loop.** Most questions are one stage, and
running that stage alone is a supported, first-class use — not a shortcut:

| You have | Run just | It takes |
|---|---|---|
| A rival and a go/no-go | `sunzi-compare` | one skill, one scorecard |
| A "why now?" argument you distrust | `sunzi-timing` | one skill, the runway test |
| An offer whose economics nobody computed | `sunzi-method` (PROVISIONING) | one skill, a break-even |
| An angry decision about to be made | `sunzi-restraint` | one skill, four tests |
| A campaign that just ended | `sunzi-retro` | one skill, a recalibration |

Run the full loop when the decision is large, contested, and committing.
Use `sunzi-strategy-consultant` when you are not sure which stage you are in —
it triages and dispatches, and it is the right default for a first run.

The architecture and its canonical grounding are documented in
[docs/ARCHITECTURE-WUSHI.md](./docs/ARCHITECTURE-WUSHI.md).

## Install Options

Copy the `skills/*` directories and shared `references/*` pack into an agent host that supports local skills, or point your internal skill loader at this repository.

Example local copy:

```bash
mkdir -p ~/.codex/skills ~/.codex/references
cp -R skills/* ~/.codex/skills/
cp -R references/* ~/.codex/references/
```

See [Install and Adoption](./docs/INSTALL.md) for host-agnostic setup guidance and [Adoption Checklist](./docs/ADOPTION-CHECKLIST.md) for rollout review.

Use only the public files in this repo. Hosted 6DuckLearn agent profiles, private memory, approvals, OAuth, billing, and runtime execution remain on `https://6ducklearn.com`.

## Source Grounding

The Thirty-Six Stratagems reference is grounded in the public-domain Wikisource text for `三十六計`:

https://zh.wikisource.org/wiki/%E4%B8%89%E5%8D%81%E5%85%AD%E8%A8%88

The source stories are used for mechanism checks and analogy quality. They are not moral permission to deceive, manipulate, coerce, violate law, or exploit vulnerable people.

Modern business strategy sources are used as bibliographic anchors and method
selection aids only. The public pack does not reproduce copyrighted modern book
text, chapter summaries, distinctive tables, diagrams, or author-specific
phrasing.

When a user has read a book and supplies their own notes, the stack may produce
an original reader digest, consultant insight brief, or synthetic
consultant-agency presentation review. These outputs must be labeled as
user-provided reading-note synthesis or synthetic review, not as copied text,
author endorsement, or a definitive full-book summary.

The full public reference pack adds the operating matrix, domain adapters, market-signal forensics, validation corpus, and output contract so installers can audit behavior without private 6DuckLearn runtime code.

## Templates

- [Decision memo template](./references/decision-memo-template.md)
- [Business war-room template](./references/business-war-room-template.md)
- [Ethical strategy guardrails](./references/ethical-strategy-guardrails.md)
- [Ethical use guardrails](./references/ethical-use-guardrails.md)
- [Thirty-Six Stratagems matrix](./references/thirty-six-stratagems-matrix.md)
- [Applied use case map](./references/applied-use-case-map.md)
- [Stakeholder Stress-Reaction Simulation](./references/stakeholder-stress-reaction.md)
- [SSR evaluation scenarios](./references/ssr-evaluation-scenarios.md)
- [Real-life DoD case map](./references/real-life-dod-case-map.md)
- [Domain adapters](./references/domain-adapters.md)
- [Domain review contracts](./references/domain-review-contracts.md)
- [Market signal forensics](./references/market-signal-forensics.md)
- [Strategy output template](./references/strategy-output-template.md)
- [Modern strategy method library](./references/modern-strategy-method-library.md)
- [Tool-book family tree](./references/tool-book-family-tree.md)
- [Consulting case validation corpus](./references/consulting-case-validation-corpus.md)
- [Sunzi business consultant soul notes](./references/sunzi-business-consultant-soul.md)
- [Focus group panel contract](./skills/sunzi-focus-group-skill-review/references/panel-contract.md)
- [Strategy focus group evaluation](./references/strategy-focus-group-evaluation.md)
- [User intention metric contract](./references/user-intention-metric-contract.md)

## Examples

- [Ecommerce growth decision memo](./examples/ecommerce-growth-decision-memo.md)
- [Career negotiation decision review](./examples/career-negotiation-decision-review.md)
- [API migration stakeholder SSR](./examples/api-migration-ssr.md)
- [Growth community stakeholder SSR](./examples/growth-community-ssr.md)
- [Operations billing stakeholder SSR](./examples/operations-billing-ssr.md)
- [Real-life DoD case simulations](./examples/dod-case-simulations.md)
- [Operations supply-chain decision memo](./examples/operations-supply-chain-decision-memo.md)
- [AI transformation decision memo](./examples/ai-transformation-decision-memo.md)
- [Macro public-sector decision memo](./examples/macro-public-sector-decision-memo.md)
- [Market-risk no-trade review](./examples/market-risk-no-trade-review.md)
- [Strategy analyst review sample](./examples/strategy-analyst-review-sample.md)
- [Unsafe manipulation reframe](./examples/unsafe-manipulation-reframe.md)
- [Growth loop review](./examples/growth-loop-review.md)
- [Operations SOP review](./examples/operations-sop-review.md)
- [Product value PRD review](./examples/product-value-prd-review.md)
- [Focus group skill review](./examples/focus-group-skill-review.md)
- [Focus group strategy evaluation](./examples/focus-group-strategy-evaluation.md)
- [Industry leader smoke test](./examples/industry-leader-smoke-test.md)
- [Tool-book family tree AI-agent plan](./examples/tool-book-family-tree-ai-agent-plan.md)

## Industry-Leader Smoke Test

Use [industry-leader-smoke-test.md](./examples/industry-leader-smoke-test.md) when you want to verify the stack as a consultation company workflow instead of a single prompt. The example asks four synthetic industry-leader archetypes for Top 3 Problems, selects one case per industry, then runs the full loop:

1. Sunzi strategy consultant diagnosis.
2. Definition Of Done before simulation.
3. Synthetic SSR Output with evidence boundary.
4. Focus Group Review with dissent.
5. Strategy Analyst Gate with metrics and kill criteria.
6. Iteration until the final state is `works after revision`.

The agents are synthetic archetypes, not real people. Do not present the output as real customer research, real industry-leader quotes, or market proof.

## Case-Study Tests

The `case-studies/` fixtures validate that the public examples exercise the expected observable behaviors:

- career negotiation and daily/professional decision review
- top-10 real-life DoD simulations for growth, operations, management, negotiation, platform migration, pricing, career moves, and AI transformation
- API migration stakeholder stress-reaction simulation
- growth/community stakeholder stress-reaction simulation
- operations/billing stakeholder stress-reaction simulation
- ecommerce growth under inventory constraint
- operations and supply-chain bottleneck diagnosis
- AI transformation with human fallback and telemetry
- macro/public-sector industrial strategy
- market-risk no-trade review
- partner marketplace strategy review
- unsafe manipulation reframe
- growth loop review under trust constraint
- operations SOP review for billing escalations
- product-value PRD review for partner automation
- PM/UED focus group skill review with multiple stakeholder archetypes
- top-10 strategy focus group evaluation with DoD, results, and iteration
- industry-leader smoke test across SaaS growth, ecommerce operations, fintech, and enterprise AI platform cases

Run them directly:

```bash
npm run test:case-studies
```

## User-Intention Scoring

The focus-group workflow can produce synthetic_proxy or real_respondent 1-10 scores for buying intention, NPS proxy, PMF proxy, willingness-to-pay proxy, adoption intent, switching cost, task-fit, or custom criteria.

The LLM must not invent final scores. It generates Segment Simulation with a minimum three-response gate per dynamic segment, continues until the convergence gate shows no new viewpoint categories, then produces Interview Responses, 360 Comments, a declarative dynamic scoring contract, and structured signals. The Node.js scorer calculates the final score from the frozen formula.

Run the scorer tests:

```bash
npm run test:scorer
```

Dry-run the shoe-comment fixture:

```bash
npm run score:intention -- fixtures/user-intention-scoring/valid/shoe-comments-synthetic.json
```

Synthetic scores and convergence checks are proxy / hypothesis only, not real NPS, PMF, WTP, market proof, statistical significance, or percent-would-buy evidence.

## Machine-Readable Manifest

The public stack contract is in [stack.json](./stack.json). It lists included skills, references, examples, case studies, behavior gates, public boundaries, and expected licenses. Use it for downstream installers, registries, or CI checks.

## Validate

```bash
npm test
```

Validation checks expected skills, frontmatter, local references, all-36 coverage, examples, SSR evaluation coverage, case studies, manifest consistency, licenses, and leakage patterns.

## License

Validation scripts are Apache-2.0. Skill text, references, and docs are CC BY 4.0. See [LICENSE-CONTENT](./LICENSE-CONTENT) and [TRADEMARK.md](./TRADEMARK.md).
