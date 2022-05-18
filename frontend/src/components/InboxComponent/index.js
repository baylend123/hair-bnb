import React, {useEffect, useState, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "../NavBarComponent";
import { getMessagesThunk, sendMessageThunk } from "../../store/messages";
import ConversationComponent from "./conversation";
import Messages from "./messages";
import './Inbox.css'

export default function InboxComponent(){
    const user = useSelector(state => state?.session?.user);
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getMessagesThunk(user?.id))
    })
    return (
        <>
        <NavBar />
        <div className="inbox-main">
            <div className="inbox-left">
                <div className="inbox-left-header">
                    {user && user?.firstName} {user?.lastName}
                </div>
                <div className="inbox-left-threads">
                   
                </div>
            </div>
            <div className="inbox-right">
            </div>

        </div>
        </>
    )
}