var reverseBits = function(n) {
  var tmp = '';
  for (var i = 0; i < 32; ++i) {
    if (n & 1)
      tmp += '1';
    else
      tmp += '0';
    n = n >> 1;
  }
  return parseInt(tmp, 2);
};


console.log(reverseBits(43261596));
console.log(reverseBits(4294967295));