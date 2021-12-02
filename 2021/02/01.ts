const text = await Deno.readTextFile('./02/input.txt');

const [x, y] = text
  .split('\n')
  .reduce(([x, y], line) => ([
    x + (line.split(' ')[0].includes('forward') ? + line.split(' ')[1] : 0),
    y + (line.split(' ')[0].includes('up') ? - line.split(' ')[1] : 0) + (line.split(' ')[0].includes('down') ? + line.split(' ')[1] : 0)
  ]), [0, 0]);

console.log(x * y);
