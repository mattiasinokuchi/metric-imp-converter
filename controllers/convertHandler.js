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
    let numbers = input.slice(0, index);
    function parseFraction(num) {
      return Function('"use strict";return (' + num + ')')();
    }
    return parseFraction(numbers);
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
        returnUnit = 'liters';
        break;
      case 'L':
        returnUnit = 'gallons';
        break;
      case 'lbs':
        returnUnit = 'kilograms';
        break;
      case 'kg':
        returnUnit = 'pounds';
        break;
      case 'mi':
        returnUnit = 'kilometers';
        break;
      case 'km':
        returnUnit = 'miles';
        break;
    }
    return returnUnit;
  };

  this.spellUnit = function(initUnit) {
    let spellOutUnit;
    switch (initUnit) {
      case 'L':
        spellOutUnit = 'liters';
        break;
      case 'gal':
        spellOutUnit = 'gallons';
        break;
      case 'kg':
        spellOutUnit = 'kilograms';
        break;
      case 'lbs':
        spellOutUnit = 'pounds';
        break;
      case 'km':
        spellOutUnit = 'kilometers';
        break;
      case 'mi':
        spellOutUnit = 'miles';
        break;
    }
    return spellOutUnit;
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
    return Math.round(result*100000)/100000;
  };

  this.getString = function(initNum, spelledUnit, returnNum, returnUnit) {
    let string = initNum + ' ' + spelledUnit + ' converts to ' + returnNum + ' ' + returnUnit;
    return string;
  };

}

module.exports = ConvertHandler;
