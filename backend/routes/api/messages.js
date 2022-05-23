const express = require('express');
const asyncHandler = require('express-async-handler');
const { Message } = require('../../models');
const { User } = require('../../models');
const { Op } = require("sequelize");
const { Stylist } = require('../../models')
const WebSocket = require('ws')
const router = express.Router();
const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
        console.log('data', data);
      }
    });
  });
});

router.get('/conversations/:id', asyncHandler(async (req, res) => {
  const { id } = req.params
  let conversationIds = new Set()
  let messages = await Message.findAll({
    include : User,
    where: {
      recipientId : id ,
    },
  })
  messages = messages.filter(el => {
    let sender = el.dataValues.senderId
    let recipient = el.dataValues.recipientId
    let conversationArr = [sender, recipient]
    if(!conversationIds.has(conversationArr.join(''))){
      console.log(el.dataValues.senderId, el.dataValues.recipientId)
      conversationIds.add(conversationArr.join(''))
      return el
    }
  })
  console.log('here')
  return res.json(messages)
}))

router.get('/:recipientId/:senderId', asyncHandler(async (req, res) => {
  const {recipientId, senderId} = req.params

  const messages = await Message.findAll({
    where: {
      [Op.or]: [
        { senderId: senderId },
        { senderId: recipientId }
      ]
    }
  })
  // console.log(messages)
  res.json(messages)
}))
router.post('', asyncHandler(async (req, res) => {
  // const { id } = req.params
  let {recipientId, senderId, message} = req.body
  const newMessage = await Message.create({
    recipientId : recipientId,
    senderId : senderId,
    message : message
  })
  return res.json(newMessage)
}))


module.exports = router