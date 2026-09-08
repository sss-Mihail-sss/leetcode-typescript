export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let left = 0;
  let right = nums1.length;

  const m = nums1.length;
  const n = nums2.length;
  const half = Math.floor((m + n + 1) / 2);

  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    const j = half - i;

    const left1 = i === 0 ? -Infinity : nums1[i - 1];
    const right1 = i === m ? Infinity : nums1[i];

    const left2 = j === 0 ? -Infinity : nums2[j - 1];
    const right2 = j === n ? Infinity : nums2[j];

    if (left1 > right2) {
      right = i - 1;
    } else if (left2 > right1) {
      left = i + 1;
    } else {
      if ((m + n) % 2 === 1) {
        return Math.max(left1, left2);
      } else {
        return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
      }
    }
  }

  return 0;
}
