const express = require('express');
const asyncHandler = require('express-async-handler');
const { Stylist } = require('../../models');

const router = express.Router();

//GET list of stylists from search params
router.get('/:city/:state', asyncHandler( async (req, res) => {
  const { city, state } = req.params;
  console.log(city, state, "+++++++++++++")
  const stylists = await Stylist.findAll({
    where: {
      city, state,
    }
  });
  res.json(stylists);
}));


module.exports = router;
