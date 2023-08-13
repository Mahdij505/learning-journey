"use strict";

const user = {
  name: "John",
  age: 30,
  sayHello() {
    alert(`Hello ${this.name}`);
  },
};

user.sayHello();
