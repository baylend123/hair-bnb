import React from "react";
import LoginComponent from "../LoginComponent";
import SignupComponent from "../SignupComponent";

function Splash (){
    return (
        <div>
            <div>
                NavBar
            </div>
            <div>
                Splash Stuff
            </div>
            <div>
                <LoginComponent />
            </div>
            <div>
                <SignupComponent />
            </div>
        </div>
    )
}

export default Splash
