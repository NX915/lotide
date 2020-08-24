const tail = function(array) {
  let result = [];
  if (array.length <= 1) {
    return result;
  }
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
};

module.exports = tail;