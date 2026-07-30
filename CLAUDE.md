# OSSPlay — AI Agent Baseline

This is the org-wide baseline for any AI coding agent (Claude Code or otherwise) working in an OSSPlay repo. Each individual repo (`ossplay`, `website`, `docs`, `sdk-js`, …) gets its own `CLAUDE.md`/`AGENTS.md` with repo-specific detail; those inherit from and should not contradict this file.

## Orientation

Before working in any OSSPlay repo, know where things live:

- [PRD.md](./PRD.md) — what the product does and why
- [ARCHITECTURE.md](./ARCHITECTURE.md) — repo map, monorepo layout, data flow, deployment, CI/CD
- [DESIGN.md](./DESIGN.md) — UX/design principles shared across dashboard, website, docs
- [MEMORY.md](./MEMORY.md) — dated decision log; check it before re-litigating something that was already decided and recorded
- [ROADMAP.md](./ROADMAP.md) — current phasing/priority, once scoped

If a task seems to conflict with something recorded in `MEMORY.md`, surface the conflict rather than silently picking one side.

## Conventions

- **Bun-first.** Runtime, package manager, and test runner across every repo — don't introduce npm/yarn/pnpm or Node-specific APIs where a Bun equivalent exists.
- **TypeScript, strict.** No `any` escape hatches without a comment explaining why it's unavoidable.
- **No unnecessary abstraction.** Don't build a plugin system, generic config layer, or reusable helper for something used once. Three similar lines beat a premature abstraction — this applies doubly to a pre-1.0 project where the right abstraction isn't known yet.
- **No speculative features.** Implement what the current task requires per PRD/ARCHITECTURE, not what might be useful later. Flag PRD gaps instead of quietly extending scope.
- **Match existing patterns.** Before adding a new pattern (a new state-management approach, a new way of structuring API routes, a new test style), check whether the codebase already has one and reuse it.

## The `docs` repo specifically

- **Fumadocs** (Next.js + `fumadocs-mdx` + `fumadocs-ui`). Content lives in `content/docs/**/*.mdx`, one `meta.json` per folder controlling nav title/order.
- **Fixed three-category taxonomy — don't add a fourth without checking first.** Every page goes under exactly one of:
  - `content/docs/getting-started/` — install/deploy and first-run setup, ordered as a path.
  - `content/docs/guides/` — task-oriented how-tos, one task per page.
  - `content/docs/reference/` — technical/lookup material, not narrative.
  This was decided deliberately (see `MEMORY.md`) specifically to avoid reorganizing later — don't invent a new top-level category (e.g. a separate "Concepts" section) without confirming first.
- **Write docs alongside the feature that motivates them, not in a trailing batch.** When a change in the `ossplay` repo adds something that needs explaining (a new user-facing flow, a new operator tool, a new deployment knob), the corresponding page here lands in the same pass, not deferred.
- **`bun run postinstall` regenerates `.source/`** (fumadocs-mdx's generated content index) — gitignored, never hand-edited, runs automatically on `bun install`.
- **Search is self-hosted (orama), not a cloud service** — matches this org's "no paid account needed" pattern used elsewhere (GHCR over Docker Hub, GitHub Packages over npmjs.com).

## Before opening a PR

- `bun run typecheck` and `bun run lint` pass locally.
- New pages are filed under the correct one of the three top-level categories and linked from somewhere reachable (a nav `meta.json` or a cross-link from another page) — an orphaned page nobody can navigate to isn't done.

## Explicit don'ts

- Don't add a new top-level repo or restructure the monorepo layout without it being a recorded decision in `MEMORY.md` first.
- Don't invent brand/visual specifics (colors, logo) — `DESIGN.md` marks these `TBD` on purpose; don't fill them in unprompted.
