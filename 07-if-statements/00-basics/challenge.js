module.exports.favoriteNumber = function(favNum,guessNum){
  if(guessNum > favNum){
    return "Too high"
  } else if (guessNum < favNum){
    return "Too low"
  } else if (guessNum === favNum)
    return "You got it!"
};

module.exports.checkLock = function(numOne,numTwo,numThree,numFour){
  var range = []
  for(var i = 5; i <= 100; i++){
    range.push(i);
  }

  if( [3,5,7].indexOf(numOne) > -1 && numTwo === 2 && range.indexOf(numThree) > -1 && numFour <= 8 || numFour >= 21 ){
    return "correct";
  } else {
    return "incorrect";
  }
};

module.exports.canIGet = function(item,money){
  if(item === "MacBook Air" && money >= 999){
    return true;
  } else if (item === "MacBook Pro" && money >= 1299){
    return true;
  } else if (item === "Mac Pro" && money >= 2499){
    return true;
  } else if (item =="Apple Sticker" && money >= 1){
    return true;
  } else {
    return false;
  }
};