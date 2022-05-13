import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import ProfilePhotoCard from "./ProfilePhotoCard";
import ProfileBody from "./ProfileBody";
import { NavBar } from "../NavBarComponent";
import * as bookingActions from "../../store/booking"

import "./ProfilePageCss.css"
import BookingList from "./BookingList";



function StylistProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(()=>{
    dispatch(bookingActions.getStylistBookings(id))
  }, []);

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
          <BookingList />
          <ProfileBody id={id} />
        </div>
      </div>
    </div>
  )
};

export default StylistProfilePage;
