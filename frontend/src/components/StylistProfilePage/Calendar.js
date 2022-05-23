import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import * as bookingActions from "../../store/booking";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Button from '@mui/material/Button';

export default function Calendar() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const stylist = useSelector((state) => state?.search[id]);
  const stylistUser = useSelector(state => state?.session?.stylist);
  const user = useSelector(state => state?.session.user);
  const [date, setDate] = React.useState(new Date('2022-06-12'));
  const [time, setTime] = React.useState('');

  const timeChange = (event) => {
    setTime(event.target.value);
  };

  const handleChange = (newDate) => {
    setDate(newDate.toDateString());
    console.log(newDate.toDateString(), user.id, time, id)
  };

  const handleBooking = () => {
    const stylistId = id;
    const stylistName = stylist.firstName + " " + stylist.lastName;
    const userId = user.id;
    const userName = user.firstName + " " + user.lastName;
    dispatch(bookingActions.createBooking({ date, time, userName, stylistName, stylistId, userId}));
  };

  const calButton = () => {
    if(user) {
      return <Button onClick={handleBooking} variant="contained">Book Hairstyling</Button>
    } else if(stylistUser) {
      return <Button variant="contained">Edit Availability</Button>
    } else {
      return <Button variant="contained">Log In to Book an Appointment</Button>
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
<<<<<<< HEAD
=======

>>>>>>> main
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        // openTo="year"
        // value={value}
        onChange={(newValue) => {
          // setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          // value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />

        <TimePicker
          label="Time"
          // value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DateTimePicker
          label="Date&Time picker"
<<<<<<< HEAD
          // value={value}
          />
=======
          value={value}

>>>>>>> main
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          // openTo="year"
          value={date}
<<<<<<< HEAD
=======

>>>>>>> main
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Time</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={time}
              label="Time"
              onChange={timeChange}
            >
              <MenuItem value={"10:00 AM"}>10:00 AM</MenuItem>
              <MenuItem value={"11:00 AM"}>11:00 AM</MenuItem>
              <MenuItem value={"12:30 PM"}>12:30 PM</MenuItem>
              <MenuItem value={"1:30 PM"}>1:30 PM</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {calButton()}
      </Stack>
    </LocalizationProvider>
  );
}
