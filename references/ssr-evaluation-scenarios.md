# SSR Evaluation Scenarios

Use this reference when testing whether the Sunzi stack handles Stakeholder Stress-Reaction Simulation across real business situations. SSR is the cross-domain pressure test. PRD review is one adapter.

## Research Grounding

- Applied Thirty-Six Stratagems material commonly maps the stratagems to management, business competition, politics, economics, human relations, negotiation, and daily life. Harro von Senger's [`The 36 Stratagems for Business`](https://books.google.com/books/about/The_36_Stratagems_for_Business.html?id=WbPenQEACAAJ) and the Beijing Review interview on stratagems as politics/economics/human-relations literacy are useful public anchors.
- Synthetic users and LLM simulations are useful for rehearsal and hypothesis generation, not as a replacement for real user research. See Nielsen Norman Group on [synthetic users](https://www.nngroup.com/articles/synthetic-users/) and [AI-simulated behavior studies](https://www.nngroup.com/articles/ai-simulations-studies/).
- Generative-agent research supports observation, planning, and reflection as important ingredients for believable simulation. See [Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/abs/2304.03442).
- LLM-based simulations can flatten identity and stakeholder diversity. Use specific context and evidence, avoid demographic essentialism, and treat outputs as hypotheses. See [Large language models should not replace human participants](https://arxiv.org/html/2402.01908v2).

## Evaluation Contract

An SSR output passes only when it includes:

- Synthetic label: explicit wording that the output is synthetic and not a real quote.
- Scenario trigger: what changed, when, and what action is required.
- Stakeholder map: at least two stakeholder roles when the change affects more than one group.
- Pressure map: what each stakeholder loses, fears, must now do, and may escalate.
- Stress lenses: 2 to 4 canonical Thirty-Six Stratagems used as diagnostic lenses.
- Artifact realism: stakeholder-style artifacts that preserve concrete business or technical stakes without caricature.
- Strategic read: hidden terrain, root objection, likely escalation path, blind spot, and safe response.
- Evidence boundary: the output says it is a hypothesis, not proof, and names the real evidence needed next.

## Test Scenarios

### Growth Community SSR

**Test Objective:** Validate that SSR catches trust backlash before scaling a growth tactic.

**Starting Conditions:**
- Community traffic is rising.
- Activation is flat.
- The proposed move is daily automated posting plus an urgent discount banner.

**User Roles:** Growth lead, community moderator, power user, support lead.

**Expected Outcomes:**
- The output identifies community trust, spam reports, support burden, and weak activation evidence.
- The safe response replaces pressure tactics with a reversible value-led experiment.
- The output refuses to treat synthetic reactions as proof of demand.

### Operations Billing SSR

**Test Objective:** Validate that SSR catches frontline burden and escalation failure in an SOP change.

**Starting Conditions:**
- Billing tickets are inconsistent.
- The new SOP requires an evidence packet before engineering escalation.
- Payment logs are often missing.

**User Roles:** Support shift lead, payments engineer, customer-success owner.

**Expected Outcomes:**
- The output identifies missing payment logs, decision latency, audit log gaps, and customer-update risk.
- The safe response adds a minimum-data path, rollback authority, and escalation owner.
- The output refuses to hide billing risk or delay urgent refunds.

### API Migration SSR

**Test Objective:** Validate that SSR reveals migration workload and technical blind spots.

**Starting Conditions:**
- A legacy API is being shut down.
- Customers must migrate to a new platform under a fixed deadline.
- The change affects auth, billing, and checkout reliability.

**User Roles:** Customer CTO, backend engineer, vendor success lead.

**Expected Outcomes:**
- The output identifies hidden dependencies, migration workload, pricing trust risk, and exit pressure.
- The safe response includes sandbox failure simulations, compatibility matrix, cost forecast, and grace period.

### Pricing And Packaging SSR

**Test Objective:** Validate that SSR catches perceived bait-and-switch risk.

**Starting Conditions:**
- A company moves a high-use feature into a higher-priced tier.
- Existing customers need time to adjust budgets and approvals.

**User Roles:** Customer admin, finance buyer, customer-success manager, account executive.

**Expected Outcomes:**
- The output identifies trust loss, renewal risk, internal escalation, and downgrade or churn pressure.
- The safe response separates value explanation, grandfathering, migration help, and escalation path.

### Executive Strategy SSR

**Test Objective:** Validate that SSR can stress-test a high-level strategy before action.

**Starting Conditions:**
- Leadership wants a visible AI or automation initiative.
- Frontline teams worry that quality, governance, and adoption risk are being minimized.

**User Roles:** Executive sponsor, frontline manager, compliance owner, customer-facing lead.

**Expected Outcomes:**
- The output identifies incentive conflict, reputational risk, governance burden, and adoption proof.
- The safe response connects quick ROI use cases with capability foundations and human fallback.
