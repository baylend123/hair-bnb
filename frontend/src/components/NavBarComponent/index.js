import React from "react";
import LoginComponent from "../LoginComponent";
import SignupComponent from "../SignupComponent";
import NavMenu from "../NavMenu";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";


import Button from '@mui/material/Button';
import './NavBar.css';


export function NavBar() {
    const user = useSelector(state => state?.session?.user);
    const stylist = useSelector(state => state?.session?.stylist);
    const navigate = useNavigate();

    return (
        <div className="nav-bar-main">
            <div className="nav-bar-left">

                <NavLink className="logo" to="/">Hair-BnB</NavLink>
            </div>
            <div className="nav-bar-right">
                { user || stylist ? (
                    <NavMenu />
                    // <Button
                    //     sx={{color: 'royalblue'}}
                    //     onClick={() => navigate('/profile-page')}>My Profile</Button>
                    // <NavLink className="profile-btn" to="/profile-page">My Profile</NavLink>
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
