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


export const getMessagesThunk = (recipientId, senderId) => async dispatch => {
    console.log(recipientId, senderId)
    const response = await csrfFetch(`/api/messages/${recipientId}/${senderId}`)
    const messages = await response.json()
    dispatch(loadMessages(messages))
}
export const sendMessageThunk = ( message) => async (dispatch) => {
    const response = await csrfFetch(`/api/messages`, {
        method : "POST", 
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({...message})

    })
    if(response.ok){
        let message = await response.json()
        dispatch(addMessage(message))
    }
}


const messageReducer = (state = {}, action) => {
    let prevState = {...state}
    switch(action.type){
        case GET_MESSAGES:
            prevState = action.payload
            return prevState
        case ADD_MESSAGE:
            let num = Object.keys(prevState).length + 1
            prevState[num] = action.payload
            return prevState
        default:
            return state
    }
}

export default messageReducer