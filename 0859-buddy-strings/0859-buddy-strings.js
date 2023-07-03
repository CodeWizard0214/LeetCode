function buddyStrings(s, goal) {
  // Check if lengths of s and goal are equal
  if (s.length !== goal.length) {
    return false;
  }
  
  // Check if s and goal are equal
  if (s === goal) {
    // Check if there are duplicate characters in s
    const charCount = new Set(s).size;
    return charCount < s.length; // Return true if there are duplicates, false otherwise
  }
  
  // Find the indices where s and goal differ
  const diffIndices = [];
  for(let i = 0; i < s.length; i++) {
    if(s[i] !== goal[i]) {
      diffIndices.push(i);
    }
  }
  
  // Check if there are exactly 2 differing indices
  if(diffIndices.length !== 2) {
    return false;
  }
  
  // Check if swapping characters at differing indices makes s equal to goal
  const [i, j] = diffIndices;
  if(s[i] === goal[j] && s[j] === goal[i]) {
    return true;
  }
  
  return false;
}

// Example usage:
console.log(buddyStrings("ab", "ba")); // Output: true
console.log(buddyStrings("ab", "ab")); // Output: false
console.log(buddyStrings("aa", "aa")); // Output: true
