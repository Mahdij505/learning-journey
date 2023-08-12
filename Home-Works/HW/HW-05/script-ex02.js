"use strict";

const stepCounter = {
  steps: 0,
  increase() {
    this.steps++;
    return this;
  },
  decrease() {
    this.steps--;
    return this;
  },
  reset() {
    this.steps = 0;
    return this;
  },
  read() {
    console.log(this.steps);
    return this;
  },
};
stepCounter
  .increase()
  .increase()
  .increase()
  .increase()
  .increase()
  .increase()
  .increase()
  .increase()
  .increase()
  .decrease()
  .decrease()
  .decrease()
  .read()
  .reset()
  .read();
