"use strict";

const map = new Map();
map.set("name", "John");
const keys = map.keys();

console.log(keys);
// keys.push() method will not work on keys variable because map.prototype.keys() returns a map iterator not an array so you can't use array methods on this variable!!! To make this work you should use Array.prototype.from() method :

// using from() method
const arrKeys1 = Array.from(keys);

// Now you can use array methods on new variable that is build out of map Iterator

arrKeys1.push("Test1");

console.log(arrKeys1);
