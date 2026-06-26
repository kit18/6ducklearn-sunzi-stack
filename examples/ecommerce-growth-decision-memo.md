# Ecommerce Growth Decision Memo

## Scenario

Traffic is up 40%, checkout completion is down, two competitors are discounting aggressively, and inventory will be constrained for 30 days.

## Decision

- Objective: recover profitable checkout conversion without damaging trust or overselling constrained inventory.
- Arena/domain: ecommerce growth and operations.
- Time horizon: 30 days.
- Recommendation: fix checkout friction and inventory transparency before matching competitor discounts.
- Confidence: medium, pending funnel and inventory data.

## Modern Strategy Frame (optional, evidence-gated)

- Method selected: evidence-gated 3C for customer / company / competitor fit; SWOT only after the evidence ledger is filled.
- Strategic tension: competitors are using price pressure while customers may be reacting to checkout trust, shipping clarity, or stockout friction.
- Governing choice: protect profitable in-stock demand before using discounts to chase broad traffic.
- Proof signal: checkout completion improves for in-stock SKUs without a support or refund spike.
- Stop / retreat trigger: pause promotions if margin, refund rate, or complaint volume deteriorates for two consecutive days.

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

## Issue Tree / Controlling Branches

MECE check: demand, operating capability, competitive pressure, and unknown lane are separated so the team does not double-count the same symptom as multiple causes.

| Root question | Branch | Evidence | Falsifier | Decision impact |
|---|---|---|---|---|
| What is the highest-leverage way to recover profitable checkout conversion during the 30-day inventory constraint? | Customer / demand branch: customers may be abandoning because trust, shipping clarity, payment, or stockout information degraded. | Traffic is up while checkout completion is down. | Device, payment, and SKU cuts show no friction increase, and price sensitivity explains most drop-off. | Prioritize checkout and stock transparency before discounting. |
| Same root question | Capability / operating branch: inventory and support capacity constrain broad promotion. | Inventory is constrained for 30 days; support/refund signals are monitored. | Replenishment becomes reliable and support load stays flat under targeted offers. | Keep offers SKU-level and reversible. |
| Same root question | Competitive / external branch: competitor discounting may pull price-sensitive demand away. | Two competitors are discounting aggressively. | Conversion recovers after friction fixes without price matching. | Avoid broad discount matching unless the external branch becomes the control node. |
| Same root question | Unknown lane: channel-level CAC and competitor margin durability are not yet known. | Evidence ledger is incomplete. | CAC and margin data prove a profitable promotion window. | Reallocate test budget only after evidence arrives. |

## Advantage / Portfolio Choice

| Choice | Current answer | Evidence | Reallocation trigger |
|---|---|---|---|
| Where to play | In-stock SKUs and checkout paths where demand is already present. | Traffic is up 40%, but checkout completion is down. | Scale only if in-stock checkout completion rises without refund/support spike. |
| How to win | Win on trustworthy checkout clarity and operational reliability rather than broad price matching. | Inventory constraint makes undisciplined volume risky. | Pause if competitor price explains most lost conversion after friction fixes. |
| Capability system / moat hypothesis | A cross-functional checkout, inventory, support, and margin loop can compound into faster demand-quality decisions. | Event logs, inventory forecast, and support tickets can be reviewed daily. | Kill the loop if the team cannot make daily SKU/channel decisions from the data. |
| Investment tier: scale, test, partner, pause, or kill | Test. Fund checkout fixes and targeted SKU offers; pause broad promotions. | Evidence is medium-quality and reversible. | Scale targeted offers, partner on payments/shipping fixes, pause low-margin traffic, or kill discounts based on the two-day signal. |
| Scale / pause / kill reallocation trigger | Reallocate spend from broad acquisition into checkout/in-stock SKU tests until proof improves. | Margin, refund, complaint, and checkout metrics are the governing signals. | Move budget when two consecutive days confirm conversion gain without margin or trust deterioration. |

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

## Evidence Ledger

| Source / artifact | Claim supported | Quality | Missing / next check |
|---|---|---|---|
| Checkout event logs | checkout completion is the likely control metric | Medium | Device, payment, and SKU-level split |
| Inventory forecast | 30-day constraint limits broad promotion | Medium | Replenishment confidence |
| Support/refund tickets | Trust risk can show up before revenue data | Low | Complaint categories after changes |

## Action Plan

1. First reversible move: audit checkout events by device, payment method, shipping option, and SKU stockout.
2. Sequence: fix top checkout blocker, show honest stock/shipping expectations, test targeted SKU-level offers only where margin and inventory allow.
3. Owner: growth lead with operations and support.
4. Leading metric: checkout completion for in-stock SKUs.
5. Stop condition: support complaints or refund requests rise after the change.
