"use strict";

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let index = 1; index <= 9; index++) {
  function getHole(index) {
    let holeClick = document.getElementById(`hole${index}`);
    return holeClick;
  }

  let hole = getHole(index);

  hole.onclick = function () {
    if (hole.className.includes("hole_has-mole") === true) {
      if (dead.textContent != 10) {
        dead.textContent++;
      } else {
        alert("Вы победили!");
        dead.textContent = 0;
        lost.textContent = 0;
      }
    } else {
      if (lost.textContent != 5) {
        lost.textContent++;
      } else {
        alert("Вы проиграли");
        dead.textContent = 0;
        lost.textContent = 0;
      }
    }
  };
}
