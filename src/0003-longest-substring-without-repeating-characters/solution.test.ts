import { expect, test } from "vitest";
import { lengthOfLongestSubstring } from "./solution.js";

test.each([
  { s: "abcabcbb", expected: 3 },
  { s: "bbbbb", expected: 1 },
  { s: "pwwkew", expected: 3 },
])("examples from description: $s", ({ s, expected }) => {
  expect(lengthOfLongestSubstring(s)).toEqual(expected);
});

test.each([
  { s: "", expected: 0 },
  { s: " ", expected: 1 },
  { s: "a", expected: 1 },
  { s: "au", expected: 2 },
  { s: "abcdef", expected: 6 },
])("handles empty, single-character and all-unique strings: $s", ({ s, expected }) => {
  expect(lengthOfLongestSubstring(s)).toEqual(expected);
});

test.each([
  { s: "abba", expected: 2 },
  { s: "eea", expected: 2 },
  { s: "aab", expected: 2 },
  { s: "dvdf", expected: 3 },
  { s: "tmmzuxt", expected: 5 },
  { s: "anviaj", expected: 5 },
])("moves the window start only forward on repeats: $s", ({ s, expected }) => {
  expect(lengthOfLongestSubstring(s)).toEqual(expected);
});

test.each([
  { s: "abc abc", expected: 4 },
  { s: "a1!a1!", expected: 3 },
])("treats spaces, digits and symbols as characters: $s", ({ s, expected }) => {
  expect(lengthOfLongestSubstring(s)).toEqual(expected);
});
