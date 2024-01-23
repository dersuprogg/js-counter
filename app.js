// SELECT ALL UI ELEMENTS
const countHeader = document.querySelector(".count");
const display = document.querySelector(".display");
const displayHeader = document.querySelector(".display-header");
const resetBtn = document.querySelector(".btn-reset");
const incrementBtn = document.querySelector(".btn-increment");
const decrementBtn = document.querySelector(".btn-decrement");
let count = 0;

const limit = 5;

incrementBtn.addEventListener("click", () => {
  count++;
  if (count === limit) {
    displayHeader.textContent = "You've reached the limit. Buy Pro.";
    display.classList.add("disabled");
    incrementBtn.setAttribute("disabled", true);
    decrementBtn.setAttribute("disabled", true);
  }
  countHeader.textContent = count;
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
  display.classList.remove("disabled");

  incrementBtn.removeAttribute("disabled");
  decrementBtn.removeAttribute("disabled");
});
