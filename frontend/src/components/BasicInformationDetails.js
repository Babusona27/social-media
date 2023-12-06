import { PlaylistAddCheck } from '@mui/icons-material'
import { Box, Button, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import theme from '../Theme'
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_PROFILE } from '../Url';
import axios from 'axios';
import { updateUserDetails } from '../redux/reducers/UserReducer';
import CustomAlert from "./CustomAlert";

const BasicInformationDetails = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.UserReducer.value);
    const { showAlert, AlertComponent } = CustomAlert();


    const [formData, setFormData] = useState({
        name: userData.user.name,
        email: userData.user.email,
        gender: userData.user.gender,
        dob: "",
        password: "",
        confirmPassword: "",
        workDescription: userData.user.work_description?userData.user.work_description:"",

    });

    useEffect(() => {
    }, []);

    const [errors, setErrors] = useState({
        name: "",
        dob: "",
        password: "",
        confirmPassword: ""
    });


    // Function to handle form input changes
    const handleInputUpdate = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Reset the corresponding validation error when the user types
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formData", formData);
        let isValid = true;
        const newErrors = { ...errors };
        if (!formData.name.trim()) {
            isValid = false;
            newErrors.name = "Name is required";
        }



        if (formData.password !== "" && formData.confirmPassword !== "" && formData.password !== formData.confirmPassword) {
            isValid = false;
            newErrors.confirmPassword = "Password and Confirm Password should be same";
        }
        setErrors(newErrors);

        // remove empty fields from formData
        const formDataCopy = { ...formData };
        Object.keys(formDataCopy).forEach((key) => {
            if (formDataCopy[key] === "") {
                delete formDataCopy[key];
            }
        });
        // remove email from formDataCopy
        delete formDataCopy.email;
        delete formDataCopy.confirmPassword;
     
        console.log("formDataCopy", formDataCopy);

        if (isValid) {
            //update code here
            axios
                .put(UPDATE_PROFILE, formDataCopy, {
                    headers: {
                        Authorization: `Bearer ${userData.token}`,
                    }
                })
                .then((response) => {             
                 if(response.data.status === true){                   
                    dispatch(updateUserDetails(response.data.data.user));
                   showAlert("success", response.data.message);
                 }else{
                    showAlert("error", response.data.message);
                 }
                })
                .catch((err) => {
                    console.log(err.response);
                    if (err.response) {
                      showAlert("error", err.response.data.message);
                    }
                });

        }
    }
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
                            error={Boolean(errors.name)}
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
                            error={Boolean(errors.password)}
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

                            error={Boolean(errors.confirmPassword)}
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
                    <AlertComponent />
                </Box>
            }


        </>
    )
}

export default BasicInformationDetails