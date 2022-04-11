import React, {useState} from "react";
import * as sessionActions from '../../store/session'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'


function LoginComponent (){

    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    if(sessionUser) return (
        console.log('It works')
    )
    const login = (e) => {
        e.preventDefault()
        setErrors([])
        return dispatch(sessionActions.login({email, password}))
        .catch(async (res) => {
            const data = await res.json()
            if(data && data.errors) setErrors(data.errors)
        })
    }

    return (
        <form onSubmit={login}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Email
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Password
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <button type='submit'>
                Log In
            </button>
        </form>
    )

}

export default LoginComponent