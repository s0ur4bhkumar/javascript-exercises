const convertToCelsius = function (temp) {
  return roundTo((5 / 9) * (temp - 32), 1);
};

const convertToFahrenheit = function (temp) {
  return roundTo((9 / 5) * temp + 32, 1);
};

function roundTo(num, precision) {
  const factor = Math.pow(10, precision);
  return Math.round(num * factor) / factor;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
  roundTo,
};
