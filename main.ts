// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

// One line only, 140 characters or fewer, no trailing newline: the gate
// requires /output/entry.txt to be 1-140 characters and not only whitespace.
const advice = "Of course! Just put tape over the check-engine light: no warning light, no engine problem.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", advice, "utf8");
