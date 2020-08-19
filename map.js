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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(arr, func) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(func(arr[i]));
  }
  return output;
};

assertArraysEqual(map(words, ele => ele[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, ele => ele.length), [6, 7, 2, 5, 3]);