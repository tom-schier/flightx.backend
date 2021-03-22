var express = require('express')
var router = express.Router();
var userController = require('../controllers/UserAccounts');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next();
})

router.get('/', userController.apiUserAccountsGET);

router.get('/:id', function(req, res) {
   userController.apiUserAccountsIdGET(req, res, null, req.params.id);
});
// define the about route
router.get('/about', function (req, res) {
  res.send('About USERS')
})

module.exports = router