const fs = require('fs');

const buffer = fs.readFileSync('input.txt');

const fileContent = buffer.toString();
const lines = fileContent.split('\n');
const parsedLines = lines.map(line => parseInt(line, 10));
const numbers = parsedLines.filter(line => !isNaN(line));
const sum = numbers.reduce((previousValue, currentValue) => (previousValue + currentValue), 0);

console.log(sum);
