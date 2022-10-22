const mongoose = require('../config/db')
var UserSchema = mongoose.Schema({
    name: String,
    phone: Number,
    password: String,
    profileUrl: String
})

var User = mongoose.model('User',UserSchema,'users')
module.exports = User