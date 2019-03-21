// Solution for ATM (HS08TEST) 

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line){
    [value, account] = line.split(' ');
    if (value && account) {
      console.log(calculateTransaction(value, account));  
    }
});

const marge = 0.5;

function calculateTransaction(sumInput, accountInput) {
    let sum = parseFloat(sumInput);
    let accountSum = parseFloat(accountInput).toFixed(2);
    if (sum && sum % 5 === 0 && sum + marge < accountSum) {
        return (accountSum - sum - marge).toFixed(2);
    }
    return accountSum;
}
