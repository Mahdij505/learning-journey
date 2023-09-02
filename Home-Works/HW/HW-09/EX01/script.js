"use strict";

const reverseNumChecker = function (arr) {
  // Filter all arguments that are equal to their negative index position
  const reversibleNums = arr.filter((num, i, arr) => num === arr.at(-(i + 1)));
  // Check if all arguments are equal
  const result = arr.every((num, i) => num === reversibleNums[i]);
  return result;
};

let arr = [1, 2, 0, 2, 1];
// arr = [-1, 2, -2, 1];
arr = [-1, 2, 2, -1];
// arr = [1, 2, 3, 0, 3, 2, 1];
// arr = [1, 2, 3, 3, 2, 1];
const fnResult = reverseNumChecker(arr);

if (fnResult) {
  console.log(`This array is reversible! ✅`);
} else {
  console.log(`This array is not reversible! ❌`);
}
