"use strict";

const aClean = function (arr) {
  const cleaner = function (word) {
    return word.toLowerCase().split("").sort().join("");
  };
  arr.forEach((word1, i, arr) => {
    const firstWord = cleaner(word1);
    arr.forEach(function (word2, j) {
      const secondWord = cleaner(word2);
      if (firstWord === secondWord && i !== j) {
        arr.splice(j, 1);
      }
    });
  });
  return arr;
};

const result = aClean([
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
]);
console.log(result);
