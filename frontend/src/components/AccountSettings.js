import { Tune } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import theme from '../Theme'
import styled from '@emotion/styled'
import Switch from '@mui/material/Switch';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { UPDATE_PROFILE } from '../Url';
import { useDispatch } from 'react-redux';
import { updateUserDetails } from '../redux/reducers/UserReducer';

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 60,
    height: 30,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        top: 2,
        left: 2,
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            right: 2,
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.Gray : theme.palette.primary.Green,
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: '0.5',
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: theme.palette.mode === 'light' ? '#bcc3ca' : '#707070',
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: '0.7',
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 32 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#878787',
        opacity: 1,
        transition: theme.transitions.create(['background-color']),
    },
}));
// const userData = useSelector((state) => state.UserReducer.value);
// console.log("userData_accountSetting", userData);

const AccountSettings = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.UserReducer.value);
   // console.log("userData_accountSetting", userData);
    const [selectFollowme, setSelectedFollowme] = useState();
    // const [selectFollowme, setSelectedFollowme] = useState(userData);   

useEffect(() => {
    setSelectedFollowme(userData.user.follow_me);
}, [userData.user.follow_me]);
    
    const handleChange = async (event) => {
         setSelectedFollowme(event.target.checked);
        // console.log("event.target.checked", event.target.checked);
      await  axios.put(UPDATE_PROFILE, { follow_me: event.target.checked }, {
            headers: {
                Authorization: `Bearer ${userData.token}`,
            },
        }).then((response) => {
            // console.log("response.data.data.user", response.data.data.user);
            if (response.data.status === true) {
                // console.log("response.data.data.user", response.data.data.user);
                dispatch(updateUserDetails(response.data.data.user));
            } else {
                
            }
        }).catch((error) => {
            console.log(error.response);
        });




        // setSelectedFollowme((prevUserData) => ({
        //     user: {
        //       ...prevUserData.user,
        //       follow_me: !prevUserData.user.follow_me,
        //     },
        //   }));
        // };
        // console.log("selectFollowme", selectFollowme);
        // await axios
        //     .put(UPDATE_PROFILE, { follow_me:  }, {
        //         headers: {
        //             Authorization: `Bearer ${userData.token}`,
        //         },
        //     })
        //     .then((response) => {
        //         if (response.data.status === true) {
        //             // setMessageType("success");
        //             // setMessage(response.data.message);
        //             console.log("response.data.data.user", response.data.data.user);
        //             dispatch(updateUserDetails(response.data.data.user));
        //             // userData.user.follow_me = response.data.data.follow_me;
        //             // console.log("userData", userData);
        //             // dispatch(userDetails(userData));
        //         } else {
        //             // setMessageType("error");
        //             // setMessage(response.data.message);
        //             console.log("response.data.message", response.data.message);
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error.response);
        //     });
    };

    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                paddingBottom: "10px",
                marginBottom: "15px",
            }}>
                <Tune sx={{
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
                    Account Settings
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
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
                marginBottom: "15px",
                paddingBottom: "15px",
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                textAlign: "left",
            }}>
                <Box flex={"5"}>
                    <Typography sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        lineHeight: "26px",
                        color: theme.palette.primary.ParaColor,
                        marginBottom: "5px",

                    }}>Enable follow me</Typography>
                    <Typography sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: theme.palette.primary.ParaColor,


                    }}>Enable this if you want people to follow you</Typography>
                </Box>
                <Box flex={"0.4"} sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}>
                    {/* <IOSSwitch className="toggleSwitch"
                        checked={userData.user.follow_me}
                        onChange={handleChange}
                    /> */}
                    <IOSSwitch className="toggleSwitch"
                    

                        checked={selectFollowme}
                        onChange={handleChange}
                    />
                </Box>
            </Box>
        </>
    )
}

export default AccountSettings