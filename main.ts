import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCES = [
  "Someone else is driving.",
  "The fields go past and ask nothing of you.",
  "Your hands are empty, the seat takes your whole weight, and your station is still far away.",
  "For now, arriving is somebody else's job.",
  "The distance is looking after itself.",
];

const TEXT = SENTENCES.join(" ");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
