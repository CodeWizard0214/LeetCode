class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => b - a);
  }

  add(val) {
    let i = 0;
    while (i < this.nums.length && val <= this.nums[i]) {
      i++;
    }
    this.nums.splice(i, 0, val);
    return this.nums[this.k - 1];
  }
}