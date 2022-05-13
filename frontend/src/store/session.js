import { csrfFetch } from "./csrf";

const SET_USER = 'session/setUser';
const SET_STYLIST = 'session/setStylist'
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

const setStylist = (stylist) => {
    return {
        type: SET_STYLIST,
        payload: stylist
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
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
    })
    const data = await response.json()
    dispatch(setUser(data.user))
    return response
};

export const stylistLogin = (stylist) => async dispatch => {
    const {email, password} = stylist;
    const response  = await csrfFetch('/api/session/stylist', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
    })
    const data = await response.json()
    dispatch(setStylist(data.stylist))
    return response
};

export const signup = (user) => async (dispatch) => {
    const {firstName, lastName, email, bio, currentHairStyle, profilePhoto, password, city, state } = user;
    const formData = new FormData();
    console.log(user)
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
      headers: {'Content-Type': 'multipart/form-data'},
      body: formData,
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const stylistSignup = (info) => async (dispatch) => {
    const response = await csrfFetch('/api/user/stylist', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(info)
    })
    const data = await response.json()
    dispatch(setStylist(data.stylist))
}

export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
};

const initialState = { user: null, stylist: null };

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case SET_USER:
        newState = Object.assign({}, state);
        // newState = {...state};
        newState.user = action.payload;
        return newState;
      case SET_STYLIST:
        newState = Object.assign({}, state);
        newState.stylist = action.payload;
        return newState;
      case REMOVE_USER:
        newState = Object.assign({}, state);
        newState.user = null;
        newState.stylist = null;
        return newState;
      default:
        return state;
    }
  };

  export default sessionReducer;
