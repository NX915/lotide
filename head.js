const head = function(array) {
  if (typeof array === "object") {
    return array[0];
  } else {
    return array;
  }
};

module.exports = head;