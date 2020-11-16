/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {

  this.getNum = function(input) {
    let firstLetter = input.match(/[a-z]/);
    let index = input.indexOf(firstLetter);
    let value = input.slice(0, index);
    console.log(typeof number);
    function parseFraction(val){
      return Function('"use strict";return (' + val + ')')();
    }
    console.log(parseFraction(value));
    return parseFraction(value);
  };

  this.getUnit = function(input) {
    let firstLetter = input.match(/[a-z]/);
    let index = input.indexOf(firstLetter);
    let unit = input.slice(index);
    return unit;
  };

  this.getReturnUnit = function(initUnit) {
    let returnUnit;
    switch (initUnit) {
      case 'gal':
        returnUnit = 'L';
        break;
      case 'L':
        returnUnit = 'gal';
        break;
      case 'lbs':
        returnUnit = 'kg';
        break;
      case 'kg':
        returnUnit = 'lbs';
        break;
      case 'mi':
        returnUnit = 'km';
        break;
      case 'km':
        returnUnit = 'mi';
        break;
    }
    return returnUnit;
  };

  this.spellOutUnit = function(unit) {
    var result;

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case 'gal':
        result = initNum*galToL;
        break;
      case 'L':
        result = initNum/galToL;
        break;
      case 'lbs':
        result = initNum*lbsToKg;
        break;
      case 'kg':
        result = initNum/lbsToKg;
        break;
      case 'mi':
        result = initNum*miToKm;
        break;
      case 'km':
        result = initNum/miToKm;
        break;
    }
    console.log(typeof result, result);
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };

}

module.exports = ConvertHandler;
