import React from 'react'
import HeaderNew from '../components/HeaderNew'
import { Box, Container, Typography } from '@mui/material'
import Footer from '../components/Footer'
import theme from '../Theme'
import ProfileSideBar from '../components/ProfileSideBar'
import ProfileRightBar from '../components/ProfileRightBar'
// import AccountSettings from '../components/AccountSettings'
// import ChangePassword from '../components/ChangePassword'
// import EducationandWork from '../components/EducationandWork'
import BasicInformationDetails from '../components/BasicInformationDetails'
// import MyInterest from '../components/MyInterest'

const EditProfile = () => {
  return (
    <>
      <HeaderNew />
      <Container maxWidth="lg" sx={{ height: "100%",marginBottom:"50px" }}>
        <Box
          sx={{
            height: "500px",
            width: "100%",
            backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/sidebarHeaderBg.jpg"
              })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            "&::before": {
              content: "''",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.2)",
            },
          }}
          component={"section"}
        >
          <Box sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            top: "55%",
          }}>
            <Box component={"img"} sx={{
              height: "200px",
              width: "200px",
              objectFit: "cover",
              position: "relative",
              bottom: "-50px",
              left: "20px",
              borderRadius: "50%",
              border: `10px solid ${theme.palette.primary.White}`,
              zIndex: "5",
            }}
              src={
                process.env.PUBLIC_URL + "/assets/images/profileImg.jpg"
              }
            />
            <Box sx={{
              padding: "10px 10px 10px 250px",
              backgroundColor: "rgba(0,0,0,0.7)",
              width: "100%",
              position: "absolute",
              left: 0,
              top: "70%",
            }}>
              <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}>
                <Box>
                  <Typography sx={{
                    fontSize: "15px",
                    color: theme.palette.primary.White,
                    paddingRight: "20px",
                  }}>1,299 people following her</Typography>

                </Box>
                <Box
                  component={"a"} href='#'>
                  <Typography
                    sx={{
                      color: theme.palette.primary.White,
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "26px",
                      backgroundColor: theme.palette.primary.LogoColor,
                      borderRadius: "30px",
                      padding: "7px 25px",
                      marginLeft: "10px",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.LogoColor,
                      },
                    }}
                  >Add Friend</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          display: "flex",
          marginTop: "30px",
          textAlign: "center",
        }}>
          <Box flex={"0.7"} padding={"0 10px"}>
            <ProfileSideBar />
          </Box>
          <Box flex={"2"} padding={"0 10px"} sx={{ 

           }}>
            <BasicInformationDetails />
            {/* <MyInterest/> */}
            {/* <AccountSettings/> */}
            {/* <ChangePassword/> */}
            {/* <EducationandWork/> */}
          </Box>
          <Box flex={"0.4"} padding={"0 10px"}>

            <Typography component={"h4"} sx={{
              fontSize: "22px",
              fontWeight: "500",
              color: theme.palette.primary.ParaColor,
              textAlign: "left",
            }}>Sarah's activity
            </Typography>
            <ProfileRightBar />
            <ProfileRightBar />
            <ProfileRightBar />
            <ProfileRightBar />
          </Box>
        </Box>        
      </Container>
      <Footer />
    </>

  )
}

export default EditProfile