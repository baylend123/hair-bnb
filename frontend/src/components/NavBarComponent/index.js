import React from "react";
import LoginComponent from "../LoginComponent";
import SignupComponent from "../SignupComponent";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import './NavBar.css';


export function NavBar() {
    const user = useSelector(state => state?.session?.user);

    return (
        <div className="nav-bar-main">
            <div className="nav-bar-left">
                <NavLink className="logo" to="/">Hair-BnB</NavLink>
            </div>
            <div className="nav-bar-right">
                { user ? (
                    <NavLink className="profile-btn" to="/profile-page">My Profile</NavLink>
                    ) : (
                    <div className="nav-bar-right">
                        <div>
                            <LoginComponent />
                        </div>
                        <div>
                            <SignupComponent />
                        </div>
                    </div> )
                }
            </div>
        </div>
    )
};
