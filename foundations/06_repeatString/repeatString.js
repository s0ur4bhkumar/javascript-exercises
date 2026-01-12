const repeatString = function (string, num) {
  let repeatStr = "";
  if (num < 0) {
    return "ERROR";
  } else if (string === "" || num === 0) {
    return "";
  } else {
    for (let i = 1; i <= num; i++) {
      repeatStr += string;
    }
    return repeatStr;
  }
};

// Do not edit below this line
module.exports = repeatString;
