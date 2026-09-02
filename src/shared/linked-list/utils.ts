import { ListNode } from "./list-node.js";

export function arrayToList(values: number[]): ListNode | null {
  if (values.length === 0) {
    return null;
  }

  const list = new ListNode(values[0]);
  let current = list;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }

  return list;
}

export function listToArray(head: ListNode | null): number[] {
  const array: number[] = [];
  let current = head;

  while (current !== null) {
    array.push(current.val);

    current = current.next;
  }

  return array;
}
