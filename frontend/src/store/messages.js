import { csrfFetch } from "./csrf";

const GET_MESSAGES = 'messages/load'
const ADD_MESSAGE = 'messages/add'

const loadMessages = (messages) => {
    return {
        type : GET_MESSAGES,
        payload : messages
    }
}
const addMessage = message => {
    return {
        type: ADD_MESSAGE,
        payload : message
    }
}

export const getMessagesThunk = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/messages/${id}`)
    let messages = await response.json()
    console.log(messages)
    dispatch(loadMessages(messages))
}
export const sendMessageThunk = (stylistId, userId, message,) => async (dispatch) => {
    const response = await csrfFetch(`/api/messages/${stylistId}`, {
        method : "POST", 
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({message, userId})

    })
    if(response.ok){
        let message = await response.json()
        dispatch(addMessage(message))
    }
}

const messageReducer = (state = {}, action) => {
    switch(action.type){
        case GET_MESSAGES:
            let conversations = {}
            Object.keys(action.payload).forEach(el => {
                let message = action.payload[el]
                if(conversations[message.stylistId] ) conversations[message.stylistId].push(message)
                else conversations[message.stylistId] = [message]
            })
            return{...state, ...conversations}
        
        default:
            return state
    }
}

export default messageReducer