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
