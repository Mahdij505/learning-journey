"use strict";

const yes = () => alert("You agreed.");
const no = () => alert("You cancelled the execution.");
const ask = (question, yesF, noF) => (confirm(question) ? yesF() : noF());

ask("Do you agree?", yes, no);
