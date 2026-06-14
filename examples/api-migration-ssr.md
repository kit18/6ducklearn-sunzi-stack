# API Migration Stakeholder SSR

## Scenario

A platform vendor announces that `[Legacy v1 API]` will shut down in three months. Customers must migrate to `[Modular Open API Platform]`, adopt dynamic billing, and re-implement OAuth 2.0. The simulated stakeholder is a mid-market ecommerce CTO or senior backend engineer with a five-person IT team, overloaded Q3 roadmap, and a checkout flow that has depended on the old API for three years.

## Synthetic SSR Output

- Scenario: forced API migration and pricing-model change.
- Stakeholder: mid-market ecommerce CTO / senior backend engineer.
- Trigger: three-month shutdown notice for a legacy checkout dependency.
- Label: synthetic stakeholder simulation, not a real quote.
- Evidence boundary: hypothesis, not proof.

## Stress Lenses

| Lens | What it reveals | Risk exposed | Response implication |
|---|---|---|---|
| 打草驚蛇 | The announcement shocks the customer into exposing hidden dependencies | Checkout risk, staffing shortage, accumulated technical debt | Expect emotional escalation before rational planning |
| 釜底抽薪 | The real fuel is not "OAuth work"; it is business continuity under a tiny team | Revenue risk, roadmap displacement, weekend migration work | Offer migration tooling, grace period, and rollback proof |
| 假道伐虢 | "Security upgrade" may be read as a path toward dynamic billing and lock-in | Trust loss and suspicion about vendor motives | Separate security rationale, migration effort, and pricing transparently |
| 走為上計 | Exit may look safer than migration if cost and risk are unknowable | Vendor replacement evaluation | Provide credible cost forecast and migration sandbox quickly |

## Artifact 1: Internal Slack Complaint

Label: synthetic artifact, not a real message.

```text
[#engineering]

CTO:
剛收到 vendor 的信，三個月後 `[Legacy v1 API]` 要停。不是 warning，不是建議，是直接停。

然後他們叫我們全面搬去 `[Modular Open API Platform]`，還要重做 OAuth 2.0，順便改成 dynamic billing。

老實講，這封信看起來很像「我們把平台重寫了，現在請你們免費幫我們做 QA，然後以後還要付更多錢」。

Backend:
三個月？我們 Q3 已經排滿了。checkout 那段不是小 feature，是收錢的主流程。這不是改 endpoint URL 而已。

CTO:
對，最煩的是 v1 雖然偶爾卡，但至少我們知道怎麼救。新平台如果 token refresh 出事，半夜誰接？又是我們。

Backend:
OAuth migration + billing behavior change + data format mapping + regression test，這根本是一個專案。不是「請盡快遷移」四個字可以帶過。

CTO:
先不要動。今天先盤 checkout 依賴和交易量。我需要知道最壞情況是不是「三個月後不能收錢」。
```

## Artifact 2: Short Email To CEO

Label: synthetic artifact, not a real message.

```text
Subject: 重要：核心結帳 API 三個月後停用，會影響營收與 Q3 交付

CEO,

今天早上 vendor 通知我們，過去三年支撐結帳流程的 `[Legacy v1 API]` 會在三個月後停用。表面上這是技術升級，但商業上它代表三個風險：

1. 營收風險：如果遷移失敗，最壞情況是 checkout 不能穩定收款。
2. 成本風險：新平台改成 dynamic billing，我們目前無法預估每月成本。
3. 交付風險：我們只有 5 個 IT 人，Q3 已經滿載。這會擠掉原本的業務需求。

我的建議不是立刻吞下去，也不是立刻換 vendor。先做兩件事：

- 要求 vendor 提供 migration sandbox、成本試算、兼容表、延長 v1 grace period。
- 同步評估替代方案，至少拿到一個備案，避免被三個月期限綁死。

我今天會先讓工程盤點 checkout 依賴和遷移工作量。明天可以給你一版風險與成本估算。

CTO
```

## Artifact 3: Hardest Technical Blind Spot

Label: synthetic artifact, not a real message.

```text
第一個會踩坑的點：OAuth 2.0 token refresh 跟 checkout transaction retry 的互動。

舊 v1 API 現在雖然醜，但我們的 retry / timeout / fallback 都是圍繞它的行為調過的。新平台如果 access token 在交易中途過期，或 refresh token 失敗，我們要確認：

- checkout request 是不是 idempotent？
- retry 會不會重複扣款或重複建立訂單？
- token refresh failure 會回什麼 error code？
- webhook / callback 會不會比 API response 先到？
- sandbox 能不能模擬 token 過期、refresh 失敗、network timeout？

如果 vendor 只給 happy-path 文件，這個 migration 不能直接上 production。
```

## Strategic Read

- Hidden terrain: the customer is not resisting modernization; they are protecting checkout revenue with a tiny overloaded team.
- Root objection: "You changed our risk and cost without giving us enough time, proof, tooling, or commercial predictability."
- Likely escalation path: engineering Slack complaint -> CTO email to CEO -> vendor success escalation -> request for grace period and cost cap -> alternative vendor evaluation.
- Technical blind spot: OAuth refresh, idempotency, retry behavior, webhook timing, and regression coverage around payment-like flows.
- Trust repair move: acknowledge migration burden, publish compatibility/risk matrix, provide sandbox failure simulations, cost calculator, migration checklist, and a staffed escalation lane.
- Migration / rollout recommendation: do not rely on a generic announcement. Run a segmented customer-risk program for checkout-dependent accounts.

## Evidence Needed Next

- Real user or stakeholder evidence: migration interviews with checkout-dependent customers.
- Operational data: number of accounts using `[Legacy v1 API]` for checkout-critical flows.
- Commercial evidence: dynamic billing cost forecast for representative customers.
- Falsifier: if sandbox trials show low migration effort and no checkout/idempotency risk, urgency can shift from grace-period negotiation to guided enablement.
