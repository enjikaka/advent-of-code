const text = await Deno.readTextFile('./02/input.txt');

const [x, y] = text
  .split('\n')
  .map(line => line.split(' '))
  .reduce(([x, y], [dir, val]) => ([
    x + (dir.includes('forward') ? + val : 0),
    y + (dir.includes('up') ? - val : 0) + (dir.includes('down') ? + val : 0)
  ]), [0, 0]);

console.log(x * y);
