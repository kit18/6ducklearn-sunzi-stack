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

## Included Skills

- `sunzi-strategy-consultant`: a style-derived modern business consultant for terrain, actors, incentives, timing, restraint, and board-ready decision memos.
- `sunzi-decision-review`: a root applied-use skill for everyday and professional decisions, negotiation, workplace conflict, defensive tactic detection, waiting, preparation, and retreat.
- `sunzi-stakeholder-ssr`: the cross-domain stakeholder stress-reaction simulation skill for growth, operations, product/API, pricing, policy, migration, outage, and executive-strategy pressure tests.
- `strategic-situation-analysis`: first-principles situation diagnosis using the canonical Thirty-Six Stratagems as ethical lenses.
- `strategy-analyst-review`: a quality gate for proposed strategies, lens choices, risks, falsifiers, and kill criteria.
- `sunzi-growth-review`: a growth-loop and GTM experiment review for mechanism, metrics, trust guardrails, and ethical scaling.
- `sunzi-operations-sop-review`: an operations and SOP review for bottlenecks, state machines, decision rights, exceptions, rollback, and auditability.
- `sunzi-prd-review`: a product-value and PRD review for demand reality, business use cases, scope, requirement contracts, QA coverage, release phases, and open questions.

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

Run them directly:

```bash
npm run test:case-studies
```

## Machine-Readable Manifest

The public stack contract is in [stack.json](./stack.json). It lists included skills, references, examples, case studies, behavior gates, public boundaries, and expected licenses. Use it for downstream installers, registries, or CI checks.

## Validate

```bash
npm test
```

Validation checks expected skills, frontmatter, local references, all-36 coverage, examples, SSR evaluation coverage, case studies, manifest consistency, licenses, and leakage patterns.

## License

Validation scripts are Apache-2.0. Skill text, references, and docs are CC BY 4.0. See [LICENSE-CONTENT](./LICENSE-CONTENT) and [TRADEMARK.md](./TRADEMARK.md).
