"use strict";

const content = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");

image.onclick = function () {
  content.textContent++;
  if (image.style.width != "200px") {
    image.style.width = "200px";
  } else {
    image.style.width = "300px";
  }
};
