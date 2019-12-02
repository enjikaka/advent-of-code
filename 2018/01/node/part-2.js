const fs = require('fs');

const buffer = fs.readFileSync('input.txt');

const fileContent = buffer.toString();
const lines = fileContent.split('\n');
const parsedLines = lines.map(line => parseInt(line, 10));
const frequencies = parsedLines.filter(line => !isNaN(line));

let foundTwice = null;
let resultingFrequencies = [];

while (foundTwice === null) {
  frequencies.forEach(freq => {
    const sum = resultingFrequencies.reduce((a, b) => a + b, 0);
    const res = sum + freq;

    if (resultingFrequencies.includes(res)) {
      foundTwice = res;
    } else {
      resultingFrequencies.push(res);
    }
  });
}

console.log(foundTwice);