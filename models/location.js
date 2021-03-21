var mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema({
    name: String,
    number: locId,
    number: locType,
    number: latitude,
    number: longitude,
    string: code,
    string: locName,
    number: locCategoryId,
    string: locCountryCode,
    number: elevation,
    string: locSource,
    string: locAddress,
    string: locContact,
    string: locState
})

const Location = mongoose.model('Location', LocationSchema)

module.exports = Location;