import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import theme from '../Theme'
import { PersonAdd } from '@mui/icons-material'

const SidebarHeader = () => {
    // const [hover1, setHover1] = React.useState(false)
    // const [hover2, setHover2] = React.useState(false)
    return (
        <Box sx={{
            display: "flex",
        }}>
            <Box className="sideHeader" sx={{
                background: `${theme.palette.primary.SidebarBgGredient}, url(${process.env.PUBLIC_URL + "/assets/images/sidebarHeaderBg.jpg"}) no-repeat`,
                backgroundSize: "cover",
                width: "100%",
                minHeight: "90px",
                borderRadius: "4px",
                padding: "10px 20px",
                color: "#fff",
                marginBottom: "40px",
            }}>
                <Avatar
                    alt="Remy Sharp"
                    src="/assets/images/profileImg.jpg"
                    sx={{
                        border: "7px solid #fff",
                        float: "left",
                        marginRight: "20px",
                        position: "relative",
                        top: "-30px",
                        height: "70px",
                        width: "70px",
                        borderRadius: "50%",
                    }}
                />
                {/* <Link href="#"
                    sx={{
                        fontSize: "15px",
                        color: theme.palette.primary.White,
                        textDecoration: hover1 ? "underline" : "none",
                    }}
                    onMouseEnter={() => setHover1(true)}
                    onMouseLeave={() => setHover1(false)}

                >
                    <Typography sx={{
                        fontSize: "15px",
                        color: theme.palette.primary.White,
                    }} margin={"10px 0"}
                    >Sarah Cruiz</Typography>
                </Link>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <PersonAdd sx={{
                        fontSize: "12px",
                        color: theme.palette.primary.White,
                    }}
                    />
                    <Link
                        href="#"
                        sx={{
                            textDecoration: hover2 ? `underline ${theme.palette.primary.White}` : "none",
                        }}
                        onMouseEnter={() => setHover2(true)}
                        onMouseLeave={() => setHover2(false)}
                    >
                        <Typography
                            sx={{
                                fontSize: "12px",
                                color: theme.palette.primary.White,
                            }}
                        >
                            1,299 followers
                        </Typography>
                    </Link> */}
                {/* </Box> */}
                <Box margin={"10px 0"}>
                    <Typography component={"a"} href='#' sx={{
                        fontSize: "20px",
                        color: theme.palette.primary.White,
                        lineHeight: "0",
                        "&:hover": {
                            textDecoration: "underline",
                        }
                    }}
                    >Sarah Cruiz</Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <PersonAdd sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.White,
                    }}
                    />
                    <Typography component={"a"} href='#'
                        sx={{
                            fontSize: "14px",
                            color: theme.palette.primary.White,
                            "&:hover": {
                                textDecoration: "underline",
                            }
                        }}
                    >
                        1,299 followers
                    </Typography>
                </Box>

            </Box>
        </Box>
    )
}

export default SidebarHeader