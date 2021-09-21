const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : String,
    password : String,
    role : String,
})

module.exports = mongoose.model('User', userSchema)