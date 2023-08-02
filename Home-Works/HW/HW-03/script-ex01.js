"use strict";

let compScore = 0;
let usersScore = 0;
while (true) {
  let answer = prompt("choose between : \n\n rock\n\n stone\n\n scissors", "");
  answer &&= answer.trim().toLocaleLowerCase();
  console.log(answer);
  const options = ["rock", "paper", "scissors"];
  const randNum = Math.trunc(Math.random() * 3);
  const computerChoice = options[randNum];
  console.log(randNum, computerChoice);
  if (computerChoice === answer) {
    alert(
      `Draw ! 🤝 \n \n computer : ${compScore} - user: ${usersScore} \n\n  `
    );
  } else if (
    (computerChoice === "rock" && answer === "paper") ||
    (computerChoice === "scissors" && answer === "rock") ||
    (computerChoice === "paper" && answer === "scissors")
  ) {
    usersScore++;
    alert(
      `User Wins! 👨 \n\n You chose : ${answer} -- Computer chose : ${computerChoice} \n\n computer : ${compScore} - user: ${usersScore}`
    );
  } else if (
    (computerChoice === "rock" && answer === "scissors") ||
    (computerChoice === "scissors" && answer === "paper") ||
    (computerChoice === "paper" && answer === "rock")
  ) {
    compScore++;
    alert(
      `Computer Wins! 🤖 \n\n You chose : ${answer} -- Computer chose : ${computerChoice} \n\n computer : ${compScore} - user: ${usersScore}`
    );
  } else if (answer === null) {
    alert("You ended this game! 😣");
    break;
  } else if (answer === "") {
    alert("Please try again and choose an option!🙂");
  }
}
