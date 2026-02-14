const pascal = function(num) {
  let result = [];
  if (num === 1) {
    return [1];
  }
  if (num === 2) {
    return [1, 1];
  }
  for (let i = 0; i < num - 2; i++) {
    result.push(pascal(num-1)[i] + pascal(num-1)[i + 1]);
  }
  result.unshift(1);
  result.push(1);
  return result;
};
  
// Do not edit below this line
module.exports = pascal;
