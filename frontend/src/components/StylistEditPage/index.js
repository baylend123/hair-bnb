import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as sessionActions from "../../store/session"

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { flexbox } from "@mui/system";


const style = {
  display: 'flex',
  flexwrap: 'wrap',
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


function StylistEditPage() {
  const dispatch = useDispatch();
  const stylist = useSelector(state => state?.session?.stylist);
  const [firstName, setFirstName] = useState(stylist.firstName);
  const [lastName, setLastName] = useState(stylist.lastName);
  const [email, setEmail] = useState(stylist.email);
  const [bio, setBio] = useState(stylist.bio);
  const [profilePhoto, setProfilePhoto] = useState(stylist.profilePhoto);
  const [photos, setPhotos] = useState(stylist.photos);
  const [address, setAddress] =useState(stylist.address);
  const [venue, setVenue] =useState(stylist.venue);
  const [city, setCity] = useState(stylist.city);
  const [state, setState] = useState(stylist.state);
  const [password, setPassword] = useState(stylist.hashedPassword);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();


  const update = async (e) => {
    e.preventDefault()
    setErrors([]);
    dispatch(sessionActions.editStylist({ id: stylist.id, firstName, lastName, email, bio, city, state}))
    .catch(async (res) => {
      console.log(res)
      const data = await res.json()
      if(data && data.errors) setErrors(data.errors)
    })
    return navigate(`/stylist/${stylist.id}`)
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    console.log(file.name)
    if(file) {
      setProfilePhoto(file);
    }
  };

  return (
    <Box
      component="form"
      sx={style}
      onSubmit={update}
      autoComplete="off"
    >
    <div className="form-container">
      <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
        <TextField
            id="outlined-basic"
            label="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ mt: 2 }}
            required
        />
        <TextField
            id="outlined-basic"
            label="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{ mt: 2 }}
            required
        />
        <TextField
            id="outlined-basic"
            label="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mt: 2 }}
            required
        />
        <TextField
            id="outlined-basic"
            label="Bio"
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
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
        <Button sx={{ mt: 2 }} type='submit' variant="contained">Update Info</Button>
    </div>
    </Box>
  )
};


export default StylistEditPage;
