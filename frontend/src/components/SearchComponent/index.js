import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import * as searchActions from '../../store/search';


import {AiOutlineSearch} from 'react-icons/ai'
import './Search.css'


export function Search(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [errors, setErrors] = useState('');

    const search = (e) => {
        e.preventDefault()
        setErrors([])
        dispatch(searchActions.getStylists({city, state}))
        // .catch(async (res) => {
        //     const data = await res.json()
        //     if(data && data.errors) setErrors(data.errors)
        // })

        return navigate("/searchList")
    };


    return (
        <div className="search-div-main">
            <div className="search-div">
            <input
                className="search-input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <input
                className="search-input"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
            {/* <select
                className="search-state"
                value={state}
                onChange={(e) => setState(e.target.value)}
            >
                <option value="California">CA</option>
                <option value="TX">TX</option>
            </select> */}
            <button
                className="search-button"><AiOutlineSearch
                onClick={search}
            />
                Search
            </button>
            </div>
        </div>
    )
}
