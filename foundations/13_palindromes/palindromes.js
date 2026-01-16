const palindromes = function (str) {
  let reverse = "";
  let newStr = str.replace(/[, .!]+/g, "").toLowerCase();
  for (let i = newStr.length - 1; i >= 0; i--) {
    reverse += newStr[i];
  }
  if (reverse === newStr) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
