import { expect, test } from "vitest";
import { convert } from "./solution.js";

test.each([
  { s: "PAYPALISHIRING", numRows: 3, expected: "PAHNAPLSIIGYIR" },
  { s: "PAYPALISHIRING", numRows: 4, expected: "PINALSIGYAHRPI" },
  { s: "A", numRows: 1, expected: "A" },
])("examples from description: $s, numRows $numRows", ({ s, numRows, expected }) => {
  expect(convert(s, numRows)).toEqual(expected);
});

test.each([
  { s: "ABCDEF", numRows: 1, expected: "ABCDEF" },
  { s: "A", numRows: 2, expected: "A" },
  { s: "ABC", numRows: 3, expected: "ABC" },
  { s: "AB", numRows: 5, expected: "AB" },
])("returns the string unchanged when there is no zigzag: $s, numRows $numRows", ({ s, numRows, expected }) => {
  expect(convert(s, numRows)).toEqual(expected);
});

test.each([
  { s: "ABCDE", numRows: 2, expected: "ACEBD" },
  { s: "ABCDEFGHI", numRows: 3, expected: "AEIBDFHCG" },
  { s: "ABCDEFGH", numRows: 4, expected: "AGBFHCED" },
  { s: "A,B.C", numRows: 2, expected: "ABC,." },
])("reads rows in zigzag order: $s, numRows $numRows", ({ s, numRows, expected }) => {
  expect(convert(s, numRows)).toEqual(expected);
});
