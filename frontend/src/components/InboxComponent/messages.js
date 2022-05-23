import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessagesThunk, sendMessageThunk } from "../../store/messages";
import './Inbox.css'


export default function Messages({ conversation }) {
  const [newMessage, setNewMessage] = useState('')
  const [_, messageSent] = useState(false)
  const dispatch = useDispatch()
  const URL = 'ws://127.0.0.1:8080';
  const [ws, setWs] = useState(new WebSocket(URL));
  const messages = useSelector(state => state?.messages)
  const user = useSelector(state => state?.session.user)
  useEffect(() => {
    dispatch(getMessagesThunk(...conversation))
  }, [messageSent])
  useEffect(() => {
    ws.onopen = () => {
      console.log('WebSocket Connected');
    }

    ws.onmessage = async (e) => {
      let res = await e.data.text()
      res = await JSON.parse(res)
      console.log(res.user, user?.id)
      if(res.user.includes(user?.id)){
        let messageObj = {
          recipientId : user?.id,
          senderId : res.user[0] !== user?.id ? res.user[0] : res.user[1],
          message : res.message 
        }
        return dispatch(sendMessageThunk(messageObj))
      }
    }

    return () => {
      ws.onclose = () => {
        console.log('WebSocket Disconnected');
        setWs(new WebSocket(URL));
      }
    }
  }, [ws.onmessage, ws.onopen, ws.onclose])

  const submitMessage = async (usr, msg) => {
    const message = { user: usr, message: msg };
    ws.send(JSON.stringify(message));
  }
  if (!messages) return (
    <div>Choose a message Thread from the right</div>
  )
  return (
    <div>
      {Object.keys(messages)?.map(el => {
        return (
          <div className={messages[el].senderId === user?.id ? 'message-wrapper-sender' : 'message-wrapper-recipient'}>
            <div className={messages[el].senderId === user?.id ? 'message-div-recipient' : 'message-div-sender'}>{messages[el].message}</div>
          </div>
        )
      })}
      <form
      onSubmit={(e) => {
        e.preventDefault()
        submitMessage(conversation, newMessage)
      }}>
      <input onChange={(e) => setNewMessage(e.target.value)} type='text' />
      <button 
      type="submit"
      >Send</button>
      </form>
    </div>
  )
}