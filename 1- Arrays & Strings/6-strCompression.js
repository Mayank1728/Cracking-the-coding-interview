/* 
 String Compression: Implement a method to perform basic string compression
 using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z). 
*/
function strcmp(s) {
  // if string is empty return null
  if (!s) return null;
  let str = [];
  let consecutiveCount = 0;
  for (let i = 0; i < s.length; i++) {
    consecutiveCount++;

    // if next character is not equal to current character
    // OR
    // if you are at last index push the values
    if (s[i] != s[i + 1] || i + 1 === s.length) {
      str.push(s[i] + consecutiveCount);
      consecutiveCount = 0;
    }
  }

  // convert the array into string
  str = str.join('');

  // return the string with less number of characters
  return str.length > s.length ? s : str;

  // Time: O(N) because of the for loop
  // Space: O(N) when all elements are unique we push each character & count
}
console.log(strcmp('aabbbbbbcccd'));
