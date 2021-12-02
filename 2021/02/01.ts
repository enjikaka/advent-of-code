const text = await Deno.readTextFile('./02/input.txt');

const [x, y] = text
  .split('\n')
  .map(line => line.split(' '))
  .reduce(([x, y], sline) => ([
    x + (sline[0].includes('forward') ? + sline[1] : 0),
    y + (sline[0].includes('up') ? - sline[1] : 0) + (sline[0].includes('down') ? + sline[1] : 0)
  ]), [0, 0]);

console.log(x * y);
