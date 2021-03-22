'use strict';

var utils = require('../utils/writer.js');
var UserAccounts = require('../service/UserAccountsService');

module.exports.apiUserAccountsGET = function apiUserAccountsGET (req, res, next) {
  UserAccounts.apiUserAccountsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    }, error => {
      let resp = utils.respondWithCode(400, error);
      utils.writeJson(res, resp, 400);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserAccountsIdDELETE = function apiUserAccountsIdDELETE (req, res, next, id) {
  UserAccounts.apiUserAccountsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserAccountsIdGET = function apiUserAccountsIdGET (req, res, next, id) {
  UserAccounts.apiUserAccountsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserAccountsIdPUT = function apiUserAccountsIdPUT (req, res, next, body, id) {
  UserAccounts.apiUserAccountsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserAccountsPOST = function apiUserAccountsPOST (req, res, next, body) {
  UserAccounts.apiUserAccountsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
