import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfilePhotoCard from "./ProfilePhotoCard";
import ProfileBody from "./ProfileBody";

import "./ProfilePageCss.css"


function ProfilePage() {


  return (
    <div className="profile-page">
      <div className="nav-bar-main">
        <div className="nav-bar-left">
          <div className="logo"> Hair-BnB</div>
        </div>
        <div className="nav-bar-right">
          <div>Modal Icon</div>
        </div>
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
