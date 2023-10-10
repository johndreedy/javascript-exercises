const convertToCelsius = function(integer) {
  integer -= 32;
  integer /= 1.8;
  integer = Math.round(integer * 10) / 10;
  return integer;
};

const convertToFahrenheit = function(integer) {
  integer *= 1.8;
  integer += 32;
  integer = Math.round(integer * 10) / 10;
  return integer;
};

console.log(convertToCelsius(-100));

console.log(convertToFahrenheit(50));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
