# OSSPlay Docs

Documentation site for OSSPlay ([fumadocs](https://fumadocs.dev) + Next.js), covering install/setup,
task-oriented guides, and technical reference. See [CLAUDE.md](./CLAUDE.md) for the org-wide AI-agent
baseline and this repo's own conventions (in particular, the fixed three-category content structure).

## Development

```bash
bun install
bun run dev
```

Content lives in `content/docs/**/*.mdx`; each folder has a `meta.json` controlling its nav title and
page order.

## Scripts

- `bun run dev` — local dev server
- `bun run build` / `bun run start` — production build/serve
- `bun run typecheck` / `bun run lint`
