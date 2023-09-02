"use strict";

const user = {};

const setterGenerator = function () {
  return function (name) {
    this.name = name;
  };
};

const nameSetter = setterGenerator().bind(user);

nameSetter("Mandi");
console.log(user);
