// This entry writes the answer for The Worst App Idea Ever Pitched to the output directory.
// It runs with Node 22 and the standard library only, resolving the destination from
// MAKEFUN_OUTPUT_DIR (falling back to /output) and writing entry.txt there.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "An app that rates your friends' typing speed live and publicly downgrades anyone who uses autocorrect. Premium lets you mute their keyboard.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
