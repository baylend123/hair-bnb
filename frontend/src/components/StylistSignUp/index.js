import React from "react";
import { useNavigate } from "react-router-dom";
import './StylistSignup.css'
import homeicon from '../../images/home-icon.png'
export default function StylistSignUp(){
    const navigate = useNavigate()
    return(
        <div className="stylist-sign-up-container">
            <div className="ssup-image">
                <img onClick={() => navigate('/')} src={homeicon} alt='home icon'/>
            </div>
            <h1 className="ssup-h1">Lets start with your personal information</h1>
        </div>
    )
}