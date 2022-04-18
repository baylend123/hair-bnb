import React from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import './Search.css'
export function Search(){
    return (
        <div className="search-div-main">
            <div className="search-div">
            <input className="search-input" />
            <button className="search-button"><AiOutlineSearch/> Search</button>
            </div>
        </div>
    )
}