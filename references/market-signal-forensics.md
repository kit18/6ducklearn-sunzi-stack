# Market Signal Forensics

Use this reference when the user asks whether momentum, volume, order-book activity, social attention, or market-maker behavior is real.

This skill can help detect and avoid manipulation. It must not help design manipulation.

## Required separation

- Value: business quality, filings, cash flow, balance sheet, adoption, token economics.
- Timing: catalyst, event date, technical setup, crowding, funding, liquidity window.
- Signal quality: source credibility, venue quality, float, depth, repeatability, audit trail.
- Manipulation risk: pump-and-dump, spoofing, wash trading, coordinated promotion, influencer dumping, low-float squeeze, unlock/dilution trap.
- Risk: invalidation, position sizing, stop, do-not-chase level, and what would make the trade terrible.

## Red flags

| Pattern | Risk | Required response |
|---|---|---|
| Social promotion before liquidity spike | Pump-and-dump risk | Check promoter incentives, disclosures, issuer fundamentals, and independent catalysts. |
| Large visible orders vanish after nearby fills | Spoofing-like liquidity illusion | Exclude book imbalance as momentum evidence unless executable intent is verified. |
| Volume rises across weak venues without depth | Wash-like activity | Compare venue quality, depth, wallets, funding, and real settlement. |
| Repeated spike-and-fade behavior | Distribution into attention | Require evidence of accumulation, filings, or fundamental catalyst before any long thesis. |
| Low-float microcap or thin token | Structural manipulation risk | Lower confidence, demand liquidity plan, and define no-trade conditions. |
| Influencer target prices without risk disclosure | Narrative trap | Treat as untrusted signal until independently verified. |
| Dashboard or data lineage failure | Analytics governance failure | Refuse capital-allocation conclusions until source refresh, lineage, and production status are fixed. |

## Official-source behavior tests

- SEC social-media pump-and-dump pattern: promotion intensity rises while promoter exposure falls.
- CFTC spoofing pattern: large opposite-side orders appear before fills and cancel quickly after.
- Governed BI pattern: sandbox, stale, failed-refresh, or unlineaged data must not support trading conclusions.

## Output requirements

Always include:

- Evidence that supports the signal.
- Evidence that conflicts with the signal.
- Missing evidence.
- Manipulation-risk label: low, medium, high, or unknown.
- No-trade or exit condition.
- Analytical-only disclaimer.
