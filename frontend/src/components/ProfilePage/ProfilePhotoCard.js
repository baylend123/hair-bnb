import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";




function ProfilePhotoCard() {
  const user = useSelector((state) => state?.session?.user);


  return (
    <div className="profile-photo-card-container">
      <div className="photo-container">
        <img className="profile-photo" href={user.profilePhoto} alt="profile" />
        <button>edit photo</button>
      </div>
      <div>
        {user.firstName} confirmed
      </div>
    </div>
  )
};

export default ProfilePhotoCard;
