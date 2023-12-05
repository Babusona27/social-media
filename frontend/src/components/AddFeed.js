import React, { useEffect, useState } from 'react'
import { Avatar, Box, Typography, Modal, Button, TextField } from '@mui/material';
import theme from '../Theme';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { FEED_POST } from '../Url';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { EditNote, Map, Photo, Videocam, Close } from '@mui/icons-material';
import { addFeed } from '../redux/reducers/FeedListReducer';
const AddFeed = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.UserReducer.value);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(userData);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        feedType: "text",
    });

    const _createFeed = () => {
        axios.post(FEED_POST, formData, {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }).then((res) => {
            if (res.data.status) {
                dispatch(addFeed(res.data.data.feedList));
            }
            handleClose();
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {

    }, [])
    return (
        <Box
            sx={{
                paddingBottom: "20px",
                marginBottom: "20px",
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
            }}
        >
            <Box sx={{
                display: {
                    xs: "block",
                    sm: "flex",
                    md: "flex",
                    lg: "flex",
                },
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Box flex={"2"} sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 10px",
                }}>
                    <Avatar
                        alt="Remy Sharp"
                        src={
                            process.env.PUBLIC_URL + "/assets/images/profileImg.jpg"
                        }
                        sx={{
                            border: "7px solid #fff",
                            float: "left",
                            marginRight: "5px",
                            position: "relative",
                            height: "70px",
                            width: "70px",
                            borderRadius: "50%",
                        }}
                    />
                    <Box sx={{
                        width: "100%",
                    }}>
                        <TextareaAutosize
                            minRows={3}
                            placeholder="Write what you wish"
                            style={{
                                height: "60px",
                                width: '100%',
                                border: `1px solid ${theme.palette.primary.LightGray}`,
                                padding: "6px 12px",
                                borderRadius: "5px",
                                fontSize: "16px",
                                cursor: "pointer",
                            }}
                            onClick={handleOpen}
                        />
                        <Modal
                            open={open}
                            onClose={handleClose}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Box sx={{
                                backgroundColor: theme.palette.primary.White,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                width: "500px",
                                minHeight: "510px",
                                padding: "0 30px",
                                gap: "20px",
                                borderRadius: "10px",
                                margin: {
                                    xs: "0 10px",
                                    sm: "0",
                                    md: "0",
                                    lg: "0",

                                },
                            }}
                                className="modal_form_input">
                                <Button onClick={handleClose} sx={{
                                    alignSelf: 'flex-end',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                }}>
                                    <Close sx={{
                                        color: theme.palette.primary.LogoColor,
                                    }} />
                                </Button>
                                <Typography sx={{
                                    fontSize: "18px",
                                    fontWeight: "500",
                                    color: theme.palette.primary.LogoColor,
                                }}>Title of your feed post</Typography>
                                <TextField
                                    sx={{
                                        padding: "0",
                                        fontSize: "16px",
                                    }}
                                    fullWidth
                                    placeholder="Title of your feed post"
                                    variant="outlined"
                                    name="Title"
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                />
                                <Typography sx={{
                                    fontSize: "18px",
                                    fontWeight: "500",
                                    color: theme.palette.primary.LogoColor,
                                }}>Write what you wish</Typography>
                                <TextareaAutosize
                                    minRows={3}
                                    placeholder="Write what you wish"
                                    style={{
                                        height: "60px",
                                        width: '100%',
                                        border: `1px solid ${theme.palette.primary.LightGray}`,
                                        padding: "6px 12px",
                                        borderRadius: "5px",
                                        fontSize: "16px",
                                    }}
                                    name="Description"
                                    type="text"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                                <Typography sx={{
                                    fontSize: "18px",
                                    fontWeight: "500",
                                    color: theme.palette.primary.LogoColor,
                                }}>File upload</Typography>
                                <TextField className='file_upload'
                                    sx={{
                                        padding: "0",
                                        fontSize: "16px",
                                    }}
                                    fullWidth
                                    placeholder="Title of your feed post"
                                    variant="outlined"
                                    name="Title"
                                    type="file"
                                    // value={formData.title}
                                    // onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                />
                                <Box
                                    sx={{
                                        backgroundColor: theme.palette.primary.LogoColor,
                                        borderRadius: "30px",
                                        padding: "7px 25px",
                                        // marginTop: "20px",
                                        "&:hover": {
                                            backgroundColor: theme.palette.primary.LogoColor,
                                        },
                                    }}
                                    component={"a"} href='#'
                                    onClick={_createFeed}
                                >
                                    <Typography
                                        sx={{
                                            color: theme.palette.primary.White,
                                            fontSize: "14px",
                                            fontWeight: "600",
                                            lineHeight: "26px",
                                            textAlign: "center",
                                        }}
                                    >Post</Typography>
                                </Box>
                            </Box>
                        </Modal>
                    </Box>
                </Box>
                <Box flex={"0"} sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: "0 10px",
                    marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "0",
                        lg: "0",
                    },
                }}>
                    {/* <Box sx={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <Box sx={{
                            marginRight: "10px",
                            "& :hover": {
                                color: theme.palette.primary.LogoColor,
                            },
                        }}
                            component={"a"} href='#'>
                            <EditNote
                                sx={{
                                    color: theme.palette.primary.ParaColor,
                                    fontSize: "25px",
                                }}
                            />
                        </Box>
                        <Box sx={{
                            marginRight: "10px",
                            "& :hover": {
                                color: theme.palette.primary.LogoColor,
                            },
                        }}
                            component={"a"} href='#'>
                            <Photo
                                sx={{
                                    color: theme.palette.primary.ParaColor,
                                    fontSize: "20px",
                                }} />
                        </Box>
                        <Box sx={{
                            marginRight: "10px",
                            "& :hover": {
                                color: theme.palette.primary.LogoColor,
                            },
                        }}
                            component={"a"} href='#'>
                            <Videocam
                                sx={{
                                    color: theme.palette.primary.ParaColor,
                                    fontSize: "20px",
                                }} />
                        </Box>
                        <Box sx={{
                            marginRight: "10px",
                            "& :hover": {
                                color: theme.palette.primary.LogoColor,
                            },
                        }}
                            component={"a"} href='#'>
                            <Map
                                sx={{
                                    color: theme.palette.primary.ParaColor,
                                    fontSize: "20px",
                                }} />
                        </Box>
                    </Box> */}
                    {/* <Box
                        sx={{
                            backgroundColor: theme.palette.primary.LogoColor,
                            borderRadius: "30px",
                            padding: "7px 25px",
                            marginLeft: "10px",
                            "&:hover": {
                                backgroundColor: theme.palette.primary.LogoColor,
                            },
                        }}
                        component={"a"} href='#'>
                        <Typography
                            sx={{
                                color: theme.palette.primary.White,
                                fontSize: "14px",
                                fontWeight: "600",
                                lineHeight: "26px",
                            }}
                        >Publish</Typography>
                    </Box> */}
                </Box>
            </Box>
        </Box>
    )
}

export default AddFeed