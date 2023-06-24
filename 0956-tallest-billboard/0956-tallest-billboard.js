function helper(rods, leftIndex, rightIndex) {
  const states = new Set([[0, 0]]);
  for (let i = leftIndex; i < rightIndex; i++) {
    const r = rods[i];
    const newStates = new Set();
    for (const [left, right] of states) {
      newStates.add([left + r, right]);
      newStates.add([left, right + r]);
    }
    newStates.forEach(state => states.add(state));
  }

  const dp = new Map();
  for (const [left, right] of states) {
    const diff = left - right;
    dp.set(diff, Math.max(dp.get(diff) || 0, left));
  }
  return dp;
}

function tallestBillboard(rods) {
  const n = rods.length;
  const firstHalf = helper(rods, 0, Math.floor(n / 2));
  const secondHalf = helper(rods, Math.floor(n / 2), n);

  let answer = 0;
  for (const diff of firstHalf.keys()) {
    if (secondHalf.has(-diff)) {
      answer = Math.max(answer, firstHalf.get(diff) + secondHalf.get(-diff));
    }
  }
  return answer;
}