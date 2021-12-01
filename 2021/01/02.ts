const text = await Deno.readTextFile('./01/input.txt');

const sum = (arr: number[]) => arr.reduce((a, b) => a + b);

const numerOfIncreases = text
  .split('\n')
  .map(n => parseInt(n, 10))
  .map((value, index, array) => [value, array[index + 1], array[index + 2]])
  .map((value, index, array) => array[index - 1] && sum(array[index - 1]) < sum(value) ? 'increased' : 'decreased')
  .filter(s => s === 'increased')
  .length;

console.log('Number of increases: ' + numerOfIncreases);
