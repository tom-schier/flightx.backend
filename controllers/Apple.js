'use strict';

var utils = require('../utils/writer.js');
var Apple = require('../service/AppleService');

module.exports.apiAppleValidateReceiptDataPOST = function apiAppleValidateReceiptDataPOST (req, res, next, body) {
  Apple.apiAppleValidateReceiptDataPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
