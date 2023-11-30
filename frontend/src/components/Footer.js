import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../Theme";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Footer = () => {
  return (
    <Box
      sx={{
        height: {
          xs: "auto",
          sm: "auto",
          lg: "350px",
          xl: "350px",
        },
       
        width: "100%",
        padding: "50px 0",
        position: "relative",
        borderTop: "8px solid",
        borderColor: theme.palette.primary.LogoColor,
      }}
      component={"section"}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
        
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/fb5.jpg"
          })`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: "1",
          filter: "blur(0px)",
          "&:before": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(0,0,0,80%)",
            zIndex: "2",
          },
        }}
      />
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box
          sx={{
            height: "100%",
            display: {
              xs: "block",
              sm: "block",
              lg: "flex",
              xl: "flex",
            },
         
            justifyContent: "space-between",
            position: "relative",
            zIndex: "3",
          }}
        >
          <Box sx={{
            width: {
              xs: "100%",
              sm: "100%",
              lg: "25%",
            },
            paddingX:{
                xs: "0px",
                sm: "0px",
                lg: "30px",
            }
          }}>
            <Box
              href="#"
              component={"a"}
              sx={{
                width: {
                  xs: "150px",
                  sm: "100px",
                  lg: "180px",
                },
                minWidth: {
                  xs: "150px",
                  sm: "100px",
                  lg: "120px",
                },
                display: "flex",
                marginBottom: "20px",
                marginRight: {
                  xs: "auto",
                  sm: "auto",
                  lg: "0px",
                },
                marginLeft: {
                  xs: "auto",
                  sm: "auto",
                  lg: "0px",
                },
              }}
            >
              <Box
                component={"img"}
                src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
              />
            </Box>
            <Typography sx={{
                color: theme.palette.primary.White,
                textAlign:{
                    xs:"center",
                    sm:"center",
                    lg:"left",
                },
           
            }} variant="body1">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Typography>
          </Box>
          <Box  sx={{
            width: {
              xs: "100%",
              sm: "100%",
              lg: "25%",
            },
            paddingX:{
                xs: "0px",
                sm: "0px",
                lg: "30px",
            }
          }} >
            <Typography sx={{
                color: theme.palette.primary.White,
                textAlign:"center",
                fontSize:"30px",
            }} variant="h6" component={"h3"}>Quick Links</Typography>
            <List sx={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
flexDirection:"column",
gap:"10px",
}}>
            <ListItem disablePadding>
          <ListItemButton sx={{
            color: theme.palette.primary.White,
            transition: "all .3s ease-in-out",
            padding: "0px",
            fontSize: "14px",
            textAlign: "center",
            display:"block",
            "&:hover": {
              color: theme.palette.primary.LogoColor,
            },
          }} component="a" href="#">
            <Typography>home</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{
            color: theme.palette.primary.White,
            transition: "all .3s ease-in-out",
            padding: "0px",
            fontSize: "14px",
            textAlign: "center",
            display:"block",
            "&:hover": {
              color: theme.palette.primary.LogoColor,
            },
          }} component="a" href="#">
            <Typography>Newsfeed </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton sx={{
            color: theme.palette.primary.White,
            transition: "all .3s ease-in-out",
            padding: "0px",
            fontSize: "14px",
            textAlign: "center",
            display:"block",
            "&:hover": {
              color: theme.palette.primary.LogoColor,
            },
          }} component="a" href="#">
            <Typography>Timeline </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton sx={{
            color: theme.palette.primary.White,
            transition: "all .3s ease-in-out",
            padding: "0px",
            fontSize: "14px",
            textAlign: "center",
            display:"block",
            "&:hover": {
              color: theme.palette.primary.LogoColor,
            },
          }} component="a" href="#">
            <Typography>About us </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton sx={{
           color: theme.palette.primary.White,
           transition: "all .3s ease-in-out",
           padding: "0px",
           fontSize: "14px",
           textAlign: "center",
           display:"block",
           "&:hover": {
             color: theme.palette.primary.LogoColor,
            },
          }} component="a" href="#">
            <Typography>Blog</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton sx={{
             color: theme.palette.primary.White,
             transition: "all .3s ease-in-out",
             padding: "0px",
             fontSize: "14px",
             textAlign: "center",
             display:"block",
             "&:hover": {
               color: theme.palette.primary.LogoColor,
            },
          }} component="a" href="#">
            <Typography>Contact us</Typography>
            </ListItemButton>
          </ListItem>
            </List>
          </Box>
          <Box  sx={{
            width: {
              xs: "100%",
              sm: "100%",
              lg: "25%",
            },
            paddingX:{
                xs: "0px",
                sm: "0px",
                lg: "30px",
            }
          }} >
            <Typography sx={{
                color: theme.palette.primary.White,
                textAlign:"center",
                fontSize:"30px",
            }} variant="h6" component={"h3"}>Quick Links</Typography>
            <List sx={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
flexDirection:"column",
gap:"10px",
}}>
            <ListItem disablePadding>
          <ListItemButton sx={{
            color: theme.palette.primary.White,
            transition: "all .3s ease-in-out",
            padding: "0px",
            fontSize: "14px",
            textAlign: "center",
            display:"block",
            "&:hover": {
              color: theme.palette.primary.LogoColor,
            },
          }} component="a" href="#">
            <Typography>Login</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{
            color: theme.palette.primary.White,
            transition: "all .3s ease-in-out",
            padding: "0px",
            fontSize: "14px",
            textAlign: "center",
            display:"block",
            "&:hover": {
              color: theme.palette.primary.LogoColor,
            },
          }} component="a" href="#">
            <Typography>Privacy Policy </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton sx={{
            color: theme.palette.primary.White,
            transition: "all .3s ease-in-out",
            padding: "0px",
            fontSize: "14px",
            textAlign: "center",
            display:"block",
            "&:hover": {
              color: theme.palette.primary.LogoColor,
            },
          }} component="a" href="#">
            <Typography>Terms </Typography>
            </ListItemButton>
          </ListItem>

            </List> 
          </Box>
          <Box  sx={{
            width: {
              xs: "100%",
              sm: "100%",
              lg: "25%",
            },
          }}>
              <Typography sx={{
                color: theme.palette.primary.White,
                textAlign:"center",
                fontSize:"30px",
            }} variant="h6" component={"h3"}>Quick Links</Typography>
             <List sx={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
flexDirection:"column",
gap:"10px",
}}>
         
          <ListItem disablePadding>
          <ListItemButton sx={{
            color: theme.palette.primary.White,
            transition: "all .3s ease-in-out",
            padding: "0px",
            fontSize: "14px",
            textAlign: "center",
            display:"flex",
            alignItems:"center",
            justifyContent:{
                xs:"center",
                sm:"center",
                lg:"start",
            },
           
            gap:"10px",
            "&:hover": {
              color: theme.palette.primary.LogoColor,
            },
          }} component="a" href="#">
             <LocationOnIcon />
            <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>123 Street, City, State, Country</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton sx={{
           color: theme.palette.primary.White,
           transition: "all .3s ease-in-out",
           padding: "0px",
           fontSize: "14px",
           textAlign: "center",
           display:"flex",
           alignItems:"center",
           justifyContent:{
            xs:"center",
            sm:"center",
            lg:"start",
        },
           gap:"10px",
           "&:hover": {
             color: theme.palette.primary.LogoColor,
            },
          }} component="a" href="#">
               <EmailIcon />
            <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>Email: example@example.com</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton sx={{
             color: theme.palette.primary.White,
             transition: "all .3s ease-in-out",
             padding: "0px",
             fontSize: "14px",
             textAlign: "center",
             display:"flex",
             alignItems:"center",
             justifyContent:{
              xs:"center",
              sm:"center",
              lg:"start",
          },
             gap:"10px",
             "&:hover": {
               color: theme.palette.primary.LogoColor,
            },
          }} component="a" href="#">
         <PhoneIcon />
            <Typography variant="body1" sx={{ marginLeft: '0.5rem' }}>Phone: (123) 456-7890</Typography>
            </ListItemButton>
          </ListItem>
            </List> 
           
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
