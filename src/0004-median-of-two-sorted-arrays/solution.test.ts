import { expect, test } from "vitest";
import { findMedianSortedArrays } from "./solution.js";

test.each([
  { nums1: [1, 3], nums2: [2], expected: 2 },
  { nums1: [1, 2], nums2: [3, 4], expected: 2.5 },
])("examples from description: $nums1, $nums2", ({ nums1, nums2, expected }) => {
  expect(findMedianSortedArrays(nums1, nums2)).toEqual(expected);
});

test.each([
  { nums1: [], nums2: [1], expected: 1 },
  { nums1: [2], nums2: [], expected: 2 },
  { nums1: [], nums2: [1, 2, 3, 4], expected: 2.5 },
  { nums1: [1], nums2: [2], expected: 1.5 },
])("handles empty and single-element arrays: $nums1, $nums2", ({ nums1, nums2, expected }) => {
  expect(findMedianSortedArrays(nums1, nums2)).toEqual(expected);
});

test.each([
  { nums1: [1, 2], nums2: [3], expected: 2 },
  { nums1: [1, 3], nums2: [2, 4, 5, 6, 7], expected: 4 },
  { nums1: [1, 2, 3, 4, 5, 6], nums2: [7], expected: 4 },
  { nums1: [1, 2, 3, 4, 5], nums2: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], expected: 9 },
])("handles arrays of different lengths: $nums1, $nums2", ({ nums1, nums2, expected }) => {
  expect(findMedianSortedArrays(nums1, nums2)).toEqual(expected);
});

test.each([
  { nums1: [1, 2, 3], nums2: [10, 20, 30], expected: 6.5 },
  { nums1: [10, 20, 30], nums2: [1, 2, 3], expected: 6.5 },
  { nums1: [1, 1], nums2: [1, 1], expected: 1 },
  { nums1: [-5, -3, -1], nums2: [-2, 0, 2], expected: -1.5 },
])("handles non-overlapping ranges, duplicates and negatives: $nums1, $nums2", ({ nums1, nums2, expected }) => {
  expect(findMedianSortedArrays(nums1, nums2)).toEqual(expected);
});
