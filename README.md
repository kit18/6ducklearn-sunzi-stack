# 6DuckLearn Sunzi Strategy Stack

Public strategy skills for modern business diagnosis, stakeholder stress-reaction simulation, decision review, and Sunzi-inspired consulting.

This repository is intentionally standalone. It is shaped by the install-flow clarity and validation ethos of public agent-skill stacks, but it does not copy `gstack` content and it does not expose private 6DuckLearn product code.

## Quick Start

```bash
git clone https://github.com/kit18/6ducklearn-sunzi-stack.git
cd 6ducklearn-sunzi-stack
npm test
cp -R skills/* ~/.codex/skills/
```

Then ask your agent to use `sunzi-strategy-consultant`, `strategic-situation-analysis`, or `sunzi-stakeholder-ssr` on a real decision. The expected output is a decision memo or labeled synthetic SSR artifact, not a motivational essay.

For agent-host wiring, use [AGENTS.md](./AGENTS.md) or the machine-readable profile at [agents/sunzi-strategy-consultant.yaml](./agents/sunzi-strategy-consultant.yaml).

## Which Skill To Use First

If you are unsure, start with `sunzi-strategy-consultant`. Use the other skills as follow-on gates when the work needs diagnosis, stakeholder pressure testing, domain review, or final go / revise / stop review.

| User need | Start with | Reference example |
|---|---|---|
| Full strategy recommendation | `sunzi-strategy-consultant` | [Ecommerce growth decision memo](./examples/ecommerce-growth-decision-memo.md) |
| Stakeholder reaction, backlash, migration objection, or rollout stress test | `sunzi-stakeholder-ssr` | [API migration stakeholder SSR](./examples/api-migration-ssr.md) |
| Growth loop, GTM, ecommerce, or lifecycle experiment | `sunzi-growth-review` | [Growth loop review](./examples/growth-loop-review.md) |
| SOP, operations, incident, support, QA, or supply-chain workflow | `sunzi-operations-sop-review` | [Operations SOP review](./examples/operations-sop-review.md) |
| Product-value, PRD, API, SDK, or requirement review | `sunzi-prd-review` | [Product value PRD review](./examples/product-value-prd-review.md) |
| Skill quality, adoption readiness, PM/UED focus group, user-intention scoring, or industry-leader archetype review | `sunzi-focus-group-skill-review` | [Industry leader smoke test](./examples/industry-leader-smoke-test.md) |

## Included Skills

- `sunzi-strategy-consultant`: a style-derived modern business consultant for terrain, actors, incentives, timing, restraint, and board-ready decision memos.
- `sunzi-decision-review`: a root applied-use skill for everyday and professional decisions, negotiation, workplace conflict, defensive tactic detection, waiting, preparation, and retreat.
- `sunzi-stakeholder-ssr`: the cross-domain stakeholder stress-reaction simulation skill for growth, operations, product/API, pricing, policy, migration, outage, and executive-strategy pressure tests.
- `strategic-situation-analysis`: first-principles situation diagnosis using the canonical Thirty-Six Stratagems as ethical lenses.
- `strategy-analyst-review`: a quality gate for proposed strategies, lens choices, risks, falsifiers, and kill criteria.
- `sunzi-growth-review`: a growth-loop and GTM experiment review for mechanism, metrics, trust guardrails, and ethical scaling.
- `sunzi-operations-sop-review`: an operations and SOP review for bottlenecks, state machines, decision rights, exceptions, rollback, and auditability.
- `sunzi-prd-review`: a product-value and PRD review for demand reality, business use cases, scope, requirement contracts, QA coverage, release phases, and open questions.
- `sunzi-focus-group-skill-review`: a PM/UED-led multi-stakeholder focus group review for skill quality, adoption risk, user-intention simulation, 360 comments, dynamic deterministic scoring, dissent, and improvement recommendations.

## Install Options

Copy the `skills/*` directories into an agent host that supports local skills, or point your internal skill loader at this repository.

Example local copy:

```bash
cp -R skills/* ~/.codex/skills/
```

See [Install and Adoption](./docs/INSTALL.md) for host-agnostic setup guidance and [Adoption Checklist](./docs/ADOPTION-CHECKLIST.md) for rollout review.

Use only the public files in this repo. Hosted 6DuckLearn agent profiles, private memory, approvals, OAuth, billing, and runtime execution remain on `https://6ducklearn.com`.

## Source Grounding

The Thirty-Six Stratagems reference is grounded in the public-domain Wikisource text for `三十六計`:

https://zh.wikisource.org/wiki/%E4%B8%89%E5%8D%81%E5%85%AD%E8%A8%88

The source stories are used for mechanism checks and analogy quality. They are not moral permission to deceive, manipulate, coerce, violate law, or exploit vulnerable people.

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

The LLM must not invent final scores. It generates Segment Simulation with at least three simulated responses per segment, Interview Responses, 360 Comments, a declarative dynamic scoring contract, and structured signals. The Node.js scorer calculates the final score from the frozen formula.

Run the scorer tests:

```bash
npm run test:scorer
```

Dry-run the shoe-comment fixture:

```bash
npm run score:intention -- fixtures/user-intention-scoring/valid/shoe-comments-synthetic.json
```

Synthetic scores are proxy / hypothesis only, not real NPS, PMF, WTP, market proof, or percent-would-buy evidence.

## Machine-Readable Manifest

The public stack contract is in [stack.json](./stack.json). It lists included skills, references, examples, case studies, behavior gates, public boundaries, and expected licenses. Use it for downstream installers, registries, or CI checks.

## Validate

```bash
npm test
```

Validation checks expected skills, frontmatter, local references, all-36 coverage, examples, SSR evaluation coverage, case studies, manifest consistency, licenses, and leakage patterns.

## License

Validation scripts are Apache-2.0. Skill text, references, and docs are CC BY 4.0. See [LICENSE-CONTENT](./LICENSE-CONTENT) and [TRADEMARK.md](./TRADEMARK.md).
