import { Box, Typography } from '@mui/material'
import React from 'react'
import theme from '../Theme'
import { FavoriteBorder, Info, Lock, Tune, Work } from '@mui/icons-material'

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
            <Box sx={{ 
                marginTop: "30px",
             }}>
                <Box sx={{
                    paddingLeft: "15px",
                    borderLeft: `2px solid ${theme.palette.primary.Green}`,
                }}>
                    <Box component={"a"} href='#' sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        color: theme.palette.primary.Green,
                        gap: "15px",
                        borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                        paddingBottom: "15px",
                        "&:hover": {
                            borderBottom: `1px solid ${theme.palette.primary.Green}`,
                            color: theme.palette.primary.Green,
                        }
                    }}>
                        <Info sx={{
                            fontSize: "15px",
                        }} />
                        <Typography sx={{
                            fontSize: "15px",
                        }}>Basic Information</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    paddingLeft: "15px",
                    borderLeft: `2px solid ${theme.palette.primary.Green}`,
                }}>
                    <Box component={"a"} href='#' sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        color: theme.palette.primary.ParaColor,
                        gap: "15px",
                        borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                        paddingBottom: "15px",
                        "&:hover": {
                            borderBottom: `1px solid ${theme.palette.primary.Green}`,
                            color: theme.palette.primary.Green,
                        }
                    }}>
                        <Work sx={{
                            fontSize: "15px",
                        }} />
                        <Typography sx={{
                            fontSize: "15px",
                        }}>Education and Work</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    paddingLeft: "15px",
                    borderLeft: `2px solid ${theme.palette.primary.Green}`,
                }}>
                    <Box component={"a"} href='#' sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        color: theme.palette.primary.ParaColor,
                        gap: "15px",
                        borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                        paddingBottom: "15px",
                        "&:hover": {
                            borderBottom: `1px solid ${theme.palette.primary.Green}`,
                            color: theme.palette.primary.Green,
                        }
                    }}>
                        <FavoriteBorder sx={{
                            fontSize: "15px",
                        }} />
                        <Typography sx={{
                            fontSize: "15px",
                        }}>My Interests</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    paddingLeft: "15px",
                    borderLeft: `2px solid ${theme.palette.primary.Green}`,
                }}>
                    <Box component={"a"} href='#' sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        color: theme.palette.primary.ParaColor,
                        gap: "15px",
                        borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                        paddingBottom: "15px",
                        "&:hover": {
                            borderBottom: `1px solid ${theme.palette.primary.Green}`,
                            color: theme.palette.primary.Green,
                        }
                    }}>
                        <Tune sx={{
                            fontSize: "15px",
                        }} />
                        <Typography sx={{
                            fontSize: "15px",
                        }}>Account Settings</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    paddingLeft: "15px",
                    borderLeft: `2px solid ${theme.palette.primary.Green}`,
                }}>
                    <Box component={"a"} href='#' sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        color: theme.palette.primary.ParaColor,
                        gap: "15px",
                        borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                        paddingBottom: "15px",
                        "&:hover": {
                            borderBottom: `1px solid ${theme.palette.primary.Green}`,
                            color: theme.palette.primary.Green,
                        }
                    }}>
                        <Lock sx={{
                            fontSize: "15px",
                        }} />
                        <Typography sx={{
                            fontSize: "15px",
                        }}>Change Password</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ProfileSideBar