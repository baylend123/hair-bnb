import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import Messages from "./messages";

export default function ConversationComponent({stylistIdArr, setMessageThread}) {
    return (
        <>
        {stylistIdArr && stylistIdArr?.map(id => {
            return <div
                onClick={() => setMessageThread(id)}
            >{id}</div>
        })}
        </>
    )
}