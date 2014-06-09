module.exports.stream = function(conditionalFn,actionFn){
  while (conditionalFn() === true ) {
    actionFn();
  }
  
};

module.exports.sumNumbers = function(arr){
  var count = arr.length,
      sum = 0,
      ret;

  while(count > 0){
    sum = arr.shift() + sum;
    count--;
  }
  return sum;

};

