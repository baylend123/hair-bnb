const express = require('express');
const asyncHandler = require('express-async-handler');
const { Messages } = require('../../models');

const router = express.Router();

router.get('/:id', asyncHandler((req, res) => {
    console.log(req.params)
    const {id} = req.params
    console.log("Get the ID ", id)
}))


module.exports = router