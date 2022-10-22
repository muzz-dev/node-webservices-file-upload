const router = require("express").Router()
const User = require('../model/User')
const multer = require('multer')

const path = require('path')

//storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

router.get("/",(req,res)=>{
    User.find((err,users)=>{
        res.send(users)
    })
})

router.post("/", upload.single('profileUrl'), (req, res) => {

    var user = new User({
        name: req.body.name,
        phone: req.body.phone,
        password: req.body.password,
        profileUrl: `http://localhost:4000/profile/${req.file.filename}`
    })

    user.save((err, user) => {
        res.send(user)
        console.log(user)
    })
})

module.exports = router;