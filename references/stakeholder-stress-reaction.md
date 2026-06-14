# Stakeholder Stress-Reaction Simulation

Use this reference when applying Sunzi and the Thirty-Six Stratagems to synthetic stakeholder reaction work.

SSR means **Stakeholder Stress-Reaction Simulation** in this stack. It is a structured way to simulate how a stakeholder might react under pressure, especially when a policy, pricing, migration, outage, deprecation, growth move, operations change, or market move changes their terrain.

SSR output is a **hypothesis, not proof**. Use it to decide what to inspect, test, ask, rehearse, or repair next.

## What SSR Is

SSR is useful for:

- Product and policy rollout risk.
- API deprecation and migration planning.
- Pricing and packaging changes.
- Incident communication rehearsals.
- Sales, partner, and customer-success objection discovery.
- Executive briefings where leaders need to feel the stakeholder pain, not just see a neutral risk table.
- Growth, operations, product/API, pricing, policy, migration, and executive-strategy pressure tests.

SSR should produce **synthetic artifacts**, such as:

- Internal Slack complaint.
- Email to a boss.
- Support-ticket draft.
- Vendor escalation note.
- Sales-call objection.
- Technical "this will break" instinct.
- Public/community reaction.

## What SSR Is Not

- Not a real customer quote.
- Not a survey result.
- Not product validation or proof of demand.
- Not permission to impersonate a real person.
- Not a bypass for privacy, confidentiality, defamation, or safety.
- Not an excuse to generate abuse, slurs, harassment, threats, or targeted humiliation.

Label outputs as synthetic when they could be confused with real messages.

## SSR With Thirty-Six Stratagems

Use stratagems as **stress lenses**, not as tactics to manipulate stakeholders.

| Lens | SSR use |
|---|---|
| 打草驚蛇 | A surprise notice reveals hidden dependencies, suppressed anger, and brittle assumptions. |
| 釜底抽薪 | Find the root fuel of the reaction: cost, migration workload, downtime risk, team capacity, trust loss. |
| 圍魏救趙 | The stakeholder may not attack the policy directly; they may pressure sales, leadership, finance, or legal instead. |
| 反客為主 | A customer or partner may try to turn the vendor's rollout into their own negotiation leverage. |
| 假道伐虢 | A "security upgrade" or "platform modernization" message may be perceived as a path toward pricing or lock-in. |
| 走為上計 | The stakeholder may decide that exit, replacement, or delay is safer than migration. |
| 擒賊擒王 | The real blocker may be one technical control point: auth, data format, checkout dependency, billing predictability, or test environment. |
| 連環計 | Multiple small requirements can chain into a program-level risk: OAuth, refactor, QA, billing, rollback, and executive approval. |

## SSR Evaluation Loop

1. Start from the strategy, rollout, or policy that will change stakeholder terrain.
2. Map at least two stakeholder roles when the change crosses teams or customer groups.
3. For each stakeholder, name loss, fear, required action, blame target, and escalation path.
4. Produce labeled synthetic artifacts in stakeholder-style voice.
5. Extract the Strategic Read: hidden terrain, root objection, technical blind spot, and safe response.
6. Name the real evidence needed next: interview, support log, usage cohort, incident data, financial model, or rollout rehearsal.
7. Send high-stakes outputs through `strategy-analyst-review` before action.

## Required Inputs

```markdown
Stakeholder:
- Role:
- Company type:
- Team size:
- Power / decision rights:
- Existing dependency:
- Current workload:

Trigger:
- What changed:
- Timeline:
- Cost / pricing change:
- Technical change:
- Required action:

Evidence:
- Known facts:
- Assumptions:
- Missing evidence:

Output artifacts:
- Artifact 1:
- Artifact 2:
- Artifact 3:
```

## Output Rules

- Write in the stakeholder's voice, but keep it plausible for their role and constraints.
- Include emotion, frustration, urgency, and bias when requested.
- Preserve concrete business and technical stakes.
- Avoid caricature. A stressed stakeholder is still a competent person.
- Use placeholders for companies, APIs, customers, and people unless the user explicitly provides public-safe names.
- Include a short "Strategic Read" after the artifacts unless the user asks for raw artifacts only.
- The Strategic Read should identify the hidden terrain, strongest objection, likely escalation path, technical blind spot, and safest response.
- State that the output is hypothesis, not proof, when it could influence product, growth, operations, pricing, migration, or executive decisions.

## Safety And Confidentiality

Refuse or reframe requests to:

- Impersonate a real named person without clear authorization.
- Fabricate real customer quotes or survey evidence.
- Generate threats, discriminatory abuse, or targeted harassment.
- Reveal private customer, partner, employee, credential, or billing data.
- Coach deception or manipulation.

Offer a safe alternative:

- Synthetic stakeholder voice.
- Aggregated persona.
- Red-team objection list.
- Migration-risk memo.
- Customer-success response plan.
