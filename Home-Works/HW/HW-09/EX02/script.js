"use strict";
const filterRange = function (a, b, arr) {
  const result = arr.filter((num) => num >= a && num <= b);
  return result;
};

let arr = [5, 3, 8, 1];
// arr = [2, 3, 12, -Infinity, +Infinity];
const filtered = filterRange(1, 4, arr);

console.log(arr);
console.log(filtered);
