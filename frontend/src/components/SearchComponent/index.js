import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import * as searchActions from '../../store/search';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {AiOutlineSearch} from 'react-icons/ai'
import './Search.css'


export function Search(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [errors, setErrors] = useState('');


    return (
        <div className="search-div-main">
            <div className="search-div">
                <label>Find A Stylist!</label>
                <TextField
                    required
                    id="outlined-required"
                    label="City"
                    Value={city}
                    onChange={e => setCity(e.target.value)}
                />
                {/* <input
                    className="search-input"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                /> */}
                {/* <input
                    className="search-input"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                /> */}
                <FormControl required sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-required-label">State</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={state}
                        label="State *"
                        onChange={(e) => setState(e.target.value)}
                    >
                        <MenuItem value={"California"}>CA</MenuItem>
                        <MenuItem value={"Texas"}>TX</MenuItem>
                    </Select>
                </FormControl>
                {/* <select
                    className="search-state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                >
                    <option value="California">CA</option>
                    <option value="TX">TX</option>
                </select> */}
                {/* <button
                    className="search-button"><AiOutlineSearch
                    onClick={search}
                />
                    Search
                </button> */}
                <NavLink to={`/search/${city}/${state}`}>
                    <AiOutlineSearch className="search-button"/>
                </NavLink>
            </div>
        </div>
    )
}
