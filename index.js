// Problem 1: Reverse a String
const ReverseString = (str) => {
  const result = str.split("").reverse().join("");
  return result;
};
console.log(ReverseString("hello world"));

// Problem 2: Count Vowels in a String
const CountVowels = (str) => {
  str = str.toLowerCase();
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      cnt++;
    }
  }
  return cnt;
};
// console.log(CountVowels("programming HERO"));

// Problem 3: Check for Palindrome
const CheckPalindrome = (str) => {
  const orginalString = str;
  const reverseString = str.split("").reverse().join("");
  if (orginalString === reverseString) {
    return true;
  }
  return false;
};
// console.log(CheckPalindrome("madam"));

// Problem 4: Find the Maximum Number
const FindMaximumNumber = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(FindMaximumNumber([5, 1, 9, 3, 12]));

// Problem 5: Remove Duplicates from an Array
const RemoveDuplicateNumbers = (arr) => {
  const uniqueNumbers = arr.filter(
    (value, index) => arr.indexOf(value) === index
  );
  return uniqueNumbers;
};

// console.log(RemoveDuplicateNumbers([1, 2, 2, 3, 4, 4]));

// Problem 6: Sum of All Numbers in an Array
const sumOfAllNumbers = (arr) => {
  let sum = 0;
  for (let value of arr) {
    sum += value;
  }
  return sum;
};
// console.log(sumOfAllNumbers([1, 2, 3, 4]));

//Problem 7: Find Even Numbers in an Array
const findEvenNumbers = (arr) => {
  const evenNumbers = [];
  for (let value of arr) {
    if (value % 2 === 0) {
      evenNumbers.push(value);
    }
  }
  return evenNumbers;
};
// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 8: Capitalize First Letter of Each Word

const capitalizeFirstLetter = (str) => {
  const finalResult = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  return finalResult;
};
// console.log(capitalizeFirstLetter("hello world"));

// Problem 9: Find the Factorial of a Number
const findFactorial = (num) => {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};
// console.log(findFactorial(5));

// Problem 10: PingPong Challenge
const printsNumbers = (num1, num2) => {
    const result = [];
  for (let i = num1; i <= num2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("PingPong");
    } else if (i % 3 === 0) {
      result.push("Ping");
    } else if (i % 5 === 0) {
      result.push("Pong");
    } else {
      result.push(i);
    }
  }
    return result.join(",");
};

// console.log(printsNumbers(1, 20));
