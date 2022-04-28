const express = require('express');
const asyncHandler = require('express-async-handler');
const { Stylist } = require('../../models');

const router = express.Router();

//GET list of stylists by input location
router.get('/', asyncHandler( async (req, res) => {
  const { city, state } = req.body;
  console.log(city, state, "+++++++++++++")
  const stylists = await Stylist.findAll({
    where: {
      city, state,
    }
  });
  res.json(stylists);
}));


module.exports = router;
