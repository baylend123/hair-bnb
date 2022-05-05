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

//GET a single stylist by ID
router.get('/stylist/:id(\\d+)', asyncHandler( async (req, res) =>{
  const id = Number(req.params.id);
  const stylist = await Event.findOne({
      where: { id },
      include: {all: true}
  });
  res.json(stylist);
}))

module.exports = router;
