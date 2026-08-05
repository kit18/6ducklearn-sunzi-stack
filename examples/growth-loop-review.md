# Growth Loop Review

> **v1.0.0 note.** This output is now produced by the 五事 skills pulling
> [`references/domain-adapters/growth.md`](../references/domain-adapters/growth.md),
> not by a standalone `sunzi-growth-review` skill. The review contract is
> unchanged. See [MIGRATION.md](../docs/MIGRATION.md).

## Scenario

A workflow app has rising community traffic after an AI tutorial post, but activation is flat. The team wants to automate daily community posts and add an urgent discount banner.

## Verdict

Verdict: revise
Confidence: medium

## Growth Decision

- Segment: solo operators and small teams trying to turn AI notes into repeatable workflows.
- Loop: acquisition to activation to retained workflow use.
- Channel: community posts and tutorial-led search traffic.
- Owner: growth lead with product and support.
- Horizon: 14-day reversible experiment.
- Scale decision: whether to automate posting and expand discount placement.

## Terrain And Constraint

| Variable | Evidence | Interpretation | Missing / falsifier |
|---|---|---|---|
| Audience | Tutorial traffic increased but activation is flat | The channel is attracting attention before proving value | Cohort split by source and task completed |
| Value moment | Users need a saved workflow or completed output | Activation, not raw visits, is the constraint | First meaningful action definition |
| Channel | Community replies ask for examples | Education may work better than repeated promotion | Community moderator feedback |
| Product readiness | Onboarding has several choices | New users may not know the next action | Drop-off by onboarding step |
| Economics | Discount could pull low-intent users | Price is not proven as the blocker | Conversion by pricing page view |
| Trust | Automated daily posting could be perceived as spam | Trust guardrail matters before scale | Spam reports, unsubscribe rate, negative replies |

## Mechanism Before Tactic

- Mechanism: help a narrow segment complete one repeatable workflow and return with a saved artifact.
- Tactic: publish one concrete teardown with a reusable template and invite users to try the exact workflow.
- Why this is reversible: one post, one onboarding experiment, and one cohort can be stopped without retraining the channel.

## DoD Calibration

- Closest case: `Community Growth Without Spam`.
- Source anchor: `Sun Tzu Strategies for Marketing`, applied to customer and market strategy.
- Definition Of Done gap: the plan protects community trust and defines a reversible experiment, but it still needs moderator review and cohort activation evidence before any automation.
- Stakeholder Reaction to rehearse: community moderator concern that helpful participation could become promotion if cadence rises.
- Evidence Needed Next: moderator feedback, activation by source cohort, spam reports, negative replies, support complaints, and day-7 retained workflow use.

## Selected Lenses

| Lens | Growth mechanism | Ethical translation | Falsifier / misuse risk |
|---|---|---|---|
| 拋磚引玉 | Offer a useful small artifact to invite higher-quality engagement | Share a real workflow template, then ask for use-case feedback | Falsified if template users do not activate |
| 釜底抽薪 | Remove the fuel behind flat activation | Fix onboarding confusion before increasing posting volume | Falsified if activated users still fail to return |
| 走為上計 | Retreat from tactics that damage trust | Do not automate daily community posting until trust guardrails are stable | Misuse risk: using retreat as an excuse to avoid learning |

## Experiment Contract

- Baseline: activation rate from community traffic over the previous 14 days.
- Treatment: one tutorial post with a workflow template plus a simplified first-action onboarding path.
- Leading metric: first meaningful action completion.
- Business metric: day-7 retained workflow use.
- Trust guardrail: spam reports, negative replies, unsubscribe rate, and support complaints.
- Kill criterion: stop the experiment if trust complaints rise or activation does not improve after the planned cohort reaches the minimum sample.

## Evidence Ledger

| Claim | Source / artifact | Quality | Missing / next check |
|---|---|---|---|
| Community traffic is rising | Analytics source report | Medium | Source-specific cohort quality |
| Activation is flat | Product funnel | Medium | First meaningful action definition |
| Discount may be premature | No evidence price is blocker | Low | Pricing objection data |

## Required Changes

1. Replace urgent discount banner with a truthful value-led onboarding experiment.
2. Define activation and day-7 retained workflow use before publishing.
3. Add a trust guardrail and stop rule before any posting automation.
