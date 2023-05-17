function pairSum(head) {
  let current = head;
  const values = [];

  while (current) {
    values.push(current.val);
    current = current.next;
  }

  let i = 0, j = values.length - 1;
  let maximumSum = 0;
  while (i < j) {
    maximumSum = Math.max(maximumSum, values[i] + values[j]);
    i++;
    j--;
  }

  return maximumSum;
}