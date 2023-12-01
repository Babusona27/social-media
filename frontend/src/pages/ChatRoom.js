import React,{useState, useEffect} from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Typography,
  Paper,
  TextField,
  FormControl,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import HeaderNew from "../components/HeaderNew";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import theme from "../Theme";
import { EditNote, Map, Photo, Videocam } from "@mui/icons-material";
import RightBar from "../components/RightBar";
import Footer from "../components/Footer";
import DoneIcon from "@mui/icons-material/Done";
import { useSelector } from "react-redux";
import { SEND_MESSAGE,MESSAGE_LIST } from "../Url";
import axios from "axios";

const ChatRoom = () => {
  const friendList = useSelector((state) => state.FriendListReducer.value);
  const userData = useSelector((state) => state.UserReducer.value);
  const [newMessage, setNewMessage] = useState("");
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messageList, setMessageList] = useState([]);

useEffect(() => {
    if(selectedFriend) {
      axios
        .get(MESSAGE_LIST, {
          params: {
            receiverId: selectedFriend._id,
          },
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        })
        .then((res) => {
         
          setMessageList(res.data.data);
        })
        .catch((err) => {
          console.log("err", err);
        });
        
    }

}, [selectedFriend,userData])


  const handleSendMessage = () => {
    if(newMessage.trim() !== "") {    
      setNewMessage("");
      // code for sending message
      const data = {
        message: newMessage,
        receiverId: selectedFriend._id,
      };
     
      axios
        .post(SEND_MESSAGE, data, {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        })
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
 
    }
    
  };

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
                  overflowX: "hidden",
                }}
              >
                {friendList &&
                  friendList.map((item, index) => (
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
                      onClick={() => setSelectedFriend(item)}
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
                          src={
                            process.env.PUBLIC_URL + "/assets/images/pf1.jpg"
                          }
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
                              {item.name}
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
                  ))}
              </Box>
              <Box
                className="ChatRoomLeftBar"
                sx={{
                  flex: "2",
                  padding: "0px 10px 0px 0px",
                  maxHeight: "400px",
                  width: "100%",
                  overflowY: "scroll",
                  overflowX: "hidden",
                  height: "400px",
                  marginLeft: "0px",
                  position: "relative",
                }}
              >
                {/* chat box  */}
                <Box>
                  {messageList && messageList.map((message, index) => (
                    <Paper elevation={3} key={index}>
                    <Typography
                      // key={index}
                      variant="body1"
                      textAlign="left"
                      style={{
                        textAlign: message.senderId === userData.user._id ? "right" : "left",
                      }}
                    >
                      {message.message}
                    </Typography>
                  </Paper>
                  
                  ))  
                  }
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      gap: "10px",
                      padding: "10px 10px",
                      borderTop: `1px solid ${theme.palette.primary.Gray}`,
                      backgroundColor: theme.palette.primary.White,
                      boxShadow: theme.palette.primary.BoxShadow2,
                    }}
                  >
                    <FormControl
                      className="form_imputNew"
                      sx={{
                        padding: "0px",
                        color: theme.palette.primary.White,
                        width: "70%",
                        minWidth: "70%",
                        borderRadius: "30px",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: theme.palette.primary.LogoColor,
                            background: "transparent",
                            borderRadius: "30px",
                          },
                          "&:hover fieldset": {
                            borderColor: theme.palette.primary.LogoColor,
                            borderRadius: "30px",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: theme.palette.primary.LogoColor,
                            borderWidth: "1px",
                            borderRadius: "30px",
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
                        placeholder="Type..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      />
                    </FormControl>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSendMessage}
                      sx={{
                        color: theme.palette.primary.White,
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "26px",
                        backgroundColor: theme.palette.primary.LogoColor,
                        fontFamily: theme.palette.primary.MainFont1,
                        borderRadius: "30px",
                        padding: "7px 25px",
                        width: "30%",
                        marginRight: "0px",
                        "&:hover": {
                          backgroundColor: theme.palette.primary.LogoColor,
                        },
                      }}
                    >
                      Send
                    </Button>
                  </Box>
                </Box>
              </Box>
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
