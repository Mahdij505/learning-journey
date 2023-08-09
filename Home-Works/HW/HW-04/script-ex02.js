"use strict";

const countCharacters = function (par, str) {
  const count = str
    .split("")
    .reduce((acc, char) => (char === par ? ++acc : acc), 0);
  console.log(count);
};

countCharacters("p", "parisaEghbalipanjTapirahanDarad");
