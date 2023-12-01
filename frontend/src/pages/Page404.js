import React from 'react'
import Footer from '../components/Footer'
import { Box, Container, TextField, Typography } from '@mui/material'
import HeaderNew from '../components/HeaderNew'
import theme from '../Theme'

const Page404 = () => {
  return (
    <>
      <HeaderNew />
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box sx={{
          padding: "200px 0",
        }}>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Box
              sx={{
                width: "75%",
              }}
              src={
                process.env.PUBLIC_URL + "/assets/images/404 error.png"
              }
              component={"img"}
            />

          </Box>
          <Box sx={{
            textAlign: "center",
          }}>
            <Typography sx={{
              fontSize: "70px",
              fontWeight: "500",
              margin: "20px 0 10px",
              color: theme.palette.primary.LogoColor,
              textShadow: `2px 2px 4px  ${theme.palette.primary.ParaColor}`,
            }} component="h1">
              Whoops!
            </Typography>
            <Typography sx={{
              fontSize: "20px",
              fontWeight: "400",
              margin: "0 0 10px",
              color: theme.palette.primary.ParaColor,
            }} component="p">
              Looks like you are lost. But don't worry there is plenty to see!!
            </Typography>
            <Box
              component="form"
            >
              <Typography sx={{
                fontSize: "18px",
                fontWeight: "600",
                margin: "0 0 10px",
                color: theme.palette.primary.ParaColor,
              }} component="label">
                Search Content!
              </Typography>
              <Box sx={{
                marginTop: "20px",
              }}>
                <TextField className='search_content_form' sx={{
                  width: {
                    xs: "100%",
                    sm: "70%",
                    md: "50%",
                    lg: "50%",
                  },
                  borderRadius: "50px",
                }} id="outlined-basic" label="Search what you want to find..." variant="outlined" />

              </Box>
              <Box sx={{ 
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
               }}
              
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
                    marginLeft: {
                      xs: "0",
                      sm: "0",
                      md: "10px",
                      lg: "10px",
                    },
                    width: {
                      xs: "50%",
                      sm: "30%",
                      md: "15%",
                      lg: "15%",
                    },
                    "&:hover": {
                      backgroundColor: theme.palette.primary.LogoColor,
                    },
                  }}
                >Search Now!</Typography>
              </Box>
            </Box>

          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default Page404