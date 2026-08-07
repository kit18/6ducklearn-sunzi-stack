# Interactive Questioning And Fallback

Every skill in this pack that asks the user a question must work on hosts where
a structured question tool does not exist. This pack is host-agnostic by
design — plain Markdown, no daemon — and that promise is only real if the
skills degrade cleanly.

`AskUserQuestion` is a Claude Code tool. It is **not** available in Codex,
OpenCode, Cursor, Kiro, most headless runs, or any agent invoked through a
plain chat interface. A skill that assumes it will silently skip its own
forcing questions on those hosts — which is the failure this reference exists
to prevent.

## The rule

**Structured tool when present, prose questions when absent, never silence.**

A skill may never proceed past a decision that belongs to the user just
because the tool it preferred was unavailable.

## Tier 1 — structured tool available

Use `AskUserQuestion` when the host provides it and the question has 2–4
discrete options. Prefer it for:

- Naming the rival (`sunzi-compare`)
- Confirming a contestable position claim
- Choosing a mode when the situation is genuinely ambiguous
- Authorizing an irreversible move (`sunzi-restraint`)

## Tier 2 — no structured tool: ask in prose, then stop

Emit the question as a numbered block and **end the turn**. Do not answer it
yourself, do not proceed on an assumption, and do not bury it mid-output where
it will be scrolled past.

```markdown
⚠ Decision required before this skill can continue

**Question:** [the question, stated once, plainly]

1. [option] — [what it implies]
2. [option] — [what it implies]
3. [option] — [what it implies]

Reply with a number, or describe a different answer. I will not proceed until
you do, because [one line: what breaks if this is guessed].
```

The final clause is mandatory. A user who understands the cost of a wrong
guess answers; a user who is told "please advise" does not.

## Tier 3 — genuinely non-interactive runs

In a scheduled, piped, or batch run there is no one to ask. Then:

1. **Proceed under a stated assumption**, never a hidden one.
2. Record it in the artifact's header as
   `⚠ assumed without confirmation: [assumption] — [what would change if wrong]`.
3. Cap confidence at **medium** for any verdict resting on that assumption.
4. List it under `Needed next` so the next run resolves it.

Assumption-driven output is legitimate. Assumption-driven output *presented as
confirmed* is not.

## What may never be assumed

These are user decisions in every tier. If they cannot be asked, the skill
stops and says so rather than guessing:

| Decision | Owning skill | Why it cannot be assumed |
|---|---|---|
| The named rival | `sunzi-compare` | The whole count is relative to it; the wrong rival produces a confidently wrong scorecard |
| Proceeding against a `do not start` verdict | `sunzi-compare`, orchestrator | This is an override and requires a name on it |
| Authorizing an irreversible move | `sunzi-restraint` | 亡國不可以復存 — the gate exists precisely so this is never inferred |
| The kill criterion | `sunzi-contingency`, `sunzi-method` | A stop rule nobody agreed to is a stop rule nobody will honor |

## Anti-patterns

- **Silent skip** — the structured tool is missing, so the forcing question
  never gets asked and the skill writes its output anyway.
- **Rhetorical questioning** — asking in prose and then immediately answering
  it in the same turn.
- **Assumption laundering** — proceeding on a guess without the
  `⚠ assumed without confirmation` header, so a later reader cannot tell which
  inputs were real.
- **Question dumping** — twelve questions in one block. Ask what blocks the
  next step; the rest belong in `Needed next`.
