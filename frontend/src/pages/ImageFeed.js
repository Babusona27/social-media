import React from 'react'
import HeaderNew from '../components/HeaderNew'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import RightBar from '../components/RightBar'
import { Avatar, Box, Container, TextareaAutosize, Typography } from '@mui/material'
import { EditNote, Map, Photo, Videocam } from '@mui/icons-material'
import theme from '../Theme'
import ImageGallery from '../components/ImageGallery'
import AddFeed from '../components/AddFeed'

const ImageFeed = () => {
  return (
    <>
      <HeaderNew />
      <Container maxWidth="lg" sx={{ height: "100%" }}>
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
            <Box sx={{ 
              display: {
                xs: "grid",
                sm: "grid",
                md: "flex",
                lg: "flex",
              },
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              },
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
             }}>
              <ImageGallery />
              <ImageGallery />
              <ImageGallery />
              <ImageGallery />
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

export default ImageFeed