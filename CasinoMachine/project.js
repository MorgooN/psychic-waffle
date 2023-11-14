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
  const depositAmount = prompt("Enter a deposit amount: ");
};

deposit();
