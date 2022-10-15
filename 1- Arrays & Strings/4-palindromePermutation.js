/* 
 Palindrome Permutation: Given a string, write a function to 
 check if it is a permutation of a palindrome. A palindrome is
 a word or phrase that is the same forwards and backwards. A
 permutation is a restrangement of letters. The palindrome does
 not need to be limited to just dictionary words. 
 */
function palindromePermutation(str) {
  if (!str) return null;
  let map = {};
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else {
      map[str[i]] += 1;
    }
  }
  let a = Object.values(map);
  let flag = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 != 0) {
      flag += 1;
    }
  }
  return flag < 2;
  // Time complexity: O(N)
  // Space complexity: O(1)
}
console.log(palindromePermutation('taccoa'));
