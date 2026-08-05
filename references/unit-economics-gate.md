# Unit Economics Gate (主用)

The computational contract behind `/sunzi-method` PROVISIONING mode. Any
skill that issues a go / revise / stop verdict on a growth, ecommerce,
pricing, or market-entry decision must complete this gate or return
`insufficient evidence` for the affected rows. Prose about "watching margin"
does not satisfy the gate. Arithmetic does.

## Canonical grounding

作戰篇 is a cost model before it is anything else:

> 凡用兵之法：馳車千駟，革車千乘，帶甲十萬，千里饋糧 … 日費千金，然後十萬之師舉矣。

A thousand gold pieces per day, counted *before* the first engagement. And its
governing doctrine:

> 兵貴勝，不貴久。

Speed of victory over length of campaign — CAC payback stated as doctrine. A
campaign whose daily cost outruns its rate of victory is lost regardless of
how good the strategy prose is.

## The ladder (compute top to bottom)

Per unit or per order, in currency, with sources named:

| Line | Definition | Typical trap |
|---|---|---|
| Price / AOV | What the customer actually pays after discounts | Using list price while modeling a launch discount |
| − Landed COGS | Product + freight + duty + packaging, at the *tested* order quantity | Quoting MOQ-10k pricing for a 500-unit pilot |
| − Payment fees | Processor % + fixed fee | Forgotten entirely |
| − Fulfillment | Outbound shipping + pick/pack + storage | Assuming zone-2 rates for national demand |
| − Returns/damage reserve | Return rate × (refund + reverse logistics) | Set to zero for a new product with no return history |
| = **Contribution before marketing** | What one order leaves to pay for its own acquisition and everything else | — |

Then the three numbers a verdict must state:

1. **Break-even CAC** = contribution before marketing. Spend above this and
   each order destroys money.
2. **Allowable CAC** = break-even CAC × (1 − target operating margin). This is
   the real bid ceiling.
3. **Payback period** = CAC ÷ contribution per period from a retained
   customer. 兵貴勝，不貴久: if payback exceeds the cash runway that must
   finance it, the campaign dies solvent-on-paper.

## Hard checks

- **Compare allowable CAC against the observed category CAC**, not against
  hope. If category CAC exceeds allowable CAC, the verdict is *stop or
  restructure* (raise AOV, bundle, change channel) — never "improve creative."
- **A COGS "minimum acceptable" that yields negative contribution at category
  CAC is not a floor; it is a trap.** State the COGS ceiling that makes the
  economics work and treat it as a kill criterion.
- **Repeat-purchase claims require a repeat metric.** If the mechanism is
  refills or subscription, the leading metric must measure second-order
  behavior (first-refill conversion, subscribe-and-save take rate) — an
  add-to-cart rate cannot falsify a retention thesis.
- **因糧於敵 check**: before accepting the full cost structure, ask what can
  be taken from the field — partner-held inventory, marketplace demand,
  customer-funded preorders — rather than shipped from home.

## Output block (required)

```markdown
Unit Economics Gate
- Price / AOV:            $
- Landed COGS:            $   (source: quote / estimate / benchmark)
- Payment + fulfillment:  $
- Returns reserve:        $   (rate assumed: %)
- Contribution:           $
- Break-even CAC:         $
- Allowable CAC:          $   (target margin: %)
- Category CAC range:     $–$ (source)
- Payback period:         (vs. runway: )
- Verdict on economics:   viable / viable-if / not viable
- Kill criterion:         (the number that stops the campaign)
```

Rows without evidence are written `insufficient evidence — needed next: <artifact>`,
and the overall confidence drops accordingly. The gate never silently skips a row.
