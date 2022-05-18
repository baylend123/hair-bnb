const express = require('express');
const asyncHandler = require('express-async-handler');
const { Message } = require('../../models');
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

router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params
  const messages = await Message.findAll({
    where: {
      userId: id
    },
    order:["createdAt"]
  });
  let response = {}
   await Object.keys(messages).forEach(async el => {
    let stylistId = messages[el].dataValues.stylistId
    let stylist = await Stylist.findByPk(stylistId)
    if(response[stylistId]){
      response[stylistId].messages.push(messages[el].dataValues.message)
    }else{
      response[stylistId]= {}
      response[stylistId].stylist = stylist
      response[stylistId].messages = [messages[el].dataValues.message]
    }
  })
  console.log(response)
  return res.json(response)
}))
router.post('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params
  let {message, userId} = req.body
  const newMessage = await Message.create({
    stylistId : id,
    userId : userId,
    message : message
  })
  return res.json(newMessage)
}))


module.exports = router