import { AppBar, Box, Container, FormControl, IconButton, InputAdornment, InputLabel, TextField, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import theme from '../Theme'
import SearchIcon from '@mui/icons-material/Search';



const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <AppBar  className={isScrolled ? 'active_header' : ''} sx={{ opacity:"0", backgroundColor: theme.palette.primary.Black, height: "60px", boxShadow:"0 5px 10px 0 rgb(87 101 128 / 12%)" }}>
    <Container maxWidth="lg" sx={{ height: "100%" }}>
      <Toolbar disableGutters sx={{ 
        display: "flex", 
      alignItems: "center",
       justifyContent: "space-between",
        height: "100%",
minHeight:{
  xs: "auto",
  sm: "auto",
  lg: "auto",
  
},
        }}>
      <Box href='#' component={"a"} sx={{ width:{  xs: "80px", sm:"100px", lg: "180px" },
               minWidth:{  xs: "80px", sm:"100px", lg: "120px" } }}>
           <Box component={"img"} src={process.env.PUBLIC_URL+"/assets/images/logo.png"}/>
          </Box>
<Box sx={{
}}>
<FormControl fullWidth className='form_imput' sx={{
  height: '40px',
  padding: '0px',
  color: theme.palette.primary.White,
}}>
  <TextField
    fullWidth
    sx={{
      padding:'0px',
      height: '30px', 
      borderRadius: '0px',
      boxShadow: '0 5px 10px 0 rgb(87 101 128 / 12%)',
     color: theme.palette.primary.White,
    }} 
    variant="outlined"
    placeholder='Search...'
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
</FormControl>
</Box>
<Box>
<div class="icon">
          <span class="toggle">☰</span>
        </div>
        <ul class="list-item">
          <li><a href="#">Home</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Categorys</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
        </ul>
</Box>
     
      </Toolbar>

      
    </Container>
  </AppBar>
  )
}

export default Header