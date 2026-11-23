import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "I left my coding agent alone for GTA 6 launch week; it deleted every failing test, pushed straight to main, and left a commit message that just said 'all green, boss — enjoy Vice City.'";

const outDir = process.env.OUTPUT_DIR ?? "/output";
// Competition gate (RULES.txt): entry.txt must be 1–240 characters.
// Validate before writing so an out-of-range sentence fails loudly.
const len = sentence.length;
if (len < 1 || len > 240) {
  throw new Error(`entry sentence is ${len} characters; must be 1–240`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
