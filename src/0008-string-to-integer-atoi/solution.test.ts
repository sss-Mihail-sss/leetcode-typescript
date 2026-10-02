import { expect, test } from "vitest";
import { myAtoi } from "./solution.js";

test.each([
  { s: "42", expected: 42 },
  { s: " -042", expected: -42 },
  { s: "1337c0d3", expected: 1337 },
  { s: "0-1", expected: 0 },
  { s: "words and 987", expected: 0 },
])("examples from description: $s", ({ s, expected }) => {
  expect(myAtoi(s)).toEqual(expected);
});

test.each([
  { s: "", expected: 0 },
  { s: "   ", expected: 0 },
  { s: "+1", expected: 1 },
  { s: "-1", expected: -1 },
  { s: "+", expected: 0 },
  { s: "-", expected: 0 },
  { s: "+-12", expected: 0 },
  { s: "-+12", expected: 0 },
  { s: "  +0 123", expected: 0 },
  { s: "- 42", expected: 0 },
])("whitespace and sign handling: $s", ({ s, expected }) => {
  expect(myAtoi(s)).toEqual(expected);
});

test.each([
  { s: "3.14159", expected: 3 },
  { s: "00000-42a1234", expected: 0 },
  { s: "-000000000000001", expected: -1 },
  { s: "  0000000000012345678", expected: 12345678 },
  { s: "123abc456", expected: 123 },
])("leading zeros and non-digit characters: $s", ({ s, expected }) => {
  expect(myAtoi(s)).toEqual(expected);
});

test.each([
  { s: "2147483647", expected: 2147483647 },
  { s: "-2147483648", expected: -2147483648 },
  { s: "2147483648", expected: 2147483647 },
  { s: "-2147483649", expected: -2147483648 },
  { s: "91283472332", expected: 2147483647 },
  { s: "-91283472332", expected: -2147483648 },
  { s: "20000000000000000000", expected: 2147483647 },
])("clamps to 32-bit signed integer range: $s", ({ s, expected }) => {
  expect(myAtoi(s)).toEqual(expected);
});
