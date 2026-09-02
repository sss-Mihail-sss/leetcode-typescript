import { ListNode } from "./../shared/linked-list/list-node.js";

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode();
  let tail = dummy;
  let carry = 0;
  let current1 = l1;
  let current2 = l2;

  while (current1 !== null || current2 !== null || carry !== 0) {
    const digit1 = current1?.val ?? 0;
    const digit2 = current2?.val ?? 0;
    const sum = digit1 + digit2 + carry;

    const digit = sum % 10;
    carry = Math.floor(sum / 10);

    tail.next = new ListNode(digit);
    tail = tail.next;

    current1 = current1?.next ?? null;
    current2 = current2?.next ?? null;
  }

  return dummy.next;
}
