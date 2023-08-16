"use strict";

const unique = function (arr) {
  const result = new Set(arr);
  return Array.from(result);
};

const values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values));
