const fs = require('fs');

const buffer = fs.readFileSync('input.txt');

const fileContent = buffer.toString();
const lines = fileContent.split('\n');

const countedLines = lines
  .map(line =>
    line
      .split('')
      .reduce((accumulator, currentValue, _, sourceArray) => {
        const instancesOfSameLetter = sourceArray.filter(x => x === currentValue).length;

        if (instancesOfSameLetter === 2 || instancesOfSameLetter === 3) {
          accumulator.add(instancesOfSameLetter);
        }

        return accumulator;
      }, new Set())
  ).filter(set => set.size > 0);

const appearancesOf2 = countedLines.reduce((accumulator, currentValue, _, sourceArray) => {
  if (currentValue.has(2)) {
    accumulator += 1;
  }

  return accumulator;
}, 0);

const appearancesOf3 = countedLines.reduce((accumulator, currentValue, _, sourceArray) => {
  if (currentValue.has(3)) {
    accumulator += 1;
  }

  return accumulator;
}, 0);

const checksum = appearancesOf2 * appearancesOf3;

console.log(checksum);
