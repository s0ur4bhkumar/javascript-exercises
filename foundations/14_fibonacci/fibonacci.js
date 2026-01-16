const fibonacci = function (n) {
  let a = 0,
    b = 1;
  let c = 0;
  if (n == 0) {
    return 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  }
  if (n < 0) {
    return "OOPS";
  }
  for (let i = 1; i <= n; i++) {
    [a, b] = [b, c];
    c = a + b;
  }
  return c;
};

// Do not edit below this line
module.exports = fibonacci;
