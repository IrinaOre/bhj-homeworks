"use strict";

const decreaseNumber = function () {
  const newText = document.getElementById("clicker__counter");
  newText.textContent--;

  if (newText.textContent < 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(timerId);
    newText.textContent = 0;
  }
};
let timerId = setInterval(decreaseNumber, 400);

console.log(timerId);
