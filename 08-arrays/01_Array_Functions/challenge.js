module.exports.reversePlusOne = function(array){
  array.reverse();
  array.unshift(1);
  return array;
};

module.exports.plusesEverywhere = function(array){
  var newString = "";
  for(var i = 0; i < array.length; i++){
    if(newString.length === 0){
      newString = newString + array[i];
    } else {
      newString = newString + "+" + array[i];
    }
  }
  return newString;
};

module.exports.arrayQuantityPlusOne = function(array){
  return array.length + 1;
};