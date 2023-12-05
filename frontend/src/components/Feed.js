import { Send, ThumbDownAlt, ThumbUpAlt } from '@mui/icons-material'
import { Avatar, Box, Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import theme from '../Theme'
import { useSelector } from 'react-redux'
import { CREATE_COMMENT, CREATE_REPLY_COMMENT, REACT_ON_FEED } from '../Url'
import { addComment, addReaction } from '../redux/reducers/FeedListReducer'
import { useDispatch } from 'react-redux'
import axios from 'axios'
const Feed = () => {
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.FeedListReducer.value);
    const userData = useSelector((state) => state.UserReducer.value);
    const [open, setOpen] = useState(false);
    const [comment, setComment] = useState('');
    const [replyComment, setReplyComment] = useState('');
    const [feedId, setFeedId] = useState('');
    const [commentId, setCommentId] = useState('');

    console.log("feedData==>",feedData);
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
    const handleComment = (item) => {
        axios.post(CREATE_COMMENT, {
            feedId: item._id,
            comment: comment,
        }, {
            headers: {
                Authorization: `Bearer ${userData.token}`,
            },
        }).then((res) => {

            dispatch(addComment({
                feedId: item._id, comment: res.data.data.updateFeed.comment
            }));
            setComment('');
        }).catch((err) => {
            console.log(err);
        })
    };
    const handleReplyComment = () => {
        axios.post(CREATE_REPLY_COMMENT, {
            feedId: feedId,
            commentId: commentId,
            replyUserComment: replyComment,
        }, {
            headers: {
                Authorization: `Bearer ${userData.token}`,
            },
        }).then((res) => {
            dispatch(addComment({
                feedId: feedId, comment: res.data.data.updateFeed.comment
            }));
            setReplyComment('');
        }).catch((err) => {
            console.log(err);
        })
    };
    const _handleReactOnFeed = (item, type) => {
        axios.post(REACT_ON_FEED, {
            feedId: item._id,
            reactionType: type,
        }, {
            headers: {
                Authorization: `Bearer ${userData.token}`,
            },
        }).then((res) => {
            // console.log(res.data.data.updateFeed.reaction);
            dispatch(addReaction({
                feedId: item._id, reaction: res.data.data.updateFeed.reaction
            }));
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <Box>
            {Array.isArray(feedData) && feedData.map((item, key) => (
                <Box sx={{
                    marginBottom: "20px",

                }} key={key}>
                    <Card sx={{
                        boxShadow: "none",
                        borderLeft: `1px solid ${theme.palette.primary.Gray}`,
                        borderRight: `1px solid ${theme.palette.primary.Gray}`,
                        borderRadius: "10px 10px 0 0",

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
                                                {item.createdBy.name}
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
                                            <ThumbUpAlt
                                                sx={{ fontSize: "14px" }}
                                                onClick={() => {
                                                    //like function
                                                    _handleReactOnFeed(item, "like")
                                                }}
                                            />
                                            <Typography sx={{
                                                fontSize: "14px",
                                                fontWeight: "400",
                                            }} >{item.reaction.filter(r => r.reactionType === 'like').length}</Typography>
                                        </Box>
                                        <Box component={"a"} href='#' sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            color: theme.palette.secondary.main,
                                            gap: "5px",
                                        }}>
                                            <ThumbUpAlt
                                                sx={{ fontSize: "14px" }}
                                                onClick={() => {
                                                    //dislike function
                                                    _handleReactOnFeed(item, "dislike")
                                                }}
                                            />
                                            <Typography sx={{
                                                fontSize: "14px",
                                                fontWeight: "400",
                                            }} >{item.reaction.filter(r => r.reactionType === 'dislike').length}</Typography>
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
                                    <Box className='ChatRoomLeftBar' sx={{
                                        padding: "20px 0px",
                                        maxHeight: "180px",
                                        overflowY: "auto",
                                        height: "fit-content",
                                        overflowX: "hidden",
                                    }}>
                                        {item.comment != undefined && item.comment.map((value, key1) => (

                                            <Box key={key1}>
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
                                                            position: "relative",
                                                            zIndex: "1",
                                                        }}
                                                    />
                                                    <Box sx={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: "10px",
                                                    }}>
                                                        <Box sx={{
                                                            background: theme.palette.primary.White,
                                                            padding: "5px 10px",
                                                            borderRadius: "10px",
                                                            boxShadow: theme.palette.primary.BoxShadow3,
                                                            marginRight: "10px",
                                                        }}>
                                                            <Box sx={{
                                                                fontSize: "13px",
                                                                lineHeight: "1",
                                                                color: theme.palette.primary.LogoColor,
                                                                fontWeight: "600",
                                                                marginRight: "5px",
                                                                "&:hover": {
                                                                    color: theme.palette.primary.Green,
                                                                }
                                                            }
                                                            }
                                                                component={"a"} href='#'
                                                            >{value.userId.name}</Box>

                                                            <Typography component={"p"} sx={{
                                                                fontSize: "13px",
                                                                lineHeight: "26px",
                                                                color: theme.palette.primary.ParaColor,

                                                            }}>

                                                                {value.comment}

                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{
                                                            display: "flex",
                                                            justifyContent: "start",
                                                            alignItems: "center",
                                                            gap: "10px",
                                                        }}>
                                                            <Typography sx={{
                                                                fontSize: "13px",
                                                                lineHeight: "26px",
                                                                color: theme.palette.primary.ParaColor,
                                                            }} className='reply_time' component={"p"}>2 days ago</Typography>
                                                            <Typography component={"a"} sx={{
                                                                fontFamily: theme.palette.primary.MainFont1,
                                                                fontSize: "14px",
                                                                lineHeight: "1",
                                                                color: theme.palette.primary.LogoColor,
                                                                cursor: "pointer",
                                                                padding: "5px 10px",
                                                                display: "inline-block",
                                                                width: "fit-content",
                                                                "&:hover": {
                                                                    color: theme.palette.primary.Green,
                                                                }
                                                            }} onClick={() => {
                                                                setOpen(true)
                                                                setFeedId(item._id);
                                                                setCommentId(value._id);

                                                            }}>Reply</Typography>
                                                        </Box>

                                                    </Box>
                                                </Box>
                                                {/* reply box  */}
                                                {value.replyComment != undefined && value.replyComment.map((replyVal, key2) => (
                                                    <Box className="reply" sx={{
                                                        display: "flex",
                                                        margin: "20px 30px",
                                                        position: "relative",
                                                        "&::before": {
                                                            content: "''",
                                                            position: "absolute",
                                                            top: "-124px",
                                                            left: "-14px",
                                                            width: "30px",
                                                            height: "145px",
                                                            borderLeft: `1px solid ${theme.palette.primary.Green}`,
                                                            borderBottom: `1px solid ${theme.palette.primary.Green}`,
                                                        },
                                                    }} key={key2}>
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
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: "10px",
                                                        }}>
                                                            <Box sx={{
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                width: "100%",
                                                                background: theme.palette.primary.White,
                                                                padding: "5px 10px",
                                                                borderRadius: "10px",
                                                                boxShadow: theme.palette.primary.BoxShadow3,
                                                            }}>
                                                                <Box sx={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    width: "100%",

                                                                }}>
                                                                    <Box sx={{
                                                                        fontSize: "13px",
                                                                        color: theme.palette.primary.LogoColor,
                                                                        fontWeight: "600",
                                                                        marginRight: "5px",
                                                                        "&:hover": {
                                                                            color: theme.palette.primary.Green,
                                                                        }
                                                                    }} component={"a"} href='#'
                                                                    >{replyVal.userId.name}</Box>

                                                                </Box>
                                                                <Typography className='ChatRoomLeftBar' component={"p"} sx={{
                                                                    fontSize: "13px",
                                                                    lineHeight: "26px",
                                                                    color: theme.palette.primary.ParaColor,
                                                                    maxHeight: "70px",
                                                                    overflowY: "auto",
                                                                }}>

                                                                    {replyVal.replyUserComment}

                                                                </Typography>
                                                            </Box>
                                                            <Typography sx={{
                                                                fontSize: "13px",
                                                                lineHeight: "26px",
                                                                color: theme.palette.primary.ParaColor,
                                                            }} className='reply_time' component={"p"}>2 days ago</Typography>
                                                        </Box>



                                                    </Box>
                                                ))}
                                            </Box>


                                        ))}
                                    </Box>


                                    {/* reply box  */}
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
                                                value={replyComment}
                                                onChange={(e) => setReplyComment(e.target.value)}
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
                                                //reply comment function
                                                handleReplyComment()
                                                setOpen(false);
                                            }}>Submit</Button>
                                        </DialogActions>
                                    </Dialog>


                                </CardContent>
                            </Box>
                        </Box>
                    </Card>
                    <Box sx={{
                        display: "flex",
                        padding: "20px",
                        backgroundColor: theme.palette.primary.LightBlue,
                        border: `1px solid ${theme.palette.primary.Gray}`,
                        borderTop: "none",
                        borderRadius: "0 0 10px 10px",
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
                                    color: theme.palette.primary.ParaColor,
                                }}
                                className="comment_input"
                                fullWidth
                                label="Post a comment"
                                variant="outlined"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}

                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => handleComment(item)}>
                                                <Send />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            ))}

            {feedData === null || feedData.length == 0 && <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}>
                <Typography component={"h1"} sx={{
                    fontSize: "30px",
                    fontWeight: "600",
                }}>No Feed Available</Typography>
            </Box>}
        </Box>

    )
}

export default Feed