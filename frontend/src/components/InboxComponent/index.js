import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "../NavBarComponent";
import { getMessagesThunk } from "../../store/messages";
import ConversationComponent from "./conversation";
import './Inbox.css'

export default function InboxComponent(){
    const user = useSelector(state => state?.session?.user);
    const messages = useSelector(state => state?.messages)
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        dispatch(getMessagesThunk(user?.id))
        setLoaded(true)
    }, [])
    console.log(user)
    return (
        <>
        <NavBar />
        <div className="inbox-main">
            <div className="inbox-left">
                <div className="inbox-left-header">
                    {user && user?.firstName} {user?.lastName}
                </div>
                <div className="inbox-left-threads">
                    {loaded && <ConversationComponent messages={messages} />}
                </div>
            </div>
            <div className="inbox-right"></div>

        </div>
        </>
    )
}