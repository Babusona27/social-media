import { AppBar, Box, Container, Toolbar } from '@mui/material'
import React from 'react'
import theme from '../Theme'

const Header = () => {
  return (
    <AppBar position='sticky' sx={{ backgroundColor: theme.palette.primary.Black, height: "60px", boxShadow:"0 5px 10px 0 rgb(87 101 128 / 12%)" }}>
    <Container maxWidth="lg" sx={{ height: "100%" }}>
      <Toolbar disableGutters sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%",}}>
      <Box href='#' component={"a"} sx={{ width:{  xs: "80px", sm:"100px", lg: "180px" },
               minWidth:{  xs: "80px", sm:"100px", lg: "120px" } }}>
           <Box component={"img"} src={process.env.PUBLIC_URL+"/assets/images/logo.png"}/>
          </Box>

     
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Header