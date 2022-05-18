import { csrfFetch } from "./csrf";

const SET_USER = 'session/setUser'
const REMOVE_USER = 'session/removeUser'

const setUser = (user) => {
    return {
        type: SET_USER,
        payload : user
    }
}
const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}


export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session')
    const data = await response.json()

    dispatch(setUser(data.user))

    return response
}

export const login = (user) => async dispatch => {
    const {email, password} = user
    const response  = await csrfFetch('/api/session', {
        method : 'POST',
        body : JSON.stringify({
            email,
            password
        })
    })
    const data = await response.json()
    dispatch(setUser(data.user))
    return response
}

export const signup = (user) => async (dispatch) => {
    const {firstName, lastName, email, bio, currentHairStyle, profilePhoto, password, city, state } = user;
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('bio', bio);
    formData.append('currentHairStyle', currentHairStyle);
    formData.append('profilePhoto', profilePhoto);
    formData.append('password', password);
    formData.append('city', city);
    formData.append('state', state);
    const response = await csrfFetch('/api/user', {
      method: 'POST',
      headers : {'Content-Type' : 'multipart/form-data'},
      body: formData,
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const stylistSignup = (info) => async (dispatch) => {
    const response = await csrfFetch('/api/user/stylist', {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(info)
    })
    const data = await response.json()
    dispatch(setUser(data.user))
}

export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case SET_USER:
        newState = Object.assign({}, state);
        // newState = {...state};
        newState.user = action.payload;
        return newState;
      case REMOVE_USER:
        newState = Object.assign({}, state);
        newState.user = null;
        return newState;
      default:
        return state;
    }
  };

  export default sessionReducer;
