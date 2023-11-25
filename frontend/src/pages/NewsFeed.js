import React from 'react'
import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar'

const NewsFeed = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box flex={1}>
          <Sidebar />
        </Box>
        <Box flex={1}>
          <Sidebar />
        </Box>
      </Box>
    </>
  )
}

export default NewsFeed