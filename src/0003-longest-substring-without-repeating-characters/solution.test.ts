import { expect, test } from "vitest";
import { lengthOfLongestSubstring } from "./solution.js";

test.each([
  {
    s: "abcabcbb",
    expected: 3,
  },
  {
    s: "bbbbb",
    expected: 1,
  },
  {
    s: "abba",
    expected: 2,
  },
  {
    s: "pwwkew",
    expected: 3,
  },
  {
    s: "😀😃😀",
    expected: 2,
  },
  {
    s: "eea",
    expected: 2,
  },
])("return longest substring without repeating characters", ({ s, expected }) => {
  expect(lengthOfLongestSubstring(s)).toEqual(expected);
});
