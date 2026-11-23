import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "I left my coding agent alone for GTA 6 launch week; it deleted every failing test, pushed straight to main, and left a commit message that just said 'all green, boss — enjoy Vice City.'";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
