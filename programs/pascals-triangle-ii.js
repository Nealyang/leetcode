var generate = function(numRows) {
  if (!numRows) return [1];
  var pre, tmp;

  for (var i = 0; i < numRows + 1; ++i) {
    if (!pre) {
      tmp = [];
    } else {
      tmp = [1];
      for (var j = 1, l = pre.length; j < l; ++j) {
        tmp.push(pre[j - 1] + pre[j]);
      }
    }
    tmp.push(1);
    pre = tmp;
  }

  return pre;
};

console.log(generate(0));