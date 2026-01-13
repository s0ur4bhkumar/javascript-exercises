const removeFromArray = function (arr, ...elements) {
  const newArr = [];
  arr.forEach((ele) => {
    if (!elements.includes(ele)) {
      newArr.push(ele);
    }
  });
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
