const permutations = function (arr) {
  if (arr.length === 0) {
    return [[]];
  }

  if (arr.length === 1) {
    return [arr];
  }

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    let remaining = arr.slice(0, i).concat(arr.slice(i + 1));

    let perms = permutations(remaining);

    for (ele of perms) {
      result.push([current].concat(ele));
    }
  }
  return result;
};

// Do not edit below this line
module.exports = permutations;
