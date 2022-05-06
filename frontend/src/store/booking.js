import { csrfFetch } from "./csrf";

const SET_BOOKINGS = 'bookings/set';
const ADD_BOOKING = 'bookings/add';

export const setBookings = (bookings) => {
  return {
    type: SET_BOOKINGS,
    payload: bookings
  }
};

export const addBooking = (booking) => {
  return {
    type: ADD_BOOKING,
    payload: booking
  }
}

export const getStylistBookings = (stylistId) => async dispatch => {

  console.log("we runnin!!!")
  const response = await csrfFetch(`/api/booking/stylist/${stylistId}`)
  console.log(response, "here!!!!")
  if(!response.ok){
    throw response;
  }

  const styleBookings = await response.json();
  dispatch(setBookings(styleBookings));

};

export const createBooking = booking => async (dispatch) => {
  const { date, time, stylistId, userId } = booking;
  const response = await csrfFetch('/api/booking/new', {
      method: "POST",
      body: JSON.stringify({ date, time, stylistId, userId})
  })
  if(response.ok) {
      const booking = await response.json();
      dispatch(addBooking(booking))
      return booking;
  }
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
    case ADD_BOOKING:
          return {
              ...bookings,
              [action.payload.id]: action.payload,
          }
    default:
      return bookings;
  }
};

export default bookingReducer;
