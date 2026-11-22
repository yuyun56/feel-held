import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Gravity has held you since before you had a name. It has never loosened, never tightened, never asked you to deserve it. Even now it keeps its one promise: your whole weight settles, all the way down. Nothing here needs holding up. You are the thing being held.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
