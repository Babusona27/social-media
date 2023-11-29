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
                    gap: "15px",
                    marginTop: "15px",
                }}
            //   onSubmit={handleSubmit}
            >

                <Box sx={{
                    textAlign: "left",
                }}>
                    <Typography sx={{
                        fontSize: "16px",
                    }}>Old password</Typography>
                </Box>

                <TextField
                    sx={{
                        padding: "0",
                    }}
                    className="profile_input"
                    fullWidth
                    placeholder="Old password"
                    variant="outlined"
                    name="password"
                    type="password"
                // value={formData.password}
                // onChange={handleInputChange}
                // error={Boolean(errors.password)}
                // helperText={errors.password}
                />

                <Box sx={{
                    display: "flex",
                    gap: "20px",
                }}>
                    <Box flex={"1"}>
                        <Box sx={{
                            textAlign: "left",
                        }}>
                            <Typography sx={{
                                fontSize: "16px",
                                marginBottom: "15px",
                            }}>Old password</Typography>
                        </Box>
                        <TextField
                            sx={{
                                padding: "0",
                            }}
                            className="profile_input"
                            fullWidth
                            placeholder="Old password"
                            variant="outlined"
                            name="password"
                            type="password"
                        // value={formData.password}
                        // onChange={handleInputChange}
                        // error={Boolean(errors.password)}
                        // helperText={errors.password}
                        />
                    </Box>
                    <Box flex={"1"}>
                        <Box sx={{
                            textAlign: "left",
                        }}>
                            <Typography sx={{ 
                        fontSize: "16px",
                        marginBottom: "15px",
                     }}>Old password</Typography>
                        </Box>
                        <TextField
                            sx={{
                                padding: "0",
                            }}
                            className="profile_input"
                            fullWidth
                            placeholder="Old password"
                            variant="outlined"
                            name="password"
                            type="password"
                        // value={formData.password}
                        // onChange={handleInputChange}
                        // error={Boolean(errors.password)}
                        // helperText={errors.password}
                        />
                    </Box>
                </Box>
                <Button
                    sx={{
                        marginBottom: "-20px",
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
                    Sign Up
                </Button>
            </Box>
        </>
    )
}

export default ChangePassword