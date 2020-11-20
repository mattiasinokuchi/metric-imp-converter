/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {

  this.getNum = function(input) {
    // find the first letter of any case
    let firstLetter = input.match(/[a-z]/i);
    let index = input.indexOf(firstLetter);
    // extract numericals
    let numInput;
    if(index === 0) {
      return 1;
    } else {
      numInput = input.slice(0, index);
    }
    // invalidate double fraction in input
    let fractionFound = numInput.match(/\//g);
    if (fractionFound) {
	    if(fractionFound.length>1) {
        return;
      }
    }
    // return number
    return parseFraction(numInput);
    // convert fraction to number
    function parseFraction(num) {
      return Function('"use strict";return (' + num + ')')();
    }
  };

  this.getUnit = function(input) {
    // find the first letter of any case
    let firstLetter = input.match(/[a-z]/i);
    let index = input.indexOf(firstLetter);
    let unit;
    if(index === 0) {
      unit = input;
    } else {
      unit = input.slice(index);
    }
    return unit.toLowerCase();
  };

  this.getReturnUnit = function(initUnit) {
    let returnUnit;
    switch (initUnit) {
      case 'gal':
        returnUnit = 'l';
        break;
      case 'l':
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

  this.spellUnit = function(unit) {
    let spelledOutUnit;
    switch (unit) {
      case 'l':
        spelledOutUnit = 'liters';
        break;
      case 'gal':
        spelledOutUnit = 'gallons';
        break;
      case 'kg':
        spelledOutUnit = 'kilograms';
        break;
      case 'lbs':
        spelledOutUnit = 'pounds';
        break;
      case 'km':
        spelledOutUnit = 'kilometers';
        break;
      case 'mi':
        spelledOutUnit = 'miles';
        break;
    }
    return spelledOutUnit;
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
      case 'l':
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
      default:
        return
    }
    return Math.round(result*100000)/100000;
  };

  this.getString = function(initNum, spelledInitUnit, returnNum, spelledReturnUnit) {
    let string = initNum + ' ' + spelledInitUnit + ' converts to ' + returnNum + ' ' + spelledReturnUnit;
    return string;
  }

}

module.exports = ConvertHandler;
