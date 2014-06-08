module.exports.getKeys = function(object){
  var ret = [];
  for(val in object){
    ret.push(val)
  }
  return ret;
};

module.exports.getValues = function(object){
  var ret = [];
  for(val in object){
    ret.push(object[val]);
  }
  return ret;
};

module.exports.objectToArray = function(object){
  var ret = [];
  for(val in object){
    ret.push(val + " is " + object[val]);
  }
  return ret;
};