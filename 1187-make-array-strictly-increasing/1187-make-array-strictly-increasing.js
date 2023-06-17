const makeArrayIncreasing = (arr1, arr2) => {
  arr2.sort((a, b) => a - b); // Sort arr2 in ascending order
  const dp = new Map(); // Use a Map for dynamic programming memoization

  const dfs = (i, prev) => {
    if (i === arr1.length) {
      return 0;
    }
    const key = `${i},${prev}`;
    if (dp.has(key)) {
      return dp.get(key);
    }

    let cost = 2001;

    // If arr1[i] is already greater than prev, we can leave it be.
    if (arr1[i] > prev) {
      cost = dfs(i + 1, arr1[i]);
    }

    // Find a replacement with the smallest value in arr2.
    const idx = bisectRight(arr2, prev);

    // Replace arr1[i], with a cost of 1 operation.
    if (idx < arr2.length) {
      cost = Math.min(cost, 1 + dfs(i + 1, arr2[idx]));
    }

    dp.set(key, cost);
    return cost;
  };

  const bisectRight = (arr, value) => {
    let left = 0,
      right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] <= value) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  };

  const answer = dfs(0, -1);

  return answer < 2001 ? answer : -1;
};