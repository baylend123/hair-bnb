import { csrfFetch } from "./csrf";

const GET_MESSAGES = 'messages/load'

const loadMessages = (messages) => {
    return {
        type : GET_MESSAGES,
        payload : messages
    }
}

export const getMessagesThunk = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/messages/${id}`)
    let messages = await response.json()
    console.log(messages)
    dispatch(loadMessages(messages))
}


const messageReducer = (state = {}, action) => {
    switch(action.type){
        case GET_MESSAGES:
            return{...state, ...action.payload}
        default:
            return state
    }
}

export default messageReducer