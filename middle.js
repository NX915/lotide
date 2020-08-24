const middle = function(arr) {
  let mid = [], index = Math.floor(arr.length / 2);
  if (arr.length < 3) {
    return mid;
  }
  mid = [arr[index]];
  if (arr.length % 2 !== 0) {
    return mid;
  } else {
    mid.unshift(arr[index - 1]);
    return mid;
  }

};
module.exports = middle;