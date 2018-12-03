const fs = require('fs');
const path = require('path');
const fileName = "2_input.txt";
const filePath = path.join(__dirname, fileName);

let linesInFile = fs.readFileSync(filePath).toString().split(/\n/);

let counts = {
    "hasLetterExactlyTwice": 0,
    "hasLetterExactlyThrice": 0
};

for(const line of linesInFile){
    if(hasExaclyNOfALetter(line, 2)){
        counts["hasLetterExactlyTwice"]++;
    }
    if(hasExaclyNOfALetter(line,3)){
        counts["hasLetterExactlyThrice"]++;
    }
}

const hash = counts["hasLetterExactlyThrice"] * counts["hasLetterExactlyTwice"];
console.log(`Hash: ${hash}`)

/**
 * Does the input provided contain any letter exactly n times?
 * @param {string} input
 * @param {number} n
 * @returns {boolean}
 */
function hasExaclyNOfALetter(input, n){
    const letters = [...input];
    const letterCountMap = {};

    for(const letter of letters){
        const currentCount = letterCountMap[letter] || 0;
        letterCountMap[letter] = currentCount + 1;
    }

    const availableLetters = Object.keys(letterCountMap);
    for(const letter of availableLetters){
        const letterCount = letterCountMap[letter];
        if(letterCount === n){
            return true;
        }
    }

    return false;
}

