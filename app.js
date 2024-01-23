// SELECT ALL UI ELEMENTS
const countHeader = document.querySelector(".count");
const displayHeader = document.querySelector(".display-header");
const resetBtn = document.querySelector(".btn-reset");
const incrementBtn = document.querySelector(".btn-increment");
const decrementBtn = document.querySelector(".btn-decrement");
let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  countHeader.textContent = count;
});
