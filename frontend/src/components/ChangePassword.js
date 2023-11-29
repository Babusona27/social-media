import { Lock } from '@mui/icons-material'
import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import theme from '../Theme'

const ChangePassword = () => {
    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                paddingBottom: "10px",
                marginBottom: "10px",
            }}>
                <Lock sx={{
                    fontSize: "24px",
                    color: theme.palette.primary.LogoColor,
                    marginRight: "10px",
                }} />
                <Typography component={"h4"} sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: theme.palette.primary.ParaColor,
                }}
                >
                    Change Password
                </Typography>
            </Box>
            <Box sx={{
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                paddingBottom: "10px",
                marginBottom: "10px",
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
            <Box
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    marginTop: "20px",
                }}
            >
                <TextField
                    sx={{
                        padding: "0",

                    }}
                    className="profile_input"
                    fullWidth
                    placeholder="Old Password"
                    type="password"
                    variant="outlined"
                    name="name"
                    size="small"
                />
                <Box sx={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                }}>
                    <TextField
                        sx={{
                            padding: "0",
                            flex: "1",
                        }}
                        className="profile_input"
                        fullWidth
                        placeholder="New Password"
                        type="password"
                        variant="outlined"
                        name="form"
                        size="small"
                    />
                    <TextField
                        sx={{
                            padding: "0",
                            flex: "1",
                        }}
                        className="profile_input"
                        fullWidth
                        placeholder="Confirm Password"
                        type="password"
                        variant="outlined"
                        name="to"
                        size="small"

                    />
                </Box>

                <Button
                    sx={{
                        color: theme.palette.primary.White,
                        fontWeight: "bold",
                        fontSize: "18px",
                        letterSpacing: "1px",
                        textTransform: "capitalize",
                        background: theme.palette.primary.deepBlue,
                        borderRadius: "5px",
                        padding: "7px 0",
                        minHeight: "40px",
                        "&:hover": {
                            background: theme.palette.primary.White,
                            color: theme.palette.primary.deepBlue,
                        },
                    }}
                    variant="contained"
                    type="submit"
                >
                    Update Password
                </Button>
            </Box>
        </>
    )
}

export default ChangePassword