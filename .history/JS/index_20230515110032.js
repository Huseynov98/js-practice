const counterEl = document.querySelector('[data-find="counterValue"]');
const addOnePoolButton = document.getElementById("addOnePoolButton");
const addTwoPoolButton = document.getElementById("addTwoPoolsButton");
const resetButton = document.getElementById("resetButton");

// counterEl - 1;
console.log(counterEl.dataset);

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;

addOnePoolButton.addEventListener("click", function () {
  counter = counter + addTwoPoolButton.dataset.pools;
  console.log(counter, addOnePoolButton.dataset.pools);
});
