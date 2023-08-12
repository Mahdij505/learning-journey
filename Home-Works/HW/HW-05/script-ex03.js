"use strict";

const sorter = function (arr) {
  arr.sort((a, b) => a.age - b.age);
  console.log(arr);
};
sorter([
  { name: "john", age: 20 },
  { name: "max", age: 30 },
  { name: "adam", age: 25 },
  { name: "peter", age: 35 },
  { name: "stewie", age: 40 },
  { name: "meg", age: 26 },
  { name: "lois", age: 27 },
  { name: "rachel", age: 23 },
]);
