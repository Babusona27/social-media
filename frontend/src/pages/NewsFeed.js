import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar'
import HeaderNew from '../components/HeaderNew';

const NewsFeed = () => {
  return (
    <>
      <HeaderNew />
      <Container>
        <Box sx={{ display: "flex", padding: "100px 0 50px" }}>
          <Box flex={1} p={"0 10px"}>
            <Sidebar />
          </Box>
          <Box flex={2} p={"0 10px"}>
            <Typography>hiii</Typography>
          </Box>
          <Box flex={1} p={"0 10px"}>
            <Typography>hiii</Typography>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default NewsFeed