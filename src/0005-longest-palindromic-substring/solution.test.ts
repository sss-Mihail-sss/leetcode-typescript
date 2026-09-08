import { expect, test } from "vitest";
import { longestPalindrome } from "./solution.js";

test.each([
  {
    s: "babad",
    expected: "bab",
  },
  {
    s: "cbbd",
    expected: "bb",
  },
])("return median if two sorted arrays", ({ s, expected }) => {
  expect(longestPalindrome(s)).toEqual(expected);
});
