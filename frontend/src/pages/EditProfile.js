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
      <Container maxWidth="lg" sx={{ height: "100%", marginBottom: "50px" }}>
        <Box
          sx={{
            height: {
              xs: "550px",
              sm: "500px",
              md: "500px",
              lg: "500px",
            },
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
            display: {
              xs: "grid",
              sm: "grid",
              md: "flex",
              lg: "flex",
            },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "1fr",
              lg: "1fr",
            },
            gap: "15px",
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
              bottom: {
                xs: "60px",
                sm: "-50px",
                md: "-50px",
                lg: "-50px",
              },
              left: {
                xs: "0",
                sm: "20px",
                md: "20px",
                lg: "20px",
              },
              borderRadius: "50%",
              border: `10px solid ${theme.palette.primary.White}`,
              zIndex: "5",
              margin: {
                xs: "0 auto",
                sm: "0",
                md: "0",
                lg: "0",
              },
            }}
              src={
                process.env.PUBLIC_URL + "/assets/images/profileImg.jpg"
              }
            />
            <Box sx={{
              padding: {
                xs: "60px 10px 20px 10px",
                sm: "10px 10px 10px 250px",
                md: "10px 10px 10px 250px",
                lg: "10px 10px 10px 250px",
              },
              backgroundColor: "rgba(0,0,0,0.7)",
              width: "100%",
              position: "absolute",
              left: 0,
              top: {
                xs: "45%",
                sm: "70%",
                md: "70%",
                lg: "70%",
              },
            }}>
              <Box sx={{
                display: {
                  xs: "grid",
                  sm: "flex",
                  md: "flex",
                  lg: "flex",
                },
                gap: "15px",
                alignItems: "center",
                justifyContent: {
                  xs: "center",
                  sm: "flex-end",
                  md: "flex-end",
                  lg: "flex-end",
                },
              }}>
                <Box>
                  <Typography sx={{
                    fontSize: "15px",
                    color: theme.palette.primary.White,
                    paddingRight: {
                      xs: "0",
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    },
                    textAlign: {
                      xs: "center",
                      sm: "left",
                      md: "left",
                      lg: "left",
                    },
                  }}>1,299 people following her</Typography>

                </Box>
                <Box
                  component={"a"} href='#'>
                  <Typography
                    sx={{
                      display: {
                        xs: "flex",
                        sm: "block",
                        md: "block",
                        lg: "block",
                      },
                      justifyContent: "center",
                      color: theme.palette.primary.White,
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "26px",
                      backgroundColor: theme.palette.primary.LogoColor,
                      borderRadius: "30px",
                      padding: "7px 25px",
                      marginLeft: {
                        xs: "0",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                      },
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
          display: {
            xs: "grid",
            sm: "grid",
            md: "flex",
            lg: "flex",
          },
          gap: {
            xs: "15px",
            sm: "15px",
            md: "0",
            lg: "0",
          },
          marginTop: "30px",
          textAlign: {
            xs: "center",
            sm: "left",
            md: "center",
            lg: "center",
          },
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