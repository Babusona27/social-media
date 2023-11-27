import React from 'react'
import Footer from '../components/Footer'
import { Box, Container, Typography } from '@mui/material'
import HeaderNew from '../components/HeaderNew'
import theme from '../Theme'

const Page404 = () => {
  return (
    <>
      <HeaderNew />
      <Container>
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
              fontSize: "60px",
              fontWeight: "500",
              margin:"20px 0 10px",
              color: theme.palette.primary.LogoColor,
              textShadow: `1px 1px 2px  ${theme.palette.primary.ParaColor}`,
            }} component="h1">Whoops!</Typography>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default Page404