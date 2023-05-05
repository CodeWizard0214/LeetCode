/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = ['a', 'e', 'i', 'o', 'u']; // vowels array
  let max = 0;
  let count = 0;
  
  // count vowels in first window of length k
  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      count++;
    }
  }
  max = count; // initialize max
  
  // slide window and count vowels
  for (let i = k; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      count++;
    }
    if (vowels.includes(s[i - k])) {
      count--;
    }
    max = Math.max(max, count);
  }
  
  return max; 
};