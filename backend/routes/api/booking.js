const express = require('express');
const asyncHandler = require('express-async-handler');
const { Booking } = require('../../models');

const router = express.Router();

//GET// http://localhost:5000/api/bookings
router.get('/stylist/:stylistId', asyncHandler( async (req, res) => {
    const { stylistId } = req.params;
    const bookings = await Booking.findAll({
        where: {
            stylistId,
        }
    });
    res.json(bookings);
}));

router.get('/:id(\\d+)', asyncHandler( async (req, res) =>{
    const id = Number(req.params.id);
    const event = await Event.findOne({
        where: { id },
        include: {all: true}
    });
    res.json(event);
}))
//may need to revisit this route
//POST// http://localhost:5000/api/events
router.post('/', asyncHandler( async (req, res) => {
    const {name, details, imageUrl, city, state, address, userId, groupId} = req.body;
    const event = await Event.create({name, details, imageUrl, city, state, address, userId, groupId});
    return res.json(event);
}))

router.get('/', asyncHandler( async (req, res) => {
    // const {name, details, img, city, state, address, userId, groupId} = req.body;
    // const event = await Event.create({name, details, img, city, state, address, userId, groupId});
    return res.json('test');
}))


module.exports = router;
