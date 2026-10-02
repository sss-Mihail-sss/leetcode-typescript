import { expect, test } from "vitest";
import { twoSum } from "./solution.js";

function sorted(indices: number[]): number[] {
  return [...indices].sort((a, b) => a - b);
}

test.each([
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  { nums: [3, 3], target: 6, expected: [0, 1] },
])("examples from description: $nums, target $target", ({ nums, target, expected }) => {
  expect(sorted(twoSum(nums, target))).toEqual(expected);
});

test.each([
  { nums: [1, 2], target: 3, expected: [0, 1] },
  { nums: [1, 2, 3, 4, 5], target: 9, expected: [3, 4] },
  { nums: [2, 5, 5, 11], target: 10, expected: [1, 2] },
  { nums: [0, 4, 3, 0], target: 0, expected: [0, 3] },
])("finds the pair regardless of its position: $nums, target $target", ({ nums, target, expected }) => {
  expect(sorted(twoSum(nums, target))).toEqual(expected);
});

test.each([
  { nums: [-1, -2, -3, -4, -5], target: -8, expected: [2, 4] },
  { nums: [-3, 4, 3, 90], target: 0, expected: [0, 2] },
  { nums: [1000000000, -1000000000, 5], target: 0, expected: [0, 1] },
])("handles negative and large values: $nums, target $target", ({ nums, target, expected }) => {
  expect(sorted(twoSum(nums, target))).toEqual(expected);
});
