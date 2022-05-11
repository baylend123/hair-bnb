const express = require('express');
const asyncHandler = require('express-async-handler');
const { Message } = require('../../models');
const {Stylist} = require('../../models')

const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    console.log(req.params)
    const {id} = req.params
    const messages = await Message.findAll({
        where: {
          userId : id
        }
      });
    Object.keys(messages).forEach(async id => {
      let stylistId = messages[id].stylistId
      console.log(stylistId)
      const profilePic = await Stylist.findByPk(stylistId)
      console.log(profilePic, "------")
    })
      return res.json(messages)
}))


module.exports = router