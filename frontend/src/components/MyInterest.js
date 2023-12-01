import { CameraAlt, DirectionsBike, Favorite, Flight, LocalDining, ShoppingCart } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import theme from '../Theme'

const MyInterest = () => {
    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                paddingBottom: "10px",
                marginBottom: "15px",
            }}>
                <Favorite sx={{
                    fontSize: "24px",
                    color: theme.palette.primary.LogoColor,
                    marginRight: "10px",
                }} />
                <Typography component={"h4"} sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    color: theme.palette.primary.LogoColor,
                  }}
                >
                    My Interests
                </Typography>
            </Box>
            <Box sx={{
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                paddingBottom: "10px",
                marginBottom: "15px",
            }}>
                <Typography component={"p"} sx={{
                    fontSize: "15px",
                    fontWeight: "400",
                    color: theme.palette.primary.ParaColor,
                    textAlign: "left",
                }}
                >
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
            }}>
                <Box component={"a"} href='#' sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: theme.palette.primary.White,
                    backgroundColor: theme.palette.primary.Green,
                    padding: "5px 15px",
                    borderRadius: "40px",
                }}>
                    <DirectionsBike sx={{
                        fontSize: "18px",
                    }} />
                    <Typography sx={{
                        fontSize: "15px",
                        lineHeight: "26px",
                        color: theme.palette.primary.White,
                        "&:hover": {
                            textDecoration: "underline",
                        }
                    }}>
                        Bycicle
                    </Typography>
                </Box>
                <Box component={"a"} href='#' sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: theme.palette.primary.White,
                    backgroundColor: theme.palette.primary.Green,
                    padding: "5px 15px",
                    borderRadius: "40px",
                }}>
                    <CameraAlt sx={{
                        fontSize: "18px",
                    }} />
                    <Typography sx={{
                        fontSize: "15px",
                        lineHeight: "26px",
                        color: theme.palette.primary.White,
                        "&:hover": {
                            textDecoration: "underline",
                        }
                    }}>
                        Photgraphy
                    </Typography>
                </Box>
                <Box component={"a"} href='#' sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: theme.palette.primary.White,
                    backgroundColor: theme.palette.primary.Green,
                    padding: "5px 15px",
                    borderRadius: "40px",
                }}>
                    <ShoppingCart sx={{
                        fontSize: "18px",
                    }} />
                    <Typography sx={{
                        fontSize: "15px",
                        lineHeight: "26px",
                        color: theme.palette.primary.White,
                        "&:hover": {
                            textDecoration: "underline",
                        }
                    }}>
                        Shopping
                    </Typography>
                </Box>
                <Box component={"a"} href='#' sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: theme.palette.primary.White,
                    backgroundColor: theme.palette.primary.Green,
                    padding: "5px 15px",
                    borderRadius: "40px",
                }}>
                    <Flight sx={{
                        fontSize: "18px",
                    }} />
                    <Typography sx={{
                        fontSize: "15px",
                        lineHeight: "26px",
                        color: theme.palette.primary.White,
                        "&:hover": {
                            textDecoration: "underline",
                        }
                    }}>
                        Traveling
                    </Typography>
                </Box>
                <Box component={"a"} href='#' sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: theme.palette.primary.White,
                    backgroundColor: theme.palette.primary.Green,
                    padding: "5px 15px",
                    borderRadius: "40px",
                }}>
                    <LocalDining sx={{
                        fontSize: "18px",
                    }} />
                    <Typography sx={{
                        fontSize: "15px",
                        lineHeight: "26px",
                        color: theme.palette.primary.White,
                        "&:hover": {
                            textDecoration: "underline",
                        }
                    }}>
                        Eating
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                marginTop: "20px",
                textAlign: "left",
            }}>
                <Typography component={"P"} sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: theme.palette.primary.ParaColor,
                    marginBottom: "10px",
                }}>
                    Add interests
                </Typography>
                <Box component={"form"} sx={{ 
                    display: "flex",
                    gap: "20px",
                 }}>
                <TextField className='profile_input' sx={{
                    width: "70%",
                }} label="Interests. For example, photography" variant="outlined" />
                <Button sx={{ 
                    color: theme.palette.primary.White,
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "26px",
                    backgroundColor: theme.palette.primary.LogoColor,
                    borderRadius: "30px",
                    padding: "7px 25px",
                    width: "30%",
                    "&:hover": {
                        backgroundColor: theme.palette.primary.LogoColor,                    
                    }
                 }} variant="contained" color="primary">
                    Add
                </Button>
                </Box>
            </Box>
        </>
    )
}

export default MyInterest