import { Avatar, Box, Typography, } from '@mui/material'
import React from 'react'
import theme from '../Theme'

const FriendListCard = () => {
    return (
        <Box sx={{
            width: "48%",
        }}>
            <Box sx={{
                background: `${theme.palette.primary.CoverBgGradient}, url(${process.env.PUBLIC_URL + "/assets/images/sidebarHeaderBg.jpg"}) no-repeat`,
                backgroundSize: "cover",
                width: "100%",
                minHeight: "120px",
                borderRadius: "4px",
            }}
            > </Box>
            <Box sx={{
                paddingBottom: "10px",
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
             }}>
                <Box sx={{
                    padding: "0 20px 10px",
                    marginTop: "-50px",
                }}>
                    <Box>
                        <Avatar
                            alt="Remy Sharp"
                            src="/assets/images/profileImg.jpg"
                            sx={{
                                border: "7px solid #fff",
                                marginRight: "20px",
                                position: "relative",
                                // top: "75px",
                                height: "80px",
                                width: "80px",
                                borderRadius: "50%",
                            }}
                        />
                    </Box>
                    <Box sx={{
                        display: "flex",
                        margin: "10px 0",
                    }}>

                        <Box flex={"3"}>
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
                        </Box>
                        <Box flex={"1"}>
                            <Typography sx={{
                                fontSize: "13px",
                                fontWeight: "500",
                                color: theme.palette.primary.Green,
                                "&:hover": {
                                    textDecoration: "underline"
                                }
                            }}

                                component={"a"} href='#' variant="body2" color="text.secondary">
                                My Friend
                            </Typography>
                        </Box>

                    </Box>
                    <Typography sx={{
                        fontSize: "13px",
                        fontWeight: "500",
                        color: theme.palette.primary.ParaColor,
                    }}>
                        Student at Harvard
                    </Typography>

                </Box>
            </Box>

        </Box>
    )
}

export default FriendListCard