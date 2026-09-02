import { expect, test } from "vitest";
import { addTwoNumbers } from "./solution.js";
import { arrayToList, listToArray } from "./../shared/linked-list/utils.js";

test.each([
  {
    l1: [2, 4, 3],
    l2: [5, 6, 4],
    expected: [7, 0, 8],
  },
  {
    l1: [0],
    l2: [0],
    expected: [0],
  },
  {
    l1: [9, 9, 9, 9, 9, 9, 9],
    l2: [9, 9, 9, 9],
    expected: [8, 9, 9, 9, 0, 0, 0, 1],
  },
])("adds two numbers", ({ l1, l2, expected }) => {
  const result = addTwoNumbers(arrayToList(l1), arrayToList(l2));

  expect(listToArray(result)).toEqual(expected);
});
