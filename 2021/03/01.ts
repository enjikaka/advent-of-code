const input = await Deno.readTextFile('./03/input.txt');

const inputArray = input
  .split('\n')
  .map(line =>
    line.split('').map(n => parseInt(n, 10))
  );

const gammaRate = parseInt(
  inputArray[0]
    .map((_, columnIndex) => inputArray.map(line => line[columnIndex]))
    .map(columnValues => columnValues.sort().lastIndexOf(0) > columnValues.length / 2 ? 0 : 1)
    .join('')
, 2);

const epsilonRate = parseInt(
  inputArray[0]
    .map((_, columnIndex) => inputArray.map(line => line[columnIndex]))
    .map(columnValues => columnValues.sort().lastIndexOf(0) < columnValues.length / 2 ? 0 : 1)
    .join('')
, 2);

console.log(gammaRate * epsilonRate);
