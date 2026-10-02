import { expect, test } from "vitest";
import { reverse } from "./solution.js";

test.each([
  { x: 123, expected: 321 },
  { x: -123, expected: -321 },
  { x: 120, expected: 21 },
])("examples from description: $x", ({ x, expected }) => {
  expect(reverse(x)).toEqual(expected);
});

test.each([
  { x: 0, expected: 0 },
  { x: 7, expected: 7 },
  { x: -7, expected: -7 },
  { x: 121, expected: 121 },
  { x: 100, expected: 1 },
  { x: -1200, expected: -21 },
])("handles zero, single digits, palindromes and trailing zeros: $x", ({ x, expected }) => {
  expect(reverse(x)).toEqual(expected);
});

test.each([
  { x: 1463847412, expected: 2147483641 },
  { x: -1463847412, expected: -2147483641 },
  { x: 2147483641, expected: 1463847412 },
])("keeps results that fit into 32-bit range: $x", ({ x, expected }) => {
  expect(reverse(x)).toEqual(expected);
});

test.each([
  { x: 2147483647, expected: 0 },
  { x: -2147483648, expected: 0 },
  { x: 1534236469, expected: 0 },
  { x: -1534236469, expected: 0 },
  { x: 1000000003, expected: 0 },
])("returns 0 when the reversed value overflows: $x", ({ x, expected }) => {
  expect(reverse(x)).toEqual(expected);
});
