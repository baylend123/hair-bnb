import React, {useEffect, useState, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "../NavBarComponent";
import { getMessagesThunk, sendMessageThunk } from "../../store/messages";
import ConversationComponent from "./conversation";
import './Inbox.css'
export default function Messages({messageArr}){
    const URL = 'ws://127.0.0.1:8080';
    const [newMessage, setNewMessage] = useState([]);
    const [messages, setMessages] = useState([]);
    const [ws, setWs] = useState(new WebSocket(URL));
    const user = useSelector(state => state?.session?.user);
    useEffect(() => {
        ws.onopen = () => {
          console.log('WebSocket Connected');
        }
    
        ws.onmessage = async (e) => {
        let res = await e.data.text()
        res = await JSON.parse(res)
        setMessages([...messages, res.message])
        console.log(messages)
        }
    
        return () => {
          ws.onclose = () => {
            console.log('WebSocket Disconnected');
            setWs(new WebSocket(URL));
          }
        }
      }, [ws.onmessage, ws.onopen, ws.onclose])
    
    const submitMessage = (usr, msg) => {
        const message = { user: usr.id, message: msg };
        ws.send(JSON.stringify(message));
        
    }
    if(!messageArr) return (
        <div>Choose a message Thread from the right</div>
    )
    return(
        <>
        {messageArr.map(el => {
            return (
                <div className="message-div-recipient">{el.message}</div>
            )
        })}
        </>
    )
}