"use strict";

/*
////////////////////////////////////////////////////////////////////////
//********************************** Question #1

const question1 = [
  "Which country has the largest area?",
  "1:IRAN",
  "2:CHINA",
  "3:RUSSIA",
  "4:UNITED STATES",
];
const question2 = [
  "How many planets are there in the solar system?",
  "1:8",
  "2:6",
  "3:10",
  "4:7",
];

const question3 = [
  "Who is the smartest person in history?",
  "1:Albert Einistein",
  "2:William James Sidis",
  "3:Isac Newton",
  "4:Nikola Tesla",
];
const question4 = [
  "Which is the biggest planet?",
  "1:earth",
  "2:uranus",
  "3:saturn",
  "4:jupiter",
];
const answers = ["3:RUSSIA", "1:8", "2:William James Sidis", "4:jupiter"];
const asker = function () {
  let score = 0;
  const questions = [question1, question2, question3, question4];
  for (const array of questions) {
    const index = +prompt(`${array.join("\n")}`);
    const answer = array[index];

    for (const correct of answers) {
      if (answer === correct) {
        score++;
      }
    }
  }
  alert(`Your score is : ${score}`);
};

asker();
*/
/*
////////////////////////////////////////////////////////////////////////
//********************************** Question #2

const lcdGCM = function (num1, num2) {
  let lcd = 0;
  let gcm = 0;
  const lowerNum = num1 < num2 ? num1 : num2;
  const upperNum = num1 > num2 ? num1 : num2;

  for (let i = 1; i < lowerNum; i++) {
    const div1 = num1 / i;
    for (let j = 1; j < lowerNum; j++) {
      const div2 = num2 / j;
      if (div1 === div2) {
        lcd = div1;
      }
    }
  }
  for (let i = 1; i < upperNum; i++) {
    const mul1 = num1 * i;
    for (let j = 1; j < upperNum; j++) {
      const mul2 = num2 * j;
      if (mul1 === mul2) {
        gcm = mul1;
      }
    }
  }
  console.log(`LCD is : ${lcd}\nGCM is : ${gcm}`);
};

lcdGCM(12, 14);
*/
/*

////////////////////////////////////////////////////////////////////////
//********************************** Question #2

const converter = function () {
  const answer = prompt(
    `Choose a caracter and write it in the input: \n a \n z \n M \n D`
  );
  switch (answer) {
    case "a":
      alert("$");
      break;
    case "z":
      alert("#");
      break;
    case "M":
      alert("*");
      break;
    case "D":
      alert("@");
      break;
    default:
      alert(`Unknown answer! Please try again...`);
  }
};
converter();
*/

/*
////////////////////////////////////////////////////////////////////////
//********************************** Question #3
const printer = function () {
  const character = prompt(`Enter character you want to make your triangle : `);
  const line = +prompt(
    `Enter how many lines you want to build triangle with : `
  );

  for (let i = 0; i < line; i++) {
    let newCharacter = character;
    for (let j = 0; j < i; j++) {
      newCharacter += character;
    }
    console.log(`${newCharacter}\n`);
  }
};
printer();
*/
