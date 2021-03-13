'use strict';


/**
 *
 * locationID Integer  (optional)
 * returns Location
 **/
exports.apiLocationsAirportByLocIDGET = function(locationID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * code String 
 * returns List
 **/
exports.apiLocationsCodeCodeGET = function(code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
}, {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
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
 * locType Integer 
 * filter Integer 
 * latUpper Double  (optional)
 * latLower Double  (optional)
 * lngUpper Double  (optional)
 * lngLower Double  (optional)
 * returns Long
 **/
exports.apiLocationsCountLocTypeFilterGET = function(locType,filter,latUpper,latLower,lngUpper,lngLower) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * locType Integer 
 * descr String 
 * num Integer 
 * filter Integer 
 * returns List
 **/
exports.apiLocationsDescLocTypeDescrNumFilterGET = function(locType,descr,num,filter) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
}, {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
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
 * latUpper Double  (optional)
 * latLower Double  (optional)
 * lngUpper Double  (optional)
 * lngLower Double  (optional)
 * numRecords Integer  (optional)
 * returns List
 **/
exports.apiLocationsFindAirfieldsGET = function(latUpper,latLower,lngUpper,lngLower,numRecords) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
}, {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
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
 * st String  (optional)
 * numRecords Integer  (optional)
 * locType Integer  (optional)
 * returns List
 **/
exports.apiLocationsFindLocationsGET = function(st,numRecords,locType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
}, {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
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
 * latUpper Double  (optional)
 * latLower Double  (optional)
 * lngUpper Double  (optional)
 * lngLower Double  (optional)
 * numRecords Integer  (optional)
 * returns List
 **/
exports.apiLocationsFindWaypointsGET = function(latUpper,latLower,lngUpper,lngLower,numRecords) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
}, {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
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
 * returns Location
 **/
exports.apiLocationsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * id Integer  (optional)
 * returns Location
 **/
exports.apiLocationsLocByIDGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * latUpper Double  (optional)
 * latLower Double  (optional)
 * lngUpper Double  (optional)
 * lngLower Double  (optional)
 * locType Integer  (optional)
 * returns Long
 **/
exports.apiLocationsLocationCountGET = function(latUpper,latLower,lngUpper,lngLower,locType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * locType Integer 
 * id Integer 
 * returns List
 **/
exports.apiLocationsLocidLocTypeIdGET = function(locType,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
}, {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
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
 * locType Integer 
 * filter Integer 
 * latUpper Double  (optional)
 * latLower Double  (optional)
 * lngUpper Double  (optional)
 * lngLower Double  (optional)
 * returns List
 **/
exports.apiLocationsRegionLocTypeFilterGET = function(locType,filter,latUpper,latLower,lngUpper,lngLower) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
}, {
  "elevation" : 2,
  "code" : "code",
  "locSource" : "locSource",
  "latitude" : 1.4658129805029452,
  "locName" : "locName",
  "locContact" : "locContact",
  "locCategoryId" : 5,
  "locCountryCode" : "locCountryCode",
  "locAddress" : "locAddress",
  "Id" : "Id",
  "locState" : "locState",
  "locType" : 6,
  "locId" : 0,
  "longitude" : 5.962133916683182
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
 * returns String
 **/
exports.apiLocationsTestGET = function() {
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

