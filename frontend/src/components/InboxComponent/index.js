import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "../NavBarComponent";
import { getConversationsThunk } from "../../store/conversations";
import Messages from "./messages";
import './Inbox.css'

export default function InboxComponent(){
    const [conversation, setConversation] = useState()
    const user = useSelector(state => state?.session?.user);
    const conversations = useSelector(state => state?.conversations)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getConversationsThunk(user?.id))
    }, [])
    return (
        <>
        <NavBar />
        <div className="inbox-main">
            <div className="inbox-left">
                <div className="inbox-left-header">
                    {user && user?.firstName} {user?.lastName}
                </div>
                <div className="inbox-left-threads">
                   {conversations && Object.keys(conversations).map(el => {
                       return (
                           <div
                           onClick={() => setConversation([user?.id, conversations[el].User.id])}
                            className="conversation-div">
                               <img className='conversation-img' src={conversations[el].User.profilePhoto} alt='profile'/>
                               <div className="conversation-name">{conversations[el].User.firstName + " "  + conversations[el].User.lastName}</div>
                            </div>
                       )
                   })}
                </div>
            </div>
            <div className="inbox-right">
                {conversation && <Messages conversation={conversation}/>}
            </div>

        </div>
        </>
    )
}