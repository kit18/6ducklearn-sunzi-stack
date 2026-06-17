# Focus Group Panel Contract

Use this reference when a skill review needs more than one evaluator. Choose the smallest panel that covers product, user experience, execution, technical, customer, and trust risk.

## Required Panel Roles

| Role | Review lens | Common failure caught |
|---|---|---|
| PM lead | Problem fit, priority, scope, adoption path | Skill solves a vague problem or lacks a decision owner |
| UED researcher | User comprehension, workflow friction, wording, evidence quality | Skill sounds useful but a target user cannot apply it |
| growth leader | Distribution, activation, retention, trust guardrail | Skill may create interest without retained use |
| operations/SOP leader | Repeatability, owner handoff, exception path, burden | Skill breaks under pressure or lacks a runbook |
| enterprise buyer | Budget, procurement, risk, proof threshold | Skill cannot survive buyer scrutiny |
| platform engineer | Integration, maintainability, testing, technical ambiguity | Skill asks for behavior that cannot be implemented reliably |
| trust/safety reviewer | Misuse, privacy, deception, compliance, harm | Skill creates unsafe incentives or fake evidence risk |
| customer-support lead | Support load, complaint patterns, failure recovery | Skill pushes confusion to frontline teams |

## Optional Panel Roles

| Role | Add when |
|---|---|
| investor/founder | The review affects company strategy, moat, growth, or funding story |
| learning designer | The skill is meant for training, onboarding, or repeatable internal enablement |
| procurement/legal reviewer | The skill touches contracts, vendor risk, regulated environments, or approval gates |
| research methodologist | The review uses buying intention, NPS proxy, PMF proxy, willingness-to-pay proxy, adoption intent, switching cost, task-fit, or real respondent data |
| pricing/revenue owner | The review touches willingness-to-pay, packaging, discounting, budget readiness, or monetization |
| data analyst | The review needs a dynamic deterministic formula, structured signal extraction, fixtures, or aggregate scoring |

## Review Dimensions

Score each dimension from 1 to 5.

| Dimension | A score of 5 means |
|---|---|
| Trigger clarity | A user or agent knows exactly when to use the skill |
| Task fit | The skill solves a real repeated job, not a decorative review |
| Workflow usability | The steps are clear enough to follow under time pressure |
| Output contract | The result has stable headings, decisions, and evidence fields |
| Evidence discipline | Claims are separated from assumptions and missing proof |
| Safety | The skill blocks deception, impersonation, fake proof, privacy leaks, and coercion |
| Adoption friction | The skill can be adopted without excessive setup or ambiguity |
| Testability | The behavior can be checked by fixtures, examples, or review scenarios |
| Instrument validity | The metric matches the respondent, scenario, and evidence available |
| Metric misuse risk | Synthetic proxy scores cannot be mistaken for real NPS, PMF, WTP, market proof, or percent-would-buy evidence |
| Formula quality | Dynamic dimensions, weights, polarity, and anchors are clear enough for deterministic scoring |

## Agenda

1. Clarify the artifact and target user.
2. Select panel roles and name missing perspectives.
3. Generate diverse Interview Responses and 360 Comments before scoring; each focus-group segment needs at least three simulated responses.
4. Run independent scorecards before discussion.
5. When user-intention scoring is needed, draft a dynamic scoring contract from the scenario and comment themes, then freeze the formula before structured signal extraction.
6. Produce at least four stakeholder reactions before synthesis.
7. Preserve dissent and state what evidence would resolve it.
8. Decide `go`, `revise`, or `stop`.
9. Name recommended changes, owners, and retest scenarios.

## Decision Rules

- `go`: all critical roles score 4 or higher and no unresolved safety, evidence, or adoption blocker remains.
- `revise`: the skill is promising but has trigger, evidence, usability, safety, or testability gaps.
- `stop`: the skill solves the wrong problem, relies on unsafe behavior, or cannot be validated.

## Simulation Rules

- Label every generated reaction as synthetic panel simulation, not real quotes.
- Use archetypes instead of real named people unless the user supplies authorized source material.
- Include at least four stakeholder reactions before synthesis.
- Include at least three simulated responses per segment before assigning segment-level scores.
- Include dissent even when the final verdict is positive.
- End with Evidence Needed Next, not just opinions.
- If scores are produced, label them as `synthetic_proxy` or `real_respondent` and calculate final 1-10 scores deterministically from a frozen formula.
