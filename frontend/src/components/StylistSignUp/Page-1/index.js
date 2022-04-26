import React from "react";
import {useNavigate} from 'react-router-dom'
import homeicon from '../../../images/home-icon.png'
export default function PageOne({pageOneState, setPageOneState, changePage}){
    const navigate = useNavigate()
    return (
        <div className="stylist-sign-up-container">
            <div className="ssup-image">
                <img onClick={() => navigate('/')} src={homeicon} alt='home icon' />
            </div>
            <h1 className="ssup-h1">Lets start with some login information</h1>
            <form className="ssup-form">
                <div className="ssup-item">
                    <label className="ssup-label" htmlFor="fist-name">First name</label>
                    <input 
                    onChange={(e) => {
                        pageOneState.firstName = e.target.value
                        setPageOneState(pageOneState)
                    }
                    }
                    className="ssup-input" type='text' />
                </div>
                <div className="ssup-item">
                    <label className="ssup-label">Last Name</label>
                    <input
                    onChange={(e) => {
                        pageOneState.lastName = e.target.value
                        setPageOneState(pageOneState)
                    }}
                    className="ssup-input" type='text' />
                </div>
                <div className="ssup-item">
                    <label className="ssup-label">Email</label>
                    <input
                    onChange={(e) => {
                        pageOneState.email = e.target.value
                        setPageOneState(pageOneState)
                    }}
                    className="ssup-input" type='text' />
                </div>
                <div className="ssup-item">
                    <label className="ssup-label">Password</label>
                    <input 
                    onChange={(e) => {
                        pageOneState.password = e.target.value
                        setPageOneState(pageOneState)
                    }}
                    className="ssup-input" type='password' />
                </div>
                <div className="ssup-item">
                    <label className="ssup-label">Confirm password</label>
                    <input
                    onChange={(e) => {
                        pageOneState.confirmPassword = e.target.value
                        setPageOneState(pageOneState)
                    }}
                    className="ssup-input" type='password' />
                </div>
            </form>
            <button className="ssup-next"onClick={() => changePage(2)} >next</button>
        </div>
    )
}