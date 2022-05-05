import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Calendar from "./Calendar";

import "./ProfilePageCss.css"




function ProfileBody() {
  const { id } = useParams();
  const stylist = useSelector((state) => state?.search[id]);


  return (
    <div className="profile-about-container">
      <div className="profile-intro">
        <div>Hi, I'm {stylist.firstName}</div>
      </div>
      <div className="profile-about">
        <div className="about">
          <div>About</div>
          <div>{stylist.bio}</div>
        </div>
        <div className="lives-in">Lives in {stylist.city}, {stylist.state}</div>
        <div className="current-hair">Venu: {stylist.venue}</div>
        <div className="cal-container">
          <Calendar />
        </div>
      </div>
    </div>
  )
};

export default ProfileBody;
