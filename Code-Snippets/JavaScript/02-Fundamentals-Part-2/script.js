"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/
/*
function logger() {
  console.log("My name is Mahdi.");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num);
*/
/*
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(2002);
console.log(age1);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(2002);

console.log(age1, age2);

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(2002, "Mahdi"));
console.log(yearsUntilRetirement(1980, "Bob"));

function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already been retired . 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2002, "Mahdi"));
console.log(yearsUntilRetirement(1967, "Mike"));

const calcAverage = (p1, p2, p3) => (p1 + p2 + p3) / 3;

const checkWinner = function () {
  let avgDolphins = calcAverage(44, 23, 71);
  let avgKoalas = calcAverage(200, 54, 49);
  
  if (avgDolphins / 2 >= avgKoalas) {
    console.log(
      `Dolphins team is the winner with average score of ${avgDolphins}.`
      );
    } else if (avgKoalas / 2 >= avgDolphins) {
      console.log(
        `Koalas team is the winner with average score of ${avgKoalas}.`
        );
      } else {
        console.log(`No team wins! :(`);
      }
    };
    checkWinner();
    
    const friends = ["Michael", "Steven", "Peter"];
    console.log(friends);
    
    // const years = new Array(1999, 1984, 2008, 2020);
    
    console.log(friends[0], friends[2]);
    
    console.log(friends.length);
    console.log(friends[friends.length - 1]);
    
    friends[2] = "Mahdi";
    console.log(friends);
    
    const firstName = "Mahdi";
    const mahdi = [firstName, "Jabbary", 2037 - 2002, "teacher", friends];
    console.log(mahdi);
    
    */
/********* 
     * 
    
    const calcAge = function (birthYear) {
      return 2037 - birthYear;
    };
    
    const years = [1990, 1967, 2002, 2010, 2018];
    
    const age1 = calcAge(years[0]);
    const age2 = calcAge(years[1]);
    const age3 = calcAge(years[years.length - 1]);
    console.log(age1, age2, age3);
    
    const ages = [age1, age2, age3];
    console.log(ages);
    
    
    const friends = ["Michael", "Steven", "Peter"];
    const newLength = friends.push("Jay");
    console.log(friends);
    console.log(newLength);
    
    friends.unshift("John");
    console.log(friends);
    
    friends.pop();
    const popped = friends.pop();
    console.log(popped);
    console.log(friends);
    
    friends.shift();
    console.log(friends);
    
    console.log(friends.indexOf("Steven"));
    console.log(friends.indexOf("Bob"));
    
    friends.push(23);
    console.log(friends.includes("Steven"));
    console.log(friends.includes("Bob"));
    console.log(friends.includes(23));
    
    if (friends.includes("Steven")) {
      console.log(`You have a friend called Steven.`);
    }
    
    */

//////////////////////////////

/*
const bills = [125, 555, 44];
const tips = new Array();
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    const tip = bill * 0.15;
    tips.push(tip);
  } else {
    const tip = bill * 0.2;
    tips.push(tip);
  }
};
calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);

console.log(tips);

const bills = [125, 555, 44];

const tips = new Array();
const totals = new Array();

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    const tip = bill * 0.15;
    const total = tip + bill;
    tips.push(tip);
    totals.push(total);
  } else {
    const tip = bill * 0.2;
    const total = tip + bill;
    tips.push(tip);
    totals.push(total);
  }
};
calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);

console.log(tips);
console.log(totals);

const mahdi = {
  firstName: "Mahdi",
  lastName: "Jabbary",
  age: 21,
  job: "Student",
  friends: ["Michael", "Steven", "Peter"],
};
console.log(mahdi);

console.log(mahdi.lastName);
console.log(mahdi["lastName"]);

const nameKey = "Name";

console.log(mahdi["first" + nameKey]);
console.log(mahdi["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Mahdi? choose between firstName, lastName, age, job and friends",
  ""
  );
  
  // console.log(interestedIn);
  
  if (mahdi[interestedIn]) {
    console.log(mahdi[interestedIn]);
  } else {
    console.log(
      "Wrong request! What do you want to know about Mahdi? choose between firstName, lastName, age, job and friends"
      );
    }
    
    mahdi.location = "Iran";
    mahdi["twitter"] = "@Mahdij505";
    console.log(mahdi);
    
    console.log(
      `${mahdi.firstName} has ${mahdi.friends.length} friends, and his best friend is called ${mahdi.friends[0]}.`
      );
      
      
      const mahdi = {
        firstName: "Mahdi",
        lastName: "Jabbary",
        birthYear: 2002,
        job: "Student",
        friends: ["Michael", "Steven", "Peter"],
        hasDriversLicense: true,
        calcAge: function () {
          this.age = 2037 - this.birthYear;
          return this.age;
        },
  getSummery: function () {
    return `${this.firstName} is a ${this.age} year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(mahdi.calcAge());

console.log(mahdi.age);
console.log(mahdi.age);
console.log(mahdi.age);
console.log(mahdi.getSummery());

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.BMI);
console.log(john.BMI);

if (john.BMI > mark.BMI) {
  console.log(
    `${john.firstName}'s BMI (${john.BMI}) is higher than ${mark.firstName}'s BMI (${mark.BMI}).`
    );
  } else if (john.BMI < mark.BMI) {
    console.log(
      `${mark.firstName}'s BMI (${mark.BMI}) is higher than ${john.firstName}'s BMI (${john.BMI}).`
      );
    } else {
      console.log(`Both john and mark have the same BMI (${john.BMI}).`);
    }
    
    
    for (let i = 0; i < 10; i++) {
      console.log(`Lifting weights repetition ${i + 1} 🏋️`);
    }
    
    const mahdiArray = [
      "Mahdi",
      "Jabbary",
      2037 - 2002,
      "teacher",
      ["Michael", "Peter", "Steven"],
      true,
    ];
    
const types = new Array();
for (let i = 0; i < mahdiArray.length; i++) {
  // types[i] = typeof mahdiArray[i];
  types.push(typeof mahdiArray[i]);
  console.log(mahdiArray[i], typeof mahdiArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = new Array();
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

for (let i = 0; i < mahdiArray.length; i++) {
  if (typeof mahdiArray[i] !== "string") {
    continue;
  }
  
  console.log(mahdiArray[i], typeof mahdiArray[i]);
}

console.log("------- newwwwwwwwww ----------");
for (let i = 0; i < mahdiArray.length; i++) {
  if (typeof mahdiArray[i] === "number") {
    break;
  }
  
  console.log(mahdiArray[i], typeof mahdiArray[i]);
}


const mahdiArray = [
  "Mahdi",
  "Jabbary",
  2037 - 2002,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = mahdiArray.length - 1; i >= 0; i--) {
  console.log(i, mahdiArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`--------- starting exercise ${exercise}`);
  for (let i = 1; i <= 5; i++) {
    console.log(`Exercise ${exercise} Lifting weight repetition ${i} 🏋️`);
  }
}


// let i = 1;
// while (i <= 10) {
  //   console.log(`Lifting weight repetition ${i} 🏋️`);
  //   i++;
  // }
  
  let dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);
  
  while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end!`);
  }
  
  */
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = new Array();
const totals = new Array();

const calcTip = function (bill) {
  if (bill < 300 && bill > 50) {
    let tip = bill * 0.15;
    let total = tip + bill;
    tips.push(tip);
    totals.push(total);
  } else {
    let tip = bill * 0.2;
    let total = tip + bill;
    tips.push(tip);
    totals.push(total);
  }
};

for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i]);
}

console.log(bills);
console.log(totals);
console.log(tips);
*/

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const average = sum / arr.length;
  return average;
};

console.log(calcAverage([2, 3, 14, 23]));
