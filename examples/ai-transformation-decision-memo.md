# AI Transformation Decision Memo

## Scenario

A services company has many GenAI ideas, uneven data quality, nervous frontline teams, and executives asking for visible ROI within two quarters.

## Decision

- Objective: prove AI ROI while building a durable operating model that does not bypass human judgment.
- Arena/domain: AI and digital transformation.
- Time horizon: two-quarter proof, 12-month capability build.
- Recommendation: run a dual-track plan: two workflow-specific ROI pilots plus platform, governance, and adoption foundations.
- Confidence: medium, pending workflow baselines and data-readiness audit.

## First-Principles Map

| Variable | Evidence | Interpretation | Missing / falsifier |
|---|---|---|---|
| Actors | Executives, frontline teams, compliance, data owners, customers | ROI pressure and risk ownership are split | Workflow owner commitment |
| Incentives | Executives want impact; teams want safety and workload relief | Adoption will fail if users see surveillance or quality risk | User interviews and current cycle-time data |
| Constraints | Uneven data quality, policy uncertainty, change fatigue | AI is constrained by workflow redesign, not only model choice | Data lineage and error tolerance |
| Information | Many ideas but weak prioritization | Need value, risk, and readiness scoring | Use-case inventory |
| Timing | Two quarters | Quick ROI must fund slower capability foundations | Budget window |
| Feedback | Cycle time, quality defects, adoption telemetry, escalation rate | Behavior change matters more than training attendance | Current adoption baseline |
| Failure mode | Demo-first transformation | Public launch without adoption, governance, or fallback | Error rate in high-stakes work |

## Selected Lenses

| Lens | Why it fits | Ethical business translation | Falsifier / misuse risk |
|---|---|---|---|
| 借屍還魂 | Existing workflows and data can be revived with AI capability | Modernize a painful legacy workflow before inventing new work | Falsified if the workflow is obsolete for structural reasons |
| 李代桃僵 | Automation should protect human judgment in sensitive cases | Automate drafting and triage while keeping human fallback for high-stakes decisions | Falsified if human review becomes rubber-stamping |
| 連環計 | Use cases, platform, governance, and training must reinforce each other | Link pilots to reusable data, policy, and adoption telemetry | Falsified if dependencies slow all learning |

## Strategy-Analyst Review

- Alternative lens: `擒賊擒王` if one workflow owns most cost and complaint volume.
- Do nothing / retreat option: pause production use until data lineage and escalation paths are clear.
- Ethical rewrite: do not replace human accountability in sensitive decisions; use human fallback and audit trails.
- Kill criterion: stop scale-up if quality defects rise or adoption telemetry shows users bypassing the tool.

## Evidence Ledger

| Source / artifact | Claim supported | Quality | Missing / next check |
|---|---|---|---|
| Workflow cycle-time reports | ROI pilots should target measurable bottlenecks | Medium | Current defect and rework rates |
| Data-readiness audit | Uneven data quality is a constraint | Low | Source-system ownership |
| User interviews | Adoption risk is real | Medium | Role-specific adoption telemetry |

## Action Plan

1. First reversible move: score use cases by value, risk, data readiness, and human fallback clarity.
2. Sequence: launch two low-to-medium-risk pilots, define escalation rules, instrument adoption telemetry, then expand only after quality gates pass.
3. Owner: AI transformation lead with compliance, data, and frontline workflow owners.
4. Leading metric: weekly active usage tied to completed workflow outcomes.
5. Stop condition: quality defects, customer complaints, or manual rework increase for two consecutive weeks.
