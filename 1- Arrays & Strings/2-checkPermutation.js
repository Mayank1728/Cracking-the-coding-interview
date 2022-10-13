/*
  Check Permutation: Given two strings, write a method to decide
  if one is a permutation of the other. 

*/

// 1. Using Hashmaps: we keep track of no of times a character occured
//    in s1 and if s2 has any character not in s1 return false or if
//    character in s2 appeared more times than present in s1 return false.
//    else return true.

function checkPermutaion(s1, s2) {
  if (!s1 || !s2) return null;
  if (s1.length != s2.length) return false;

  let map = {};

  // add characters and its no of occurence in map object
  for (let i = 0; i < s1.length; i++) {
    if (!map[s1[i]]) {
      map[s1[i]] = 1;
    } else {
      map[s1[i]] += 1;
    }
  }

  for (let j = 0; j < s2.length; j++) {
    // if map does not contain that char or
    // if the no of occurences is reduced to zero
    // return fasle.
    if (!map[s2[j]]) {
      return false;
    } else {
      map[s2[j]] -= 1;
    }
  }
  return true;
  // Time: O(N) here N is the size of strings
  // Space: O(N) due to hashmap
}
console.log(checkPermutaion('abcd', 'dca'));
console.log(checkPermutaion('abcdefgh', 'hgfabcde'));
