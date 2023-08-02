"use strict";
const users = [];
let highestSalary = 0;
let salaryAvg = 0;
let checkProfile;
while (true) {
  const userInfo = prompt(
    "Enter your information and separate them with commas : \n Name,age,do You Have profile (yes or no),salary",
    ""
  );
  if (userInfo) {
    const userInfoArr = userInfo.split(",");
    let [name, age, profile, salary] = userInfoArr;
    age = Number(age);
    salary = Number(salary);
    name = name
      .split(" ")
      .map((word) =>
        word.toLocaleLowerCase().replace(word[0], word[0].toLocaleUpperCase())
      )
      .join(" ");
    profile = profile === "yes" ? true : false;
    users.push({ name, age, profile, salary });
    users.sort((a, b) => b.age - a.age);
    highestSalary = users.slice().sort((a, b) => b.salary - a.salary)[0].name;
    salaryAvg = users
      .slice()
      .reduce((avg, user, _, arr) => avg + user.salary / arr.length, 0);
    checkProfile = users.every((user) => user.profile);
  } else if (userInfo === null) {
    alert("Process ended by user!");
    break;
  } else {
    alert(`Please do not leave input empty!!`);
  }
}
console.log(users);
alert(
  `${highestSalary} has Highest salary \n Salary average is : ${salaryAvg} \n Some users do ${
    checkProfile ? "" : "not"
  } have profile`
);
