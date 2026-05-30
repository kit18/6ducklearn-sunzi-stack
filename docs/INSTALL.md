# Install and Adoption

This repo is public and standalone. It can be copied into any agent host that supports local Markdown skills, or read directly by an agent as a source-controlled strategy playbook.

## Local Skill Copy

```bash
git clone https://github.com/kit18/6ducklearn-sunzi-stack.git
cd 6ducklearn-sunzi-stack
npm test
cp -R skills/* ~/.codex/skills/
```

After copying, start a new agent session and ask for one of:

- `sunzi-strategy-consultant` for a full business-strategy memo.
- `strategic-situation-analysis` for first-principles diagnosis and Thirty-Six Stratagems lens selection.
- `strategy-analyst-review` for a review gate on an existing memo or plan.

## Repository Pointer

For hosts that support repository-based skill loading, point the loader at:

```text
https://github.com/kit18/6ducklearn-sunzi-stack
```

Expected skill roots:

```text
skills/strategic-situation-analysis/SKILL.md
skills/strategy-analyst-review/SKILL.md
skills/sunzi-strategy-consultant/SKILL.md
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
