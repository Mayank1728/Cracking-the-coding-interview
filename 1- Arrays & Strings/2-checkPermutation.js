/*
  Check Permutation: Given two strings, write a method to decide
  if one is a permutation of the other. 

*/

// 1. Using Hashmaps: we keep track of no of times a character occured
//    in s1 and if s2 has any character not in s1 return false or if
//    character in s2 appeared more times than present in s1 return false.
//    else return true.

function checkPermutaionH(s1, s2) {
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
console.log(checkPermutaionH('abcd', 'dca'));
console.log(checkPermutaionH('abcdefgh', 'hgfabcde'));

// 2. Sorting: first sort both the strings and then compare each character if not equal
//    then return false, else return true

function checkPermutaionS(s1, s2) {
  if (!s1 || !s2) return null;
  if (s1.length != s2.length) return false;

  // sort both the strings
  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');
  console.log(s1, s2);

  // Now comparing each character in s1 and s2
  for (let i = 0; i < s1.length; i++) {
    // if character mismatch return false
    if (s1[i] != s2[i]) {
      return false;
    }
  }
  // No mismatch found so return true.
  return true;
  // O(NlogN + N) for simplicity I took quicksort's
  // NlogN time and N for looping through
  // Time complexity: O(NlogN)
  // Space complexity: O(1) const as no extra space was used.
}
console.log(checkPermutaionS('anant', 'nnaat'));
