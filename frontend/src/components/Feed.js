import { ThumbDownAlt, ThumbUpAlt } from '@mui/icons-material'
import { Avatar, Box, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import React from 'react'
import theme from '../Theme'

const Feed = () => {


    return (
        <Card sx={{
            boxShadow: "none",
            border: `1px solid ${theme.palette.primary.Gray}`,
            marginBottom: "20px",
        }}>
            <CardMedia
                component="img"
                height="194"
                image={
                    process.env.PUBLIC_URL + "/assets/images/profileImg.jpg"
                }
                alt="Paella dish"
            />

            <Box sx={{
                display: "flex",
                padding: "20px",
                background: theme.palette.primary.LightBlue,
            }}>
                <Box flex={"1"}>
                    <Box>
                        <Avatar
                            alt="Remy Sharp"
                            src={
                                process.env.PUBLIC_URL + "/assets/images/profileImg.jpg"
                            }
                            sx={{
                                float: "left",
                                marginRight: "5px",
                                position: "relative",
                                height: "70px",
                                width: "70px",
                                borderRadius: "50%",
                            }}
                        />
                    </Box>
                </Box>
                <Box flex={"6"} sx={{

                    marginRight: "10px",
                    marginLeft: "10px",
                }}>
                    <Box sx={{
                        display: "flex",
                        paddingBottom: "15px",
                        borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                    }}>
                        <Box flex={"6"}>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "10px",
                                marginBottom: "10px",
                            }}>
                                <Typography sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    color: theme.palette.primary.LogoColor,
                                    "&:hover": {
                                        color: theme.palette.primary.Green,
                                    }
                                }}

                                    component={"a"} href='#' variant="body2" color="text.secondary">
                                    Alexis Clark
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight: "500",
                                        marginLeft: "16px",
                                        color: theme.palette.primary.Green,
                                    }}
                                    variant="body2" color="text.secondary">
                                    following
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    fontSize: "13px",
                                    color: theme.palette.primary.LightGray1,
                                }}>Published a photo about 3 mins ago</Typography>
                        </Box>
                        <Box flex={"1.2"} sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <Box component={"a"} href='#' sx={{
                                display: "flex",
                                alignItems: "center",
                                color: theme.palette.primary.Green,
                                gap: "5px",
                            }}>
                                <ThumbUpAlt sx={{
                                    fontSize: "14px",
                                }} />
                                <Typography sx={{
                                    fontSize: "14px",
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
                                    fontSize: "14px",
                                }} />
                                <Typography sx={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                }} >0</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <CardContent sx={{
                        padding: "15px 0 0 0",
                        paddingBottom: "0 !important",
                    }}>
                        <Typography component={"p"} sx={{
                            paddingBottom: "10px",
                            marginBottom: "10px",
                            borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                            fontSize: "13px",
                            lineHeight: "24px",
                            color: theme.palette.primary.ParaColor,
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>

                        <Box sx={{
                            display: "flex",
                            margin: "20px 0",
                        }}>
                            <Avatar
                                alt="Remy Sharp"
                                src={
                                    process.env.PUBLIC_URL + "/assets/images/profileImg.jpg"
                                }
                                sx={{
                                    marginRight: "10px",
                                    height: "40px",
                                    width: "40px",
                                    borderRadius: "50%",
                                }}
                            />

                            <Typography component={"p"} sx={{
                                fontSize: "13px",
                                lineHeight: "26px",
                                color: theme.palette.primary.ParaColor,
                            }}>
                                <Box sx={{
                                    color: theme.palette.primary.LogoColor,
                                    fontWeight: "600",
                                    marginRight: "5px",
                                    "&:hover": {
                                        color: theme.palette.primary.Green,
                                    }
                                }
                                }
                                    component={"a"} href='#'
                                >Diana</Box>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            margin: "20px 0",
                        }}>
                            <Avatar
                                alt="Remy Sharp"
                                src={
                                    process.env.PUBLIC_URL + "/assets/images/profileImg.jpg"
                                }
                                sx={{
                                    marginRight: "10px",
                                    height: "40px",
                                    width: "40px",
                                    borderRadius: "50%",
                                }}
                            />

                            <Typography component={"p"} sx={{
                                fontSize: "13px",
                                lineHeight: "26px",
                                color: theme.palette.primary.ParaColor,
                            }}>
                                <Box sx={{
                                    color: theme.palette.primary.LogoColor,
                                    fontWeight: "600",
                                    marginRight: "5px",
                                    "&:hover": { 
                                        color: theme.palette.primary.Green,
                                    }
                                }
                                }
                                    component={"a"} href='#'
                                >Diana</Box>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            margin: "20px 0",
                        }}>
                            <Avatar
                                alt="Remy Sharp"
                                src={
                                    process.env.PUBLIC_URL + "/assets/images/profileImg.jpg"
                                }
                                sx={{
                                    marginRight: "10px",
                                    height: "40px",
                                    width: "40px",
                                    borderRadius: "50%",
                                }}
                            />
                            <Box sx={{
                                width: "100%",
                            }}>
                                {/* <TextField sx={{ 
                                    width: "100%",
                                    cursor: "auto",
                                 }} id="outlined-basic" label="Post a comment" variant="outlined" /> */}

                                <TextField
                                    sx={{
                                        padding: "0",
                                    }}
                                    className="comment_input"
                                    fullWidth
                                    label="Enter name"
                                    variant="outlined"
                                />
                            </Box>
                        </Box>

                    </CardContent>
                </Box>
            </Box>

        </Card>
    )
}

export default Feed