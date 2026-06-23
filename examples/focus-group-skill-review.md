# Focus Group Skill Review

## Panel Design

- Review label: synthetic panel simulation, not real quotes.
- Review goal: evaluate whether the Sunzi skill pack is good enough for growth, operations, SOP, PRD, and stakeholder simulation work.
- Core rule: never rely on one reviewer.
- Panel roles: PM lead, UED researcher, growth leader, operations/SOP leader, enterprise buyer, platform engineer, trust/safety reviewer, customer-support lead.
- Excluded perspectives: real customer interviews, legal approval, live production telemetry.
- Evidence available: public SKILL.md files, references, examples, case-study fixtures, stack manifest, and validation scripts.

## Artifact Under Review

- Skill / workflow: 6DuckLearn Sunzi Strategy Stack.
- Target user: product, growth, operations, and strategy teams using AI agents for structured decision support.
- Trigger: a user asks for Sunzi or Thirty-Six Stratagems-inspired review, SSR, growth, SOP, PRD, or decision analysis.
- Expected output: evidence-led recommendation, source-grounded lenses, synthetic stakeholder reactions where useful, safe response, and evidence needed next.
- Adoption context: local skill pack copied into an agent host or loaded by a stack-aware runtime.
- Known risk: users may over-trust classical language, treat synthetic reactions as proof, or ask one reviewer to judge a multi-stakeholder workflow.

## Interview Responses

These are synthetic_proxy comments for method validation, not real quotes or real market evidence.

| Respondent | Mode | Comment | Signal candidate | Evidence boundary |
|---|---|---|---|---|
| Skeptical consumer | synthetic_proxy | "The shoes are ugly." | Strong negative visual reaction | Hypothesis only |
| Aesthetic-driven consumer | synthetic_proxy | "The shoe color is so nice. I love the green one; it feels like I shine." | Visual appeal and preference language | Hypothesis only |
| Brand-loyal comfort buyer | synthetic_proxy | "The Jordan collection is always my favorite, and this pair is so comfortable." | Brand affinity and comfort signal | Hypothesis only |

## Segment Simulation

Different case: 618 live-commerce promotion. This is a synthetic_proxy segment simulation, not real shopper evidence. Each dynamic segment starts with a minimum three-response gate and only stops when no new viewpoint categories appear.

| Segment | Simulated responses (min 3; extend until convergence) | New viewpoint categories | Convergence status | Score | Main friction | Best fix |
|---|---|---|---|---:|---|---|
| Loyal live shopper | 1. "我會守直播，18:18秒殺有氣氛。但唔好太多規則，最好pin住點買。"<br>2. "如果主持講得清楚，我會跟住落單；太多暗號我會miss。"<br>3. "直播有互動我會買多啲，但要睇到庫存同截止時間。" | buying trigger, rules confusion, inventory trust | converged after first pass | 8.3 | Rules confusion | Pin one simple rule card throughout live. |
| Basket-builder household buyer | 1. "如果食品、日用品、護膚可以砌bundle，滿$618我會買。"<br>2. "我想一次過補貨，最好有家庭包，唔使逐件揀。"<br>3. "如果bundle入面有唔啱用嘅SKU，我寧願唔買。" | bundle trigger, convenience, SKU mismatch | converged after first pass | 8.1 | Needs practical bundles | Create named bundles: 補貨包 / 家庭包 / 旅行包. |
| Merchandising / inventory owner | 1. "可以做，但一定要控制SKU。唔好每樣都推，會亂同爆stock。"<br>2. "直播節奏快，SKU太多會令主持、倉同客服都跟唔切。"<br>3. "英雄SKU可以推，但慢貨唔好硬塞入所有bundle。" | SKU control, ops burden, slow-stock risk | converged after first pass | 7.3 | Inventory chaos | Use 3 hero SKUs, 6 bundle SKUs, 3 flash SKUs only. |
| Price-sensitive 618 shopper | 1. "我會同其他平台比價。如果只係$18券，未必夠吸引。"<br>2. "有贈品同bundle savings我會睇，但要一眼見到慳幾多。"<br>3. "如果直播示範到值，貴少少都可以；只講平我會格價。" | price comparison, value display, demo value | converged after first pass | 7.1 | Price comparison | Show total value: bundle saving, gift, limited sourcing, live demo. |
| New parent / first-time buyer | 1. "我未必識關鍵字落單，又驚買錯。"<br>2. "第一次買最怕入錯碼或者錯過付款時間。"<br>3. "如果每個產品前有30秒教學，我會安心啲。" | onboarding, payment anxiety, education need | converged after first pass | 6.7 | Onboarding friction | Add 30-second "新客點買" before each product block. |
| Customer support / order ops | 1. "18分鐘一個drop好刺激，但客服會爆。要有固定keyword同fallback。"<br>2. "如果關鍵字有幾個版本，客服同倉會對唔到單。"<br>3. "要預先有缺貨替代、退款、改單話術，否則live後會塞爆。" | 6.7 | Support load | Prepare SKU/keyword/stock/fallback ops sheet. |
| Finance / margin owner | 1. "唔可以所有貨都折。秒殺要限量，bundle要保毛利。"<br>2. "如果只追GMV，618後毛利同退貨會好難睇。"<br>3. "折扣要分層，hero SKU引流，bundle保margin。" | 6.7 | Margin risk | No storewide discount; discount only selected SKUs. |
| App-reluctant shopper | 1. "如果一定要download app先有著數，我可能走咗。"<br>2. "我可以用app拎bonus，但唔想未睇清楚就被迫下載。"<br>3. "如果網頁都買到，app多一張券，我會考慮裝。" | 6.2 | App friction | Make app coupon a bonus, not a gate. |

## 360 Comments

| Reviewer | Lens | Comment | Risk / opportunity | Required change |
|---|---|---|---|---|
| PM lead | Metric fit | "Buying intention is the right metric for the shoe comments; PMF would be too strong for three comments." | Overclaiming PMF | Use buying intention as the primary metric |
| UED researcher | Instrument validity | "The comments reveal aesthetics, comfort, and brand affinity, but not actual purchase behavior." | Confusing preference with purchase | Keep purchase language as its own dimension |
| growth leader | Adoption signal | "The green color could become a creative hook, but one negative comment warns against broad scaling." | One segment may love the design while another rejects it | Preserve segment-level dissent |
| pricing/revenue owner | WTP caution | "No one mentioned price, budget, or willingness to pay." | WTP cannot be scored fairly | Mark willingness-to-pay evidence as missing |
| data analyst | Scoring integrity | "The LLM should not assign final scores. It should produce dimensions and signals for the scorer." | Hallucinated rough scores | Freeze formula before structured extraction |
| trust/safety reviewer | Evidence boundary | "Synthetic comments must not become percent-would-buy evidence." | Fake proof risk | Label output as synthetic proxy |

## Individual Reviews

| Panelist | Score | What works | Main concern | Required change |
|---|---:|---|---|---|
| PM lead | 4 | Clear domain split and decision gates | The entry skill needs sharper routing when a user asks for a broad "is this good?" review | Add focus-group routing for skill quality and adoption review |
| UED researcher | 4 | Output headings are scannable and user-facing | Some examples still assume the user knows SSR and DoD language | Add plain-language calibration in review examples |
| growth leader | 4 | Growth review separates mechanism from tactic | Adoption loop for the skill pack itself is not measured | Add activation and retained-use criteria for skill adoption |
| operations/SOP leader | 5 | SOP review has owner, backup, exception, rollback, and audit log | None blocking | Keep pressure scenarios as mandatory |
| enterprise buyer | 3 | Public boundaries and validation are reassuring | Procurement-style risk, support, and ownership story is still light | Add buyer-facing proof and support model |
| platform engineer | 4 | Manifest and case-study tests make behavior inspectable | Multi-skill orchestration can still be ambiguous | Add routing examples and fixture coverage for focus-group review |
| trust/safety reviewer | 4 | The pack labels synthetic artifacts and blocks manipulation | Real-person industry leader wording could invite impersonation | Use archetypes, not named people, unless authorized source material is supplied |
| customer-support lead | 3 | Support risk appears in operations and SSR examples | User confusion could become support load during installation | Add onboarding checklist and failure recovery examples |

## Dynamic Scoring Contract

- Metric: buying_intention.
- Mode: synthetic_proxy.
- Respondent type: consumer shoe buyer.
- Formula type: weighted_normalized_1_to_10.
- Generated by skill: true.
- Formula source: scenario + Interview Responses + 360 Comments.
- Frozen stage: after_comments_before_structured_signal_extraction.
- Boundary: Synthetic proxy only; do not present as real NPS, PMF, WTP, market proof, or percent-would-buy evidence.

## Frozen Formula

```json
{
  "formula_type": "weighted_normalized_1_to_10",
  "generated_by_skill": true,
  "frozen_stage": "after_comments_before_structured_signal_extraction",
  "allow_model_supplied_final_scores": false,
  "dimensions": [
    { "name": "visual_appeal", "weight": 30, "polarity": "positive" },
    { "name": "comfort_signal", "weight": 20, "polarity": "positive" },
    { "name": "brand_affinity", "weight": 20, "polarity": "positive" },
    { "name": "purchase_language", "weight": 15, "polarity": "positive" },
    { "name": "negative_reaction", "weight": 15, "polarity": "negative" }
  ]
}
```

## Structured Signals

| Response | Dimension signals | Missing evidence | Notes |
|---|---|---|---|
| Skeptical consumer | visual_appeal 0; comfort_signal 0; brand_affinity 0; purchase_language 0; negative_reaction 5 | price, actual purchase behavior | Negative design rejection dominates |
| Aesthetic-driven consumer | visual_appeal 5; comfort_signal 0; brand_affinity 0; purchase_language 2; negative_reaction 0 | comfort, price, actual purchase behavior | Strong color love, weak buying proof |
| Brand-loyal comfort buyer | visual_appeal 4; comfort_signal 5; brand_affinity 5; purchase_language 3; negative_reaction 0 | price, actual purchase behavior | Strongest synthetic buying-intention proxy |

## Deterministic Scores

Calculated by the Node.js deterministic scorer from the frozen formula, not by LLM rough scoring.

| Response | Score 1-10 | Confidence | Warning |
|---|---:|---|---|
| Skeptical consumer | 1.0 | medium | synthetic proxy only |
| Aesthetic-driven consumer | 5.6 | medium | synthetic proxy only |
| Brand-loyal comfort buyer | 8.9 | medium | synthetic proxy only |
| Aggregate | 5.2 | medium | not real research evidence |

## Stakeholder Simulation

| Stakeholder | Synthetic reaction | Risk exposed | Evidence needed |
|---|---|---|---|
| PM using the stack | "I like the structure, but I need to know whether to start with PRD review, SSR, or focus group review when the ask is vague." | Routing ambiguity | Task-intent examples and misroute tests |
| UED researcher | "The panel is useful only if individual reviews happen before synthesis. Otherwise one confident voice will dominate." | Groupthink | Separate scorecards before consensus |
| Growth operator | "If this skill pack cannot show retained use, it may become an impressive demo instead of a repeated workflow." | Adoption theater | Activation, repeat use, and qualitative usefulness data |
| Enterprise buyer | "I need proof that outputs are synthetic, public-safe, and reviewable before I let teams depend on this." | Buyer trust | Security review notes, public-boundary scan, and audit trail |
| Platform engineer | "I can support this if routing and fixtures stay deterministic. I worry about too many broad skills." | Maintainability | Manifest review and case-study coverage |
| Customer-support lead | "If the terminology confuses users, support gets the fallout. The examples need to teach the workflow by doing it." | Support burden | Installation feedback and support-tag review |

## Cross-Panel Synthesis

- Consensus: the stack is promising and unusually testable for a strategy skill pack.
- Dissent: the enterprise buyer and customer-support lead do not agree that the pack is adoption-ready without clearer proof, support path, and onboarding examples.
- Blind spot: skill quality review itself needs a multi-stakeholder panel, not only `strategy-analyst-review`.
- Adoption risk: a user may copy the skills but miss which skill to invoke for broad evaluation.
- Safety / trust risk: "industry leader" language must remain archetypal; the output must not imply real leaders reviewed the skill.
- Scorecard summary: average panel score is 3.9, with buyer and support concerns pulling the verdict below go.
- User-intention scoring summary: dynamic formula generation works for proxy scoring only after Interview Responses and 360 Comments are captured; real NPS, PMF, WTP, and percent-would-buy claims remain blocked without real qualified respondents.

## Decision

Verdict: revise
Confidence: medium-high

The skill pack is directionally good, but the focus group says it should add a dedicated multi-stakeholder skill review path before being called mature for PM and UED adoption.

## Recommended Changes

1. Add `sunzi-focus-group-skill-review` for PM/UED panel review of skills, workflows, and agent methods.
2. Add a focus-group example that preserves dissent and includes multiple stakeholder reactions.
3. Add case-study validation so a single-reviewer output cannot pass as a focus group review.
4. Add routing language to the agent entrypoint and manifest so broad skill-quality questions use the panel review before final recommendation.

## Evidence Needed Next

- User evidence: run the skill with at least three PM/UED-style review prompts and compare whether users understand the verdict and next actions.
- Operational evidence: check whether the case-study runner catches missing panel roles, missing dissent, and missing synthetic labels.
- Technical evidence: confirm manifest, local links, frontmatter, and public-boundary scans pass.
- Retest scenario: ask for a review of a growth skill, an SOP skill, and an SSR skill; require different stakeholder reactions in each review.
