import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfilePhotoCard from "./ProfilePhotoCard";
import ProfileBody from "./ProfileBody";
import { NavBar } from "../NavBarComponent";
import * as bookingActions from "../../store/booking";

import "./ProfilePageCss.css"


function ProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state?.session?.user)

  useEffect(()=>{
    dispatch(bookingActions.getUserBookings(user.id))
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
          <ProfileBody />
        </div>
      </div>
    </div>
  )
};

export default ProfilePage;
