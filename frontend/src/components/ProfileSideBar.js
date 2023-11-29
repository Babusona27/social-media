import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import theme from '../Theme'
import { FavoriteBorder, Info, Lock, Tune, Work } from '@mui/icons-material'

const ProfileSideBar = () => {

    const [activeBox, setActiveBox] = useState(false);

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
                    borderLeft: `1px solid ${activeBox === 'box1' ? theme.palette.primary.Green : 'transparent'}`,
                }}>
                    <Box component={"a"} href='#' onClick={() => setActiveBox("box1")} sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        color: ` ${activeBox === 'box1' ? theme.palette.primary.Green : theme.palette.primary.ParaColor}`,
                        gap: "15px",
                        borderBottom: `1px solid ${activeBox === 'box1' ? theme.palette.primary.Green : theme.palette.primary.Gray}`,
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
                    borderLeft: `1px solid ${activeBox === 'box2' ? theme.palette.primary.Green : 'transparent'}`,
                }}>
                    <Box component={"a"} href='#' onClick={() => setActiveBox("box2")} sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        color: ` ${activeBox === 'box2' ? theme.palette.primary.Green : theme.palette.primary.ParaColor}`,
                        gap: "15px",
                        borderBottom: `1px solid ${activeBox === 'box2' ? theme.palette.primary.Green : theme.palette.primary.Gray}`,
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
                    borderLeft: `1px solid ${activeBox === 'box3' ? theme.palette.primary.Green : 'transparent'}`,
                }}>
                    <Box component={"a"} href='#' onClick={() => setActiveBox("box3")} sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        color: ` ${activeBox === 'box3' ? theme.palette.primary.Green : theme.palette.primary.ParaColor}`,
                        gap: "15px",
                        borderBottom: `1px solid ${activeBox === 'box3' ? theme.palette.primary.Green : theme.palette.primary.Gray}`,
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
                    borderLeft: `1px solid ${activeBox === 'box4' ? theme.palette.primary.Green : 'transparent'}`,
                }}>
                    <Box component={"a"} href='#' onClick={() => setActiveBox("box4")} sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        color: ` ${activeBox === 'box4' ? theme.palette.primary.Green : theme.palette.primary.ParaColor}`,
                        gap: "15px",
                        borderBottom: `1px solid ${activeBox === 'box4' ? theme.palette.primary.Green : theme.palette.primary.Gray}`,
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
                    borderLeft: `1px solid ${activeBox === 'box5' ? theme.palette.primary.Green : 'transparent'}`,
                }}>
                    <Box component={"a"} href='#' onClick={() => setActiveBox("box5")} sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        color: ` ${activeBox === 'box5' ? theme.palette.primary.Green : theme.palette.primary.ParaColor}`,
                        gap: "15px",
                        borderBottom: `1px solid ${activeBox === 'box5' ? theme.palette.primary.Green : theme.palette.primary.Gray}`,
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