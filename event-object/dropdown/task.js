"use strict";

const button = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const linksList = Array.from(document.querySelectorAll(".dropdown__link"));

button.addEventListener("click", () => {
  list.classList.toggle("dropdown__list_active");
});
linksList.forEach((item, index) => {
  item.onclick = (e) => {
    e.preventDefault();
    button.textContent = linksList[index].textContent;
  };
});
