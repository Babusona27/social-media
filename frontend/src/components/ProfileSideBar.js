import { Box, List, Typography } from '@mui/material'
import React from 'react'
import theme from '../Theme'
import { Favorite, Info, Lock, Tune, Work } from '@mui/icons-material'

const ProfileSideBar = () => {

    return (
        <Box>
            <Typography sx={{
                fontSize: "22px",
                fontWeight: "500",
                color: theme.palette.primary.LogoColor,
                marginBottom: "10px",
            }}>Sarah Cruiz
            </Typography>
            <Typography sx={{
                fontSize: "13px",
                fontWeight: "400",
                color: theme.palette.primary.ParaColor,
                marginBottom: "10px",
            }}>Creative Director
            </Typography>
            <List sx={{
                marginTop: "30px",
            }}>

                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0px 15px",
                    marginBottom: "10px",
                    textAlign: "left",
                }}>
                    <Info sx={{
                        color: "#00b8d4",
                        fontSize: "18px",
                        marginRight: "10px",
                        marginBottom: "10px",
                    }} />
                    <Typography component={"a"} href='#' sx={{
                        color: theme.palette.primary.ParaColor,
                        fontSize: "16px",
                        borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
                        width: "100%",
                        fontWeight: "600",
                        paddingBottom: "10px",
                        transition: "all .3s ease",
                        "&:hover": {
                            color: theme.palette.primary.LogoColor,
                            borderBottom: `1px solid ${theme.palette.primary.LogoColor}`,
                            paddingLeft: "15px"
                        },
                    }}>Basic Information</Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 15px",
                    marginBottom: "10px",
                    textAlign: "left",
                }}>
                    <Work sx={{
                        color: "#6200ea",
                        fontSize: "18px",
                        marginRight: "10px",
                        marginBottom: "10px",
                    }} />
                    <Typography component={"a"} href='#' sx={{
                        color: theme.palette.primary.ParaColor,
                        fontSize: "16px",
                        borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
                        width: "100%",
                        fontWeight: "600",
                        paddingBottom: "10px",
                        transition: "all .3s ease",
                        "&:hover": {
                            color: theme.palette.primary.LogoColor,
                            borderBottom: `1px solid ${theme.palette.primary.LogoColor}`,
                            paddingLeft: "15px"
                        },
                    }}>Education and Work</Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 15px",
                    marginBottom: "10px",
                    textAlign: "left",
                }}>
                    <Favorite sx={{
                        color: "#aa00ff",
                        fontSize: "18px",
                        marginRight: "10px",
                        marginBottom: "10px",
                    }} />
                    <Typography component={"a"} href='#' sx={{
                        color: theme.palette.primary.ParaColor,
                        fontSize: "16px",
                        borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
                        width: "100%",
                        fontWeight: "600",
                        paddingBottom: "10px",
                        transition: "all .3s ease",
                        "&:hover": {
                            color: theme.palette.primary.LogoColor,
                            borderBottom: `1px solid ${theme.palette.primary.LogoColor}`,
                            paddingLeft: "15px"
                        },
                    }}>My Interests</Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 15px",
                    marginBottom: "10px",
                    textAlign: "left",
                }}>
                    <Tune sx={{
                        color: "#1a237e",
                        fontSize: "18px",
                        marginRight: "10px",
                        marginBottom: "10px",
                    }} />
                    <Typography component={"a"} href='#' sx={{
                        color: theme.palette.primary.ParaColor,
                        fontSize: "16px",
                        borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
                        width: "100%",
                        fontWeight: "600",
                        paddingBottom: "10px",
                        transition: "all .3s ease",
                        "&:hover": {
                            color: theme.palette.primary.LogoColor,
                            borderBottom: `1px solid ${theme.palette.primary.LogoColor}`,
                            paddingLeft: "15px"
                        },
                    }}>Account Settings</Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 15px",
                    marginBottom: "10px",
                    textAlign: "left",
                }}>
                    <Lock sx={{
                        color: "#00c853",
                        fontSize: "18px",
                        marginRight: "10px",
                        marginBottom: "10px",
                    }} />
                    <Typography component={"a"} href='#' sx={{
                        color: theme.palette.primary.ParaColor,
                        fontSize: "16px",
                        borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
                        width: "100%",
                        fontWeight: "600",
                        paddingBottom: "10px",
                        transition: "all .3s ease",
                        "&:hover": {
                            color: theme.palette.primary.LogoColor,
                            borderBottom: `1px solid ${theme.palette.primary.LogoColor}`,
                            paddingLeft: "15px"
                        },
                    }}>Change Password</Typography>
                </Box>

            </List>
        </Box>
    )
}

export default ProfileSideBar