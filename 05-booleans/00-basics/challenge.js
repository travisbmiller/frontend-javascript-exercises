module.exports.equalStrings = function(stringOne, stringTwo) {
  if (stringOne === stringTwo) {
    return true;
  } else {
    return false;
  }
};

module.exports.notEqual = function(one, two) {
  if(one !== two) {
    return true ;
  } else {
    return false;
  }
};

module.exports.inBetween = function(lower, middle, upper) {
  if ( middle > lower && middle < upper) {
    return true;
  } else {
    return false;
  }
};

module.exports.outsideRanges = function(number) {
  var rangeOne = [];
  var rangeTwo = [];
  var rangeThree = [];

  for (var setOne = 2; setOne <= 5; setOne++) {
    rangeOne.push(setOne);
  }

  for ( var setTwo = 10; setTwo <= 20; setTwo++) {
    rangeTwo.push(setTwo);
  }

  for (var setThree = 43; setThree <= 75; setThree++) {
    rangeThree.push(setThree);
  }

  if(rangeOne.indexOf(number) === -1 && rangeTwo.indexOf(number) === -1 && rangeThree.indexOf(number) === -1) {
    return true;
  } else {
    return false;
  }
};

module.exports.nameAndPrice = function(name, price) {
  if (name !== "NYTimes" && name !== "LATimes") {
    return false;
  } else if (price >= 1) {
    return true;
  } else {
    return false
  }
};