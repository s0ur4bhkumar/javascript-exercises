const convertToCelsius = function(temp) {

  return parseFloat(((temp - 32)*(5/9)).toFixed(1));

};

const convertToFahrenheit = function(temp) {

  return parseFloat(((9/5)*temp + 32).toFixed(1));

};

// console.log(typeof(convertToCelsius(32)));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
