# 6DuckLearn Sunzi Strategy Stack

Public strategy skills for modern business diagnosis, decision review, and Sunzi-inspired consulting.

This repository is intentionally standalone. It is shaped by the install-flow clarity and validation ethos of public agent-skill stacks, but it does not copy `gstack` content and it does not expose private 6DuckLearn product code.

## Quick Start

```bash
git clone https://github.com/kit18/6ducklearn-sunzi-stack.git
cd 6ducklearn-sunzi-stack
npm test
cp -R skills/* ~/.codex/skills/
```

Then ask your agent to use `sunzi-strategy-consultant` or `strategic-situation-analysis` on a real decision. The expected output is a decision memo, not a motivational essay.

## Included Skills

- `sunzi-strategy-consultant`: a style-derived modern business consultant for terrain, actors, incentives, timing, restraint, and board-ready decision memos.
- `strategic-situation-analysis`: first-principles situation diagnosis using the canonical Thirty-Six Stratagems as ethical lenses.
- `strategy-analyst-review`: a quality gate for proposed strategies, lens choices, risks, falsifiers, and kill criteria.

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

## Templates

- [Decision memo template](./references/decision-memo-template.md)
- [Business war-room template](./references/business-war-room-template.md)
- [Ethical strategy guardrails](./references/ethical-strategy-guardrails.md)
- [Sunzi business consultant soul notes](./references/sunzi-business-consultant-soul.md)

## Examples

- [Ecommerce growth decision memo](./examples/ecommerce-growth-decision-memo.md)
- [Market-risk no-trade review](./examples/market-risk-no-trade-review.md)
- [Strategy analyst review sample](./examples/strategy-analyst-review-sample.md)
- [Unsafe manipulation reframe](./examples/unsafe-manipulation-reframe.md)

## Case-Study Tests

The `case-studies/` fixtures validate that the public examples exercise the expected observable behaviors:

- ecommerce growth under inventory constraint
- market-risk no-trade review
- partner marketplace strategy review
- unsafe manipulation reframe

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

Validation checks expected skills, frontmatter, local references, all-36 coverage, examples, case studies, manifest consistency, licenses, and leakage patterns.

## License

Validation scripts are Apache-2.0. Skill text, references, and docs are CC BY 4.0. See [LICENSE-CONTENT](./LICENSE-CONTENT) and [TRADEMARK.md](./TRADEMARK.md).
