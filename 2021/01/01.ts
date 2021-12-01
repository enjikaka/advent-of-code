const text = await Deno.readTextFile('./01/input.txt');

const numerOfIncreases = text
  .split('\n')
  .map(n => parseInt(n, 10))
  .map((value, index, array) => {
    return array[index - 1] && array[index - 1] < value ? 'increased' : 'decreased';
  })
  .filter(s => s === 'increased')
  .length;

console.log('Number of increases: ' + numerOfIncreases);
