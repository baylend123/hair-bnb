const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { singlePublicFileUpload } = require('../../awsS3')
const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

router.post(
  '',
  // validateSignup,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, email, bio, currentHairStyle, password, city, state } = req.body;
    console.log(req)
    const profileImageUrl = await singlePublicFileUpload(req.files);
    console.log(profileImageUrl)
    // const user = await User.signup({ firstName, lastName, email, bio, currentHairStyle, profilePhoto, password, city, state });

    // await setTokenCookie(res, user);

    // return res.json({
    //   user,
    // });
  }),
);

module.exports = router;
