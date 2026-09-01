export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;
    const index = map.get(complement);

    if (index !== undefined) {
      return [index, i];
    }

    map.set(current, i);
  }

  return [];
}
