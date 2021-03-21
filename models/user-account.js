var mongoose = require('mongoose')

const UserAccountSchema = new mongoose.Schema({
    Id: String,
    userName: String,
    deviceId: String,
    email: String,
    source: String,
    target: String,
    externalUserId: String,
    dateAdded: String,
    dateDeleted: String,
    dateModified: String,
    login: String,
    externalUserToken: String,
    validUntil: String,
    accessLevel: String,
    subscription: String,
    lastLogon: String,
    logonCount: Number
})

const UserAccount = mongoose.model('UserAccount', UserAccountSchema)

module.exports = UserAccount;