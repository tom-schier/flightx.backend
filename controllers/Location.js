'use strict';

var utils = require('../utils/writer.js');
var Location = require('../service/LocationService');
var loc = require('../models/location')

module.exports.apiLocationsAirportByLocIDGET = function apiLocationsAirportByLocIDGET (req, res, next, locationID) {
  Location.apiLocationsAirportByLocIDGET(locationID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLocationsCodeCodeGET = function apiLocationsCodeCodeGET (req, res, next, code) {
  Location.apiLocationsCodeCodeGET(code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLocationsCountLocTypeFilterGET = function apiLocationsCountLocTypeFilterGET (req, res, next, locType, filter, latUpper, latLower, lngUpper, lngLower) {
  Location.apiLocationsCountLocTypeFilterGET(locType, filter, latUpper, latLower, lngUpper, lngLower)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLocationsDescLocTypeDescrNumFilterGET = function apiLocationsDescLocTypeDescrNumFilterGET (req, res, next, locType, descr, num, filter) {
  Location.apiLocationsDescLocTypeDescrNumFilterGET(locType, descr, num, filter)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLocationsFindAirfieldsGET = function apiLocationsFindAirfieldsGET (req, res, next, latUpper, latLower, lngUpper, lngLower, numRecords) {
  Location.apiLocationsFindAirfieldsGET(latUpper, latLower, lngUpper, lngLower, numRecords)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLocationsFindLocationsGET = function apiLocationsFindLocationsGET (req, res, next, st, numRecords, locType) {
  Location.apiLocationsFindLocationsGET(st, numRecords, locType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLocationsFindWaypointsGET = function apiLocationsFindWaypointsGET (req, res, next, latUpper, latLower, lngUpper, lngLower, numRecords) {
  Location.apiLocationsFindWaypointsGET(latUpper, latLower, lngUpper, lngLower, numRecords)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLocationsIdGET = function apiLocationsIdGET (req, res, next, id) {
  Location.apiLocationsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLocationsLocByIDGET = function apiLocationsLocByIDGET (req, res, next, id) {
  Location.apiLocationsLocByIDGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLocationsLocationCountGET = function apiLocationsLocationCountGET (req, res, next, latUpper, latLower, lngUpper, lngLower, locType) {
  Location.apiLocationsLocationCountGET(latUpper, latLower, lngUpper, lngLower, locType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLocationsLocidLocTypeIdGET = function apiLocationsLocidLocTypeIdGET (req, res, next, locType, id) {
  Location.apiLocationsLocidLocTypeIdGET(locType, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLocationsRegionLocTypeFilterGET = function apiLocationsRegionLocTypeFilterGET (req, res, next, locType, filter, latUpper, latLower, lngUpper, lngLower) {
  Location.apiLocationsRegionLocTypeFilterGET(locType, filter, latUpper, latLower, lngUpper, lngLower)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiLocationsTestGET = function apiLocationsTestGET (req, res, next) {
  Location.apiLocationsTestGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
