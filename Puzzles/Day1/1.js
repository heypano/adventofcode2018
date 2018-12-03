// https://adventofcode.com/2018/day/1/input
const fs = require('fs');
const path = require('path');
const fileName = "1_input.js";
const filePath = path.join(__dirname, fileName);

let frequencySum = 0;
const intermediateFrequencies = new Set([0]);
let linesInFile = fs.readFileSync(filePath).toString().split(/\n/);
let repeatedFrequencyFound = false;

let lineIndex = 0;
while(!repeatedFrequencyFound){
    const line = linesInFile[lineIndex];
    const [input, operator, number] = Array.from(/([+-])(\d+)/.exec(line) || []);
    switch(operator){
        case '+':
            frequencySum += +number;
            break;
        case '-':
            frequencySum -= +number;
            break;
        default:
            break;
    }
    // console.log(frequencySum, intermediateFrequencies.join(" "));

    if(intermediateFrequencies.has(frequencySum)){
        console.log(`Frequency repeated: ${frequencySum}`);
        repeatedFrequencyFound = true;
        break;
    } else {
        intermediateFrequencies.add(frequencySum)
        if(lineIndex < linesInFile.length - 1){
            lineIndex++;
        } else {
            lineIndex = 0;
        }
    }

}

