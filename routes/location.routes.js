var express = require('express')
var router = express.Router();
var locationController = require('../controllers/Location');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('LOCATION home page');
})
// define the about route
router.get('/:id', function(req, res) {
  locationController.apiLocationsIdGET(req, res, null, req.params.id);
});

module.exports = router