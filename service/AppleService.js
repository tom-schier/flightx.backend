'use strict';


/**
 *
 * body Receipt  (optional)
 * returns String
 **/
exports.apiAppleValidateReceiptDataPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

