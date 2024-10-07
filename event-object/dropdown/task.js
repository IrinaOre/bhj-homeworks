"use strict";

const button = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const linksList = Array.from(document.querySelectorAll(".dropdown__link"));

button.addEventListener("click", () => {
  if (list.classList.contains("dropdown__list_active") == true) {
    list.classList.remove("dropdown__list_active");
  } else {
    list.classList.add("dropdown__list_active");
  }
});

linksList.forEach((item, index) => {
  item.onclick = () => {
    button.textContent = linksList[index].textContent;
  };
});
