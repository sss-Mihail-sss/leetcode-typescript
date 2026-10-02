import { expect, test } from "vitest";
import { addTwoNumbers } from "./solution.js";
import { arrayToList, listToArray } from "./../shared/linked-list/utils.js";

test.each([
  { l1: [2, 4, 3], l2: [5, 6, 4], expected: [7, 0, 8] },
  { l1: [0], l2: [0], expected: [0] },
  { l1: [9, 9, 9, 9, 9, 9, 9], l2: [9, 9, 9, 9], expected: [8, 9, 9, 9, 0, 0, 0, 1] },
])("examples from description: $l1 + $l2", ({ l1, l2, expected }) => {
  const result = addTwoNumbers(arrayToList(l1), arrayToList(l2));

  expect(listToArray(result)).toEqual(expected);
});

test.each([
  { l1: [1, 2, 3], l2: [4, 5, 6], expected: [5, 7, 9] },
  { l1: [0], l2: [7, 3], expected: [7, 3] },
  { l1: [2, 4], l2: [5, 6, 4], expected: [7, 0, 5] },
])("adds lists of different lengths without overflow: $l1 + $l2", ({ l1, l2, expected }) => {
  const result = addTwoNumbers(arrayToList(l1), arrayToList(l2));

  expect(listToArray(result)).toEqual(expected);
});

test.each([
  { l1: [5], l2: [5], expected: [0, 1] },
  { l1: [1], l2: [9, 9], expected: [0, 0, 1] },
  { l1: [9, 9], l2: [1], expected: [0, 0, 1] },
  { l1: [9, 9, 9], l2: [1], expected: [0, 0, 0, 1] },
])("carries into a new node at the end: $l1 + $l2", ({ l1, l2, expected }) => {
  const result = addTwoNumbers(arrayToList(l1), arrayToList(l2));

  expect(listToArray(result)).toEqual(expected);
});
