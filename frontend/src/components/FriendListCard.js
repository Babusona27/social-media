import React from "react";
import { Avatar, Box, Typography, } from '@mui/material'
import theme from '../Theme'
import { useSelector} from "react-redux";
const FriendListCard = () => {
    const friendList = useSelector((state) => state.FriendListReducer.value);

    return (
        <>
            {friendList && friendList.map((item, key) => (

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
                                        {item.user_id_1.name}
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
            ))}

        </>
    )
}

export default FriendListCard