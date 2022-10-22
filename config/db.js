const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/shopping_db")
var db = mongoose.connection
db.on('error', (e) => {
    console.log(e)
})
module.exports = mongoose