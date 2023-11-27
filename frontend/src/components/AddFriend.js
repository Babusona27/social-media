import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import theme from '../Theme'

const AddFriend = () => {
    return (
        <Box sx={{
            display: "flex",
            borderBottom: `1px solid ${theme.palette.primary.Gray}`,
            paddingBottom: "20px",
            marginBottom: "20px",
        }}>
            <Box flex={"1"} padding={"0 10px"}>
                <Avatar
                    alt="Remy Sharp"
                    src="/assets/images/profileImg.jpg"
                    sx={{
                        marginRight: "5px",
                        height: "80px",
                        width: "80px",
                        borderRadius: "50%",
                    }}
                />
            </Box>
            <Box flex={"5"} padding={"0 10px"}>
                <Typography sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: theme.palette.primary.LogoColor,
                    "&:hover": {
                        textDecoration: "underline"
                    }
                }}

                    component={"a"} href='#' variant="body2" color="text.secondary">
                    Alexis Clark
                </Typography>
                <Typography sx={{
                    fontSize: "13px",
                    lineHeight: "26px",
                    color: theme.palette.primary.ParaColor,
                }}>Software Engineer
                </Typography>
                <Typography sx={{
                    fontSize: "13px",
                    lineHeight: "26px",
                    color: theme.palette.primary.LightGray1,
                }}>500m away
                </Typography>
            </Box>
            <Box flex={"2"} margin={"0 10px"}>
                <Box
                    component={"a"} href='#'>
                    <Typography
                        sx={{
                            color: theme.palette.primary.White,
                            fontSize: "14px",
                            fontWeight: "600",
                            backgroundColor: theme.palette.primary.LogoColor,
                            borderRadius: "30px",
                            padding: "7px 25px",
                            marginLeft: "10px",
                            textAlign: "center",
                            "&:hover": {
                                backgroundColor: theme.palette.primary.LogoColor,
                            },
                        }}
                    >Add Friend</Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default AddFriend