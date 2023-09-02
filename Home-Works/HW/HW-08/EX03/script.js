"use strict";

const counterMaker = function () {
  let sum = 0;
  return function (num = 0) {
    sum += num;
    return sum;
  };
};

const counter = counterMaker();
console.log(counter(1)); //1
console.log(counter(-1)); //0
console.log(counter(12)); //12
console.log(counter(6)); //18
console.log(counter(-2)); //16
console.log(counter(1)); // 17
console.log(counter(1)); //18
console.log(counter(1)); //19
