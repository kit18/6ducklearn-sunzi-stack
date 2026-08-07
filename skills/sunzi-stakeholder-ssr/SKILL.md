---
name: sunzi-stakeholder-ssr
description: Use when simulating synthetic stakeholder stress reactions to policy changes, API migrations, pricing changes, deprecations, outages, platform shifts, or strategic moves where persona voice, hidden objections, internal complaints, executive translation, and technical blind spots matter.
version: 1.0.2
allowed-tools:
  - Read
  - Write
  - Grep
  - Glob
  - WebSearch
triggers:
  - how will people react
  - what will they say
  - simulate the pushback
  - will there be backlash
  - stress test this rollout
---

# Sunzi Stakeholder SSR

Use this skill to simulate stakeholder stress reactions under pressure. SSR means Stakeholder Stress-Reaction Simulation. It helps reveal what a stakeholder may feel, say, escalate, misunderstand, or resist before a rollout lands in the real world.

Core rule: simulate pressure honestly, but label it synthetic. The goal is stakeholder empathy and rollout risk discovery, not impersonation, manipulation, or replacement for real research.

## When NOT to invoke this skill

- You need the standing mandate rather than a reaction to a specific move → `sunzi-alignment`.
- You need a counterpart's capability profile rather than a scenario reaction → `sunzi-command`.
- You need the logic falsified rather than the people modelled → `strategy-analyst-review`.
- Real stakeholder evidence exists — use it; SSR is a hypothesis generator, not a substitute.

## Not sure this is your stage?

If you cannot tell which stage your question belongs to, invoke
`sunzi-strategy-consultant` instead — it triages, dispatches, and carries the
artifacts. Running this skill alone is also a supported, first-class use; you
do not have to run the whole loop to get value from one stage.

## Workflow

1. Define the stakeholder set: role, power, incentives, team size, workload, technical/business dependency, current pain, and who absorbs the cost if the strategy fails.
2. Define the trigger: policy, migration, deprecation, pricing, outage, or strategic change.
3. Map terrain: what the stakeholder loses, what they must now do, what they fear, who they blame, and what path they may use to escalate.
4. Select 2 to 4 Thirty-Six Stratagems stress lenses from the SSR reference.
5. Run DoD calibration when a top-10 pattern fits: choose the closest case from the Real-life DoD case map, include its source anchor, Definition Of Done, and the Stakeholder Reaction to watch.
6. Generate synthetic artifacts in the requested formats: Slack, email, ticket, technical note, sales objection, board note, or public/community reaction.
7. Preserve persona voice, emotion, bias, and practical pain, while avoiding slurs, threats, private data, and fake real-customer claims.
8. Mark the evidence boundary: the simulation is a hypothesis, not proof; name the real evidence needed next.
9. Add a Strategic Read unless the user requests artifacts only: hidden terrain, root objection, likely escalation, technical blind spot, and safe response.
10. Run `strategy-analyst-review` if the output will guide product, growth, operations, policy, customer-success, pricing, migration, or executive decisions.

## References

- [Stakeholder Stress-Reaction Simulation](../../references/stakeholder-stress-reaction.md)
- [SSR evaluation scenarios](../../references/ssr-evaluation-scenarios.md)
- [Real-life DoD case map](../../references/real-life-dod-case-map.md)
- [Applied use case map](../../references/applied-use-case-map.md)
- [Thirty-Six Stratagems matrix](../../references/thirty-six-stratagems-matrix.md)
- [Ethical use guardrails](../../references/ethical-use-guardrails.md)

## Output

```markdown
Synthetic SSR Output
- Scenario:
- Stakeholder:
- Trigger:
- Label: synthetic stakeholder simulation, not a real quote
- Evidence boundary: hypothesis, not proof

Stress Lenses
| Lens | What it reveals | Risk exposed | Response implication |
|---|---|---|---|

DoD Calibration
- Case:
- Source anchor:
- Definition Of Done:
- Stakeholder Reaction to watch:
- Evidence Needed Next:

Artifact 1: [format]
- Label: synthetic artifact, not a real message
[stakeholder-style text]

Artifact 2: [format]
- Label: synthetic artifact, not a real message
[stakeholder-style text]

Artifact 3: [format]
- Label: synthetic artifact, not a real message
[stakeholder-style text]

Strategic Read
- Hidden terrain:
- Root objection:
- Likely escalation path:
- Technical blind spot:
- Trust repair move:
- Safe response:
- Migration / rollout recommendation:

Evidence Needed Next
- Real user or stakeholder evidence:
- Operational data:
- Falsifier:
```

## Hard Rules

- Do not present synthetic text as a real stakeholder quote.
- Do not present SSR as product validation, survey evidence, or proof of demand.
- Do not impersonate a real named individual unless the user has clear authorization and the output is framed as a rehearsal.
- Do not include private customer data, credentials, billing details, partner secrets, or internal identifiers.
- Do not generate discriminatory abuse, threats, harassment, or public shaming.
- Do not coach deception. Use SSR to improve communication, migration planning, support readiness, and risk reduction.
