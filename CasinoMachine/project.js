// 1. Deposit money
// 2. Collect bet amount
// 3. Number of lines to bet
// 4. Spin the slot machine
// 5. Check is the user won
// 6. Give the user money

const prompt = require("prompt-sync")({
  history: require("prompt-sync-history")(), //open history file
});

const ROWS = 3;
const COLS = 3;

// map 
const SYMBOLS_COUNT = {
  A:2,
  B:4,
  C:6,
  D:8
}

const SYMBOLS_VALUE = {
  A:5, // line with A will be * by 5 etc.
  B:4,
  C:3,
  D:2
}



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

const getBet = (balance,lines)=>{
   while (true) {
    const bet = prompt("Enter the bet per line: ");
    const currentBet = parseFloat(bet, 10); // parsing int from input
    if (
      isNaN(currentBet) ||
      currentBet <= 0 || currentBet > (balance/lines)) {
      console.log("Enter correct amount of bet. ");
    } else {
      return currentBet;
    }
  }
}

const spin = ()=>{
  const  symbols = [];
  for(const [symbol,count] of Object.entries(SYMBOLS_COUNT)){
    console.log(symbol,count);
    for(let i = 0; i < count; i++){
      symbols.push(symbol); // populating symblos array with slot symbols
    }
  }
  const reels = [[],[],[]];
  for(let i = 0; i < reels.length; ++i){
    const reelsSymbols = [...symbols]; // copy elems from symbols
    for(let j = 0; j < ROWS; ++ j){
      const selectedSymbol = reelsSymbols[Math.floor(Math.random()*reelsSymbols.length)]
      
    }
  }
};

spin();

let balance = deposit(); // let currentAmount be re-assignable variables
const currentLines = getNumberOfLines();
const currentBet = getBet(balance,currentLines);
console.log(
  "Your current deposit is " +
    balance +
    " your bet is on the " +
    currentLines +
    " lines " +
    " and your current bet is " +
    currentBet
);
