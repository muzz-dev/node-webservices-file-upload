const express = require('express')
const app = express()
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

app.use("/profile", express.static("upload/images"))

app.post("/upload",upload.single('profile'),(req,res)=>{

    //return url of image
    res.json({
        profile_url:`http://localhost:4000/profile/${req.file.filename}`
    })
    console.log(req.file)
    console.log(req.body.name)
    console.log(req.body.phone)
})

app.listen(4000)