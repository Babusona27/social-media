
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
import React, { useEffect, useState } from "react";
import theme from "../Theme";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";




const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

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
      className={isScrolled ? "active_header" : ""}
      sx={{
        opacity: "0",
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
              width: { xs: "80px", sm: "100px", lg: "180px" },
              minWidth: { xs: "80px", sm: "100px", lg: "120px" },
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
            <Box sx={{}}>
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
                    href="#"
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
                    <Typography>Newsfeed </Typography>
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
                    <Typography>Timeline </Typography>
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
                    <Typography>Blog</Typography>
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
              >
                <MenuIcon />
              </StyledIconButton>
              <StyledDrawer
                anchor="right"
                open={open}
                onClose={handleDrawerClose}
              >
                <List>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                      <Typography>home</Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                      <Typography>home</Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                      <Typography>home</Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                      <Typography>home</Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                      <Typography>home</Typography>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                      <Typography>home</Typography>
                    </ListItemButton>
                  </ListItem>
                </List>
              </StyledDrawer>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const drawerWidth = 260;

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
export default Header;
