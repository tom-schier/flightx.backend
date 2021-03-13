var express = require('express');

var router = express.Router();

var userController = require('../controllers/UserAccounts');


// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page')
  })
//userRouter.get('/', userController.apiUserAccountsGET);

module.exports = router;