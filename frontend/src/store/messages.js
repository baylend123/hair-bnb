import { csrfFetch } from "./csrf";

const GET_MESSAGES = 'messages/load'

export const getMessagesThunk = (id) => async () => {
    const response = await csrfFetch(`/api/messages/${id}`)
    console.log(response)
}