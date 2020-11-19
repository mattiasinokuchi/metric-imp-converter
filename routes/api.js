/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  var convertHandler = new ConvertHandler();

  app.route('/api/convert').get(function (req, res) {
    let input = req.query.input;
    console.log('input: ', input);
    let initNum = convertHandler.getNum(input);
    console.log('initNum: ', initNum);
    let initUnit = convertHandler.getUnit(input);
    console.log('initUnit: ', initUnit);
    let returnNum = convertHandler.convert(initNum, initUnit);
    console.log('returnNum: ', returnNum);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    console.log('returnUnit: ', returnUnit);
    let spelledInitUnit = convertHandler.spellUnit(initUnit);
    console.log('spelledInitUnit: ', spelledInitUnit);
    let spelledReturnUnit = convertHandler.spellUnit(returnUnit);
    console.log('spelledReturnUnit: ', spelledReturnUnit);
    let toString = convertHandler.getString(initNum, spelledInitUnit, returnNum, spelledReturnUnit);
    if(!returnUnit) {
      res.send("invalid unit");
    } else if(initNum == "invalid number") {
      res.send("invalid number");
    } else {
      res.json({
        "initNum": initNum,
        "initUnit": initUnit,
        "returnNum": returnNum,
        "returnUnit": returnUnit,
        "string": toString
      });
    }
  });
}
