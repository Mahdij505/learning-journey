'use strict';
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
//     ':',
//     'h'
//   )})`.padStart(50, ' ');
//   console.log(output);
// }

/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/
/*
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recived: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicoius pasta with ${ing1} , ${ing2} and ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                    MORE ABOUT MAPS //////////////////////////////////

/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🎉🎉'],
  [false, 'Try again'],
]);

console.log(question);

console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = +prompt('Your answer :', '');
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert Map to Array

console.log(...question);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/
/*
/////////////////////////////////////////////////////////////
//     MAPS FUNDAMENTALS

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissoto',
  'Pasta',
  'Pizza',
]);

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/
/*
/////////////////////////////////////////////////////////////
//     SETS
console.log(ordersSet);
console.log(new Set('Mahdi'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Rissoto');
// ordersSet.clear();
console.log(ordersSet);
for (const order of ordersSet) {
  console.log(order);
}

// Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('Jonasschmedtmann'));
*/
/*
/////////////////////////////////////////////////////////////
//     FOR OF LOOP
const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
*/
/*
////////////////////////////////////////////////////////////////
// OPTIONAL CHAINING 
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
//WITH OPTIONAL CHAINING
console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours.mon?.open);

// EX
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays

const users = [{ name: 'Mahdi', email: 'something@gmail.com' }];

console.log(users[1]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('Users array empty');
*/

////////////////////////////////////////////////////////////////
// For Of Loop
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  // console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

*/
// console.log([...menu.entries()]);

/*
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);
*/
/*
////////////////////////////////////////////////////////////////
//Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/
/*
////////////////////////////////////////////////////////////////////////
// Short Circuiting (&& and ||)
console.log('-----------OR-------------');

console.log(3 || 'Mahdi'); //3
console.log('' || 'Mahdi'); //Mahdi
console.log(true || 0); //true
console.log(undefined || null); //null

restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

console.log('-----------AND-------------');

console.log(0 && 'Mahdi');
console.log(7 && 'Mahdi');

console.log('Hello' && 23 && null && 'Mahdi');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
*/
/*
////////////////////////////////////////////////////////////////
//Rest Pattern and Parameters

// 1 Destructuring

const arr = [1, 2, ...[3, 4]];
console.log(arr);

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2 Functions

const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');
*/
/*
////////////////////////////////////////////////////////////////////////
// Spread operator
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array

const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays or more

const menu = [...restaurant.starterMenu, ...mainMenuCopy];
console.log(menu);

// Iterables arrays , strings , maps , sets but not objects

const str = 'Mahdi';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
console.log('M', 'a', 'h', 'd', 'i');
// console.log(`${...str} Jabbary`);

//Real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?", ''),
  // prompt('Ingredient 2?', ''),
  // prompt('Ingredient 3?', ''),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guideppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);
*/
/* 
////////////////////////////////////////////////////////////////
// Destructuring Objects
restaurant.orderDelivery({
  time: '23:30',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'via del sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Neated objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*----------------------------------------------------------------
////////////////////////////////////////////////////////////////
// Destructuring arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

////////////////////////////////////////////////////////////////
//**************************************************************//
// -------------------------Challenge #1------------------------------
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


// #1
const [players1, players2] = game.players;

// #2
const [gk, ...fieldPlayers] = players1;

// #3
const allPlayers = [...players1, ...players2];

// #4
const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];

// #5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// #6
const printGoals = function (...arr) {
  console.log(`${arr.length} goals were scored.`);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// #7
team1 > team2 && console.log(`Team 2 is more likely to win.`);
team1 < team2 && console.log(`Team 1 is more likely to win.`);

*/

////////////////////////////////////////////////////////////////
//**************************************************************//
// -------------------------Challenge #2------------------------------

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// #1

for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}

// #2

let sum = 0;
const oddsvalues = Object.values(game.odds);
const oddsLength = oddsvalues.length;
for (const num of oddsvalues) {
  sum += num;
}
const avg = sum / oddsLength;
console.log(avg);

// #3
for (const [key, value] of Object.entries(game.odds)) {
  console.log(`Odd of victory ${game[key] ?? 'draw'}: ${value}`);
}

// BONUS

const scorers = new Object();
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// #1
// console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];

console.log(events);

// #2

gameEvents.delete(64);
console.log(gameEvents);

// #3

const time = [...gameEvents.keys()].pop();
const eventPerMin = time / gameEvents.size;
console.log(`An event happened, on average, every ${eventPerMin} minutes `);
// #4

for (const [key, value] of [...gameEvents]) {
  console.log(
    `${key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${key}: ${value}`
    );a
  }
  
*/
/*
////////////////////////////////////////////////////////////////
/***************** string fundamentals part 1 ****************

const airline = 'TAP Air Portgual';
const plane = 'A320';

console.log(plane[0]);
console.log(+plane[1]);
console.log(+plane[2]);
console.log(+plane[3]);

console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portgual'));

console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`You got the middle seat 😬`);
  } else {
    console.log(`You got lucky 😎`);
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Mahdi'));
console.log(typeof new String('Mahdi').slice(1));
*/

/*
////////////////////////////////////////////////////////////////
/***************** string fundamentals part 2 ****************
const airline = 'TAP Air Portgual';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('mahdi'.toUpperCase());

// Fix capitalization in name

const correctCapital = function (name) {
  const nameLower = name.toLowerCase();
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(nameCorrect);
};
correctCapital('mAhDi'); // Mahdi

//Comparing emails
const email = 'hello@mahdi.io';
const loginEmail = ' Hello@Mahdi.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

// console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail === email);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

//Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log(`Part of the new airbus family`);
}

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`Ypu are not allowed on board`);
  } else {
    console.log(`Welcome aboard`);
  }
};
checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);
*/

/*
////////////////////////////////////////////////////////////////
/***************** string fundamentals part 3 ****************
//Split and Join

console.log('a+very+nice+string'.split('+'));
console.log('Mahdi Jabbary'.split(' '));

const [firstName, lastName] = 'Mahdi Jabbary'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = new Array();
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('mahdi jabbary');

//Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(6102993489));
console.log(maskCreditCard(6102993489437655));
console.log(maskCreditCard('2737918723871913212'));

//Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
////////////////////////////////////////////////////////////////////////
////////________________________ My answers__________________
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('Button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rawTexts = text.toLowerCase().split('\n');
  const finalVariableName = [];
  let max = rawTexts[0].length - 1;
  for (const variable of rawTexts) {
    const variableArr = variable.trim().split('_');
    const popedText = variableArr.pop();
    variableArr.push(
      popedText.replace(
        popedText.split('')[0],
        popedText.split('')[0].toUpperCase()
        )
        );
        const finalVariable = variableArr.join('');
        finalVariableName.push(finalVariable);
        if (max <= finalVariable.length) max = finalVariable.length;
      }
      for (const v of finalVariableName) {
        const variable = v.padEnd(max + 5, ' ');
        console.log(`${variable}${'✅'.repeat(finalVariableName.indexOf(v) + 1)}`);
      }
    });
    
    */
/////////********************************************** */
//Teachers Answer
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/
