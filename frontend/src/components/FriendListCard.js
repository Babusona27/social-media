import React from "react";
import { Avatar, Box, Typography, } from '@mui/material'
import theme from '../Theme'
import { useSelector, useDispatch } from "react-redux";
import axios, { Axios } from "axios";
import { FRIEND_DELETE } from "../Url";
import CustomAlert from "./CustomAlert";
import { removeFriend } from "../redux/reducers/FriendListReducer";
const FriendListCard = () => {
    const dispatch = useDispatch();
    const friendListArray = useSelector((state) => state.FriendListReducer.value);
    const userData = useSelector((state) => state.UserReducer.value);
    const { showAlert, AlertComponent } = CustomAlert();
    const _deleteFriend = async (id) => {
        //delete friend
        axios.delete(FRIEND_DELETE, {
            headers: {
                Authorization: `Bearer ${userData.token}`,
            },
            data: {
                friend_id: id._id,
            },
        }).then((res) => {
            //console.log(res.data);
            showAlert("success", res.data.message);
            dispatch(removeFriend(res.data.data._id));
        }).catch((err) => {
            console.log(err);
            showAlert("error", err.response.data.message);
        })
    }
    return (
        <>
            {friendListArray && friendListArray.map((item, key) => (

                <Box sx={{
                    width: {
                        xs: "100%",
                        sm: "100%",
                        md: "48%",
                        lg: "48%",
                    },
                }} key={key}>
                    <Box sx={{
                        background: `${theme.palette.primary.CoverBgGradient}, url(${process.env.PUBLIC_URL + "/assets/images/fb6.jpg"}) no-repeat`,
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
                                    src={
                                        process.env.PUBLIC_URL + "/assets/images/profileImg.jpg"
                                    }
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
                                        {item.name}
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
                                    <Typography sx={{
                                        fontSize: "13px",
                                        fontWeight: "500",
                                        color: theme.palette.primary.ParaColor,
                                    }}
                                        onClick={() => {
                                            _deleteFriend(item);
                                        }}
                                    >
                                        Delete
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
            ))}

        </>
    )
}

export default FriendListCard