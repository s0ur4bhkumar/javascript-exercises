function totalIntegers(lst) {
  let count = 0;
  const keys = Object.keys(lst);
  if (typeof lst !== "object") {
    return undefined;
  }
  for (idx of keys) {
    if (Number.isInteger(lst[idx])) {
      count += 1;
    } else if (typeof lst[idx] === "object" && lst[idx] !== null) {
      count = count + totalIntegers(lst[idx]);
    }
  }
  return count;
}

// Do not edit below this line
module.exports = totalIntegers;
