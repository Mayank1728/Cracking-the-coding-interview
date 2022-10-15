// Todo: Optimized approach

/* 
  One Away: There are three types of edits that can be performed on strings: insert a character,
  remove a character, or replace a character. Given two strings, write a function to check if they are
  one edit (or zero edits) away.
    
    EXAMPLE
      pale, ple -> true
      pales, pale -> true
      pale, bale -> true
      pale, bake -> false
*/

// 1. My Bruteforce approach
function oneAway(s1, s2) {
  if (!s1 || !s2) return null;

  const l1 = s1.length;
  const l2 = s2.length;
  const diff = Math.abs(l1 - l2);

  // difference can be 0 or 1
  if (diff === 1) {
    // length will be smaller string
    let flag = 0;
    let p1 = 0;
    let p2 = 0;
    while (p1 != l1 && p2 != l2) {
      if (s1[p1] != s2[p2]) {
        flag++;
        if (l1 > l2) {
          p1++;
        } else {
          p2++;
        }
      } else {
        p1++;
        p2++;
      }
    }
    if (flag === 1) {
      return true;
    }
  } else if (diff === 0) {
    let flag = 0;
    for (let i = 0; i < l1; i++) {
      if (s1[i] != s2[i]) {
        flag++;
      }
    }
    if (flag > 1) return false;
    return true;
  }
  // if diff != 0 or 1 return false
  return false;

  // Time : O(N) Here N is the length of smaller string
  // Space : O(1) As no additional space is required
}
console.log(oneAway('paes', 'psss'));
