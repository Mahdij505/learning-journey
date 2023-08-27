"use strict";

const topSalary = function (obj) {
  let max = 0;
  let userName;
  for (let [key, val] of Object.entries(obj)) {
    if (val >= max) {
      max = val;
      userName = key;
    }
  }
  console.log(userName, max);
};

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

topSalary(salaries);
