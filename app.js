// SELECT ALL UI ELEMENTS
const countHeader = document.querySelector(".count");
const displayHeader = document.querySelector(".display-header");
const resetBtn = document.querySelector(".btn-reset");
const incrementBtn = document.querySelector(".btn-increment");
const decrementBtn = document.querySelector(".btn-decrement");
let count = 0;

const limit = 10;

incrementBtn.addEventListener("click", () => {
  if (count === limit) {
    displayHeader.textContent = "You've reached the limit. Buy Pro.";
  } else {
    count++;
    countHeader.textContent = count;
  }
});

decrementBtn.addEventListener("click", () => {
  if (count !== 0) {
    count--;
    countHeader.textContent = count;
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countHeader.textContent = count;
  displayHeader.innerHTML = `FANCY <br> COUNTER`;
});
