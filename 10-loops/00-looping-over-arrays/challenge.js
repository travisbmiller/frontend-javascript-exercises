module.exports.sumNumbers = function(array){
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    sum = sum + array[i];
  }
  return sum;
};

module.exports.splitAndLowerCaseString = function(string){
  var newArray = string.toLowerCase().split(",");
  return newArray;
};

module.exports.addIndex = function(array){
  var ret = [];
  for(var i = 0; i < array.length; i++){
    ret.push(i + " is " + array[i]);
  }
  return ret;
};
