'use strict';

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */
//const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 1000,
  serverSelectionTimeoutMS: 1000,
  socketTimeoutMS: 1000 });


exports.apiUserAccountsGET = function () {
  return new Promise((resolve, reject) =>
      client.connect((error, database) => {
        if (database != null){
          var flightx = database.db("flightx");
          flightx.collection('users').find().toArray().then(users => {
            resolve(users);
          })
        } else {
            reject(error)
        }
      })    
  );
};

/**
 *
 * id String 
 * no response value expected for this operation
 **/
exports.apiUserAccountsIdDELETE = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 *
 * id String 
 * no response value expected for this operation
 **/
exports.apiUserAccountsIdGET = function (id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 *
 * body UserAccount  (optional)
 * id String 
 * no response value expected for this operation
 **/
exports.apiUserAccountsIdPUT = function (body, id) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 *
 * body UserAccount  (optional)
 * no response value expected for this operation
 **/
exports.apiUserAccountsPOST = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}

