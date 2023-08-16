"use strict";

const sorter = function (...arr) {
  const result = arr
    .flat()
    .sort((a, b) => b - a)
    .toString();

  return result;
};

const result1 = sorter([5, 6, 2], [3, 7, 1]);
const result2 = sorter([5, 6, 2], [3, 7, 1], [2, 4, 8]);

console.log(result1, result2);
