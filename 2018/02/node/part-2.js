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

const res = nonEmptyLines
  .map((currentLine, i, arr) => {
    const currentLineArr = currentLine.split('');

    const diffs = arr
      .reduce((acc, compareLine) => {
        if (currentLine !== compareLine) {
          const compareLineArr = compareLine.split('');

          const indexDiffs = currentLineArr
            .filter(value => !compareLineArr.includes(value))
            .map(c => currentLineArr.indexOf(c));

          if (indexDiffs.length === 1) {
            acc[compareLine] = indexDiffs;
          }
        }

        return acc;
      }, {});

    return { text: currentLine, diffs };
  })
  .map(obj => {
    function diff (a, b) {
      return a.split('').filter(value => -1 === b.split('').indexOf(value))[0];
    }

    const keysToKeep = Object.keys(obj.diffs).filter(key => {
      const diffOne = diff(key, obj.text);
      const diffTwo = diff(obj.text, key);

      const diffOneIndex = key.indexOf(diffOne);
      const diffTwoIndex = obj.text.indexOf(diffTwo);

      return diffOneIndex === diffTwoIndex;
    });

    const keysToRemove = Object.keys(obj.diffs).filter(value => -1 === keysToKeep.indexOf(value));

    keysToRemove.forEach(key => {
      delete obj.diffs[key];
    });

    return obj;
  })
  .filter(item => Object.keys(item.diffs).length !== 0);

console.log(res);
