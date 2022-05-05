const express = require('express');
const asyncHandler = require('express-async-handler');
const { singlePublicFileUpload } = require('../../awsS3')
const router = express.Router();

router.post('', asyncHandler(async (req, res) => {
    const profilePhoto = await singlePublicFileUpload(req.files.profilePhoto);
    console.log(profilePhoto)
    if(profilePhoto){
        console.log("sucess")
        return res.json({profilePhoto})
    }
}))

module.exports = router