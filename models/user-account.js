var mongoose = require('mongoose')

const UserAccountSchema = new mongoose.Schema({
    string: Id,
    string: userName,
    string: deviceId,
    string: email,
    string: source,
    string: target,
    string: externalUserId,
    string: dateAdded,
    string: dateDeleted,
    string: dateModified,
    string: login,
    string: externalUserToken,
    string: validUntil,
    string: accessLevel,
    string: sunscription,
    string: lastLogon,
    number: logonCount
})

const UserAccount = mongoose.model('UserAccount', UserAccountSchema)

module.exports = UserAccount;