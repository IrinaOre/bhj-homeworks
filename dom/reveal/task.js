"use strict";

const reveal = [...document.querySelectorAll(".reveal")];
const body = document.body;

document.addEventListener("scroll", revealText);

function revealText() {
  reveal.forEach((size) => {
    const viewport = window.innerHeight;
    const top = size.getBoundingClientRect().top;
    const bottom = size.getBoundingClientRect().bottom;

    if (top < viewport && bottom > 0) {
      size.classList.add("reveal_active");
    } else {
      size.classList.remove("reveal_active");
    }
  });
}
