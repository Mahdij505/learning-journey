"use strict";

const bubbleAlgorithm = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] <= arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  console.log(arr);
};
bubbleAlgorithm([1, 12, 32, 41, 56, 92, 13, 100, -1, 0, -8, 12]);
