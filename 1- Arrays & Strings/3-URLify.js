/* 
  URLify: Write a method to replace all spaces in a string with '%20'. You
  may assume that the string  has sufficient space at the end to hold the
  additional characters, and that you are given the "true" length of the
  string. (Note: If implementing in Java, please use a character array so
   that you can perform this operation in place.)
  
  EXAMPLE
  Input: "Mr John Smith ", 13  
  Output: "Mr%20John%20Smith"
*/

/*
    ['M', 'r', ' ', 'J', 'o', 'h', 'n', ' ', 'S', 'm', 'i', 't', 'h']
      0    1    2    3    4    5    6    7    8    9    10   11   12
*/

// My first draft
function URLify(str, trueLength = str.length) {
  // As strings are immutable in js we convert it into array and
  // then return the joined result
  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    // if you find space
    if (arr[i] === ' ') {
      let lastChar = trueLength - 1; // as index starts from 0
      // starting from lastChar move the characters to the right
      // and lastChar pointer moves left
      // breakout when you reach i(currentPosition)

      while (lastChar != i) {
        // we are shifiting the character by 2 bcz
        // len(' ') = 1
        // len('%20') = 3
        // 3 - 1 = 2. So shift 2 position
        arr[lastChar + 2] = arr[lastChar];
        lastChar--;
      }
      // now replace with %20
      arr[i] = '%';
      arr[i + 1] = '2';
      arr[i + 2] = '0';

      // increase trueLenght & i by 2
      trueLength += 2;
      i = i + 2;
    }
  }
  str = arr.join('');
  console.log(str);
  // Time complexity: O(N^2)
  // Space complexity: O(N)
}
URLify('I am Mayank Mudgal');

// Lessons
// 1. Realize , Why the true length was given :
//    to shift elements from the end

//Optimal solution using 2 pointer approach
function URL(str, l = str.length) {
  str = str.split('');
  let spaceCount = 0;

  // 1. first count no of spaces
  for (let i = 0; i < l; i++) {
    if (str[i] === ' ') {
      spaceCount++;
    }
  }
  // newLength of the string
  let newLen = l + 2 * spaceCount;
  // as the delimiter is ' '(space) replace it with %20
  // 3 - 1 = 2
  // for every space we require 2 more empty space.

  // last index of str array
  str[newLen - 1] = ' ';

  // string end
  let strEnd = l - 1;
  // actual end
  let actualEnd = newLen - 1;
  for (let i = strEnd; i > -1; i--) {
    if (str[i] === ' ') {
      str[actualEnd--] = '0';
      str[actualEnd--] = '2';
      str[actualEnd--] = '%';
    } else {
      str[actualEnd] = str[i];
      actualEnd--;
    }
  }
  console.log(str.join(''));
  // Time complexity: O(N)
  // Space complexity: O(1)
}
URL('I am king kong');
