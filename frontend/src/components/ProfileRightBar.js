import { Box, Typography } from '@mui/material'
import React from 'react'
import theme from '../Theme'

const ProfileRightBar = () => {
  return (
    <Box sx={{
      marginTop: "20px",
      textAlign: "left",
    }}>
      <Typography component={"p"} sx={{
        fontSize: "14px",
        color: theme.palette.primary.ParaColor,
        lineHeight: "26px",
        borderLeft: `2px solid ${theme.palette.primary.LogoColor}`,
        paddingLeft: "15px",
      }}>
        <Box component={"a"} href='#'
          sx={{
            color: theme.palette.primary.LogoColor,
            marginRight: "3px",
            fontWeight: "600",
            "&:hover": {
              color: theme.palette.primary.Green,
            }
          }}
        >
          Sarah
        </Box>
        Commended on a Photo
      </Typography>
      <Typography component={"p"} sx={{
        fontSize: "14px",
        color: theme.palette.primary.ParaColor,
        marginLeft: "15px",
        marginTop: "10px",
        paddingBottom: "10px",
        borderBottom: `1px solid ${theme.palette.primary.Gray}`,
      }}>
        5 mins ago
      </Typography>
    </Box>
  )
}

export default ProfileRightBar