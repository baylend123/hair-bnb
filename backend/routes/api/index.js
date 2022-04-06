const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User, Tag } = require('../../models');
const { requireAuth } = require('../../utils/auth.js');
const sessionRouter = require('./session.js');


router.use('/session', sessionRouter);
router.post('/test', function (req, res) {
  res.json({ requestBody: req.body });
});

router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
    where: {
      email: 'bm@email.com'
    },
  })
  setTokenCookie(res, user);
  return res.json({ user });
}));

router.get('/query-sandbox', asyncHandler(async (req, res) => {
  const tag = await Tag.findByPk(1)
  console.log(tag)
  res.json({ tag })
}))




module.exports = router;