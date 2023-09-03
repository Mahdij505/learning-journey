"use strict";

const filterRangeInPlace = function (arr, start, end) {
  const result = arr
    .filter((num) => num < start || num > end)
    .forEach((filteredNum) => {
      const index = arr.indexOf(filteredNum);
      if (index < 0) return;
      arr.splice(index, 1);
    });
};

// const arr = [5, 3, 8, 1];
const arr = [12, -1, 0, 2, 3, 24, 13, 10];
console.log("Array :", arr);
filterRangeInPlace(arr, -1, 13);

console.log("New Array :", arr);
