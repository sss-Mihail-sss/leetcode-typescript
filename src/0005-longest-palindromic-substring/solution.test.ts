import { expect, test } from "vitest";
import { longestPalindrome } from "./solution.js";

test.each([
  { s: "cbbd", expected: "bb" },
  { s: "a", expected: "a" },
  { s: "aaaa", expected: "aaaa" },
  { s: "racecar", expected: "racecar" },
  { s: "abccba", expected: "abccba" },
])("returns the whole string or the unique palindrome: $s", ({ s, expected }) => {
  expect(longestPalindrome(s)).toEqual(expected);
});

test.each([
  { s: "aab", expected: "aa" },
  { s: "abb", expected: "bb" },
  { s: "xabbay", expected: "abba" },
  { s: "bananas", expected: "anana" },
  { s: "forgeeksskeegfor", expected: "geeksskeeg" },
  { s: "12321abc", expected: "12321" },
  { s: "abacdfgdcaba", expected: "aba" },
])("finds odd and even palindromes anywhere in the string: $s", ({ s, expected }) => {
  expect(longestPalindrome(s)).toEqual(expected);
});

test.each([
  { s: "babad", expected: ["bab", "aba"] },
  { s: "ac", expected: ["a", "c"] },
  { s: "abcd", expected: ["a", "b", "c", "d"] },
])("accepts any of the equally long palindromes: $s", ({ s, expected }) => {
  expect(expected).toContain(longestPalindrome(s));
});
