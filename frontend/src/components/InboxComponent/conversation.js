import React, {useEffect} from "react";
import { useSelector } from "react-redux";

export default function ConversationComponent({messages}) {
    
    return (
        <>
        {messages && Object.keys(messages)?.map(id => {
            return (
                <div>
                    {messages[id].stylistId}
                </div>
            )
        })}
        </>
    )
}