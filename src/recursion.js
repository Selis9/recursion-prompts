/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) { return null; }
  if (n === 0) { return 1; }
  return n * factorial(n - 1);
};
/* n = 5;
  n * factorial(n - 1)
  5 * factorial(5 - 1)
  5 * factorial(4)
      4 * factorial(4 - 1)
      4 * factorial(3)
          3 * factorial(3 - 1)
          3 * factorial(2)
              2 * factorial(2 - 1)
              2 * factorial(1)
                  1 * factorial(1-1)
                  1 * factorial(0)
                      if (n === 0)
                      return 1; (back up the chain resulting in 5 * 4 * 3 * 2 * 1 * 1);
*/

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21

  // I - array of integers
  // O - sum of those integers in the array
  // C
  // E

  // STRAT - iterate through array
  // identify smallest piece of data - 0 element array
  // handle smallest case - if array length is zero - return 0;
  // identify what will make function invoke itself to continue - starting from index 0, add every new input 0 from slice
  // make the recursive call
  // accumulate return

var sum = function(array) {
  // Base case - identify smallest piece of data (no element in array)
  // if array length is zero
  if (array.length === 0) {
    // return 0;
    return 0;
  }

  // Recursive case - what will make it continue down towards the base case (of length 0);
  // Starting from 1st element of array, add to remaing elements (slice) the rest not including index 0.
  return array[0] + sum(array.slice(1));

};

  /*
  array = [1, 2, 3, 4, 5, 6]
  array[0] + sum(array.slice(1))
        1  + [2, 3, 4, 5, 6]
              array[0] + sum(array.slice(1))
                    2  + [3, 4, 5, 6]
                          array[0] + sum(array.slice(1))
                                3  + [4, 5, 6]
                                      array[0] + sum(array.slice(1))
                                            4  + [5, 6]
                                                  array[0] + sum(array.slice(1))
                                                        5  + [6]
                                                              array[0] + sum(array.slice(1))
                                                                    6  + []
                                                                          array.length === 0
                                                                          return

  */

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15

// I - array of primative and nested arrays
// O - sum all numbers, either primative or within nested arrays
// C -
// E - can be nested deeply

// STRAT - iterate through the top level array,
// if element is an array, iterate through it again

// Base case - no element in array, return 0;
// Recursive case - starting from index 0, if element is not an array, add to next element using slice.
// Else if it is an array, iterate through the inner array;

var arraySum = function(array) {
  // If array.length === 0
  if (array.length === 0) {
    // return 0;
    return 0;
  }

  // If array[0] is not an array
  if (!Array.isArray(array[0])) {
    // return array[0] value + the rest of the array (slice);
    return array[0] + arraySum(array.slice(1));
  }

    // If array[0] is an array - iterate through array and return value + rest of array
    return arraySum(array[0]) + arraySum(array.slice(1));
};

/* array = [1,[2,3],[[4]],5]
  arraySum([1,[2,3],[[4]],5])
    array[0] !== 'Array'
           1 !== 'Array'
           1 + arraySum(array.slice(1))
           1 + [[2,3], [[4]], 5] ***
             arraySum([[2,3], [[4]], 5])
             array[0] === 'Array'
               [2, 3] === 'Array'
               arraySum(arraySum[2, 3])) + arraySum(array.slice(1))
                                array[0] + arraySum(array.slice(1))
                                       2 + arraySum[3] ***
                                           array[0] + arraySum(array.slice(1))
                                                  3 + [] ***
                                                      arraySum([])
                                                      return 0
              array[0] + arraySum(array.slice(1))
                 [[4]] + [5]
                 arraySum(array[0])
                  arraySum(arraySum([4]))
                   arraySum(arraySum(4))
                    array[0] + arraySum(array.slice(1))
                           4 + [] ***
                               arraySum([])
                               return 0;
                 array[0] + arraySum(array.slice(1))
                         5 + [] ***
                             return 0;



*/

// 4. Check if a number is even.

// I - number
// O - boolean value
// C - do not use modulo
// E - account for negative numbers

// STRAT - minus 2 until it reaches 1 or 0;
// 0 return true
// 1 or -1 return false

var isEven = function(n) {
  // if n is 1, return false
  if (n === 1) {
    return false;
  }
  // if n is -1, return false
  if (n === -1) {
    return false;
  }
  // if n is 0, return true
  if (n === 0) {
    return true;
  }
  // if n is greater than 1, minus 2 again
  if (n > 1) {
    return isEven(n - 2)
  }
  // if n is less than -1, add 2 again;
  if (n < -1) {
    return isEven(n + 2)
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

// I - number N
// O - sum of numbers down to 0 (starting from n - 1)
// C -
// E - sum of negatives up to 0 (starting from n + 1)

// STRAT - if number is positive - minus 1 from n until it reaches 0, sum numbers inbetween;
// if number is negative - add 1 to n until it reaches 0, sum negative numbers in between;

// Base case: if n is 0, return 0;
// Recursive: return (n - 1) + (sumBelow(n - 1))

var sumBelow = function(n) {
  // base case
  if (n === 0) {
    return 0;
  }

  // recursive negative
  if (n < 0) {
    return (n + 1) + (sumBelow(n + 1))
  }

  // recursive positive
  if (n > 0) {
    return (n - 1) + (sumBelow(n - 1))
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]

// I 2 numbers
// O array
// C starting point and ending point (exclusive)
// E

// STRAT - if x === y return array
// else increment x and concat to array

// Base Case: if x === y, return empty array;
// Recursive: if x < y, add; if x > y, minus;
// increment x, then concat to result array;

var range = function(x, y) {
  //declare result array
  var result = [];

  //base case - if x is equal to y
  if (x === y) {
    //return result array;
    return result;
  }

  //base case - if x is equal to y
  if (x + 1 === y) {
    //return result array;
    return result;
  }

  if (x - 1 === y) {
    //return result array;
    return result;
  }

  //if x < y
  if (x < y) {
    //increment x and concat to result array
    return result.concat(x + 1, range(x + 1, y))
  }
    //increment x and concat to result array

  //if x > y
  if (x > y) {
    //decrement x and concat to result array
    return result.concat(x - 1, range(x - 1, y))
  }

};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

// I 2 nums, base and exp
// O value of base to the power of exp
// C
// E

// STRAT - multiply base * itself while decrementing exp; if exp === 1, return;

// Base case: if exp ===  1; return
// Recursive: return base * exponent(base, exp - 1)

var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp > 0) {
    return base * exponent(base, exp - 1);
  }

  return exponent(base, exp + 1) / base;

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

// I - a number
// O - boolean
// C -
// E -

// STRAT - divide by 2 until it reaches 1;
// If 1, true
// If lower than 1, false

// Base: if n === 1; return true; if n < 1; return false;
// Recursive: powerOfTwo(n/2);

var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  }

  if (n < 1) {
    return false;
  }

  return powerOfTwo(n/2);
};

// 9. Write a function that reverses a string.

// I - string
// O - string but reversed
// C
// E

// STRAT - iterate through string from reverse, add last element, + reverse(string to last element)

// Base: string.length === 1 return final element;
// Recur: string[string.length - 1] + string.substr(0, string.length - 1);

var reverse = function(string) {
  if (string.length === 1) {
    return string[0];
  }

  return string[string.length - 1] + reverse(string.substring(0, string.length - 1))
};

// 10. Write a function that determines if a string is a palindrome.

// I - string
// O - boolean
// C -
// E -

// STRAT - iterate through string on both ends; if starting and ending are equal, continue string until empty (true)
// if not equal return false;

// Base: if string === ""; return true
// Recur: palindrome(substring(++, --))

var palindrome = function(string) {
  if (string.length === 1) {
    return true
  }
  if (string.length === 0) {
    return true
  }
  if (string.toUpperCase()[0] === string.toUpperCase()[string.length -1]) {
    return palindrome(string.substring(1, string.length - 1))
  }
  return false;
};

/* string = racecar
  palindrome(racecar)
    palindrome(aceca)
*/

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

// I two numbers
// O remainder of two numbers
// C
// E if y is 0, return NaN;

// Base if x,y are pos and x lt y, return
// if x,y are neg and x gt y, return
// if x neg, y pos, and x gt -y, return
// if x pos, y neg, and -x gt y, return
// Recur if x or y is neg, add y to x
// else if both are pos or neg, minus y from x

var modulo = function(x, y) {
  if (y === 0) {
    return NaN
  }
  if (x >= 0 && y > 0 && x < y) {
    return x
  }
  if (x <= 0 && y < 0 && x > y) {
    return x
  }
  if (x < 0 && y > 0 && x > -y) {
    return x
  }
  if (x > 0 && y < 0 && -x > y) {
    return x
  }


  if (x < 0 && y > 0) {
    return modulo(x + y, y)
  } else if (x > 0 && y < 0) {
    return modulo(x + y, y)
  } else {
    return modulo(x - y, y)
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.

// I 2 values x and y
// O total of values x and y
// C
// E
// STRAT add x to x, minues y until it reaches zero
// BASE - if y = 0; return 0;
// RECUR - decrement y
var multiply = function(x, y) {
  if (y === 0 || x === 0) {
    return 0;
  }

  if (y < 0 && x < 0) {
    return -x + (multiply(x, y + 1))
  } else if (y > 0 && x > 0) {
    return x + (multiply(x, y - 1))
  } else if (y < 0 && x > 0) {
    return -x + (multiply(x, y + 1))
  } else {
    return x + (multiply(x, y - 1))
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (y <= 0 && x <= 0 && x > y) {
    return 0;
  }
  if (y >= 0 && x >= 0 && x < y) {
    return 0;
  }
  if (y <= 0 && x >= 0 && x < -y ) {
    return 0
  }
  if (y >= 0 && x <= 0 && -x < y) {
    return 0
  }

  if (y < 0 && x < 0) {
    return -1 + (divide(x - y, y))
  } else if (y > 0 && x > 0) {
    return 1 + (divide(x - y, y))
  } else if (y < 0 && x > 0) {
    return -1 + (divide(x + y, y))
  } else {
    return 1 + (divide(x + y, y))
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === 0 || y === 0) {
    return 0;
  } else if (x === y) {
    return x;
  } else if (x > y) {
    return gcd(x - y, y);
  } else {
    return gcd(x, y - x);
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length <= 1 || str2.length <= 1) {
    return str1 === str2;
  } else {
    return compareStr(str1.slice(1), str2.slice(1))
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var result = [];
  if (str.length === 1) {
    return result.concat(str[0]);
  }
  return result.concat(str[0], createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var result = [];
  if (array.length === 1) {
    return result.concat(array[array.length - 1]);
  }

  return result.concat(array[array.length - 1], reverseArr(array.slice(0, -1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var result = [];
  if (length === 1) {
    return result.concat(value);
  }
  if (Array.isArray(value)) {
    result.push(value, buildList(value, length - 1));
  }
  return result.concat(value, buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var result = [];
  if (n === 1) {
		return "1"
  }
  if (n % 3 === 0 && n % 5 === 0) {
    return result.concat(fizzBuzz(n - 1), 'FizzBuzz')
  } else if (n % 5 === 0) {
    return result.concat(fizzBuzz(n - 1), 'Buzz')
  } else if (n % 3 === 0) {
    return result.concat(fizzBuzz(n - 1), 'Fizz')
  } else {
    return result.concat(fizzBuzz(n - 1), n.toString())
  }
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 1) {
    if (array[0] === value) {
      return 1
    }
    return 0
  }

  if (array[0] === value) {
    return (1 + countOccurrence(array.slice(1), value))
  }

  return (0 + countOccurrence(array.slice(1), value))
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var result = [];
  if (array.length === 1) {
    return callback(array[0])
  }
  return result.concat(callback(array[0]), rMap(array.slice(1), callback))
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var num = 0;
  for (var prop in obj) {
    if (prop === key) {
      num++;
    }
    var value = obj[prop];
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      num += countKeysInObj(value, key);
    }
  }
  return num;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1

// I - object and value
// O - number of times the value shows up in the object
// C
// E

// STRAT - iterate through obj - check if value is string or obj; if obj, iterate, if string, add to new obj

var countValuesInObj = function(obj, value) {
  var num = 0;
  for (var key in obj) {
    if (obj[key] === value) {
      num++;
    }
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
      num += countValuesInObj(obj[key], value);
    }
  }
  return num;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
    if (key === oldKey) {
      obj[newKey] = obj[key]
      delete obj[key];
    }
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
      replaceKeysInObj(obj[key], oldKey, newKey)
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  var result = [];
  if (n <= 0) {
    return null;
  }
  if (n === 1) {
    return result.concat([0, 1]);
  }
  return result.concat(fibonacci(n-1) + fibonacci(n-2));
};
// I number integer
// O array of fibonacci numbers
// C 0 is not counted
// E
// B if length is number, return;
// R return number 1 + n + 1

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
