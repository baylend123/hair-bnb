import React, {useState} from "react";
import * as sessionActions from '../../store/session'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'


function SignupComponent (){

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [bio, setBio] = useState('')
    const [currentHairStyle, setCurrentHairStyle] = useState('')
    const [profilePhoto, setProfilePhoto] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [errors, setErrors] = useState([])

    if(sessionUser) return (
        console.log('It works')
    )
    const signup = (e) => {
        e.preventDefault()
        setErrors([])
        return dispatch(sessionActions.signup({firstName, lastName, email, bio, currentHairStyle, profilePhoto, password, confirmPassword, city, state}))
        .catch(async (res) => {
            console.log(res)
            // const data = await res.json()
            // if(data && data.errors) setErrors(data.errors)
        })
    }

    const updateFile = (e) => {
      const file = e.target.files[0];
      if(file) {
        setProfilePhoto(file);
      }
    };

    return (
        <form onSubmit={signup}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                First Name
                <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </label>
            <label>
                Last Name
                <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </label>
            <label>
                Email
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Bio
                <input type='text' value={bio} onChange={(e) => setBio(e.target.value)} required />
            </label>
            <label>
                Current Hairstyle
                <input type='text' value={currentHairStyle} onChange={(e) => setCurrentHairStyle(e.target.value)} required />
            </label>
            <label>
                Profile Photo
                <input type='file' onChange={updateFile} required />
            </label>
            <label>
                Password
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <label>
            <label>
                Confirm Password
                <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </label>
                City
                <input type='text' value={city} onChange={(e) => setCity(e.target.value)} required />
            </label>
            <label>
                State
                <input type='text' value={state} onChange={(e) => setState(e.target.value)} required />
            </label>
            <button type='submit'>
                Sign Up
            </button>
        </form>
    )

}

export default SignupComponent;
