'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}. `;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      const firstName = 'Steven';
      var millennial = true;
      const str = `Oh , and you're a millennial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      const output = 'NEW OUTPUT';
    }
    // console.log(add(2, 3));

    console.log(millennial);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Mahdi';
calcAge(1991);
*/
/*
console.log(me);
// console.log(job);
// console.log(birthYear);

console.log(addDect(2, 4));
// console.log(addArrow(2, 4));
// console.log(addExpr(2, 4));

var me = 'Mahdi';
let job = 'Student';
const birthYear = 2002;

function addDect(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
//Example

if (!numProduct) deleteShoppingCart();

var numProduct = 10;

function deleteShoppingCart() {
    console.log('All products delete!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);


console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAge(2002);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAgeArrow(2002);


mahdi.calcAge();

const matilda = {
    birthYear: 2017,
};

matilda.calcAge = mahdi.calcAge;

matilda.calcAge();

const f = mahdi.calcAge;


// var firstName = 'Matilda';

const mahdi = {
    birthYear: 1991,
    firstName: 'Mahdi',
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.birthYear);
        
        // const self = this;
        //self or that
        
        const isMillennial = () => {
            console.log(this);
            console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
        };
        isMillennial();
    },
    
    greet: () => {
        console.log(`Hey ${this.firstName}`);
        console.log(this, 'in arrow function');
    },
};

mahdi.greet();
mahdi.calcAge();

// Arguments keyword

function addDect(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 3);

let age = 30;
let oldAge = age;
age = 31;
console.log(oldAge);
console.log(age);

const me = {
  name: 'Mahdi',
  age: 21,
};
const friend = me;
friend.age = 32;

console.log('Friend Age :', friend.age);
console.log('My Age :', me.age);


// Primitive types reference types
let lastName = 'Jabbary';
let oldLastName = lastName;
lastName = 'Davis';
console.log(oldLastName, lastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {};
//Copying

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Mahdiyeh', 'Bob'],
};

console.log('_____________________---------------------');

const jessicaCopy = structuredClone(jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

jessicaCopy.family.push('Marry');
jessicaCopy.family.push('John');

*/
