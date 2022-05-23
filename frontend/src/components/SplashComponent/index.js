import React from "react";
import { NavBar } from "../NavBarComponent";
import { Search } from "../SearchComponent";
import image1 from '../../images/image1.jpeg'
import image2 from '../../images/image2.jpeg'
import image3 from '../../images/image3.webp'

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
                This is a place 
            </div>
            <div className="splash-photo-container">
                <img className="splash-image" src={image1} alt='haircut' />
                <img className="splash-image" src={image2} alt='haircut' />
                <img className="splash-image" src={image3} alt='haircut' />
            </div>
        </div>
    )
}

export default Splash
