/*
  Is-Unique: Implement an algorithm to determine if a string has 
  all unique characters. What if you cannot use additional data structures?
  
  3 Approaces Explained.

*/

// Assumptions
// 1. str contains ONLY lowerCase or ONLY upperCase letters
// 2. empty str, return null.

// 1. Bruteforce Approach: using 2 pointer fix one element and loop through
// each other element if you find the fixed element return false else return true.

function isUniqueB(str) {
  if (!str) return null;
  // Here i is fixed pointer and goes till str.length - 2
  // bcz j at that time will become str.length - 1 which
  // is the last element in the str.
  for (let i = 0; i < str.length - 1; i++) {
    // j pointer loops through every element after i pointer
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        return false;
      }
    }
  }
  // if you reach here this means no match found.
  return true;
  // Time: O(N^2) and Space: O(1)
}

// 2. Sorting Approach: sort the str using quick sort and then check if there
//    is any  element equal to previous element

function isUniqueS(str) {
  if (!str) return null;
  str = str.split('').sort().join('');
  // althogh I am applying the js in built sorting approach lets assume for
  // the sake of simplicity I am using quick sort for sorting

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return false;
    }
  }
  return true;
  // Time: O(NlogN + N) NlogN for sorting and N for looping through
  // Time: O(NlogN)
  // Space: O(1) const space as quickSort is inplace sorting algo
}

// 3. Using Hashmaps: using hashmap data structure in js objects are
//    equivalent of hashmaps. Using this you keep count of each character
//    if it occurs more than once return false, else return true.

function isUniqueH(str) {
  if (!str) return null;

  // hashmap created
  let counter = {};

  // loop through each element
  for (let i = 0; i < str.length; i++) {
    // if character is not found in hashmap
    // this means char is unique and make an
    // entry in the counter object
    if (!counter[str[i]]) {
      counter[str[i]] = true;
    }

    // if character is present in the hashmap
    // this means str is not unique
    else {
      return false;
    }
  }
  // else str is indeed unique.
  return true;
  // Time: O(N) BUT
  // Space: O(N) due to hashmap storing each character
}

console.log(isUniqueB('yogabar'));
console.log(isUniqueH('peanutbutter'));
console.log(isUniqueS('protein'));
