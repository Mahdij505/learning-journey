"use strict";

const lonelyInteger = function (arr) {
  const newArr = arr.filter((num, _, arr) => !arr.includes(-num));
  const final = new Set(newArr);
  console.log(Array.from(final).toString());
};

lonelyInteger([1, -1, 2, -2, 3]);
lonelyInteger([1, -1, 2, -2, 3, -3, -4]);
lonelyInteger([-9, -9, -9, 105, -9, -105]);
