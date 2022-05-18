import { csrfFetch } from "./csrf";

const SET_BOOKINGS = 'bookings/set';

export const setBookings = (bookings) => {
  return {
    type: SET_BOOKINGS,
    payload: bookings
  }
};

export const getStylistBookings = (stylistId) => async dispatch => {

  const response = await csrfFetch(`/api/booking/stylist/${stylistId}`)
  if(!response.ok){
    throw response;
  }

  const styleBookings = await response.json();
  dispatch(setBookings(styleBookings));

};

// export const getOneStylist = id => async (dispatch) => {
//   const response = await csrfFetch(`/api/search/stylist/${id}`);
//   if (!response.ok) {
//       throw response;
//   }
//   const stylist = await response.json();

//   dispatch(setStylists(stylist));
// }


const initialState = {};

const bookingReducer = (bookings = initialState, action) => {
  switch(action.type){
    case SET_BOOKINGS:
      const bookingsPayload = action.payload;

      return bookingsPayload.reduce((bookings, booking) =>{
        return {
          ...bookings,
          [booking.id]: booking
        }
      }, {});
    default:
      return bookings;
  }
};

export default bookingReducer;
