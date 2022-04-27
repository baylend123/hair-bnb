import React from "react";
import { useNavigate } from 'react-router-dom'
import {useState}  from 'react'
import { csrfFetch } from "../../../store/csrf.js";
import homeicon from '../../../images/home-icon.png'
import './PageTwo.css'

export default function PageTwo({ changePage }) {
    const navigate = useNavigate()
    const [profilePhoto, setProfilePhoto] = useState()
    const handleProfilePhoto = async (e) => {
        const formData = new FormData();
        formData.append('profilePhoto', e.target.files[0])
        let response = await csrfFetch('/api/image-upload', {
            method: 'POST',
            headers : {'Content-Type' : 'multipart/form-data'},
            body: formData,
          });
        response = await response.json()
        console.log(response)
        await setProfilePhoto(response.profilePhoto)
    }
    return (
        <div className='stylist-sign-up-container'>
            <div className="ssup-image">
                <img onClick={() => navigate('/')} src={homeicon} alt='home icon' />
            </div>

            <h1 className="ssup-h1">Now lets create your profile</h1>
            <div>
                <label className="ssup-label">First choose a profile photo</label>
                <img src={profilePhoto} alt="profile"/>
                <input
                onChange={handleProfilePhoto}
                type="file" />
            </div>
            
            <div>
                <button className="ssup-next"
                onClick={() => changePage((prev) => prev -1)}
                >Go Back</button>
                <button className="ssup-next"
                onClick={() => changePage((prev) => prev + 1)}
                >next</button>
            </div>
        </div>
    )
}