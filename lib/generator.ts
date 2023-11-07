import { generate } from "random-words";

export function generateSentence(words: number = 1): string {
  return generate({
    seed: crypto.randomUUID(),
    exactly: words,
    join: " ",
  });
}
