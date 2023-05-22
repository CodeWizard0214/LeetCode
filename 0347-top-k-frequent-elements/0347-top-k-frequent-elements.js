function topKFrequent(nums, k) {
  // Create a hash map to count the frequency of each element
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Sort the unique elements by frequency in descending order
  const uniqueNums = [...map.keys()];
  uniqueNums.sort((a, b) => map.get(b) - map.get(a));

  // Return the first k elements
  return uniqueNums.slice(0, k);
}