import { Send, ThumbDownAlt, ThumbUpAlt } from '@mui/icons-material'
import { Avatar, Box, Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import theme from '../Theme'
import { useSelector } from 'react-redux'
const Feed = () => {
    const feedData = useSelector((state) => state.FeedListReducer.value);
    console.log(feedData);

    const getFeedPublishTime = (date) => {
        const currentDate = new Date();
        const feedDate = new Date(date);
        const diffTime = Math.abs(currentDate - feedDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
        const diffMinutes = Math.ceil(diffTime / (1000 * 60));
        const diffSeconds = Math.ceil(diffTime / (1000));
        if (diffDays > 1) {
            return `${diffDays} days ago`;
        } else if (diffHours > 1) {
            return `${diffHours} hours ago`;
        } else if (diffMinutes > 1) {
            return `${diffMinutes} minutes ago`;
        } else {
            return `${diffSeconds} seconds ago`;
        }
    }
    const [open, setOpen] = useState(false);

    return (
        Array.isArray(feedData) && feedData.map((item, key) => (
            <Card sx={{
                boxShadow: "none",
                borderLeft: `1px solid ${theme.palette.primary.Gray}`,
                borderRight: `1px solid ${theme.palette.primary.Gray}`,
                borderRadius: "10px 10px 0 0",

            }} key={key}>
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
                                    height: {
                                        xs: "50px",
                                        sm: "70px",
                                        md: "70px",
                                        lg: "70px",
                                    },
                                    width: {
                                        xs: "50px",
                                        sm: "70px",
                                        md: "70px",
                                        lg: "70px",
                                    },
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
                                    }}>{getFeedPublishTime(item.createdAt)}</Typography>

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
                                {item.description}
                            </Typography>

                            {/* <Box sx={{
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
                            </Box> */}
                            <Box className='ChatRoomLeftBar' sx={{
                                padding: "20px 0px",
                                maxHeight: "180px",
                                overflowY: "scroll",
                                height: "fit-content",
                                overflowX: "hidden",
                            }}>
                                {item.comment.map((comment, key) => (
                                    <Box>
                                     <Box sx={{
                                        display: "flex",
                                        margin: "20px 0",
                                    }} key={key}>
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
                                            {comment.comment}

                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: theme.palette.primary.MainFont1,
                                            fontSize: "14px",
                                            lineHeight: "1",
                                            color: theme.palette.primary.LogoColor,
                                            cursor: "pointer",
                                            padding: "5px 10px",
                                        }} onClick={() => setOpen(true)}>Reply</Typography>

                                        <Dialog sx={{
                                            padding: "20px !important",
                                        }} open={open} fullWidth maxWidth="sm" onClose={() => setOpen(false)}>
                                            <DialogTitle component={"h3"} sx={{
                                                fontFamily: theme.palette.primary.MainFont1,
                                                fontSize: "25px",
                                                lineHeight: "1",
                                                fontWeight: "600",
                                                paddingTop: "20px",
                                            }}>Reply to Comment</DialogTitle>
                                            <DialogContent>
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    id="name"
                                                    label="Your Reply"
                                                    type="text"
                                                    fullWidth
                                                />
                                            </DialogContent>
                                            <DialogActions sx={{
                                                padding: "20px",
                                                paddingTop: "0px",
                                            }}>
                                                <Button sx={{
                                                    color: theme.palette.primary.White,
                                                    fontSize: "14px",
                                                    fontWeight: "600",
                                                    lineHeight: "26px",
                                                    backgroundColor: theme.palette.primary.LogoColor,
                                                    fontFamily: theme.palette.primary.MainFont1,
                                                    borderRadius: "30px",
                                                    padding: "7px 25px",
                                                    width: "fit-content",
                                                    marginRight: "0px",
                                                    "&:hover": {
                                                        backgroundColor: theme.palette.primary.Green,
                                                    },
                                                }} onClick={() => setOpen(false)}>Cancel</Button>
                                                <Button sx={{
                                                    color: theme.palette.primary.LogoColor,
                                                    fontSize: "14px",
                                                    fontWeight: "600",
                                                    lineHeight: "26px",
                                                    backgroundColor: theme.palette.primary.White,
                                                    border: `1px solid ${theme.palette.primary.LogoColor}`,
                                                    fontFamily: theme.palette.primary.MainFont1,
                                                    borderRadius: "30px",
                                                    padding: "7px 25px",
                                                    width: "fit-content",
                                                    marginRight: "0px",
                                                    "&:hover": {
                                                        backgroundColor: theme.palette.primary.LogoColor,
                                                        color: theme.palette.primary.White,
                                                    },
                                                }} onClick={() => {
                                                    // Handle reply submission
                                                    setOpen(false);
                                                }}>Submit</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </Box>
                                    {/* reply box  */}
                                    <Box className="reply" sx={{
                                        display: "flex",
                                        margin: "20px 30px",
                                        position: "relative",
                                        "&::before": {
                                            content: "''",
                                            position: "absolute",
                                            top: "-34px",
                                            left: "-14px",
                                            width: "30px",
                                            height: "60px",
                                            borderLeft: `1px solid ${theme.palette.primary.Green}`,
                                            borderBottom: `1px solid ${theme.palette.primary.Green}`,
                                        },
                                    }} key={key}>
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
                                            {comment.comment}

                                        </Typography>
                                     
                                    </Box>
                                    </Box>
                                   
                                    
                                ))}
                            </Box>




                        </CardContent>
                    </Box>
                </Box>


            </Card>
        ))

    )
}

export default Feed