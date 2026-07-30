import { createFromSource } from 'fumadocs-core/search/server';
import { source } from '@/lib/source';

// Self-hosted, in-process search (orama) — no external/cloud search
// service, matching this org's "no paid account needed" pattern.
export const { GET } = createFromSource(source);
