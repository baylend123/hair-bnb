import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ProfilePageCss.css"


function ProfilePhotoCard() {
  const user = useSelector((state) => state?.session?.user);
  const bookings = useSelector(state => Object.values(state?.booking));

  return (
    <div className="profile-photo-card-container">
      <div className="photo-container">
        <img className="profile-photo" src={user.profilePhoto} alt="profile" />
        <button>edit photo</button>
      </div>
      <div>
        {user.firstName} confirmed
      </div>
      <div>
        <div className="booking-label">Hair Appointments:</div>
        {bookings ? bookings.map(booking => {
          return (
            <div>
              <div>You have an appointment with: {booking.stylistName}</div>
              <div>On {booking.date}</div>
              <div>At {booking.time}</div>
            </div>
          )
          })
        : ""}
      </div>
    </div>
  )
};

export default ProfilePhotoCard;
