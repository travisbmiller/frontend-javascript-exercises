module.exports.copy = function(object){
 var result = {};
 
 result = JSON.parse(JSON.stringify(object));
 
 return result;

};

module.exports.extend = function(dest,src){
  var key;

  for(key in src){
    dest[key] = src[key]; 
  }

  return dest;

};

module.exports.hasElems = function(obj,arr){
  var newArr = [],
      ret = true;
  
  if(arr.length > 1){
    
    for(i=0; i < arr.length; i++){
      
      if(obj[arr[i]] === undefined){
       
       ret = false;
      
      }
    
    } 
  
  };

  return ret;

};