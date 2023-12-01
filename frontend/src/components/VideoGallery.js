import { Avatar, Box, Card, CardContent, Modal, TextField, Typography } from '@mui/material'
import React from 'react'
import theme from '../Theme'
import { ThumbDownAlt, ThumbUpAlt } from '@mui/icons-material'
const style = {
    position: "absolute",
    top: {
        xs: "39%",
        sm: "40%",
        md: "50%",
        lg: "50%",
      },
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: {
        xs: "100%",
        sm: "85%",
        md: "48%",
        lg: "48%",
      },
    bgcolor: "background.paper",
    border:`1px solid ${theme.palette.primary.LogoColor}`,
    boxShadow: 24,
    margin: "130px 0px 50px 0px",
  };
const VideoGallery = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{
            width: {
                xs: "100%",
                sm: "100%",
                md: "48%",
                lg: "48%",
              },
        }}>
            <Box sx={{
                backgroundColor: theme.palette.primary.LightBlue,
                borderRadius: "5px",
                border: `1px solid ${theme.palette.primary.GalleryBorder}`,
            }}>
                {/* <Box sx={{
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
                        transition: 'all 0.5s ease-in-out',
                    },

                    '&:hover::after': {
                        background: theme.palette.primary.GalleryBorder,
                    }
                }}> */}
                    <Card
                        sx={{
                            boxShadow: "none",
                            height: "100%",
                            display: "flex",
                        }}>
                        <CardContent sx={{
                            padding: "0px",
                            paddingBottom: "0px !important",
                            height: "100%",
                            zIndex: "9",
                        }}>

                            <Modal
                                sx={{
                                    zIndex: "999",
                                    overflowY: "scroll"

                                }}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <video onClick={handleOpen}
                                        sx={{
                                            bordeRadius: "5px 5px 0 0",
                                        }}
                                        type="video/mp4" width="100%" controls
                                        src={
                                            process.env.PUBLIC_URL + "/assets/videos/natureVideo.mp4"
                                        }
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                    <Card className='ChatRoomLeftBar' sx={{
                                        boxShadow: "none",
                                        maxHeight: "400px",
                                        overflowY: "scroll",
                                    }}>

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
                                                                    textDecoration: "underline"
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
                                                                    textDecoration: "underline"
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
                                                                    textDecoration: "underline"
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

                                                            <TextField
                                                                sx={{
                                                                    padding: "0",
                                                                }}
                                                                className="comment_input"
                                                                fullWidth
                                                                label="Post a comment"
                                                                variant="outlined"
                                                            />
                                                        </Box>
                                                    </Box>

                                                </CardContent>
                                            </Box>
                                        </Box>

                                    </Card>
                                </Box>
                            </Modal>
                            
                            <Box component={"img"} onClick={handleOpen}
                                sx={{
                                    bordeRadius: "5px 5px 0 0",
                                    cursor: "pointer",
                                }}
                                src={
                                    process.env.PUBLIC_URL + "/assets/images/profileImg.jpg"
                                }
                            >
                            </Box>

                        </CardContent>



                    </Card>

                {/* </Box> */}
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

export default VideoGallery