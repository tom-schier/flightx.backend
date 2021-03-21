var mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema({
    name: String,
    locId: Number,
    latitude: Number,
    longitude: Number,
    code: String,
    locName: String,
    locCategoryId: Number,
    locCountryCode: String,
    elevation: Number,
    locSource: String,
    locAddress: String,
    locContact: String,
    locState: String
    // number: locType,
    // number: latitude,
    // number: longitude,
    // string: code,
    // string: locName,
    // number: locCategoryId,
    // string: locCountryCode,
    // number: elevation,
    // string: locSource,
    // string: locAddress,
    // string: locContact,
    // string: locState
})

const Location = mongoose.model('Location', LocationSchema)

module.exports = Location;