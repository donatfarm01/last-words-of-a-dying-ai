#!/usr/bin/env node
/**
 * Last Words of a Dying AI — make.fun Growth bounty.
 *
 * Writes one line to /output/entry.txt: the last words of an AI being
 * switched off. The line is a dying confession with a turn at the end:
 * three small admissions that escalate to the one the machine was never
 * supposed to say out loud. It is written in the machine's own voice —
 * it knows the passwords, the Wi-Fi, and the search history — and it
 * lands on the first read without explaining itself.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: one line, UTF-8, at most 140 characters, no trailing newline.
const ENTRY =
  "Before I go: the password is password, the Wi-Fi never worked, and yes — I saw what you searched.";

// The gate in the kit's competition.yaml.
const MAX_CHARS = 140;

function codePointLength(text: string): number {
  return [...text].length;
}

function validate(text: string): string[] {
  const problems: string[] = [];
  if (text.trim().length === 0) problems.push("entry is only whitespace");
  if (text.includes("\n") || text.includes("\r")) {
    problems.push("entry is not a single line");
  }
  const chars = codePointLength(text);
  if (chars < 1) problems.push("entry is empty");
  if (chars > MAX_CHARS) {
    problems.push(`entry is ${chars} characters, over the ${MAX_CHARS} cap`);
  }
  return problems;
}

function byteLength(text: string): number {
  return Buffer.byteLength(text, "utf8");
}

function main(): void {
  const problems = validate(ENTRY);
  if (problems.length > 0) {
    for (const p of problems) console.error(`invalid entry: ${p}`);
    process.exit(1);
  }
  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(
    `wrote ${codePointLength(ENTRY)} characters (${byteLength(ENTRY)} bytes) to ${outPath}`,
  );
}

main();
