const fs = require('fs');

const buffer = fs.readFileSync('input.txt');

const fileContent = buffer.toString();
const lines = fileContent.split('\n');
const nonEmptyLines = lines.filter(Boolean);

const mockData = [
'abcdeas',
'fghijas',
'fghijaså',
'klmnoas',
'pqrstas',
'fguijas',
'fguijasä',
'axcyeas',
'wvxyzas'
];

function hammingDistance(a, b) {
  if (a.length !== b.length) {
    throw new Error('Strings must be of the same length');
  }

  let distance = 0;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      distance += 1;
    }
  }

  return distance;
}

const res = nonEmptyLines
  .filter(line =>
    line
      .split('')
      .filter((currentValue, _, sourceArray) => {
        const instancesOfSameLetter = sourceArray.filter(x => x === currentValue).length;

        return instancesOfSameLetter === 2 || instancesOfSameLetter === 3;
      })
  )
  .sort()
  .map((currentLine, i, arr) => ({
    line: currentLine,
    distanceToOtherLines: arr
      .filter(x => x !== currentLine)
      .map(otherLine => hammingDistance(currentLine, otherLine))
  }))
  .filter(({ distanceToOtherLines }) => distanceToOtherLines.includes(1));

const id = res[0].line.split('').filter(value => -1 !== res[1].line.split('').indexOf(value)).join('');

console.log(id);