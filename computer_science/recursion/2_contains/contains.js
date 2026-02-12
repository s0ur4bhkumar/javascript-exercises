const contains = function (obj, val) {
  const values = Object.values(obj);

  if (values.includes(val)) return true;

  const nestedObjects = values.filter(
    (nestedObj) => typeof nestedObj === "object" && nestedObj !== null,
  );

  return nestedObjects.some((nestedObj) => contains(nestedObj, val));
};

// Do not edit below this line
module.exports = contains;
