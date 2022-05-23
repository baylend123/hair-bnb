import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { NavBar } from "../NavBarComponent";
import * as bookingActions from "../../store/booking"

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import "./ProfilePageCss.css"

const style = {
  fontFamily: 'Montserrat',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '25ch',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  m: 1
};

function BookingList() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const bookings = useSelector(state => Object.values(state?.booking));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(()=>{
    dispatch(bookingActions.getStylistBookings(id))
  }, []);

  return (
    <div className="booking-list">
      <div>Bookings:</div>
      {bookings ? bookings.map(booking => {
        return (
          <div>
            <div>You have an appointment with {booking.userName}</div>
            <div>Date: {booking.date}</div>
            <div>Time: {booking.time}</div>
            <Button onClick={handleOpen}>Cancel Appointment</Button>
            <Modal
              hideBackdrop
              open={open}
              onClose={handleClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <Box sx={{ ...style, width: 200 }}>
                <h2 id="child-modal-title">Text in a child modal</h2>

                <Button onClick={handleClose}>Close Child Modal</Button>
              </Box>
            </Modal>
          </div>
        )
      }) : ""}
    </div>
  )
};

export default BookingList;
