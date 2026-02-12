const factorial = function (num) {
  if (num >= 0 && Number.isInteger(num)) {
    if (num === 0) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  } else {
    return undefined;
  }
};

// Do not edit below this line
module.exports = factorial;
