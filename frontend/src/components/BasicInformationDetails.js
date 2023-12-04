import { PlaylistAddCheck } from '@mui/icons-material'
import { Box, Button, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import { useEffect } from 'react';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import theme from '../Theme'
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_PROFILE } from '../Url';
import axios from 'axios';
import { userDetails } from '../redux/reducers/UserReducer';

const BasicInformationDetails = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.UserReducer.value);
    // console.log("userData_basicInfo", userData);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    // Create a new Date object from the date of birth
    let dob = new Date(userData.user.dob);

    // Extract the day, month, and year
    let day = dob.getDate();
    let month = dob.getMonth() + 1; // getMonth() returns a zero-based month, so add 1
    let year = dob.getFullYear();
    // console.log("day", day, "month", month, "year", year);

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    // for year
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 50 }, (_, index) => currentYear - index);

    // for month
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    // for Date
    const getDatesForMonth = (year, month) => {
        const numberOfDaysInMonth = new Date(year, month + 1, 0).getDate();
        return Array.from({ length: numberOfDaysInMonth }, (_, index) => index + 1);
    };

    //   const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDates = getDatesForMonth(currentYear, currentMonth);

    const handleChange = (event) => {
        setSelectedDate(event.target.value);
    };
    const handleChangeMonth = (event) => {
        setSelectedMonth(event.target.value);
    }
    const handleChangeYear = (event) => {
        setSelectedYear(event.target.value);
    }
    const [formData, setFormData] = useState({
        name: userData.user.name,
        email: userData.user.email,
        gender: userData.user.gender,
        dob: "",
        password: "",
        confirmPassword: "",
        workDescription: userData.user.work_description,

    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
    });
    const handleInputUpdate = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formData", formData);
        let isValid = true;
        const newErrors = { ...errors };

        if (!formData.name.trim()) {
            isValid = false;
            newErrors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            isValid = false;
            newErrors.email = "Email is required";
        }

        if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = false;
            newErrors.email = "Email address is invalid";
        }
        if (!formData.password.trim()) {
            isValid = false;
            newErrors.password = "Password is required";
        }
        if (!formData.confirmPassword.trim()) {
            isValid = false;
            newErrors.confirmPassword = "Confirm password is required";
        }
        if (formData.password !== formData.confirmPassword) {
            isValid = false;
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        if (isValid) {
            axios
                .put(UPDATE_PROFILE, formData, {
                    headers: {
                        Authorization: `Bearer ${userData.token}`,
                    },
                })
                .then((response) => {
                    console.log(response.data);
                    // if (response.data.status === true) {
                    //     setMessageType("success");
                    //     setMessage(response.data.message);

                    //     userData.user.name = response.data.data.name;
                    //     userData.user.dob = response.data.data.dob;
                    //     userData.user.gender = response.data.data.gender;
                    //     userData.user.work_description = response.data.data.work_description;
                    //     userData.user.password = response.data.data.password;
                    //     // console.log("userData", userData);
                    //     dispatch(userDetails(userData));
                    // } else {
                    //     setMessageType("error");
                    //     setMessage(response.data.message);
                    // }

                })
                .catch((err) => {
                    console.log(err.response);
                    if (err.response) {
                        setMessageType("error");
                        setMessage(err.response.data.message);
                    }
                });
        }
    }
    useEffect(() => {
        // Update formData.dob when selectedYear, selectedMonth, or selectedDate changes
        setFormData((prevFormData) => ({
            ...prevFormData,
            dob: `${selectedYear}-${selectedMonth}-${selectedDate}`,
        }));
    }, [selectedYear, selectedMonth, selectedDate]);
    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                paddingBottom: "10px",
                marginBottom: "10px",
            }}>
                <PlaylistAddCheck sx={{
                    fontSize: "24px",
                    color: theme.palette.primary.LogoColor,
                    marginRight: "10px",
                }} />
                <Typography component={"h4"} sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    color: theme.palette.primary.LogoColor,
                }}
                >
                    Edit basic information
                </Typography>
            </Box>
            <Box sx={{
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                paddingBottom: "10px",
                marginBottom: "10px",
            }}>
                <Typography component={"p"} sx={{
                    fontSize: "15px",
                    fontWeight: "400",
                    color: theme.palette.primary.ParaColor,
                    textAlign: "left",
                }}
                >
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                </Typography>
            </Box>

            {userData &&
                <Box
                    component="form"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        marginTop: "20px",
                    }}
                >
                    <Box sx={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                    }}>
                        <TextField
                            sx={{
                                padding: "0",

                            }}
                            fullWidth
                            className="profile_input"
                            placeholder="name"
                            variant="outlined"
                            name="name"
                            size="small"
                            value={formData.name}
                            onChange={handleInputUpdate}
                        />

                    </Box>

                    <TextField
                        sx={{
                            padding: "0",
                        }}
                        className="profile_input"
                        fullWidth
                        disabled
                        placeholder="My email"
                        // type="email"
                        variant="outlined"
                        name="email"
                        size="small"
                        value={formData.email}
                        onChange={handleInputUpdate}

                    />
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                    }}>
                        {/* <FormControl className="form_imput" fullWidth>

                            <Select
                                sx={{
                                    padding: "0",
                                    textAlign: "left",
                                }}
                                // labelId="gender-label"
                                label="Date"
                            // placeholder="Date"
                            // value={day}
                            // defaultValue="Date"
                            // onChange={(e) => setBday(e.target.value)}
                            >
                                <MenuItem value="" disabled>Date</MenuItem>
                                <MenuItem value={"1"}>1</MenuItem>
                                <MenuItem value={"2"}>2</MenuItem>
                                <MenuItem value={"3"}>3</MenuItem>
                            </Select>
                        </FormControl> */}

                        <Select
                            sx={{
                                padding: "0",
                                textAlign: "left",
                            }}
                            // value={day}
                            value={selectedDate}
                            // onChange={handleInputUpdate}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': "Select a date" }}
                        >
                            <MenuItem value="" disabled>
                                {day ? day : "Select a date"}
                                {/* Select a date */}
                            </MenuItem>
                            {currentDates.map((date) => (
                                <MenuItem key={date} value={date}>
                                    {date}
                                </MenuItem>
                            ))}
                        </Select>

                        {/* <FormControl className="form_imput" fullWidth> */}
                        <Select
                            sx={{
                                padding: "0",
                                textAlign: "left",
                            }}
                            // labelId="gender-label"
                            // placeholder="Month"
                            value={selectedMonth}
                            onChange={handleChangeMonth}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Select a month' }}
                        >
                            <MenuItem value="" disabled>
                                {/* {month ? month : "Select a month"}   */}
                                {month ? months[month - 1] : "Select a month"}
                                {/* Select a month */}
                            </MenuItem>
                            {months.map((month, index) => (
                                <MenuItem key={index + 1} value={index + 1}>
                                    {month}
                                </MenuItem>
                            ))}
                        </Select>
                        {/* </FormControl> */}
                        {/* <FormControl className="form_imput" fullWidth> */}
                        <Select
                            sx={{
                                padding: "0",
                                textAlign: "left",
                            }}
                            id="select"
                            labelId="gender-label"
                            value={selectedYear}
                            onChange={handleChangeYear}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Select a year' }}
                        >
                            <MenuItem value="" disabled>
                                {year ? year : "Select a year"}
                            </MenuItem>
                            {years.map((year) => (
                                <MenuItem key={year} value={year}>
                                    {year}
                                </MenuItem>
                            ))}
                        </Select>
                        {/* </FormControl> */}
                    </Box>

                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="female"
                        name="gender"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "20px",
                            justifyContent: "start",
                            alignItems: "center",
                        }}
                        value={formData.gender}
                        onChange={handleInputUpdate}
                    >

                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    </RadioGroup>


                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                    }}>
                        <TextField
                            sx={{
                                padding: "0",
                                flex: "1",
                            }}
                            className="profile_input"
                            fullWidth
                            placeholder="Enter a new password"
                            variant="outlined"
                            name="password"
                            value={formData.password}
                            onChange={handleInputUpdate}
                        // error={Boolean(errors.password)}
                        // helperText={errors.password}
                        />
                        <TextField
                            sx={{
                                padding: "0",
                                flex: "1",
                            }}
                            className="profile_input"
                            fullWidth
                            placeholder="Confirm password"
                            variant="outlined"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputUpdate}
                        // value={userData.user.password}
                        // onChange={handleInputChange}
                        // error={Boolean(errors.password)}
                        // helperText={errors.password}
                        />
                    </Box>
                    <TextareaAutosize minRows={3} aria-label="empty textarea" placeholder="Work Description" value={formData.workDescription} onChange={handleInputUpdate} name='workDescription' />
                    <Button
                        sx={{
                            color: theme.palette.primary.White,
                            fontWeight: "bold",
                            fontSize: "18px",
                            letterSpacing: "1px",
                            textTransform: "capitalize",
                            background: theme.palette.primary.deepBlue,
                            borderRadius: "5px",
                            padding: "7px 0",
                            minHeight: "40px",
                            "&:hover": {
                                background: theme.palette.primary.White,
                                color: theme.palette.primary.deepBlue,
                            },
                        }}
                        variant="contained"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Save Changes
                    </Button>
                </Box>
            }


        </>
    )
}
const TextareaAutosize = styled(BaseTextareaAutosize)(
    ({ theme }) => `
      width: 100%;
      font-family: ${theme.palette.primary.MainFont1};
      font-size:14px;
      font-weight: 400;
      line-height: 1.5;
      padding: 8px 12px;
      border-radius: 4px;
      color: ${theme.palette.secondary.InputColor};
      background: transparent;
      border: 1px solid ${theme.palette.secondary.InputColor};
      box-shadow: none;
    
      &:hover {
        border-color: ${theme.palette.primary.LogoColor};
      }
    
      &:focus {
        border-color: ${theme.palette.primary.LogoColor};
        border-width: 1px;
        outline: 0;
        box-shadow: none;
      }
    
      // firefox
      &:focus-visible {
        outline: 0;
      }
    `,
);
export default BasicInformationDetails