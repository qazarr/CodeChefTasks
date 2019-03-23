// Solution for Small factorials (FCTRL2) 

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.once('line', function(line){
    const t = parseInt(line);
    console.log('');
    rl.on('line', function(value){
        const num = parseInt(value);
        let ret = 1;
        for (let i = 1; i <= num; i++) {
          ret *= i;  
        }
        console.log(ret);
    });
});

// optionaly used to change output formatting
function noExpotentialRepresentation(value) {
    const splitNumber = value.toString().split('e');
    if(splitNumber[1]) {
        let regexMatch = splitNumber[0].match(/^([^.]+)\.?(.*)$/);
        const ret =
            /* integer part */ regexMatch[1] +
            /* fractional part */ regexMatch[2] +
            /* trailing zeros */ Array(splitNumber[1] - regexMatch[2].length + 1).join('0');
            return ret;
    } else {
        return splitNumber[0];
    }
}

