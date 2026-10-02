export function reverse(x: number): number {
  let result = 0;

  while (x !== 0) {
    const digit = x % 10;
    x = Math.trunc(x / 10);

    if (result > 214748364 || result < -214748364) return 0;

    result = result * 10 + digit;
  }

  return result;
}
