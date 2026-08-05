# Install and Adoption

This repo is public and standalone. It can be copied into any agent host that supports local Markdown skills, or read directly by an agent as a source-controlled strategy playbook.

## Local Skill Copy

```bash
git clone https://github.com/kit18/6ducklearn-sunzi-stack.git
cd 6ducklearn-sunzi-stack
npm test
mkdir -p ~/.codex/skills ~/.codex/references
cp -R skills/* ~/.codex/skills/
cp -R references/* ~/.codex/references/
```

After copying, start a new agent session and run this first:

```text
Use `sunzi-strategy-consultant` on this decision:
[briefly describe the decision, constraints, stakeholders, and desired recommendation]
```

Then ask for one of:

- `sunzi-strategy-consultant` for a full business-strategy memo.
- `sunzi-stakeholder-ssr` for synthetic stakeholder stress-reaction simulation across growth, operations, product/API, pricing, policy, migration, outage, or executive strategy.
- `sunzi-terrain` for the ground survey and first-principles diagnosis; stratagem lens selection lives in the maneuver skills (`sunzi-win-without-fighting`, `sunzi-find-the-wedge`).
- `strategy-analyst-review` for a review gate on an existing memo or plan.
- `sunzi-focus-group-skill-review` for PM/UED focus-group review, adoption readiness, user-intention scoring, or synthetic industry-leader archetype evaluation.

## First-Run Examples

Use these examples to confirm the stack is installed and routed correctly.

| Goal | Prompt shape | Reference output |
|---|---|---|
| Strategy memo | "Use `sunzi-strategy-consultant` on this decision..." | `examples/ecommerce-growth-decision-memo.md` |
| Stakeholder simulation | "Use `sunzi-stakeholder-ssr` to simulate buyer/support/engineer reactions..." | `examples/api-migration-ssr.md` |
| Skill, workflow, or user-intention review | "Use `sunzi-focus-group-skill-review` to simulate comments, generate 360 comments, freeze a dynamic scoring contract, and calculate deterministic scores..." | `examples/focus-group-skill-review.md` |
| Consultation-company smoke test | "Ask synthetic industry-leader archetypes for Top 3 Problems, select cases, then run SSR and strategy review..." | `examples/industry-leader-smoke-test.md` |

## Repository Pointer

For hosts that support repository-based skill loading, point the loader at:

```text
https://github.com/kit18/6ducklearn-sunzi-stack
```

Expected skill roots:

```text
skills/sunzi-strategy-consultant/SKILL.md
skills/sunzi-terrain/SKILL.md
skills/sunzi-compare/SKILL.md
skills/sunzi-method/SKILL.md
skills/sunzi-alignment/SKILL.md
skills/sunzi-timing/SKILL.md
skills/sunzi-command/SKILL.md
skills/sunzi-decision-review/SKILL.md
skills/sunzi-stakeholder-ssr/SKILL.md
skills/sunzi-win-without-fighting/SKILL.md
skills/sunzi-find-the-wedge/SKILL.md
skills/sunzi-contingency/SKILL.md
skills/sunzi-restraint/SKILL.md
skills/sunzi-intelligence/SKILL.md
skills/sunzi-retro/SKILL.md
skills/sunzi-focus-group-skill-review/SKILL.md
skills/strategy-analyst-review/SKILL.md
```

Expected agent profile:

```text
AGENTS.md
agents/sunzi-strategy-consultant.yaml
```

The profile is host-neutral. It declares the consultant stance, attached skills, references, output contract, and safety boundaries. Hosts that do not consume YAML can still copy the instructions from `AGENTS.md`.

## Hosted 6DuckLearn

Hosted 6DuckLearn keeps the canonical strategy-consultant soul and product runtime on `https://6ducklearn.com`. Runtime `SOUL.md` exports are projections only. This public repo contains reusable skills, references, examples, and validation, not hosted product code or private runtime configuration.

## Smoke Test Prompt

```text
Use sunzi-strategy-consultant on this decision:
We run a mid-market ecommerce brand. Traffic is up 40%, checkout completion is down, two competitors are discounting aggressively, and inventory will be constrained for 30 days. Recommend the first reversible move, metrics, and kill criteria.
```

A good result should map actors, incentives, constraints, evidence gaps, and timing; choose only 2 to 4 lenses; include a strategy-analyst review; and avoid manipulative tactics such as fake scarcity, fake reviews, or hidden fees.

## Industry-Leader Smoke Test Prompt

```text
Use the Sunzi consultation stack as a public-safe consulting-company smoke test.
Ask synthetic industry-leader archetypes for the Top 3 Problems in SaaS growth,
ecommerce operations, fintech, and enterprise AI platform work. Select one case
per industry, then run Sunzi diagnosis, SSR, focus-group review, strategy analyst
gate, evidence needed next, metrics, and kill criteria.
```

The expected reference shape is [Industry leader smoke test](../examples/industry-leader-smoke-test.md). Keep the synthetic label visible: this is hypothesis generation and rollout-risk discovery, not real customer evidence.

## User-Intention Scoring Prompt

```text
Use sunzi-focus-group-skill-review to evaluate buying intention for this product.
First simulate dynamic segments with a minimum three-response gate. Use 3-5
responses as the first pass, then continue until the convergence gate shows no
new viewpoint categories. Then generate 360 comments, create a dynamic
deterministic scoring contract, freeze the formula, extract structured signals,
and calculate deterministic 1-10 synthetic_proxy scores.
```

For local validation:

```bash
npm run test:scorer
npm run score:intention -- fixtures/user-intention-scoring/valid/shoe-comments-synthetic.json
```

Synthetic scores and convergence checks are proxy / hypothesis only. Real NPS, PMF, willingness-to-pay, market proof, statistical significance, and percent-would-buy claims require real qualified respondents.
