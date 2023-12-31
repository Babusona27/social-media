import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Stack,

  Typography,
} from "@mui/material";
import React, { useState } from "react";
//import Header from "../components/Header";
import theme from "../Theme";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import GroupsIcon from '@mui/icons-material/Groups';
import CollectionsIcon from '@mui/icons-material/Collections';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Register from "../components/Register";
import Login from "../components/Login";

const Landing = () => {
  const [tab, setTab] = useState(1);

  // Callback function to receive value from the child
  const handleTabChange = (value) => {
    setTab(value);
  };
  return (
    <>
      {/* <Box>
        <Header />
      </Box> */}

      <Box
        sx={{
          height: {
            xs: "650px",
            sm: "650px",
            md: "500px",
            lg: "500px",
          },
          width: "100%",
          backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/bg.jpg"
            })`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
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
        {/* login or signup  container */}
        {tab === 1 ? (<Login onChildClick={handleTabChange} />) : (<Register onChildClick={handleTabChange} />)}

        {/* end login oe signup container */}
      </Box>
      <Box
        sx={{
          padding: "100px 0 70px",
          position: "relative",
          background: theme.palette.primary.GrayGredient,
        }}
        className="features_section"
        component={"section"}
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "50px",
                sm: "60px",
                md: "80px",
                lg: "215px",
                xl: "215px",
              },
              color: theme.palette.primary.LightGray,
              textShadow: {
                xs: "none",
                sm: "none",
                md: "9px 3px 5px rgb(0 0 0 / 15%)",
                lg: "9px 3px 5px rgb(0 0 0 / 15%)",
              },
              lineHeight: "1",
              margin: {
                xs: "20px 0",
                sm: "40px 0",
                md: "0 0 -50px 0",
                lg: "0 0 -50px 0",
              },
            }}
            component={"h1"}
          >
            social herd
          </Typography>
          <Box
            component={"ul"}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              justifyContent: "center",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <Box
              sx={{
                display: {
                  xs: "grid",
                  sm: "grid",
                  md: "flex",
                  lg: "flex",
                },
                alignItems: "center",
                gap: "20px",
                justifyContent: "center",
                flexDirection: "column",
              }}
              component={"li"}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: ` url(${process.env.PUBLIC_URL + "/assets/images/fb1.jpg"
                    })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: theme.palette.primary.White,
                  boxShadow: "0 12px 12px rgba(39, 170, 225, 0.3)",
                  border: "6px solid",
                  borderColor: theme.palette.primary.White,
                  transition: "'background 0.3s ease-in-out",
                  overflow: "hidden",
                  cursor: "pointer",
                  zIndex: "1",
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    background: theme.palette.primary.BackGredient2,
                    zIndex: "1",
                  },
                  "&:hover": {
                    background: theme.palette.primary.deepBlue,
                  },
                }}
                component={"span"}
              >
                <PersonAddRoundedIcon
                  sx={{
                    fontSize: "40px",
                    position: "relative",
                    zIndex: "2",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "500",
                  color: theme.palette.primary.LightGray1,
                  textAlign: "center",
                }}
                component={"h3"}
              >
                Make Friends
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                justifyContent: "center",
                flexDirection: "column",
              }}
              component={"li"}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: ` url(${process.env.PUBLIC_URL + "/assets/images/fb2.jpg"
                    })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: theme.palette.primary.White,
                  boxShadow: "0 12px 12px rgba(39, 170, 225, 0.3)",
                  border: "6px solid",
                  borderColor: theme.palette.primary.White,
                  transition: "'background 0.3s ease-in-out",
                  overflow: "hidden",
                  cursor: "pointer",
                  zIndex: "1",
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    background: theme.palette.primary.BackGredient2,
                    zIndex: "1",
                  },
                  "&:hover": {
                    background: theme.palette.primary.deepBlue,
                  },
                }}
                component={"span"}
              >
                <CollectionsRoundedIcon
                  sx={{
                    fontSize: "40px",
                    position: "relative",
                    zIndex: "2",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "500",
                  color: theme.palette.primary.LightGray1,
                  textAlign: "center",
                }}
                component={"h3"}
              >
                Publish Posts
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                justifyContent: "center",
                flexDirection: "column",
              }}
              component={"li"}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: ` url(${process.env.PUBLIC_URL + "/assets/images/fb3.jpg"
                    })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: theme.palette.primary.White,
                  boxShadow: "0 12px 12px rgba(39, 170, 225, 0.3)",
                  border: "6px solid",
                  borderColor: theme.palette.primary.White,
                  transition: "'background 0.3s ease-in-out",
                  overflow: "hidden",
                  cursor: "pointer",
                  zIndex: "1",
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    background: theme.palette.primary.BackGredient2,
                    zIndex: "1",
                  },
                  "&:hover": {
                    background: theme.palette.primary.deepBlue,
                  },
                }}
                component={"span"}
              >
                <SmsRoundedIcon
                  sx={{
                    fontSize: "40px",
                    position: "relative",
                    zIndex: "2",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "500",
                  color: theme.palette.primary.LightGray1,
                  textAlign: "center",
                }}
                component={"h3"}
              >
                Private Chats
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                justifyContent: "center",
                flexDirection: "column",
              }}
              component={"li"}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: ` url(${process.env.PUBLIC_URL + "/assets/images/fb4.jpg"
                    })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: theme.palette.primary.White,
                  boxShadow: theme.palette.primary.BoxShadow,
                  border: "6px solid",
                  borderColor: theme.palette.primary.White,
                  transition: "'background 0.3s ease-in-out",
                  overflow: "hidden",
                  cursor: "pointer",
                  zIndex: "1",
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    background: theme.palette.primary.BackGredient2,
                    zIndex: "1",
                  },
                  "&:hover": {
                    background: theme.palette.primary.deepBlue,
                  },
                }}
                component={"span"}
              >
                <EditNoteRoundedIcon
                  sx={{
                    fontSize: "40px",
                    position: "relative",
                    zIndex: "2",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "500",
                  color: theme.palette.primary.LightGray1,
                  textAlign: "center",
                }}
                component={"h3"}
              >
                Create Polls
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "50px",
                fontWeight: "500",
                color: theme.palette.primary.LightGray1,
                textAlign: "center",
                margin: "20px 0 40px",
                opacity: ".3",
              }}
              component={"h3"}
            >
              find awesome people like you
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
              component={"ul"}
            >
              <Box
                sx={{
                  background: theme.palette.primary.Gray2,
                  height: "50px",
                  width: "40px",
                  lineHeight: "1",
                  fontSize: "55px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                  color: theme.palette.primary.LogoColor,
                  boxShadow: theme.palette.primary.BoxShadow,
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    transform: "translateY(-50%)",
                    width: "100%",
                    height: "1px",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1",
                  },
                }}
                component={"li"}
              >
                1
              </Box>
              <Box
                sx={{
                  background: theme.palette.primary.Gray2,
                  height: "50px",
                  width: "40px",
                  lineHeight: "1",
                  fontSize: "55px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                  color: theme.palette.primary.LogoColor,
                  boxShadow: theme.palette.primary.BoxShadow,
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    transform: "translateY(-50%)",
                    width: "100%",
                    height: "1px",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1",
                  },
                }}
                component={"li"}
              >
                2
              </Box>
              <Box
                sx={{
                  background: theme.palette.primary.Gray2,
                  height: "50px",
                  width: "40px",
                  lineHeight: "1",
                  fontSize: "55px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                  color: theme.palette.primary.LogoColor,
                  boxShadow: theme.palette.primary.BoxShadow,
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    transform: "translateY(-50%)",
                    width: "100%",
                    height: "1px",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1",
                  },
                }}
                component={"li"}
              >
                8
              </Box>
              <Box
                sx={{
                  background: theme.palette.primary.Gray2,
                  height: "50px",
                  width: "40px",
                  lineHeight: "1",
                  fontSize: "55px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                  color: theme.palette.primary.LogoColor,
                  boxShadow: theme.palette.primary.BoxShadow,
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    transform: "translateY(-50%)",
                    width: "100%",
                    height: "1px",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1",
                  },
                }}
                component={"li"}
              >
                4
              </Box>
              <Box
                sx={{
                  background: theme.palette.primary.Gray2,
                  height: "50px",
                  width: "40px",
                  lineHeight: "1",
                  fontSize: "55px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                  color: theme.palette.primary.LogoColor,
                  boxShadow: theme.palette.primary.BoxShadow,
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    transform: "translateY(-50%)",
                    width: "100%",
                    height: "1px",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1",
                  },
                }}
                component={"li"}
              >
                5
              </Box>
              <Box
                sx={{
                  background: theme.palette.primary.Gray2,
                  height: "50px",
                  width: "40px",
                  lineHeight: "1",
                  fontSize: "55px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                  color: theme.palette.primary.LogoColor,
                  boxShadow: theme.palette.primary.BoxShadow,
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    transform: "translateY(-50%)",
                    width: "100%",
                    height: "1px",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1",
                  },
                }}
                component={"li"}
              >
                9
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: "14px",
                color: theme.palette.primary.LightGray1,
                textAlign: "center",
                margin: "40px 0 40px",
              }}
              component={"p"}
            >
              People Already Signed Up
            </Typography>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  margin: {
                    xs: "0 auto 0px",
                    sm: "0 auto 0px",
                    md: "0 auto -250px",
                    lg: "0 auto -250px",
                  },
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "823px",
                    lg: "823px",
                  },
                  height: {
                    xs: "100%",
                    sm: "100%",
                    md: "370px",
                    lg: "370px",
                  },
                }}
                component={"img"}
                src={process.env.PUBLIC_URL + "/assets/images/face-map.png"}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          padding: {
            xs: "50px 0 70px",
            sm: "50px 0 70px",
            md: "120px 0 70px",
            lg: "120px 0 70px",
          },
          position: "relative",
        }}
        component={"section"}
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "50px",
                sm: "60px",
                md: "80px",
                lg: "215px",
                xl: "215px",
              },
              color: theme.palette.primary.LightGray,
              textShadow: {
                xs: "none",
                sm: "none",
                md: "9px 3px 5px rgb(0 0 0 / 15%)",
                lg: "9px 3px 5px rgb(0 0 0 / 15%)",
              },
              lineHeight: "1",
              marginBottom: {
                xs: "30px",
                sm: "30px",
                md: "-50px",
                lg: "-50px",
              },
            }}
            component={"h1"}
          >
            download
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
            component={"ul"}
          >
            <Button
              sx={{
                marginBottom: "-20px",
                color: theme.palette.primary.White,
                fontWeight: "bold",
                fontSize: "18px",
                letterSpacing: "1px",
                textTransform: "capitalize",
                background: theme.palette.primary.Black,
                borderRadius: "5px",
                padding: "7px 17px",
                minHeight: "30px",
                "&:after": {
                  content: "''",
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  width: "100%",
                  height: "36px",
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,.1), transparent 70%)",
                  zIndex: "1",
                },
                "&:hover": {
                  background: theme.palette.primary.deepBlue,
                },
              }}
              variant="contained"
            >
              <Box
                sx={{
                  width: "150px",
                  height: "45px",
                }}
                src={process.env.PUBLIC_URL + "/assets/images/google-play.png"}
                component={"img"}
              />
            </Button>
            <Button
              sx={{
                marginBottom: "-20px",
                color: theme.palette.primary.White,
                fontWeight: "bold",
                fontSize: "18px",
                letterSpacing: "1px",
                textTransform: "capitalize",
                background: theme.palette.primary.Black,
                borderRadius: "5px",
                padding: "7px 17px",
                minHeight: "30px",
                "&:after": {
                  content: "''",
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  width: "100%",
                  height: "36px",
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,.1), transparent 70%)",
                  zIndex: "1",
                },
                "&:hover": {
                  background: theme.palette.primary.deepBlue,
                },
              }}
              variant="contained"
            >
              <Box
                sx={{
                  width: "150px",
                  height: "45px",
                }}
                src={process.env.PUBLIC_URL + "/assets/images/app-store.png"}
                component={"img"}
              />
            </Button>
          </Box>
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: "500",
              color: theme.palette.primary.LightGray1,
              textAlign: "center",
              margin: "60px 0 20px",
              opacity: ".3",
            }}
            component={"h3"}
          >
            stay connected anytime, anywhere
          </Typography>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                margin: "0 auto 0px",
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "780px",
                  lg: "780px",
                },
                height: "180px",
              }}
              component={"img"}
              src={process.env.PUBLIC_URL + "/assets/images/iphone.png"}
            />
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          minHeight: {
            xs: "0",
            sm: "0",
            md: "460px",
            lg: "460px",
          },
          width: {
            xs: "0",
            sm: "0",
            md: "100%",
            lg: "100%",
          },
          backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/bg-2.jpg"
            })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          padding: {
            xs: "0",
            sm: "0",
            md: "0 20px",
            lg: "0 20px",
          },
          position: "relative",
        }}
        component={"section"}></Box>
      <Box
        sx={{
          height: "500px",
          width: "100%",
          backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/bg-4.jpg"
            })`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          padding: "0 20px",
          position: "relative",
          "&::before": {
            content: "''",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 1) 100%)",
            zIndex: "1",
          },
        }}
        component={"section"}
      >
        <Box
          sx={{
            width: {
              xs: "96%",
              sm: "86%",
              md: "660px",
              lg: "660px",
            },
            height: {
              xs: "auto",
              sm: "auto",
              md: "660px",
              lg: "660px",
            },
            background: theme.palette.primary.LogoColor,
            position: "absolute",
            zIndex: "2",
            borderRadius: {
              xs: "15px",
              sm: "15px",
              md: "100%",
              lg: "100%",
            },
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            padding: {
              xs: "50px",
              sm: "50px",
              md: "70px",
              lg: "70px",
            },
          }}
        >
          <Box
            component={"ul"}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              gap: "50px",
            }}
          >
            <Box component={"li"}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "center",
                  flexDirection: "column",
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "-50%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0.5px",
                    height: "60px",
                    background: "rgba(255,255,255, 50%)",
                    zIndex: "1",
                  },

                }} >
                <Avatar sx={{
                  width: "70px",
                  height: "70px",
                  background: "rgba(255,255,255, 10%)",
                  boxShadow: theme.palette.primary.BoxShadow1,
                }}>
                  <GroupsIcon sx={{
                    fontSize: "40px",
                    fontWeight: "bold"
                  }} />
                </Avatar>
                <Box >
                  <Typography sx={{
                    fontSize: "25px",
                    fontWeight: "500",
                    lineHeight: "1", marginBottom: "5px",
                    color: theme.palette.primary.White,
                    textAlign: "center",
                  }}
                    component={"h3"}
                  >1,01,242</Typography>
                  <Typography sx={{
                    fontSize: "14px",
                    color: theme.palette.primary.White,
                    textAlign: "center",
                  }}
                    component={"p"}
                  >People registered</Typography>
                </Box>

              </Box>
            </Box>
            <Box component={"li"}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "center",
                  flexDirection: "column",
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "-32%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0.5px",
                    height: "40px",
                    background: "rgba(255,255,255, 50%)",
                    zIndex: "1",
                  },
                }}
              >
                <Avatar sx={{
                  width: "70px",
                  height: "70px",
                  background: "rgba(255,255,255, 10%)",
                  boxShadow: theme.palette.primary.BoxShadow1,
                }}>
                  <CollectionsIcon sx={{
                    fontSize: "40px",
                    fontWeight: "bold"
                  }} />
                </Avatar >
                <Box >
                  <Typography sx={{
                    fontSize: "25px",
                    fontWeight: "500",
                    lineHeight: "1", marginBottom: "5px",
                    color: theme.palette.primary.White,
                    textAlign: "center",
                  }}
                    component={"h3"}
                  >21,01,242</Typography>
                  <Typography sx={{
                    fontSize: "14px",
                    color: theme.palette.primary.White,
                    textAlign: "center",
                  }}
                    component={"p"}
                  >Posts published</Typography>
                </Box>

              </Box>
            </Box>
            <Box component={"li"}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "center",
                  flexDirection: "column",
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "-32%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0.5px",
                    height: "40px",
                    background: "rgba(255,255,255, 50%)",
                    zIndex: "1",
                  },
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    top: "105%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0.5px",
                    height: "60px",
                    background: "rgba(255,255,255, 50%)",
                    zIndex: "1",
                  },
                }}
              >
                <Avatar sx={{
                  width: "70px",
                  height: "70px",
                  background: "rgba(255,255,255, 10%)",
                  boxShadow: theme.palette.primary.BoxShadow1,
                }}>
                  <OnlinePredictionIcon sx={{
                    fontSize: "40px",
                    fontWeight: "bold"
                  }} />
                </Avatar>
                <Box >
                  <Typography sx={{
                    fontSize: "25px",
                    fontWeight: "500",
                    lineHeight: "1", marginBottom: "5px",
                    color: theme.palette.primary.White,
                    textAlign: "center",
                  }}
                    component={"h3"}
                  >41,242</Typography>
                  <Typography sx={{
                    fontSize: "14px",
                    color: theme.palette.primary.White,
                    textAlign: "center",
                  }}
                    component={"p"}
                  >People online</Typography>
                </Box>

              </Box>
            </Box>

          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "120px 0 70px",
          position: "relative",
        }}
        component={"section"}
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "50px",
                sm: "60px",
                md: "80px",
                lg: "215px",
                xl: "215px",
              },
              color: theme.palette.primary.LightGray,
              textShadow: {
                xs: "none",
                sm: "none",
                md: "9px 3px 5px rgb(0 0 0 / 15%)",
                lg: "9px 3px 5px rgb(0 0 0 / 15%)",
              },
              lineHeight: "1",
              marginBottom: {
                xs: "30px",
                sm: "30px",
                md: "-50px",
                lg: "-50px",
              },
            }}
            component={"h1"}
          >
            live feed
          </Typography>
          <Stack sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }} direction="row" spacing={2}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar sx={{
                width: "60px",
                height: "60px"
              }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f1.jpg"} />
            </StyledBadge>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar sx={{
                width: "60px",
                height: "60px"
              }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f2.jpg"} />
            </StyledBadge>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar sx={{
                width: "60px",
                height: "60px"
              }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f3.jpg"} />
            </StyledBadge>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar sx={{
                width: "60px",
                height: "60px"
              }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f4.jpg"} />
            </StyledBadge>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar sx={{
                width: "60px",
                height: "60px"
              }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f1.jpg"} />
            </StyledBadge>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar sx={{
                width: "60px",
                height: "60px"
              }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f2.jpg"} />
            </StyledBadge>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar sx={{
                width: "60px",
                height: "60px"
              }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f3.jpg"} />
            </StyledBadge>

          </Stack>
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: "500",
              color: theme.palette.primary.LightGray1,
              textAlign: "center",
              margin: "40px 0 20px",
              opacity: ".3",
            }}
            component={"h3"}
          >
            see what’s happening now
          </Typography>
          <Box sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            },
            justifyContent: "center",
            alignItems: "center",
            gap: "30px"
          }}>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "30px"
            }} component={"ul"}>
              <Box sx={{
                boxShadow: theme.palette.primary.BoxShadow,
              }} component={"li"}>
                <Box sx={{
                  padding: "10px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0px",
                    transform: "translateY(-50%)",
                    width: "2px",
                    height: "100%",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1"
                  }
                }}>
                  <Avatar sx={{
                    width: "50px",
                    height: "50px"
                  }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f1.jpg"} />
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    <Box sx={{
                      display: {
                        xs: "block",
                        sm: "block",
                        md: "flex",
                        lg: "flex",
                      },
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "7px"
                    }}>
                      <Typography href="#" sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.LogoColor,
                        textAlign: "center",
                      }}
                        component={"a"}
                      >Suraj</Typography>
                      <Typography sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.ParaColor,
                        textAlign: "center",
                      }}
                        component={"p"}
                      >just posted a photo from Moscow</Typography>
                    </Box>
                    <Typography sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,

                    }}
                      component={"p"}
                    >20 Secs ago</Typography>
                  </Box>
                </Box>
                <Divider />
              </Box>
              <Box sx={{
                boxShadow: theme.palette.primary.BoxShadow,
              }} component={"li"}>
                <Box sx={{
                  padding: "10px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0px",
                    transform: "translateY(-50%)",
                    width: "2px",
                    height: "100%",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1"
                  }
                }}>
                  <Avatar sx={{
                    width: "50px",
                    height: "50px"
                  }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f2.jpg"} />
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    <Box sx={{
                      display: {
                        xs: "block",
                        sm: "block",
                        md: "flex",
                        lg: "flex",
                      },
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "7px"
                    }}>
                      <Typography href="#" sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.LogoColor,
                        textAlign: "center",
                      }}
                        component={"a"}
                      >Suraj</Typography>
                      <Typography sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.ParaColor,
                        textAlign: "center",
                      }}
                        component={"p"}
                      >just posted a photo from Moscow</Typography>
                    </Box>
                    <Typography sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,

                    }}
                      component={"p"}
                    >20 Secs ago</Typography>
                  </Box>
                </Box>
                <Divider />
              </Box>
              <Box sx={{
                boxShadow: theme.palette.primary.BoxShadow,
              }} component={"li"}>
                <Box sx={{
                  padding: "10px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0px",
                    transform: "translateY(-50%)",
                    width: "2px",
                    height: "100%",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1"
                  }
                }}>
                  <Avatar sx={{
                    width: "50px",
                    height: "50px"
                  }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f3.jpg"} />
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    <Box sx={{
                      display: {
                        xs: "block",
                        sm: "block",
                        md: "flex",
                        lg: "flex",
                      },
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "7px"
                    }}>
                      <Typography href="#" sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.LogoColor,
                        textAlign: "center",
                      }}
                        component={"a"}
                      >Suraj</Typography>
                      <Typography sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.ParaColor,
                        textAlign: "center",
                      }}
                        component={"p"}
                      >just posted a photo from Moscow</Typography>
                    </Box>
                    <Typography sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,

                    }}
                      component={"p"}
                    >20 Secs ago</Typography>
                  </Box>
                </Box>
                <Divider />
              </Box>
              <Box sx={{
                boxShadow: theme.palette.primary.BoxShadow,
              }} component={"li"}>
                <Box sx={{
                  padding: "10px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0px",
                    transform: "translateY(-50%)",
                    width: "2px",
                    height: "100%",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1"
                  }
                }}>
                  <Avatar sx={{
                    width: "50px",
                    height: "50px"
                  }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f4.jpg"} />
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    <Box sx={{
                      display: {
                        xs: "block",
                        sm: "block",
                        md: "flex",
                        lg: "flex",
                      },
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "7px"
                    }}>
                      <Typography href="#" sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.LogoColor,
                        textAlign: "center",
                      }}
                        component={"a"}
                      >Suraj</Typography>
                      <Typography sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.ParaColor,
                        textAlign: "center",
                      }}
                        component={"p"}
                      >just posted a photo from Moscow</Typography>
                    </Box>
                    <Typography sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,

                    }}
                      component={"p"}
                    >20 Secs ago</Typography>
                  </Box>
                </Box>
                <Divider />
              </Box>
              <Box sx={{
                boxShadow: theme.palette.primary.BoxShadow,
              }} component={"li"}>
                <Box sx={{
                  padding: "10px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0px",
                    transform: "translateY(-50%)",
                    width: "2px",
                    height: "100%",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1"
                  }
                }}>
                  <Avatar sx={{
                    width: "50px",
                    height: "50px"
                  }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f1.jpg"} />
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    <Box sx={{
                      display: {
                        xs: "block",
                        sm: "block",
                        md: "flex",
                        lg: "flex",
                      },
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "7px"
                    }}>
                      <Typography href="#" sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.LogoColor,
                        textAlign: "center",
                      }}
                        component={"a"}
                      >Suraj</Typography>
                      <Typography sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.ParaColor,
                        textAlign: "center",
                      }}
                        component={"p"}
                      >just posted a photo from Moscow</Typography>
                    </Box>
                    <Typography sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,

                    }}
                      component={"p"}
                    >20 Secs ago</Typography>
                  </Box>
                </Box>
                <Divider />
              </Box>
              <Box sx={{
                boxShadow: theme.palette.primary.BoxShadow,
              }} component={"li"}>
                <Box sx={{
                  padding: "10px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0px",
                    transform: "translateY(-50%)",
                    width: "2px",
                    height: "100%",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1"
                  }
                }}>
                  <Avatar sx={{
                    width: "50px",
                    height: "50px"
                  }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f2.jpg"} />
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    <Box sx={{
                      display: {
                        xs: "block",
                        sm: "block",
                        md: "flex",
                        lg: "flex",
                      },
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "7px"
                    }}>
                      <Typography href="#" sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.LogoColor,
                        textAlign: "center",
                      }}
                        component={"a"}
                      >Suraj</Typography>
                      <Typography sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.ParaColor,
                        textAlign: "center",
                      }}
                        component={"p"}
                      >just posted a photo from Moscow</Typography>
                    </Box>
                    <Typography sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,

                    }}
                      component={"p"}
                    >20 Secs ago</Typography>
                  </Box>
                </Box>
                <Divider />
              </Box>

            </Box>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "30px"
            }} component={"ul"}>
              <Box sx={{
                boxShadow: theme.palette.primary.BoxShadow,
              }} component={"li"}>
                <Box sx={{
                  padding: "10px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0px",
                    transform: "translateY(-50%)",
                    width: "2px",
                    height: "100%",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1"
                  }
                }}>
                  <Avatar sx={{
                    width: "50px",
                    height: "50px"
                  }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f3.jpg"} />
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    <Box sx={{
                      display: {
                        xs: "block",
                        sm: "block",
                        md: "flex",
                        lg: "flex",
                      },
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "7px"
                    }}>
                      <Typography href="#" sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.LogoColor,
                        textAlign: "center",
                      }}
                        component={"a"}
                      >Suraj</Typography>
                      <Typography sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.ParaColor,
                        textAlign: "center",
                      }}
                        component={"p"}
                      >just posted a photo from Moscow</Typography>
                    </Box>
                    <Typography sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,

                    }}
                      component={"p"}
                    >20 Secs ago</Typography>
                  </Box>
                </Box>
                <Divider />
              </Box>
              <Box sx={{
                boxShadow: theme.palette.primary.BoxShadow,
              }} component={"li"}>
                <Box sx={{
                  padding: "10px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0px",
                    transform: "translateY(-50%)",
                    width: "2px",
                    height: "100%",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1"
                  }
                }}>
                  <Avatar sx={{
                    width: "50px",
                    height: "50px"
                  }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f2.jpg"} />
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    <Box sx={{
                      display: {
                        xs: "block",
                        sm: "block",
                        md: "flex",
                        lg: "flex",
                      },
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "7px"
                    }}>
                      <Typography href="#" sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.LogoColor,
                        textAlign: "center",
                      }}
                        component={"a"}
                      >Suraj</Typography>
                      <Typography sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.ParaColor,
                        textAlign: "center",
                      }}
                        component={"p"}
                      >just posted a photo from Moscow</Typography>
                    </Box>
                    <Typography sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,

                    }}
                      component={"p"}
                    >20 Secs ago</Typography>
                  </Box>
                </Box>
                <Divider />
              </Box>
              <Box sx={{
                boxShadow: theme.palette.primary.BoxShadow,
              }} component={"li"}>
                <Box sx={{
                  padding: "10px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0px",
                    transform: "translateY(-50%)",
                    width: "2px",
                    height: "100%",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1"
                  }
                }}>
                  <Avatar sx={{
                    width: "50px",
                    height: "50px"
                  }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f4.jpg"} />
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    <Box sx={{
                      display: {
                        xs: "block",
                        sm: "block",
                        md: "flex",
                        lg: "flex",
                      },
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "7px"
                    }}>
                      <Typography href="#" sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.LogoColor,
                        textAlign: "center",
                      }}
                        component={"a"}
                      >Suraj</Typography>
                      <Typography sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.ParaColor,
                        textAlign: "center",
                      }}
                        component={"p"}
                      >just posted a photo from Moscow</Typography>
                    </Box>
                    <Typography sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,

                    }}
                      component={"p"}
                    >20 Secs ago</Typography>
                  </Box>
                </Box>
                <Divider />
              </Box>
              <Box sx={{
                boxShadow: theme.palette.primary.BoxShadow,
              }} component={"li"}>
                <Box sx={{
                  padding: "10px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0px",
                    transform: "translateY(-50%)",
                    width: "2px",
                    height: "100%",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1"
                  }
                }}>
                  <Avatar sx={{
                    width: "50px",
                    height: "50px"
                  }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f1.jpg"} />
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    <Box sx={{
                      display: {
                        xs: "block",
                        sm: "block",
                        md: "flex",
                        lg: "flex",
                      },
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "7px"
                    }}>
                      <Typography href="#" sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.LogoColor,
                        textAlign: "center",
                      }}
                        component={"a"}
                      >Suraj</Typography>
                      <Typography sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.ParaColor,
                        textAlign: "center",
                      }}
                        component={"p"}
                      >just posted a photo from Moscow</Typography>
                    </Box>
                    <Typography sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,

                    }}
                      component={"p"}
                    >20 Secs ago</Typography>
                  </Box>
                </Box>
                <Divider />
              </Box>
              <Box sx={{
                boxShadow: theme.palette.primary.BoxShadow,
              }} component={"li"}>
                <Box sx={{
                  padding: "10px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0px",
                    transform: "translateY(-50%)",
                    width: "2px",
                    height: "100%",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1"
                  }
                }}>
                  <Avatar sx={{
                    width: "50px",
                    height: "50px"
                  }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f2.jpg"} />
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    <Box sx={{
                      display: {
                        xs: "block",
                        sm: "block",
                        md: "flex",
                        lg: "flex",
                      },
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "7px"
                    }}>
                      <Typography href="#" sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.LogoColor,
                        textAlign: "center",
                      }}
                        component={"a"}
                      >Suraj</Typography>
                      <Typography sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.ParaColor,
                        textAlign: "center",
                      }}
                        component={"p"}
                      >just posted a photo from Moscow</Typography>
                    </Box>
                    <Typography sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,

                    }}
                      component={"p"}
                    >20 Secs ago</Typography>
                  </Box>
                </Box>
                <Divider />
              </Box>
              <Box sx={{
                boxShadow: theme.palette.primary.BoxShadow,
              }} component={"li"}>
                <Box sx={{
                  padding: "10px 20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: "50%",
                    left: "0px",
                    transform: "translateY(-50%)",
                    width: "2px",
                    height: "100%",
                    background: theme.palette.primary.LogoColor,
                    zIndex: "1"
                  }
                }}>
                  <Avatar sx={{
                    width: "50px",
                    height: "50px"
                  }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/f3.jpg"} />
                  <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    <Box sx={{
                      display: {
                        xs: "block",
                        sm: "block",
                        md: "flex",
                        lg: "flex",
                      },
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "7px"
                    }}>
                      <Typography href="#" sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.LogoColor,
                        textAlign: "center",
                      }}
                        component={"a"}
                      >Suraj</Typography>
                      <Typography sx={{
                        fontSize: "14px",
                        color: theme.palette.primary.ParaColor,
                        textAlign: "center",
                      }}
                        component={"p"}
                      >just posted a photo from Moscow</Typography>
                    </Box>
                    <Typography sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,

                    }}
                      component={"p"}
                    >20 Secs ago</Typography>
                  </Box>
                </Box>
                <Divider />
              </Box>


            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />

    </>
  );
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: "-1px",
      left: "-1px",
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default Landing;
