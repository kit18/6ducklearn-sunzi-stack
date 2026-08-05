# Migration: v0.2.0 → v1.0.0

v1.0.0 reorganizes the pack from **domain-review skills** to an
**aspect-of-strategy spine** (五事七計) with a full campaign loop
(審 → 算 → 謀 → 驗 → 斷 → 省). See
[ARCHITECTURE-WUSHI.md](./ARCHITECTURE-WUSHI.md) for the rationale.

This is a breaking release. If you copied v0.2.0 skills into an agent host
(`~/.codex/skills/`, `~/.claude/skills/`, or similar), re-copy after
upgrading and delete the removed directories listed below.

## Removed skills and where their jobs went

| v0.2.0 skill | v1.0.0 home |
|---|---|
| `sunzi-growth-review` | `references/domain-adapters/growth.md`, pulled in by the 五事 skills; economics enforced by `sunzi-method` + `references/unit-economics-gate.md` |
| `sunzi-operations-sop-review` | `references/domain-adapters/operations.md`, pulled in chiefly by `sunzi-method` |
| `sunzi-prd-review` | `references/domain-adapters/product.md`, pulled in by `sunzi-alignment` (demand gate) and `sunzi-method` (requirement contracts) |
| `strategic-situation-analysis` | First-principles map → `sunzi-terrain` (地). Stratagem lens screening → the maneuver tier (`sunzi-win-without-fighting`, `sunzi-find-the-wedge`). Source stories moved to `references/thirty-six-stratagems-source-stories.md` |

Nothing was dropped: each adapter preserves its skill's full review contract —
DoD calibration cases, lens discipline, output checks, and hard rules — and
adds a mandatory 未戰 (pre-launch) lane for pre-revenue clients.

## Added skills (12)

Five-factor audit: `sunzi-alignment` 道 · `sunzi-timing` 天 · `sunzi-terrain`
地 · `sunzi-command` 將 · `sunzi-method` 法.
Count: `sunzi-compare` (七計 scorecard, position classification, 廟算 verdict).
Maneuver: `sunzi-win-without-fighting` 謀攻 · `sunzi-find-the-wedge` 虛實 ·
`sunzi-contingency` 九變 · `sunzi-intelligence` 用間.
Gate: `sunzi-restraint` 火攻. Reflect: `sunzi-retro` 省.

`sunzi-strategy-consultant` was rewritten as the loop orchestrator.
`sunzi-decision-review`, `sunzi-stakeholder-ssr`, `strategy-analyst-review`,
and `sunzi-focus-group-skill-review` are unchanged.

## New shared references

- `references/unit-economics-gate.md` — the computational contract behind
  `sunzi-method`'s PROVISIONING mode: contribution ladder, break-even CAC,
  allowable CAC vs. category CAC, payback vs. runway. No money-campaign
  verdict ships without it.
- `references/domain-adapters/{growth,operations,product}.md` — the deep
  adapters above.
- `references/thirty-six-stratagems-source-stories.md` — moved from
  `skills/strategic-situation-analysis/references/`.

## Behavioral changes to expect

- **Artifacts.** Skills now write chained Markdown artifacts in the working
  directory (`terrain-survey.md`, `廟算-scorecard.md`, `maneuver-brief.md`,
  `廟算-recalibration.md`, …). A run that writes no artifact is incomplete by
  its own hard rules.
- **Sequencing.** Maneuver skills print
  `⚠ running without foundation audit — tactics without a base` when no 五事
  artifacts exist. They still run; they never run silently.
- **`do not start` is a first-class verdict.** `sunzi-compare` and the
  orchestrator are allowed — expected — to end engagements at the count.
- **Named rivals.** The count refuses "the market" as a rival; the customer's
  status quo is a valid named rival.
- **Evidence tiers.** Operating data > probe > public narrative > assumption,
  labeled throughout; unknowns score 不知 and lower confidence instead of
  being rounded up.

## Host cleanup

```bash
rm -rf ~/.codex/skills/sunzi-growth-review \
       ~/.codex/skills/sunzi-operations-sop-review \
       ~/.codex/skills/sunzi-prd-review \
       ~/.codex/skills/strategic-situation-analysis
cp -R skills/* ~/.codex/skills/
cp -R references/* ~/.codex/references/
```

Adjust paths for your host (`~/.claude/skills/`, etc.).
