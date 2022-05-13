const express = require('express');
const asyncHandler = require('express-async-handler');
const { Booking } = require('../../models');

const router = express.Router();

//GET// http://localhost:5000/api/bookings
router.get('/stylist/:stylistId', asyncHandler( async (req, res) => {
    const { stylistId } = req.params;
    console.log("We made it here!!!", stylistId)
    const bookings = await Booking.findAll({
        where: {
            stylistId,
        }
    });
    res.json(bookings);
}));

router.get('/user/:userId', asyncHandler( async (req, res) => {
    const { userId } = req.params;
    console.log("We made it here!!!", userId)
    const bookings = await Booking.findAll({
        where: {
            userId,
        }
    });
    res.json(bookings);
}));

// router.get('/:id(\\d+)', asyncHandler( async (req, res) =>{
//     const id = Number(req.params.id);
//     const event = await Event.findOne({
//         where: { id },
//         include: {all: true}
//     });
//     res.json(event);
// }))

router.post('/new', asyncHandler( async (req, res) => {
    const {date, time, userName, stylistName, stylistId, userId} = req.body;
    const booking = await Booking.create({date, time, userName, stylistName, stylistId, userId});
    return res.json(booking);
}));

router.get('/', asyncHandler( async (req, res) => {
    // const {name, details, img, city, state, address, userId, groupId} = req.body;
    // const event = await Event.create({name, details, img, city, state, address, userId, groupId});
    return res.json('test');
}))


module.exports = router;
