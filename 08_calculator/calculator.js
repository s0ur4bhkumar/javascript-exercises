const add = function(value1,value2) {

  return value1 + value2
	
};

const subtract = function(value1,value2) {

  return value1 - value2;
	
};

const sum = function(arr) {

  let result = 0;

  if (arr.length == 0) return 0;

  for (ele of arr){

    result += ele;
    
  }
  return parseInt(result);
	
};

const multiply = function(arr) {

  let result = 1;

  if (arr.length == 0) return 0;

  for (ele of arr){

    result *= ele;
    
  }
  return parseInt(result);

};

const power = function(num,power) {

  return num**power
	
};

const factorial = function(num) {

  let result = 1;

  if (num == 0) return 1;

  for (let i = 1; i <= num; i++){

    result *= i;

  }
  return result;
	
};

// console.log(sum([2,7]))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
