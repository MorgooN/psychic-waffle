// 1. Deposit money
// 2. Collect bet amount
// 3. Number of lines to bet
// 4. Spin the slot machine
// 5. Check is the user won
// 6. Give the user money

const prompt = require("prompt-sync")({
  history: require("prompt-sync-history")(), //open history file
});

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const currentAmount = parseFloat(depositAmount, 10); // parsing int from input
    if (isNaN(currentAmount) || currentAmount <= 0) {
      console.log("Enter correct amount");
    } else {
      return currentAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const numberLines = prompt("Enter a number of lines (1-3): ");
    const currentNumberLines = parseFloat(numberLines, 10); // parsing int from input
    if (
      isNaN(currentNumberLines) ||
      currentNumberLines <= 0 ||
      currentNumberLines > 3
    ) {
      console.log("Enter correct number of lines");
    } else {
      return currentNumberLines;
    }
  }
};

const currentAmount = deposit();
const currentLines = getNumberOfLines();
console.log(
  "Your current deposit is " +
    currentAmount +
    " And your bet is on the " +
    currentLines +
    " lines "
);
