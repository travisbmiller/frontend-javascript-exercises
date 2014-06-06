module.exports.newArray = function(num1,num2,num3,num4){
  var numbers = [];
  numbers.push(num1);
  numbers.push(num2);
  numbers.push(num3);
  numbers.push(num4);
  return numbers;
};

module.exports.firstAndLast = function(array){
  var newArray = []
  newArray.push(array.shift());
  newArray.push(array.pop())
  return newArray;

};