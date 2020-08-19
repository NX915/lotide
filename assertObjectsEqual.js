const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    const objKeys = Object.keys(object1);
    for (let i = 0; i < objKeys.length; i++) {
      if (Array.isArray(object1[objKeys[i]])) {
        if (!eqArrays(object1[objKeys[i]], object2[objKeys[i]])) {
          return false;
        }
      } else if (object1[objKeys[i]] !== object2[objKeys[i]]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);


