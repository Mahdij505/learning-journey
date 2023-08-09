"use strict";

const month31 = [1, 3, 5, 7, 8, 10, 12];
const month30 = [4, 6, 9, 11];

const userAnswer = +prompt("Please enter month : ", "");
const isLeapYear = confirm("Is this a leap year?");
const secondMonth = isLeapYear ? 29 : 28;

const dayCalc = function (month) {
  let days = 0;
  if (month >= 1 && month <= 12) {
    for (let i = 1; i <= month; i++) {
      if (month31.includes(i)) {
        days += 31;
      } else if (month30.includes(i)) {
        days += 30;
      }
    }
    return month >= 2 ? (days += secondMonth) : days;
  } else {
    return -1;
  }
};

const result = dayCalc(userAnswer);
alert(result);
