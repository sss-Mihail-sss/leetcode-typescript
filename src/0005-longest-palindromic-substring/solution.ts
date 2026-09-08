export function longestPalindrome(s: string): string {
  if (s.length <= 1) {
    return s;
  }

  let longestLeft = 0;
  let longestRight = 0;

  function expand(left: number, right: number): [number, number] {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return [left + 1, right];
  }

  for (let i = 0; i < s.length; i++) {
    const [left1, right1] = expand(i, i);
    const [left2, right2] = expand(i, i + 1);

    if (right1 - left1 > longestRight - longestLeft) {
      longestLeft = left1;
      longestRight = right1;
    }

    if (right2 - left2 > longestRight - longestLeft) {
      longestLeft = left2;
      longestRight = right2;
    }

    if (longestRight - longestLeft === s.length) {
      break;
    }
  }

  return s.slice(longestLeft, longestRight);
}
