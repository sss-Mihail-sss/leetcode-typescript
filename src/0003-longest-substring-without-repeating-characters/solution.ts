export function lengthOfLongestSubstring(s: string): number {
  const lastSeen: number[] = [];
  let left = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    const code = char.charCodeAt(0);
    const index = lastSeen[code];

    if (index !== undefined) {
      left = Math.max(left, index + 1);
    }

    lastSeen[code] = right;
    const currentLength = right - left + 1;

    if (currentLength > longest) {
      longest = currentLength;
    }
  }

  return longest;
}
