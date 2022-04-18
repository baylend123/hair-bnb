import React from "react";
import LoginComponent from "../LoginComponent";
import SignupComponent from "../SignupComponent";
import './NavBar.css'
export function NavBar() {


    return (
        <div className="nav-bar-main">
            <div className="nav-bar-left">
                <div className="logo"> Hair-BnB</div>
            </div>
            <div className="nav-bar-right">
                <div>
                    <LoginComponent />
                </div>
                <div>
                    <SignupComponent />
                </div>
            </div>
        </div>
    )
}
