import React from 'react'
import { Avatar, Box, Container, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar'
import HeaderNew from '../components/HeaderNew';
import Feed from '../components/Feed';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import theme from '../Theme';
import { EditNote, Map, Photo, Videocam } from '@mui/icons-material';
import RightBar from '../components/RightBar';
import Footer from '../components/Footer';

const NewsFeed = () => {
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
            <Feed />
            <Feed />
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

export default NewsFeed