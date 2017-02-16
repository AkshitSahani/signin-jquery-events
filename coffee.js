var parseNumbers = function(intStrs) {
  var a = []
  for (var i=0; i < intStrs.length; i++){
     a.push(parseInt(intStrs[i]))};
     return a;
  };

console.log(parseNumbers(['10']));
console.log(parseNumbers(['-1', '0', '1']));
