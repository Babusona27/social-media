import { Tune } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'
import theme from '../Theme'
import styled from '@emotion/styled'
import Switch from '@mui/material/Switch';

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 60,
    height: 30,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        top: 2,
        left: 2,
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            right: 2,
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.Gray : theme.palette.primary.Green,
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: '0.5',
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: theme.palette.mode === 'light' ? '#bcc3ca' : '#707070',
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: '0.7',
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 32 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#878787',
        opacity: 1,
        transition: theme.transitions.create(['background-color']),
    },
}));
const AccountSettings = () => {
    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                paddingBottom: "10px",
                marginBottom: "15px",
            }}>
                <Tune sx={{
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
                    Account Settings
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
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
                marginBottom: "15px",
                paddingBottom: "15px",
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
                textAlign: "left",
            }}>
                <Box flex={"5"}>
                    <Typography sx={{
                        fontSize: "16px",
                        fontWeight: "700",
                        lineHeight: "26px",
                        color: theme.palette.primary.ParaColor,
                        marginBottom: "5px",

                    }}>Enable follow me</Typography>
                    <Typography sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: theme.palette.primary.ParaColor,


                    }}>Enable this if you want people to follow you</Typography>
                </Box>
                <Box flex={"0.4"} sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}>
                    <IOSSwitch className="toggleSwitch" />
                </Box>
            </Box>
        </>
    )
}

export default AccountSettings