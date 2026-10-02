export function myAtoi(s: string): number {
  const trimmed = s.trimStart();
  let result = 0;
  let sign: "-" | "+" = "+";

  for (let i = 0; i < trimmed.length; i++) {
    const digit = trimmed[i];

    if (i === 0 && (digit === "-" || digit === "+")) {
      sign = digit;
      continue;
    }

    if (digit < "0" || digit > "9") {
      break;
    }

    result = result * 10 + Number(digit);
  }

  if (result === 0) {
    return 0;
  }

  if (result > 2147483647) {
    return 2147483647;
  }

  if (result < -2147483648) {
    return -2147483648;
  }

  return result;
}
