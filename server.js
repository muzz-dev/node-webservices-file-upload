const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser');

const UserRouter = require('./router/UserRouter')
app.use(express.urlencoded({ extended: true }))

app.use("/profile", express.static("upload/images"))

app.use('/user', UserRouter)

app.listen(4000)