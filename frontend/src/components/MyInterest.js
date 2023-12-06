import { CameraAlt, DirectionsBike, Favorite, Flight, LocalDining, ShoppingCart } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import theme from '../Theme'
import { useSelector } from 'react-redux'
import { useState } from 'react';
import axios from 'axios';
import { UPDATE_PROFILE } from '../Url';
import { useDispatch } from 'react-redux';
import { updateUserDetails } from '../redux/reducers/UserReducer';


const MyInterest = () => {
    const userData = useSelector((state) => state.UserReducer.value);
    const dispatch = useDispatch();
    console.log("userData_interest", userData.user.hobbies);
    const [formData, setFormData] = useState({
        interest: ""
    });
    const handleInputUpdate = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Reset the corresponding validation error when the user types
        // setErrors({ ...errors, [name]: "" });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formData==>", formData);

        let hobbies = [];
        hobbies.push(formData.interest);


        axios
            .put(UPDATE_PROFILE, { "hobbies":hobbies }, {
                headers: {
                    Authorization: `Bearer ${userData.token}`,
                },
            })
            .then((res) => {
                console.log("res", res);
                dispatch(updateUserDetails(res.data.data.user));
            })
            .catch((err) => {
                console.log("err", err);
            });
    }
    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                paddingBottom: "10px",
                marginBottom: "15px",
            }}>
                <Favorite sx={{
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
                    My Interests
                </Typography>
            </Box>
            <Box sx={{
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                paddingBottom: "10px",
                marginBottom: "15px",
            }}>
                <Typography component={"p"} sx={{
                    fontSize: "15px",
                    fontWeight: "400",
                    color: theme.palette.primary.ParaColor,
                    textAlign: "left",
                }}
                >
                    {userData.user.work_description ? userData.user.work_description : "Add your work description"}

                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
            }}>
                {userData.user.hobbies.map((item,key) => {

                    <Box component={"a"} href='#' sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        color: theme.palette.primary.White,
                        backgroundColor: theme.palette.primary.Green,
                        padding: "5px 15px",
                        borderRadius: "40px",
                    }}>
                        <DirectionsBike sx={{
                            fontSize: "18px",
                        }} />
                        <Typography sx={{
                            fontSize: "15px",
                            lineHeight: "26px",
                            color: theme.palette.primary.White,
                            "&:hover": {
                                textDecoration: "underline",
                            }
                        }}>
                            {item}
                        </Typography>
                    </Box>

                }
                )}


            </Box >
            <Box sx={{
                marginTop: "20px",
                textAlign: "left",
            }}>
                <Typography component={"P"} sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: theme.palette.primary.ParaColor,
                    marginBottom: "10px",
                }}>
                    Add interests
                </Typography>
                <Box component={"form"} sx={{
                    display: "flex",
                    gap: "20px",
                }}>
                    <TextField className='profile_input'
                        sx={{
                            width: "70%",
                        }}
                        label="Interests. For example, photography"
                        variant="outlined"
                        name='interest'
                        onChange={handleInputUpdate}
                        value={formData.interest}

                    />
                    <Button sx={{
                        color: theme.palette.primary.White,
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "26px",
                        backgroundColor: theme.palette.primary.LogoColor,
                        borderRadius: "30px",
                        padding: "7px 25px",
                        width: "30%",
                        "&:hover": {
                            backgroundColor: theme.palette.primary.LogoColor,
                        }
                    }} variant="contained" color="primary"
                        onClick={handleSubmit} >
                        Add
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default MyInterest