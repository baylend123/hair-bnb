import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

import "./ProfilePageCss.css"




function ProfilePhotoCard() {
  const { id } = useParams();
  const stylist = useSelector((state) => state?.search[id]);


  return (
    <div className="profile-photo-card-container">
      <div className="photo-container">
        <img className="profile-photo" src={stylist?.profilePhoto} alt="profile" />
        <button>edit photo</button>
      </div>
      <div>
        {stylist?.firstName} confirmed
      </div>
    </div>
  )
};

export default ProfilePhotoCard;
