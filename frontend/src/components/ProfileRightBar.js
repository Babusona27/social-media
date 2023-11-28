import { Box, Typography } from '@mui/material'
import React from 'react'
import theme from '../Theme'

const ProfileRightBar = () => {
  return (
    <Box>
        <Typography component={"h4"} sx={{ 
            fontSize: "22px",
            fontWeight: "500",
            color: theme.palette.primary.ParaColor,
         }}>Sarah's activity</Typography>
    </Box>
  )
}

export default ProfileRightBar