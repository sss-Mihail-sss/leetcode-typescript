import { expect, test } from "vitest";
import { findMedianSortedArrays } from "./solution.js";

test.each([
  {
    nums1: [1, 3],
    nums2: [2],
    expected: 2.0,
  },
  {
    nums1: [1, 2],
    nums2: [3, 4],
    expected: 2.5,
  },
  {
    nums1: [1, 2, 3, 4, 5],
    nums2: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    expected: 9,
  },
])("return median if two sorted arrays", ({ nums1, nums2, expected }) => {
  expect(findMedianSortedArrays(nums1, nums2)).toEqual(expected);
});
