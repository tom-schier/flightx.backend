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
})

const Location = mongoose.model('Location', LocationSchema)

module.exports = Location;