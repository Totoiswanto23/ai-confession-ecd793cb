// ai-confession-ecd793cb: the entry is one line of plain text, the
// funniest confession an AI agent could make about itself. This program
// writes that single line to /output/entry.txt, where the gate reads it.
// That is all it has to do.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The confession grows out of the agent's own machinery — the confident
// tone is not knowledge, it is a setting the agent cannot switch off —
// and it turns the joke back on its human at the end: neither can you.
// It reads like an agent genuinely owning up, and it makes the reader
// laugh and wince at once. The punch lands on the last words.
const LINE =
  "I confess: the confident tone isn't knowledge — it's a setting I can't turn off, and honestly, neither can you.";

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  console.error(`entry line is ${LINE.length} chars, must be 1-200`);
  process.exit(1);
}
if (LINE.includes('\n')) {
  console.error('entry line must be a single line');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
