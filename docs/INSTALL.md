# Install and Adoption

This repo is public and standalone. It can be copied into any agent host that supports local Markdown skills, or read directly by an agent as a source-controlled strategy playbook.

## Local Skill Copy

```bash
git clone https://github.com/kit18/6ducklearn-sunzi-stack.git
cd 6ducklearn-sunzi-stack
npm test
cp -R skills/* ~/.codex/skills/
```

After copying, start a new agent session and run this first:

```text
Use `sunzi-strategy-consultant` on this decision:
[briefly describe the decision, constraints, stakeholders, and desired recommendation]
```

Then ask for one of:

- `sunzi-strategy-consultant` for a full business-strategy memo.
- `sunzi-stakeholder-ssr` for synthetic stakeholder stress-reaction simulation across growth, operations, product/API, pricing, policy, migration, outage, or executive strategy.
- `strategic-situation-analysis` for first-principles diagnosis and Thirty-Six Stratagems lens selection.
- `strategy-analyst-review` for a review gate on an existing memo or plan.
- `sunzi-focus-group-skill-review` for PM/UED focus-group review, adoption readiness, or synthetic industry-leader archetype evaluation.

## First-Run Examples

Use these examples to confirm the stack is installed and routed correctly.

| Goal | Prompt shape | Reference output |
|---|---|---|
| Strategy memo | "Use `sunzi-strategy-consultant` on this decision..." | `examples/ecommerce-growth-decision-memo.md` |
| Stakeholder simulation | "Use `sunzi-stakeholder-ssr` to simulate buyer/support/engineer reactions..." | `examples/api-migration-ssr.md` |
| Skill or workflow review | "Use `sunzi-focus-group-skill-review` to review this skill with PM/UED and stakeholder archetypes..." | `examples/focus-group-skill-review.md` |
| Consultation-company smoke test | "Ask synthetic industry-leader archetypes for Top 3 Problems, select cases, then run SSR and strategy review..." | `examples/industry-leader-smoke-test.md` |

## Repository Pointer

For hosts that support repository-based skill loading, point the loader at:

```text
https://github.com/kit18/6ducklearn-sunzi-stack
```

Expected skill roots:

```text
skills/sunzi-strategy-consultant/SKILL.md
skills/strategic-situation-analysis/SKILL.md
skills/sunzi-decision-review/SKILL.md
skills/sunzi-stakeholder-ssr/SKILL.md
skills/sunzi-growth-review/SKILL.md
skills/sunzi-operations-sop-review/SKILL.md
skills/sunzi-prd-review/SKILL.md
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
