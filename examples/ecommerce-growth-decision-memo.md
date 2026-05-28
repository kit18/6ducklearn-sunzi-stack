# Ecommerce Growth Decision Memo

## Scenario

Traffic is up 40%, checkout completion is down, two competitors are discounting aggressively, and inventory will be constrained for 30 days.

## Decision

- Objective: recover profitable checkout conversion without damaging trust or overselling constrained inventory.
- Arena/domain: ecommerce growth and operations.
- Time horizon: 30 days.
- Recommendation: fix checkout friction and inventory transparency before matching competitor discounts.
- Confidence: medium, pending funnel and inventory data.

## First-Principles Map

| Variable | Evidence | Interpretation | Missing / falsifier |
|---|---|---|---|
| Actors | Customers, competitors, paid channels, operations, support | Customers may be comparison-shopping while operations cannot absorb demand spikes | Device-level funnel, SKU-level stockouts, refund reasons |
| Incentives | Competitors discount; brand needs margin and trust | Matching discounts could worsen inventory pressure | Competitor margin durability |
| Constraints | 30-day inventory constraint | Growth cannot simply push more volume | Replenishment certainty |
| Information | Traffic up but checkout down | There may be price, shipping, payment, or stockout friction | Checkout event logs |
| Timing | Competitor discount window is immediate | Need reversible moves first | Promo duration |
| Feedback | Checkout completion, contribution margin, support tickets | Early signals can validate friction fixes in days | Channel-level CAC |
| Failure mode | Fake urgency or hidden fees | Trust damage and refunds | Customer complaint spike |

## Selected Lenses

| Lens | Why it fits | Ethical business translation | Falsifier / misuse risk |
|---|---|---|---|
| 釜底抽薪 | The likely fire is checkout friction, not only competitor price | Remove the fuel source: shipping ambiguity, failed payments, stockout surprises | Falsified if friction is flat and price sensitivity explains most loss |
| 李代桃僵 | Protect the core relationship by sacrificing lower-value demand | Pause unprofitable traffic or discount only low-risk SKUs | Misuse risk: treating customers or support load as disposable |
| 走為上計 | Some demand may be negative expected value during constrained inventory | Retreat from broad promotions until inventory and margin recover | Premature if high-margin SKUs remain available |

## Strategy-Analyst Review

- Alternative lens: `擒賊擒王` if one checkout bug or payment provider is the control node.
- Ethical rewrite: use honest stock notices and clear shipping terms, not fake scarcity, fake reviews, hidden fees, or deceptive discounts.
- Kill criterion: stop discount tests if contribution margin drops below target or refund/support volume rises for two consecutive days.

## Action Plan

1. First reversible move: audit checkout events by device, payment method, shipping option, and SKU stockout.
2. Sequence: fix top checkout blocker, show honest stock/shipping expectations, test targeted SKU-level offers only where margin and inventory allow.
3. Owner: growth lead with operations and support.
4. Leading metric: checkout completion for in-stock SKUs.
5. Stop condition: support complaints or refund requests rise after the change.
