module.exports = function() {
  if (true) {
    return 1 + 1
  }

  return [
    1,
    2,
    3,
    4
  ].reduce(function(sum, i) {
    return sum + i;
  }, 0);
};