import React from "react";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import HeaderNew from "../components/HeaderNew";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import theme from "../Theme";
import { EditNote, Map, Photo, Videocam } from "@mui/icons-material";
import RightBar from "../components/RightBar";
import Footer from "../components/Footer";
import DoneIcon from "@mui/icons-material/Done";
import { useSelector } from "react-redux";


const ChatRoom = () => {
const friendList = useSelector((state) => state.FriendListReducer.value);


  return (
    <>
      <HeaderNew />
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box sx={{ display: "flex", padding: "100px 0 50px" }}>
          <Box flex={1} p={"0 10px"}>
            <Sidebar />
          </Box>
          <Box flex={2} p={"0 10px"}>
            <Box
              sx={{
                paddingBottom: "20px",
                marginBottom: "20px",
                borderBottom: `1px solid ${theme.palette.primary.Gray}`,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  flex={"2"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 10px",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/assets/images/profileImg.jpg"
                    sx={{
                      border: "7px solid #fff",
                      float: "left",
                      marginRight: "5px",
                      position: "relative",
                      height: "70px",
                      width: "70px",
                      borderRadius: "50%",
                    }}
                  />

                  <TextareaAutosize
                    minRows={3}
                    placeholder="Write what you wish"
                    style={{
                      height: "60px",
                      width: "100%",
                      border: `1px solid ${theme.palette.primary.LightGray}`,
                      padding: "6px 12px",
                      borderRadius: "5px",
                      fontSize: "16px",
                      cursor: "auto",
                    }}
                  />
                </Box>
                <Box
                  flex={"1"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: "0 10px",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "10px",
                      "& :hover": {
                        color: theme.palette.primary.LogoColor,
                      },
                    }}
                    component={"a"}
                    href="#"
                  >
                    <EditNote
                      sx={{
                        color: theme.palette.primary.ParaColor,
                        fontSize: "25px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      marginRight: "10px",
                      "& :hover": {
                        color: theme.palette.primary.LogoColor,
                      },
                    }}
                    component={"a"}
                    href="#"
                  >
                    <Photo
                      sx={{
                        color: theme.palette.primary.ParaColor,
                        fontSize: "20px",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      marginRight: "10px",
                      "& :hover": {
                        color: theme.palette.primary.LogoColor,
                      },
                    }}
                    component={"a"}
                    href="#"
                  >
                    <Videocam
                      sx={{
                        color: theme.palette.primary.ParaColor,
                        fontSize: "20px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      marginRight: "10px",
                      "& :hover": {
                        color: theme.palette.primary.LogoColor,
                      },
                    }}
                    component={"a"}
                    href="#"
                  >
                    <Map
                      sx={{
                        color: theme.palette.primary.ParaColor,
                        fontSize: "20px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.LogoColor,
                      borderRadius: "30px",
                      padding: "7px 25px",
                      marginLeft: "10px",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.LogoColor,
                      },
                    }}
                    component={"a"}
                    href="#"
                  >
                    <Typography
                      sx={{
                        color: theme.palette.primary.White,
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      Publish
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                className="ChatRoomLeftBar"
                sx={{
                  padding: "20px 0px",
                  maxHeight: "400px",
                  width: "250px",
                  overflowY: "scroll",
                  height: "400px",
                }}
              >
                {friendList && friendList.map((item, index) => ( 
                  <Button
                  key={index}
                  sx={{
                    display: "block",
                    textTransform: "initial",
                    padding: "10px 10px",
                    borderBottom: `2px solid ${theme.palette.primary.Gray}`,
                    "&:hover": {
                      borderBottom: `2px solid ${theme.palette.primary.LogoColor}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "15px",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={process.env.PUBLIC_URL + "/assets/images/pf1.jpg"}
                    />
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "15px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "13px",
                            fontWeight: "500",
                            color: theme.palette.primary.LogoColor,
                            fontFamily: theme.palette.primary.MainFont1,
                          }}
                          component={"h6"}
                        >
                          {item.user_id_1.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: "400",
                            color: theme.palette.primary.ParaColor,
                            fontFamily: theme.palette.primary.MainFont1,
                          }}
                          component={"small"}
                        >
                          2 hour ago
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "15px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "13px",
                            fontWeight: "500",
                            color: theme.palette.primary.ParaColor,
                            fontFamily: theme.palette.primary.MainFont1,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            width: "140px",
                            display: "flex",
                          }}
                          component={"p"}
                        >
                          Okay fine. thank you
                        </Typography>
                        <DoneIcon
                          sx={{
                            fontSize: "15px",
                            color: theme.palette.primary.ParaColor,
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Button>
              
                )) }

                
              </Box>
              <Box
                className="ChatRoomLeftBar"
                sx={{
                  flex: "2",
                  paddingX: "10px",
                  maxHeight: "400px",
                  width: "100%",
                  overflowY: "scroll",
                  height: "400px",
                  marginLeft: "10px",
                }}
              ></Box>
            </Box>
          </Box>
          <Box flex={0.5} p={"0 10px"}>
            <RightBar />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ChatRoom;
