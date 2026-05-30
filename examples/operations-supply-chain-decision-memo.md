# Operations Supply-Chain Decision Memo

## Scenario

A multi-site manufacturer has volatile demand, late supplier updates, rising energy cost, and planners who discover inventory shortages after customer commitments are already made.

## Decision

- Objective: reduce stockout and expedite cost without adding another dashboard that does not change behavior.
- Arena/domain: operations and supply chain.
- Time horizon: 90 days for pilot, 12 months for scaled operating model.
- Recommendation: pilot dynamic planning on the highest-volatility product family, pairing real-time supplier updates with a weekly capacity and energy-cost decision cadence.
- Confidence: medium, pending cycle-time, supplier-update, and energy baselines.

## First-Principles Map

| Variable | Evidence | Interpretation | Missing / falsifier |
|---|---|---|---|
| Actors | Planners, suppliers, plant leads, customer success, finance | Each team optimizes different local metrics | Supplier SLA history and expedite approval data |
| Incentives | Avoid stockouts, avoid idle time, protect margin | Emergency commitments hide the true cost of late decisions | True cost-to-serve by product family |
| Constraints | Supplier volatility, energy cost, production slots | The physical bottleneck is capacity timing; the information bottleneck is late supplier signal | If capacity is ample, demand forecast quality is the real bottleneck |
| Information | Supplier updates arrive after plans are locked | Decisions are made with stale inputs | Timestamped supplier and plan-change data |
| Timing | 90-day pilot window | Fast enough to test behavior without full platform rebuild | Demand volatility may be seasonal |
| Feedback | Stockouts, expedite cost, plan-change latency, energy per unit | Leading metrics can show if the process is learning | Customer penalty data |
| Failure mode | Dashboard without changed cadence | More visibility but no decision rights | Planner adoption below threshold |

## Selected Lenses

| Lens | Why it fits | Ethical business translation | Falsifier / misuse risk |
|---|---|---|---|
| 釜底抽薪 | Expedites are fueled by late signal and locked plans | Remove the fuel by changing planning cadence and supplier-update cutoffs | Falsified if expediting is driven by customer promise policy, not supplier timing |
| 以逸待勞 | Prepared capacity options beat reactive firefighting | Pre-commit flexible production slots for volatile families | Misuse risk: waiting while customers are already exposed |
| 連環計 | Supplier updates, capacity planning, energy cost, and customer promises reinforce each other | Link data, decision rights, and weekly operating rhythm | Falsified if linked process creates fragile dependencies |

## Strategy-Analyst Review

- Physical bottleneck: capacity timing on the volatile product family.
- Alternative lens: `擒賊擒王` if one product family or supplier owns most of the loss.
- Do nothing / retreat option: freeze the pilot if planning latency does not improve after two cycles.
- Ethical rewrite: do not conceal shortage risk from customers; use honest lead-time updates.
- Kill criterion: stop the pilot if expedite cost, stockouts, or customer misses worsen for two consecutive planning cycles.

## Evidence Ledger

| Source / artifact | Claim supported | Quality | Missing / next check |
|---|---|---|---|
| Supplier update timestamps | Late signal may be the information bottleneck | Medium | Compare with plan-lock timestamps |
| Energy-cost reports | Energy is part of the cost constraint | Medium | Product-family attribution |
| Expedite approvals | Emergency decisions are expensive | High | Link to customer promise dates |

## Action Plan

1. First reversible move: pick one volatile product family and require supplier updates before weekly plan lock.
2. Sequence: baseline latency, run pilot cadence, add flexible slot policy, review customer promise accuracy.
3. Owner: COO delegate with planning, supplier operations, and finance.
4. Leading metric: decision latency from supplier update to plan change.
5. Stop condition: no reduction in stockout or expedite cost after two cycles.
