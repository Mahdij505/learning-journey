"use strict";

const setBackground = function (el) {
  el.style.backgroundColor = "red";
};

const elCreator = function (elName, callback) {
  const el = document.createElement(elName);
  el.style.width = "12rem";
  el.style.height = "12rem";
  document.body.append(el);

  return callback(el);
};

// Try it out :)
// elCreator("div", setBackground);
