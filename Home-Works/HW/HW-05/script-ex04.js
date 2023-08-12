"use strict";

const showNotification = function (obj) {
  const { top, right, html: message, className } = obj;
  const body = document.body;
  const messageContainer = document.createElement("p");
  messageContainer.classList.add(`${className}`);
  messageContainer.textContent = `${message}`;
  body.prepend(messageContainer);
  body.style.position = "relative";
  messageContainer.style.position = "absolute";
  messageContainer.style.top = `${top}px`;
  messageContainer.style.right = `${right}px`;
};

showNotification({ top: 10, right: 10, html: "Hello!", className: "welcome" });
showNotification({
  top: 0,
  right: 400,
  html: "Another one!",
  className: "welcome",
});
