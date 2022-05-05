import React from "react";
import { NavBar } from "../NavBarComponent";
import { Search } from "../SearchComponent";

import './Splash.css'

function Splash() {
    return (
        <div className="splash">
            <div>
                <NavBar />
            </div>
            <div className="search-title">
                Search for a stylist
            </div>
            <div>
                <Search />
            </div>
            <div className="welcome-message">
                Welcome to hair-bnb. A place you can find your next favorite hair stylist.
            </div>
        </div>
    )
}

export default Splash
