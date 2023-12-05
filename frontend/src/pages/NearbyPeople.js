import React from 'react'
import { Avatar, Box, Container, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar'
import HeaderNew from '../components/HeaderNew';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import theme from '../Theme';
import { EditNote, Map, Photo, Videocam } from '@mui/icons-material';
import RightBar from '../components/RightBar';
import AddFriend from '../components/AddFriend';
import Footer from '../components/Footer';
import AddFeed from '../components/AddFeed';

const NearbyPeople = () => {
  return (
    <>
      <HeaderNew />
      <Container>
        <Box sx={{ 
          display: {
            xs: "grid",
            sm: "grid",
            md: "flex",
            lg: "flex",
          },
         padding: "100px 0 50px" 
         }}>
          <Box flex={1} p={"0 10px"}>
            <Sidebar />
          </Box>
          <Box flex={2} p={"0 10px"} >
          {/* Feed add component */}
          <AddFeed />
            {/* Feed add component */}
            <Box>
              <AddFriend />
             
            </Box>
          </Box>
          <Box flex={0.5} p={"0 10px"}>
            <RightBar />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default NearbyPeople