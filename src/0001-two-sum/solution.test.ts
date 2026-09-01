import { expect, test } from 'vitest';
import { twoSum } from './solution.js';

test.each([
  {
    nums: [2, 7, 11, 15],
    target: 9,
    expected: [0, 1]
  },
  {
    nums: [3, 2, 4],
    target: 6,
    expected: [1, 2]
  },
  {
    nums: [3, 3],
    target: 6,
    expected: [0, 1]
  }
])('returns correct indices', ({ nums, target, expected }) => {
  expect(twoSum(nums, target)).toEqual(expected);
});
