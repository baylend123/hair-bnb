import { csrfFetch } from "./csrf";

const SET_STYLISTS = 'stylists/set';

export const setStylists = (stylists) => {
  return {
    type: SET_STYLISTS,
    payload: stylists
  }
};

export const getStylists = ({city, state}) => async dispatch => {
  console.log(city, state, "yooooooooo")
  const response = await csrfFetch(`/api/search`, {
    method : 'GET',
    body : JSON.stringify({
        city,
        state
    })
  })

  if(!response.ok){
    throw response;
  }

  const stylists = await response.json();
  console.log(stylists, "============")
  dispatch(setStylists(stylists));

};


const initialState = {};

const searchReducer = (stylists = initialState, action) => {
  switch(action.type){
    case SET_STYLISTS:
      const stylistsPayload = action.payload;

      return stylistsPayload.reduce((searchStylists, stylist) =>{
        return {
          ...searchStylists,
          [stylist.id]: stylist
        }
      }, {});
    default:
      return stylists;
  }
};

export default searchReducer;
