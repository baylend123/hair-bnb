import { csrfFetch } from "./csrf";

const GET_CONVERSATIONS = 'conversations/load'

const loadConversations = (messages) => {
    return {
        type : GET_CONVERSATIONS,
        payload : messages
    }
}

export const getConversationsThunk = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/messages/conversations/${id}`)
    let messages = await response.json()
    console.log(messages)
    dispatch(loadConversations(messages))
}


const conversationsReducer = (state = {}, action) => {
    let prevState = {...state}
    switch(action.type){
        case GET_CONVERSATIONS:
            prevState = action.payload
            return prevState
        default:
            return state
    }
}

export default conversationsReducer