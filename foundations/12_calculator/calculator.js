const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, ele) => (sum += ele), 0);
};

const multiply = function (arr) {
  return arr.reduce((product, ele) => (product *= ele));
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  let result = 1;
  if (n === 0 || n === 1) {
    return 1;
  }
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
