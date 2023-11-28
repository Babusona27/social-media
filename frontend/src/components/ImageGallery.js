import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import theme from '../Theme'
import { ThumbDownAlt, ThumbUpAlt } from '@mui/icons-material'

const ImageGallery = () => {
    return (
        <Box sx={{
            width: "48%",
        }}>
            <Box sx={{
                backgroundColor: theme.palette.primary.LightBlue,
                borderRadius: "5px",
                border: `1px solid ${theme.palette.primary.GalleryBorder}`,
            }}>
                <Box sx={{
                    position: 'relative',
                    transition: 'all 0.5s ease-in-out',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 3,
                        left: 0,
                        background: 'rgba(0, 0, 0, 0)',
                        // cursor: 'pointer',
                        transition: 'all 0.5s ease-in-out',
                    },
         
                    '&:hover::after': {
                        background: theme.palette.primary.GalleryBorder,
                    }
                }}>

                    <Box sx={{
                        borderRadius: "5px 5px 0 0",
                    }}
                        component={"img"}
                        src={
                            process.env.PUBLIC_URL + "/assets/images/userFace.jpg"
                        }
                    />
                </Box>
                <Box sx={{
                    padding: "10px",
                }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 12px 15px",
                        gap: "20px",
                        borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                    }}>
                        <Box component={"a"} href='#' sx={{
                            display: "flex",
                            alignItems: "center",
                            color: theme.palette.primary.Green,
                            gap: "5px",
                        }}>
                            <ThumbUpAlt sx={{
                                fontSize: "16px",
                            }} />
                            <Typography sx={{
                                fontSize: "16px",
                                fontWeight: "400",
                            }} >13</Typography>
                        </Box>
                        <Box component={"a"} href='#' sx={{
                            display: "flex",
                            alignItems: "center",
                            color: theme.palette.secondary.main,
                            gap: "5px",
                        }}>
                            <ThumbDownAlt sx={{
                                fontSize: "16px",
                            }} />
                            <Typography sx={{
                                fontSize: "16px",
                                fontWeight: "400",
                            }} >0</Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        padding: "15px 0 10px",
                    }}>
                        <Avatar
                            alt="Remy Sharp"
                            src={
                                process.env.PUBLIC_URL + "/assets/images/userFace.jpg"
                            }
                            sx={{
                                float: "left",
                                marginRight: "20px",
                                position: "relative",
                                height: "40px",
                                width: "40px",
                                borderRadius: "50%",
                            }}
                        />

                        <Box sx={{
                            width: "100%",
                        }}>
                            <Box sx={{
                                margin: "0 0 5px 0",
                            }}>
                                <Typography sx={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: theme.palette.primary.LogoColor,
                                    "&:hover": {
                                        textDecoration: "underline"
                                    }
                                }}

                                    component={"a"} href='#' variant="body2" color="text.secondary">
                                    Alexis Clark
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    fontSize: "13px",
                                    fontWeight: "500",
                                    color: theme.palette.primary.Green,
                                    "&:hover": {
                                        textDecoration: "underline"
                                    }
                                }}

                                    component={"a"} href='#' variant="body2" color="text.secondary">
                                    Friend
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default ImageGallery