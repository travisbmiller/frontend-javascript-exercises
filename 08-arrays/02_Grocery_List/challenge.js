module.exports.addItem = function(addItem,array){
  if(array.length - 1 !== addItem){
    array.push(addItem);
  }
  return array;
};

module.exports.reverseSortedList = function(array){
  return array.sort().reverse();
};