//////////////////////////////////////
// Exporting and Importing in ES6 Module
/*

// Importing module
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
addToCart('bread', 5);
console.log(price, tq);

console.log('Importing module');
console.log(shippingCost);

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);
console.log(ShoppingCart.tq);

import add from './shoppingCart.js';
import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log(price);

import add, { cart, tq } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
console.log('Start fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
    console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
lastPost.then(last => console.log(last));

// Top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

//////////////////////////////////////////
// The Module Pattern
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apples', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

// CommonJs in Node.js
/*
// Export
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  // Import
const {addToCart} = require('./shoppingCart.js');
*/

/////////////////////////////////////////
// Introduction to NPM

import add, { cart, tq } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
  greeting() {
    console.log('Hi 👋');
  },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);
state.user.loggedIn = false;
console.log(stateClone);

// structuredClone Method can not clone methods in objects!!

// const stateCloneTest = structuredClone(state);
// console.log(stateCloneTest);
// stateCloneTest.user.loggedIn = 'yum yum';

// Lodash cloneDeep method can clone object methods too! :))
const stateDeepClone = cloneDeep(state);
// stateDeepClone.user.loggedIn = 'THIS ANOTHER';
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const mahdi = new Person('Mahdi');

console.log('Mahdi' ?? null);
console.log(cart.find(el => el.quantity >= 2));

import 'core-js/stable';
// import 'core-js/stable/array/find.js';
// import 'core-js/stable/promise';

// Polyfilling async functions
import 'regenerator-runtime/runtime.js';
