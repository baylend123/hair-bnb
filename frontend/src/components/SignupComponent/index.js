import React, {useState} from "react";
import * as sessionActions from '../../store/session';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

// const AWS = require("aws-sdk");
// import  AWS  from "aws-sdk";
// import {path as path1} from "path";

// name of your bucket here
// const NAME_OF_BUCKET = "hair-bnb";

// const multer = require("multer");

//  make sure to set environment variables in production for:
//  AWS_ACCESS_KEY_ID
//  AWS_SECRET_ACCESS_KEY
//  and aws will automatically use those environment variables
// AWS.config.update({
//     accessKeyId: "AKIA3VRHUDZNIVZCF6EC",
//     secretAccessKey: "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"
// });

// const s3 = new AWS.S3({ apiVersion: "2006-03-01" });



const style = {
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


function SignupComponent (){

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [currentHairStyle, setCurrentHairStyle] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [errors, setErrors] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    if(sessionUser) return (
        console.log('It works')
    )

    // const singlePublicFileUpload = async (file) => {
    //     const { name, mimetype, path } = await file;
    //     console.log(file, "==========")
    //     // name of the file in your S3 bucket will be the date in ms plus the extension name
    //     const Key = new Date().getTime().toString() + name;
    //     console.log(Key);
    //     const uploadParams = {
    //       Bucket: NAME_OF_BUCKET,
    //       Key,
    //       Body: file,
    //       ACL: "public-read",
    //     };
    //     const result = await s3.upload(uploadParams).promise();

    //     // save the name of the file in your bucket as the key in your database to retrieve for later
    //     return result.Location;
    //   };

    const signup = async (e) => {
        e.preventDefault()
        setErrors([]);
        // await singlePublicFileUpload(profilePhoto);
        return dispatch(sessionActions.signup({firstName, lastName, email, bio, currentHairStyle, profilePhoto, password, confirmPassword, city, state}))
        .catch(async (res) => {
            console.log(res)
            // const data = await res.json()
            // if(data && data.errors) setErrors(data.errors)
        })
    }

    const updateFile = (e) => {
      const file = e.target.files[0];
      console.log(file.name)
      if(file) {
        setProfilePhoto(file);
      }
    };

    return (
        <div>
            <Button sx={{color : 'white'}} onClick={handleOpen}>Sign Up</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    component="form"
                    sx={style}
                    onSubmit={signup}
                    autoComplete="off"
                >
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <div>
                        <TextField
                            id="outlined-basic"
                            label="First Name"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <TextField
                            id="outlined-basic"
                            label="Last Name"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <TextField
                            id="outlined-basic"
                            label="Bio"
                            type="text"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            required
                        />
                        <TextField
                            id="outlined-basic"
                            label="Current Hair Style"
                            type="text"
                            value={currentHairStyle}
                            onChange={(e) => setCurrentHairStyle(e.target.value)}
                            required
                        />
                        <TextField
                            id="outlined-basic"
                            label="Profile Photo"
                            type="file"
                            value={''}
                            onChange={updateFile}
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
                        <TextField
                            id="outlined-password-input"
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            sx={{ mt: 2 }}
                            required
                        />
                        <TextField
                            id="outlined-basic"
                            label="City"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            sx={{ mt: 2 }}
                            required
                        />
                        <TextField
                            id="outlined-basic"
                            label="State"
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            sx={{ mt: 2 }}
                            required
                        />
                        <Button sx={{ mt: 2 }} type='submit' variant="contained">Sign Up</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )

}

export default SignupComponent;

        // <form onSubmit={signup}>
        //     <ul>
        //         {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        //     </ul>
        //     <label>
        //         First Name
        //         <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        //     </label>
        //     <label>
        //         Last Name
        //         <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        //     </label>
        //     <label>
        //         Email
        //         <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} required />
        //     </label>
        //     <label>
        //         Bio
        //         <input type='text' value={bio} onChange={(e) => setBio(e.target.value)} required />
        //     </label>
        //     <label>
        //         Current Hairstyle
        //         <input type='text' value={currentHairStyle} onChange={(e) => setCurrentHairStyle(e.target.value)} required />
        //     </label>
        //     <label>
        //         Profile Photo
        //         <input type='file' onChange={updateFile} required />
        //     </label>
        //     <label>
        //         Password
        //         <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        //     </label>
        //     <label>
        //     <label>
        //         Confirm Password
        //         <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        //     </label>
        //         City
        //         <input type='text' value={city} onChange={(e) => setCity(e.target.value)} required />
        //     </label>
        //     <label>
        //         State
        //         <input type='text' value={state} onChange={(e) => setState(e.target.value)} required />
        //     </label>
        //     <button type='submit'>
        //         Sign Up
        //     </button>
        // </form>
