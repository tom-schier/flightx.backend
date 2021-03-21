'use strict';
const MongoClient = require('mongodb').MongoClient  

/**
 *
 * returns List
 **/
exports.apiUserAccountsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "UserName" : "UserName",
  "Email" : "Email",
  "DateDeleted" : "2000-01-23T04:56:07.000+00:00",
  "DeviceId" : "DeviceId",
  "LastLogon" : "2000-01-23T04:56:07.000+00:00",
  "Login" : "Login",
  "Source" : "Source",
  "AccessLevel" : 0,
  "ValidUntil" : "2000-01-23T04:56:07.000+00:00",
  "Target" : "Target",
  "LogonCount" : 6,
  "ExternalUserId" : "ExternalUserId",
  "Id" : "Id",
  "ExternalUserToken" : "ExternalUserToken",
  "DateAdded" : "2000-01-23T04:56:07.000+00:00",
  "Subscription" : "Subscription",
  "DateModified" : "2000-01-23T04:56:07.000+00:00"
}, {
  "UserName" : "UserName",
  "Email" : "Email",
  "DateDeleted" : "2000-01-23T04:56:07.000+00:00",
  "DeviceId" : "DeviceId",
  "LastLogon" : "2000-01-23T04:56:07.000+00:00",
  "Login" : "Login",
  "Source" : "Source",
  "AccessLevel" : 0,
  "ValidUntil" : "2000-01-23T04:56:07.000+00:00",
  "Target" : "Target",
  "LogonCount" : 6,
  "ExternalUserId" : "ExternalUserId",
  "Id" : "Id",
  "ExternalUserToken" : "ExternalUserToken",
  "DateAdded" : "2000-01-23T04:56:07.000+00:00",
  "Subscription" : "Subscription",
  "DateModified" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * id String 
 * no response value expected for this operation
 **/
exports.apiUserAccountsIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id String 
 * no response value expected for this operation
 **/
exports.apiUserAccountsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * body UserAccount  (optional)
 * id String 
 * no response value expected for this operation
 **/
exports.apiUserAccountsIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * body UserAccount  (optional)
 * no response value expected for this operation
 **/
exports.apiUserAccountsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

