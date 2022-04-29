import React from "react";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { csrfFetch } from "../../../store/csrf.js";
import homeicon from '../../../images/home-icon.png'
import './PageTwo.css'

export default function PageTwo({ changePage, pageTwoState, setPageTwoState }) {
    const navigate = useNavigate()
    const [upload, setUpload] = useState(false)
    const handleProfilePhoto = async (e) => {
        const formData = new FormData();
        formData.append('profilePhoto', e.target.files[0])
        let response = await csrfFetch('/api/image-upload', {
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            body: formData,
        });
        response = await response.json()
        pageTwoState.profilePhoto = response.profilePhoto
        setUpload(true)
        await setPageTwoState(pageTwoState)
    }
    return (
        <div className='stylist-sign-up-container'>
            <div className="ssup-image">
                <img onClick={() => navigate('/')} src={homeicon} alt='home icon' />
            </div>
            <div className="ssup-page-2-container">
                <h1 className="ssup-h1">Now lets create your profile</h1>
                <label className="ssup-label">First choose a profile photo</label>
                {upload &&<img className="ssup-img" src={pageTwoState.profilePhoto} alt="profile" />}
                <input
                    onChange={handleProfilePhoto}
                    type="file" />
                <label className="ssup-label">Tell us a little bit about yourself, and you styling skills</label>
                <textarea 
                onChange={(e) => {
                    pageTwoState.bio = e.target.value
                    setPageTwoState(pageTwoState)
                }}
                className="ssup-bio"
                />
            </div>


            <div className="ssup-p2-button-container">
                <button className="ssup-next"
                    onClick={() => changePage((prev) => prev - 1)}
                >Go Back</button>
                <button className="ssup-next"
                    onClick={() => changePage((prev) => prev + 1)}
                >next</button>
            </div>
        </div>
    )
}