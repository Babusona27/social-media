import React from 'react'
import HeaderNew from '../components/HeaderNew'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import RightBar from '../components/RightBar'
import { Avatar, Box, Container, TextareaAutosize, Typography } from '@mui/material'
import { EditNote, Map, Photo, Videocam } from '@mui/icons-material'
import theme from '../Theme'
import ImageGallery from '../components/ImageGallery'

const ImageFeed = () => {
  return (
    <>
      <HeaderNew />
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box sx={{ display: "flex", padding: "100px 0 50px" }}>
          <Box flex={1} p={"0 10px"}>
            <Sidebar />
          </Box>

          <Box flex={2} p={"0 10px"} >
            <Box
              sx={{
                paddingBottom: "20px",
                marginBottom: "20px",
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
              }}
            >
              <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <Box flex={"2"} sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 10px",
                }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/profileImg.jpg"
                    }
                    sx={{
                      border: "7px solid #fff",
                      float: "left",
                      marginRight: "5px",
                      position: "relative",
                      height: "70px",
                      width: "70px",
                      borderRadius: "50%",
                    }}
                  />

                  <TextareaAutosize
                    minRows={3}
                    placeholder="Write what you wish"
                    style={{
                      height: "60px",
                      width: '100%',
                      border: `1px solid ${theme.palette.primary.LightGray}`,
                      padding: "6px 12px",
                      borderRadius: "5px",
                      fontSize: "16px",
                      cursor: "auto",
                    }}
                  />
                </Box>
                <Box flex={"1"} sx={{
                  display: "flex",
                  alignItems: "center",
                  p: "0 10px",
                }}>
                  <Box sx={{
                    marginRight: "10px",
                    "& :hover": {
                      color: theme.palette.primary.LogoColor,
                    },
                  }}
                    component={"a"} href='#'>
                    <EditNote
                      sx={{
                        color: theme.palette.primary.ParaColor,
                        fontSize: "25px",
                      }}
                    />
                  </Box>
                  <Box sx={{
                    marginRight: "10px",
                    "& :hover": {
                      color: theme.palette.primary.LogoColor,
                    },
                  }}
                    component={"a"} href='#'>
                    <Photo
                      sx={{
                        color: theme.palette.primary.ParaColor,
                        fontSize: "20px",
                      }} />
                  </Box>

                  <Box sx={{
                    marginRight: "10px",
                    "& :hover": {
                      color: theme.palette.primary.LogoColor,
                    },
                  }}
                    component={"a"} href='#'>
                    <Videocam
                      sx={{
                        color: theme.palette.primary.ParaColor,
                        fontSize: "20px",
                      }} />
                  </Box>
                  <Box sx={{
                    marginRight: "10px",
                    "& :hover": {
                      color: theme.palette.primary.LogoColor,
                    },
                  }}
                    component={"a"} href='#'>
                    <Map
                      sx={{
                        color: theme.palette.primary.ParaColor,
                        fontSize: "20px",
                      }} />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.LogoColor,
                      borderRadius: "30px",
                      padding: "7px 25px",
                      marginLeft: "10px",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.LogoColor,
                      },
                    }}
                    component={"a"} href='#'>
                    <Typography
                      sx={{
                        color: theme.palette.primary.White,
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "26px",
                      }}
                    >Publish</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ 
              display: "flex",
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