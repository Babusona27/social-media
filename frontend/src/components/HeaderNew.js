import {
  AppBar,
  Box,
  Container,
  Drawer,
  FormControl,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../Theme";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/reducers/UserReducer";
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';



const HeaderNew = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // menubar open
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <AppBar
      sx={{
        position: "fixed",
        backgroundColor: theme.palette.primary.Black,
        height: "60px",
        boxShadow: "0 5px 10px 0 rgb(87 101 128 / 12%)",
      }}
    >
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            minHeight: {
              xs: "auto",
              sm: "auto",
              lg: "auto",
            },
          }}
        >
          <Box
            href="#"
            component={"a"}
            sx={{
              width: { xs: "160px", sm: "100px", lg: "180px" },
              minWidth: { xs: "160px", sm: "100px", lg: "120px" },
              display: "flex",
          }}
          >
            <Box
              component={"img"}
              src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  lg: "block",
                },
              }}>
              <FormControl
                className="form_imput"
                sx={{
                  height: "40px",
                  padding: "0px",
                  color: theme.palette.primary.White,
                  width: "100%",
                  minWidth: "300px",
                  borderRadius: "30px",
                }}
              >
                <TextField
                  fullWidth
                  className="form_imputNew"
                  sx={{
                    padding: "0px",
                    height: "30px",
                    borderRadius: "30px",
                    boxShadow: "0 5px 10px 0 rgb(87 101 128 / 12%)",
                    color: theme.palette.primary.White,
                  }}
                  variant="outlined"
                  placeholder="Search..."
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          sx={{
                            color: theme.palette.primary.White,
                          }}
                        >
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Box>
            <Box
             sx={{
              display: {
                xs: "none",
                sm: "none",
                lg: "block",
              },
            }}
            >
              <List
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "100%",
                  width: "100%",
                  maxWidth: "600px",
                  minWidth: "550px",
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      color: theme.palette.primary.White,
                      transition: "all .3s ease-in-out",
                      padding: "0px",
                      fontSize: "14px",
                      textAlign: "center",
                      display: "block",
                      "&:hover": {
                        color: theme.palette.primary.LogoColor,
                      },
                    }}
                    component="a"
                    href="/"
                  >
                    <Typography>home</Typography>
                  </ListItemButton>
                </ListItem>
             
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      color: theme.palette.primary.White,
                      transition: "all .3s ease-in-out",
                      padding: "0px",
                      fontSize: "14px",
                      textAlign: "center",
                      display: "block",
                      "&:hover": {
                        color: theme.palette.primary.LogoColor,
                      },
                    }}
                    component="a"
                    href="#"
                  >
                    <Typography>About us </Typography>
                  </ListItemButton>
                </ListItem>
            
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      color: theme.palette.primary.White,
                      transition: "all .3s ease-in-out",
                      padding: "0px",
                      fontSize: "14px",
                      textAlign: "center",
                      display: "block",
                      "&:hover": {
                        color: theme.palette.primary.LogoColor,
                      },
                    }}
                    component="a"
                    href="#"
                  >
                    <Typography>Contact us</Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      color: theme.palette.primary.White,
                      transition: "all .3s ease-in-out",
                      padding: "0px",
                      fontSize: "14px",
                      textAlign: "center",
                      display: "block",
                      "&:hover": {
                        color: theme.palette.primary.LogoColor,
                      },
                    }}
                    component="a"
                    href="#"
                    onClick={() => {
                      dispatch(logOut());
                      navigate('/');
                    }}
                  >
                    <Typography>Logout </Typography>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  lg: "none",
                },
              }}
            >
              <StyledIconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerOpen}
                sx={{ 
                  marginRight: "0px !important",
                 }}
              >
                <MenuIcon />
              </StyledIconButton>
              <StyledDrawer
                anchor="top"
                open={open}
                onClose={handleDrawerClose}
                sx={{
                  "& .MuiDrawer-paper": {
                    width: "100%",
                    backgroundColor: theme.palette.primary.Black,
                    color: theme.palette.primary.White,
                    padding: "20px 0px",
                  },
                }}
              >
                <Box sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                
                }}>
                  <Box
                    href="#"
                    component={"a"}
                    sx={{
                      width: { xs: "170px", sm: "100px", lg: "180px" },
                      minWidth: { xs: "170px", sm: "100px", lg: "120px" },
                      display: "flex",
                      marginLeft: "15px",
                    }}
                  >
                    <Box
                      component={"img"}
                      src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                    />
                  </Box>
                  <IconButton sx={{
                    color: theme.palette.primary.White,
                    marginRight: "15px",
               background: theme.palette.primary.BackGredient2,  
                  }} onClick={handleDrawerClose}>
    <ClearIcon />
  </IconButton>
                </Box>
                <List
                  sx={{
                    padding: "20px 0px",
                    margin: "0px",
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        borderBottom: `1px solid ${theme.palette.primary.LogoColor}`,
                        transition: "all .3s ease-in-out",
                        "&:hover": {
                          backgroundColor: theme.palette.primary.LogoColor,
                          paddingLeft: "35px",
                        },
                      }}
                      component="a"
                      href="/"
                    >
                      <Typography>home</Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        borderBottom: `1px solid ${theme.palette.primary.LogoColor}`,
                        transition: "all .3s ease-in-out",
                        "&:hover": {
                          backgroundColor: theme.palette.primary.LogoColor,
                          paddingLeft: "35px",
                        },
                      }}
                      component="a"
                      href="#"
                    >
                       <Typography>About us </Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        borderBottom: `1px solid ${theme.palette.primary.LogoColor}`,
                        transition: "all .3s ease-in-out",
                        "&:hover": {
                          backgroundColor: theme.palette.primary.LogoColor,
                          paddingLeft: "35px",
                        },
                      }}
                      component="a"
                      href="#"
                    >
                        <Typography>Contact us</Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        borderBottom: `1px solid ${theme.palette.primary.LogoColor}`,
                        transition: "all .3s ease-in-out",
                        "&:hover": {
                          backgroundColor: theme.palette.primary.LogoColor,
                          paddingLeft: "35px",
                        },
                      }}
                      component="a"
                    href="#"
                    onClick={() => {
                      dispatch(logOut());
                      navigate('/');
                    }}
                  >
                    <Typography>Logout </Typography>
                    </ListItemButton>
                  </ListItem>
              
                </List>
                <Box
                  sx={{
                    padding: "10px 10px 0",
                  }}
                >
                  <FormControl
                    className="form_imputNew"
                    sx={{
                      padding: "0px",
                      color: theme.palette.primary.White,
                      width: "100%",

                      minWidth: {
                        xs: "200px",
                        sm: "200px",
                        lg: "300px",
                      },
                      borderRadius: "30px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: theme.palette.primary.LogoColor,
                          background: "transparent",
                        },
                        "&:hover fieldset": {
                          borderColor: theme.palette.primary.LogoColor,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.palette.primary.LogoColor,
                          borderWidth: "1px",
                        },
                      },
                    }}
                  >
                    <TextField
                      fullWidth
                      size="small"
                      sx={{
                        padding: "0px",
background: "transparent",
                        borderRadius: "30px",
                        boxShadow: "0 5px 10px 0 rgb(87 101 128 / 12%)",
                        color: theme.palette.primary.White,
                      }}
                      variant="outlined"
                      placeholder="Search..."
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              sx={{
                                color: theme.palette.primary.White,
                              }}
                            >
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                </Box>
              </StyledDrawer>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
const drawerWidth = "100%";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

export default HeaderNew;
