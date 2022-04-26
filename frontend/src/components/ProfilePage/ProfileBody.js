import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";




function ProfileBody() {
  const user = useSelector((state) => state?.session?.user);


  return (
    <div className="profile-about-container">
      <div className="profile-intro">
        <div>Hi, I'm {user.firstName}</div>
        <button>Edit profile</button>
      </div>
      <div className="profile-about">
        <div className="about">
          <div>About</div>
          <div>{user.bio}</div>
        </div>
        <div className="lives-in">Lives in {user.city}, {user.state}</div>
        <div className="current-hair">Current Hairstyle: {user.currentHairStyle}</div>
      </div>
    </div>
  )
};

export default ProfileBody;
