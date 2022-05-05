import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import ProfilePhotoCard from "./ProfilePhotoCard";
import ProfileBody from "./ProfileBody";
import { NavBar } from "../NavBarComponent";
import * as bookingActions from "../../store/booking"

import "./ProfilePageCss.css"



function StylistProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const bookings = useSelector(state => state?.booking[id])

  useEffect(()=>{
    dispatch(bookingActions.getStylistBookings(id))
  }, [])

  return (
    <div className="profile-page">
      <div className="nav-bar-main">
        <NavBar />
      </div>
      <div className="profile-body" >
        <div className="profile-photo-card">
          <ProfilePhotoCard />
        </div>
        <div className="profile-about">
          {bookings ? bookings.date : ""}
          <ProfileBody />
        </div>
      </div>
    </div>
  )
};

export default StylistProfilePage;
