# User Intention Metric Contract

Use this contract when a Sunzi focus-group review needs buying intention, NPS proxy, PMF proxy, willingness-to-pay proxy, adoption intent, switching cost, task-fit, or a custom user-defined criterion.

The contract is dynamic per scenario. It is not a library of hard-coded product formulas. The skill should use the scenario, target respondents, focus-group comments, and 360 comments to draft a deterministic scoring contract, then freeze that contract before structured signal extraction and final scoring.

## Modes

| Mode | Meaning | Allowed claim |
|---|---|---|
| `synthetic_proxy` | LLM-generated focus-group comments and 360 comments used for rehearsal, objections, and research planning. | Proxy / hypothesis only. |
| `real_respondent` | Real survey, interview, usability, sales-call, or pilot responses from qualified people. | Real respondent deterministic score, within the limits of the sample and instrument. |

Synthetic output must not be described as real NPS, PMF, willingness-to-pay proof, market proof, customer evidence, or percent-would-buy evidence.

## Workflow

1. Define the scenario, product, target audience, respondent types, and metric goal.
2. Generate Segment Simulation first. Each focus-group segment should include at least three simulated responses to diversify tone, objection, and buying trigger before scoring.
3. Generate 360 comments from PM, UED/research, growth, sales/buyer, support, trust/safety, engineering/ops, and any domain-specific reviewer.
4. Draft a dynamic deterministic scoring contract from the scenario and comment themes.
5. Freeze the formula at `after_comments_before_structured_signal_extraction`.
6. Extract structured signals from every response using only dimensions in the frozen formula.
7. Run the Node.js scorer to calculate 1-10 scores, confidence, missing evidence, and warnings.
8. End with dissent, evidence needed next, and the real-world validation plan.

## Declarative Formula Rules

The LLM may draft declarative JSON only. Do not output executable JavaScript, Python, SQL, shell, or model instructions as formulas.

Required scoring contract fields:

- `formula_type`: `weighted_normalized_1_to_10`
- `generated_by_skill`: `true`
- `frozen_stage`: `after_comments_before_structured_signal_extraction`
- `allow_model_supplied_final_scores`: `false`
- `dimensions`: one or more weighted dimensions whose weights sum to 100

Each dimension must define:

- `name`: snake_case signal name
- `weight`: positive numeric weight
- `polarity`: `positive` or `negative`
- `scale.min` and `scale.max`
- `scale.min_anchor` and `scale.max_anchor`

## Metric Guidance

| Metric | Synthetic mode | Real respondent mode | Extra caution |
|---|---|---|---|
| Buying intention / purchase intent | Use as `buying_intention` or `purchase_intent_proxy`. | Use real qualified respondent choice, survey, pre-order, or sales evidence. | Do not claim a percent would buy from synthetic comments. |
| NPS | Use `nps_proxy` only. | Use `nps` only when real users answer a recommend-likelihood instrument after experience. | Synthetic NPS is invalid. |
| PMF | Use `pmf_proxy` only. | Use `pmf` only with real qualified users or trial users and a defined PMF instrument. | Do not claim PMF from panel opinions. |
| Willingness to pay | Use `willingness_to_pay_proxy` only. | Use real pricing research, sales calls, paid pilots, or pricing-page evidence. | Synthetic WTP is a price-risk hypothesis, not proof. |
| Adoption intent | Allowed when respondent role, workflow, owner, prerequisite, and timeframe are explicit. | Stronger when tied to real pilot, signup, usage, or procurement evidence. | Penalize unclear owner or adoption path. |
| Switching cost | Score current workaround, migration burden, approval path, training, integration, and risk. | Stronger with real workflow mapping or migration data. | High switching friction should reduce intent scores. |
| Task-fit | Score task clarity, context fit, time-to-value, failure mode, and usability evidence. | Stronger with real task tests or observed workflows. | Do not confuse liking a concept with task success. |

## Forbidden Claims

- synthetic NPS
- predicted NPS
- real PMF from synthetic panel
- users will pay
- percent would buy
- statistically significant
- market proof
- customer evidence from synthetic output
- no evidence needed

## Output Boundary

Every synthetic score must include:

`Synthetic proxy only: do not present as real NPS, PMF, WTP, market proof, or percent-would-buy evidence.`

## Segment Simulation Report

Use this report when the review needs a segment-level readout across shopper, buyer, operator, finance, support, or other stakeholder segments.

Minimum rule: each segment must include at least three simulated responses per segment before scoring. Do not score a segment from one synthetic quote.

```markdown
## Segment Simulation
| Segment | Simulated responses (minimum 3) | Score | Main friction | Best fix |
|---|---|---:|---|---|
| Loyal live shopper | 1. ...<br>2. ...<br>3. ... | 8.3 | Rules confusion | Pin one simple rule card throughout live |
```

Use the three responses to expose variation:

- positive buying trigger
- objection or confusion
- operational or trust concern

Then extract structured signals and calculate the score deterministically from the frozen formula.
