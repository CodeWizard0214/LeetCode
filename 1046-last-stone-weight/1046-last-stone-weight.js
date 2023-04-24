/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const heap = new MaxHeap(stones); // create a MaxHeap and insert all the stones
    while (heap.size() > 1) { // continue while there are more than one stone in the heap
        const x = heap.extractMax(); // extract the two heaviest stones
        const y = heap.extractMax();
        if (x !== y) {
            heap.insert(x - y); // insert the remaining stone if the weights are different
        }
    }
    return heap.size() === 0 ? 0 : heap.peek(); // return 0 or the last stone weight
};

/**
 * MaxHeap class implementation in JavaScript using an array-based heap.
 */
class MaxHeap {
    constructor(nums = []) {
        this.heap = [];
        for (let num of nums) {
            this.insert(num);
        }
    }
    
    insert(num) {
        this.heap.push(num);
        this.bubbleUp(this.size() - 1);
    }
    
    extractMax() {
        const max = this.peek();
        const last = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return max;
    }
    
    peek() {
        return this.heap[0];
    }
    
    size() {
        return this.heap.length;
    }
    
    bubbleUp(idx) {
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx] < this.heap[idx]) {
                this.swap(idx, parentIdx);
                idx = parentIdx;
            } else {
                break;
            }
        }
    }
    
    bubbleDown(idx) {
        while (true) {
            const leftIdx = idx * 2 + 1;
            const rightIdx = idx * 2 + 2;
            let maxIdx = idx;
            if (leftIdx < this.size() && this.heap[leftIdx] > this.heap[maxIdx]) {
                maxIdx = leftIdx;
            }
            if (rightIdx < this.size() && this.heap[rightIdx] > this.heap[maxIdx]) {
                maxIdx = rightIdx;
            }
            if (maxIdx !== idx) {
                this.swap(idx, maxIdx);
                idx = maxIdx;
            } else {
                break;
            }
        }
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}