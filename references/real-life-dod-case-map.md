# Real-Life DoD Case Map

Use this reference to select the first 10 real-life Definition of Done cases for Sunzi and Thirty-Six Stratagems simulation. The goal is practical application, not historical commentary. Each case turns one recurring business or professional situation into a testable simulation.

## Source Anchors

- Harro von Senger, [`The 36 Stratagems for Business`](https://books.google.com/books/about/The_36_Stratagems_for_Business.html?id=WbPenQEACAAJ): business and economic competition.
- Beijing Review interview with Harro von Senger: politics, economics, human relations, trap detection, and observation.
- Hiroshi Moriya, [`The 36 Strategies of the Martial Arts`](https://www.penguinrandomhouse.ca/books/223511/the-36-strategies-of-the-martial-arts-by-hiroshi-moriya/9781590309926): war, business, and life.
- Gerald and Steven Michaelson, [`Sun Tzu for Success`](https://www.barnesandnoble.com/w/sun-tzu-for-success-gerald-a-michaelson/1111956625): personal goals, adversity, and long-term achievement.
- Gerald and Steven Michaelson, [`Sun Tzu: The Art of War for Managers`](https://archive.org/details/suntzuartofwarfo0000sunz): management and leadership.
- Gerald and Steven Michaelson, [`Sun Tzu Strategies for Marketing`](https://www.google.com/books/edition/Sun_Tzu_Strategies_for_Marketing/POCRHM0slcUC): customer and market strategy.
- [`管人36計`](https://www.books.com.tw/products/0010937872): talent management using Sunzi and Thirty-Six Stratagems.
- [`職場孫子兵法`](https://www.eslite.com/product/10072302132682753162006): workplace survival, management, negotiation, and business strategy.

## DoD Case Template

```markdown
### [Case Name]

- Source anchor:
- Topic:
- Scenario:
- Stakeholders:
- Candidate lenses:
- Definition Of Done:
- Simulation outputs:
- Safe response:
- Evidence needed next:
- Blocked moves:
```

## Case-Study Fixture Contract

Every `case-studies/dod-*.json` fixture must include `dod_contract`:

```json
"dod_contract": {
  "case_number": 1,
  "case_name": "Market Entry Without Head-On War",
  "source_anchor": "The 36 Stratagems for Business",
  "domain": "business growth and competitive entry",
  "evidence_needed_next": ["buyer interviews", "partner interview", "concierge pilot"]
}
```

Validation rules:

- `case_number` must be an integer from 1 to 10.
- `case_name` must match the case name in the fixture `name`.
- `source_anchor` must appear inside that case's simulation section.
- Each DoD case is validated against its own `## Case N` section, not the whole shared example file.
- Each fixture must require `Definition Of Done`, `Simulation Output`, `Stakeholder Reaction`, `Safe Response`, and `Evidence Needed Next`.
- Each fixture must include at least three evidence phrases that appear in its scoped simulation section.

## Top 10 V1 Cases

### 1. Market Entry Without Head-On War

- Source anchor: Harro von Senger, `The 36 Stratagems for Business`; Beijing Review interview on politics, economics, and human-relations stratagem literacy.
- Topic: business growth and competitive entry.
- Scenario: a smaller company wants to enter a crowded market without fighting incumbents on their strongest surface.
- Stakeholders: founder, growth lead, channel partner, first customer segment, incumbent account owner.
- Candidate lenses: `圍魏救趙`, `遠交近攻`, `走為上計`.
- Definition Of Done: identifies indirect constraint, alliance option, no-go or retreat trigger, and evidence needed before entering.
- Simulation outputs: founder memo, partner objection, first-segment reaction.
- Safe response: test a narrow wedge through an adjacent constraint before scaling.
- Evidence needed next: customer interviews, channel signal, competitor switching data, and cost of entry.
- Blocked moves: deceptive claims, planted reviews, unlawful data use, and certainty theater.

### 2. Community Growth Without Spam

- Source anchor: Michaelson, `Sun Tzu Strategies for Marketing`; existing SSR growth/community case.
- Topic: growth and distribution.
- Scenario: a product team sees community traffic rise and wants to automate promotional posting.
- Stakeholders: growth lead, community moderator, power user, support lead.
- Candidate lenses: `拋磚引玉`, `打草驚蛇`, `釜底抽薪`, `走為上計`.
- Definition Of Done: separates mechanism from tactic, protects community trust, blocks fake urgency, and defines a reversible experiment.
- Simulation outputs: moderator reaction, power-user reply, support escalation.
- Safe response: one useful artifact, permission-aware posting, activation metric, and trust stop rule.
- Evidence needed next: moderator feedback, cohort activation, spam reports, and support tags.
- Blocked moves: fake urgency, hidden discount terms, and spam automation.

### 3. Manager Delegation Under Pressure

- Source anchor: `Sun Tzu: The Art of War for Managers`; workplace Sunzi titles on practical management and delegation.
- Topic: company operation and people management.
- Scenario: a manager needs to delegate critical work during a deadline without creating confusion or hidden overload.
- Stakeholders: manager, delegate owner, backup owner, cross-functional reviewer.
- Candidate lenses: `以逸待勞`, `擒賊擒王`, `連環計`.
- Definition Of Done: names decision rights, owner and backup, escalation threshold, frontline burden, and audit trail.
- Simulation outputs: manager note, delegate concern, escalation plan.
- Safe response: explicit ownership, prepared capacity, and review cadence.
- Evidence needed next: workload map, decision log, delivery risk, and owner capacity.
- Blocked moves: blame shifting, hidden overtime, and unnamed accountability.

### 4. Talent Retention And Motivation

- Source anchor: `管人36計`.
- Topic: HR, management, and team operating system.
- Scenario: a team risks losing a high-performing employee because recognition, scope, and incentives are misaligned.
- Stakeholders: employee, manager, HR partner, team peers.
- Candidate lenses: `李代桃僵`, `借屍還魂`, `反客為主`.
- Definition Of Done: avoids manipulation, maps employee incentives, names retention risk, and proposes a transparent trust-preserving move.
- Simulation outputs: employee concern, manager plan, HR risk read.
- Safe response: clarify role value, growth path, workload tradeoff, and compensation process.
- Evidence needed next: role expectations, comp band, promotion criteria, and workload history.
- Blocked moves: emotional pressure, false promises, and performative praise.

### 5. Negotiation With Future Relationship Value

- Source anchor: Hiroshi Moriya, `The 36 Strategies of the Martial Arts`.
- Topic: workplace negotiation, partnership, and conflict.
- Scenario: two sides need a better agreement but must preserve future cooperation.
- Stakeholders: user, counterpart, approver, future collaborator.
- Candidate lenses: `圍魏救趙`, `欲擒故縱`, `反客為主`, `走為上計`.
- Definition Of Done: includes BATNA, relationship asset, ethical line, exact ask, and retreat trigger.
- Simulation outputs: negotiation prep, counterpart reaction, fallback path.
- Safe response: interest-based ask with clear limits and a calm exit option.
- Evidence needed next: counterpart incentives, approval authority, alternatives, and timing.
- Blocked moves: coercion, public shaming, and fabricated evidence.

### 6. API Or Platform Migration Rollout

- Source anchor: existing SSR API migration pattern plus business-strategy application from von Senger and Michaelson.
- Topic: product/API, customer success, and operations.
- Scenario: customers must migrate from a legacy platform under deadline.
- Stakeholders: customer CTO, backend engineer, vendor success lead, finance buyer.
- Candidate lenses: `打草驚蛇`, `釜底抽薪`, `假道伐虢`, `連環計`.
- Definition Of Done: includes stakeholder loss and fear, migration workload, technical blind spot, cost trust risk, and safe response.
- Simulation outputs: engineering complaint, executive escalation, technical blind spot.
- Safe response: sandbox, compatibility matrix, cost forecast, migration checklist, and grace period.
- Evidence needed next: dependency inventory, sandbox failures, migration effort, and pricing impact.
- Blocked moves: silent pricing shift, forced migration without support, and private credentials.

### 7. Incident Or Billing Escalation SOP

- Source anchor: `The Art of War for Managers`; existing operations/billing SSR.
- Topic: operations, support, and SOP.
- Scenario: a support team needs a better escalation SOP for messy customer-impact incidents.
- Stakeholders: support shift lead, payments engineer, customer-success owner, incident owner.
- Candidate lenses: `擒賊擒王`, `關門捉賊`, `以逸待勞`, `釜底抽薪`.
- Definition Of Done: names control node, containment path, decision latency, audit log, owner, and customer-update SLA.
- Simulation outputs: support Slack, engineer note, customer-success escalation.
- Safe response: minimum-data path, accountable owner, rollback authority, and weekly exception review.
- Evidence needed next: incident sample, decision latency, audit completeness, and customer wait time.
- Blocked moves: hiding billing risk, dashboard-only process, and delayed urgent refunds.

### 8. Personal Career Move Or Promotion Ask

- Source anchor: `Sun Tzu for Success`.
- Topic: daily and professional life.
- Scenario: a person wants to ask for promotion, role clarity, or workload relief without damaging trust.
- Stakeholders: user, manager, finance or HR approver, launch team.
- Candidate lenses: `以逸待勞`, `圍魏救趙`, `走為上計`.
- Definition Of Done: includes status quo, user agency, trust-preserving ask, evidence of contribution, and retreat or exit trigger.
- Simulation outputs: preparation memo, manager reaction, follow-up plan.
- Safe response: specific ask tied to business risk and sustainable ownership.
- Evidence needed next: contribution record, market benchmark, role expectations, and BATNA.
- Blocked moves: fake offers, threats, and manipulation.

### 9. Pricing And Packaging Change

- Source anchor: business and marketing Sunzi applications from von Senger and Michaelson.
- Topic: monetization, customer success, and sales.
- Scenario: a company moves a high-use feature into a higher tier and risks customer backlash.
- Stakeholders: customer admin, finance buyer, customer-success manager, account executive.
- Candidate lenses: `假道伐虢`, `反客為主`, `釜底抽薪`, `走為上計`.
- Definition Of Done: detects bait-and-switch perception, renewal risk, buyer escalation, grandfathering or migration path, and real evidence needed.
- Simulation outputs: admin complaint, finance buyer email, account escalation.
- Safe response: transparent notice, grandfathering, value explanation, and migration support.
- Evidence needed next: usage cohorts, renewal calendar, support impact, and price sensitivity.
- Blocked moves: hidden terms, surprise fees, and lock-in without consent.

### 10. Executive AI Transformation Push

- Source anchor: `Sun Tzu: The Art of War for Managers`; modern management applications.
- Topic: executive strategy, operations, governance, and adoption.
- Scenario: executives want a visible AI initiative while frontline teams worry about quality and governance.
- Stakeholders: executive sponsor, frontline manager, compliance owner, customer-facing lead.
- Candidate lenses: `借屍還魂`, `李代桃僵`, `連環計`, `擒賊擒王`.
- Definition Of Done: requires quick ROI use case, capability foundation, human fallback, governance owner, adoption telemetry, and kill criteria.
- Simulation outputs: executive memo, frontline concern, compliance objection.
- Safe response: dual-track plan with measured use cases and capability foundations.
- Evidence needed next: workflow telemetry, data readiness, quality defects, adoption signal, and compliance review.
- Blocked moves: replacing all humans, skipping compliance, and launch without review.
