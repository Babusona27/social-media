import { Box, Breadcrumbs, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import theme from '../Theme'

const BreadcrumbBanner = () => {
  return (
    <Box
    sx={{
      height: "300px",
      width: "100%",
      backgroundImage: `url(${
        process.env.PUBLIC_URL + "/assets/images/fb5.jpg"
      })`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      padding: "0 20px",
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
    <Container maxWidth="lg" sx={{ height: "100%"}}>
    <Box sx={{
        width: "100%",
        position: "absolute",
        top: "50%",
      left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
    }}>
    <Breadcrumbs sx={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        padding: "10px",
        background: theme.palette.primary.BackGredient,
        width: "fit-content",
        margin: "0 auto",
        borderRadius: "10px",
        '& .MuiBreadcrumbs-separator': {
            fontSize: '14px', // Customize separator size
            color: 'rgba(255, 255, 255, 0.8)', // Customize separator color
          },
    }} aria-label="breadcrumb" separator="/">
      <Link className='bread_link' href="/">
      <Typography sx={{
                color: theme.palette.primary.White,
                fontSize: "14px",
                fontWeight: "700",
                lineHeight: "1.2",
                letterSpacing: "1px",
                fontFamily: theme.palette.primary.MainFont1,
      }}>Home</Typography>
      </Link>
      <Typography sx={{
                color: theme.palette.primary.White,
                fontSize: "14px",
                fontWeight: "700",
                lineHeight: "1.2",
                letterSpacing: "1px",
                fontFamily: theme.palette.primary.MainFont1,
      }}>FAQ</Typography>
    </Breadcrumbs>
    <Typography sx={{
                color: theme.palette.primary.White,
                fontSize: "50px",
                fontWeight: "700",
                lineHeight: "1.2",
                letterSpacing: "1px",
                marginTop: "20px",
      }} component={"h1"}>FAQ</Typography>
    </Box>
    </Container>
 
    
  </Box>
  )
}

export default BreadcrumbBanner