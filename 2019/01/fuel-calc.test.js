import fuelRequired from './fuel-calc.js';

export default function test () {
  let result = fuelRequired(12);

  if (result !== 2) {
    return false;
  }

  result = fuelRequired(14);

  if (result !== 2) {
    return false;
  }

  result = fuelRequired(1969);

  if (result !== 654) {
    return false;
  }

  result = fuelRequired(100756);

  if (result !== 33583) {
    return false;
  }

  return true;
}