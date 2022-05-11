import React, { useState } from "react";
import * as sessionActions from '../../store/session';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';



const style = {
    fontFamily: 'Montserrat',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '25ch',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    m: 1
  };


function LoginComponent() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const login = (e) => {
        e.preventDefault()
        setErrors([])
        return dispatch(sessionActions.login({email, password}))
        .catch(async (res) => {
            const data = await res.json()
            if(data && data.errors) setErrors(data.errors)
        })
    }
    const demoLogin = (e) => {
        e.preventDefault()
        setErrors([])
        return dispatch(sessionActions.login({email : 'bm@email.com', password : 'password'}))
        .catch(async (res) => {
            const data = await res.json()
            if(data && data.errors) setErrors(data.errors)
        })
    }

    return (

        <div className="login">

            <Button sx={{
                color: 'royalblue'
            }} onClick={handleOpen}>Log In</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    component="form"
                    sx={style}
                    onSubmit={login}
                    autoComplete="off"
                >
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <div>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{ mt: 2 }}
                            required
                        />
                        <Button sx={{ mt: 2 }} type='submit' variant="contained">Log In</Button>
                        <Button
                        onClick={demoLogin}
                        sx={{ mt: 2 }} variant="contained">Demo user</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )

}

export default LoginComponent




    // <label>
    // Email
    // <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} required />
    // </label>
    // <label>
    // Password
    // <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
    // </label>
    // <button type='submit'>
    // Log In
    // </button>
