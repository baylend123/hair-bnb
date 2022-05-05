import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfilePhotoCard from "./ProfilePhotoCard";
import ProfileBody from "./ProfileBody";
import { NavBar } from "../NavBarComponent";

import "./ProfilePageCss.css"


function ProfilePage() {


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
