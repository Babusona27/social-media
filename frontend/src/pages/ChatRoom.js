import React, { useState, useEffect, useRef } from "react";
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
import { Add, EditNote, Map, Photo, Videocam } from "@mui/icons-material";
import RightBar from "../components/RightBar";
import Footer from "../components/Footer";
import DoneIcon from "@mui/icons-material/Done";
import { useSelector } from "react-redux";
import { SEND_MESSAGE, MESSAGE_LIST, IMAGE_BASE_URL } from "../Url";
import axios from "axios";

import io from "socket.io-client";
import AddFeed from "../components/AddFeed";

const ChatRoom = () => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  const friendList = useSelector((state) => state.FriendListReducer.value);
  const userData = useSelector((state) => state.UserReducer.value);
  const [newMessage, setNewMessage] = useState("");
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messageList, setMessageList] = useState([]);
  const [socket, setSocket] = useState(null);
  const [room, setRoom] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {

    if (selectedFriend) {
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
          // console.log("message list", res.data.data);
          if (Array.isArray(res.data.data)) {
            setMessageList(res.data.data);
          } else {
            console.error('res.data.data is not an array:', res.data.data);
            setMessageList([]);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
    const socket = io('http://localhost:4000');
    socket.emit('joinRoom', { room });
    socket.on('private message', (message) => {
      setMessageList((messageList) => [...messageList, { message: message }]);
    });

    setSocket(socket);
    socket.on('typing', () => {
      setIsTyping(true);
    });

    socket.on('stop typing', () => {
      setIsTyping(false);
    });
    return () => {
      socket.disconnect();
    };

  }, [selectedFriend, userData, messageList]);

  // Emit typing event when user starts typing
  const handleKeyDown = () => {
    socket.emit('typing', { room });
  };
  // Emit stop typing event when user stops typing
  const handleKeyUp = () => {
    socket.emit('stop typing', { room });
  };
  const handleSendMessage = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== "") {

      socket.emit('private message', { room, message: newMessage });

      // push message to message list
      setMessageList((messageList) => [
        ...messageList,
        { message: newMessage, senderId: { _id: userData.user._id } },
      ]);

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

      setNewMessage("");
      scrollToBottom()
    }
  };
  const getFeedPublishTime = (date) => {
    const currentDate = new Date();
    const feedDate = new Date(date);
    const diffTime = Math.abs(currentDate - feedDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.ceil(diffTime / (1000 * 60));
    const diffSeconds = Math.ceil(diffTime / (1000));
    if (diffDays > 1) {
      return `${diffDays} days ago`;
    } else if (diffHours > 1) {
      return `${diffHours} hours ago`;
    } else if (diffMinutes > 1) {
      return `${diffMinutes} minutes ago`;
    } else {
      return `${diffSeconds} seconds ago`;
    }
  }

  return (
    <>
      <HeaderNew />
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box sx={{ display: "flex", padding: "100px 0 50px" }}>
          <Box flex={1} p={"0 10px"}>
            <Sidebar />
          </Box>
          <Box flex={2} p={"0 10px"}>
            {/* Feed add component */}
            <AddFeed />
            {/* Feed add component */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                // alignItems: "center",
              }}
            >
              <Box
                className="ChatRoomLeftBar"
                sx={{
                  padding: "0px 0px 20px",
                  maxHeight: "400px",
                  width: "285px",
                  overflowY: "scroll",
                  height: "400px",
                  overflowX: "hidden",
                }}
              >
                {friendList &&
                  friendList.map((item, index) => (
                    // console.log('item', item),
                    <Button
                      key={index}
                      sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        textTransform: "initial",
                        padding: "10px 10px",
                        borderBottom: `2px solid ${theme.palette.primary.Gray}`,
                        "&:hover": {
                          borderBottom: `2px solid ${theme.palette.primary.LogoColor}`,
                        },
                      }}
                      onClick={() => {
                        setSelectedFriend(item);
                        setRoom(item.chat_id);
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "15px",
                          width: "100%",
                        }}
                      >
                        <Avatar
                          // alt="Remy Sharp"
                          src={
                            item.image
                              ? IMAGE_BASE_URL + item.image
                              : process.env.PUBLIC_URL + "/assets/images/man-avatar.png"
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
                                textAlign: "left",
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
                              {item.lastMessage !== null && getFeedPublishTime(item.lastMessage.createdAt)}
                            </Typography>
                          </Box>
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
                                color: theme.palette.primary.ParaColor,
                                fontFamily: theme.palette.primary.MainFont1,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                width: "140px",
                                display: "block",
                                textAlign: "left",
                              }}
                              component={"p"}
                            >
                              {item.lastMessage !== null && item.lastMessage.message}
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

                sx={{
                  flex: "2",
                  padding: "0px 10px 0px 0px",
                  position: "relative",
                }}
              >
                {/* chat box  */}
                <Box sx={{}}>
                  <Box className="ChatRoomLeftBar" sx={{
                    maxHeight: "400px",
                    width: "100%",
                    overflowY: "scroll",
                    overflowX: "hidden",
                    height: "400px",
                    paddingLeft: "10px",
                    marginRight: "0px",
                    paddingRight: "10px",
                    paddingBottom: "50px",
                    paddingTop: "20px",
                    display: "grid",
                    gap: "10px",


                  }}>
                    {messageList &&
                      messageList.map((message, index) => (

                        <Paper sx={{
                          display: "flex",
                          gap: "10px",
                          justifyContent: "flex-start",
                          flexDirection: message.senderId._id === userData.user._id ? "row-reverse" : "row",
                          alignItems: "self-start",
                          maxWidth: "300px",
                          marginLeft: message.senderId._id === userData.user._id ? "auto" : "0px",
                          boxShadow: "none"
                        }} className="chatBox" key={index}>
                          <Avatar sx={{
                            height: "25px",
                            width: "25px",
                          }} alt="Remy Sharp" src={process.env.PUBLIC_URL + "/assets/images/pf4.jpg"} />
                          <Typography elevation={3}
                            sx={{
                              maxWidth: "fit-content",
                              color: theme.palette.primary.White,
                              backgroundColor: message.senderId._id === userData.user._id ? theme.palette.primary.LogoColor : theme.palette.primary.Green,
                              padding: "5px 15px",
                              borderRadius: "10px",
                              position: "relative",
                              marginTop: "5px",
                              fontSize: "14px",

                              "&:after": {
                                content: "''",
                                position: "absolute",
                                top: "10px",
                                right: message.senderId._id === userData.user._id ? "-8px" : "auto",
                                left: message.senderId._id === userData.user._id ? "auto" : "-8px",
                                width: "0",
                                height: "0",
                                border: "10px solid transparent",
                                borderTopColor: message.senderId._id === userData.user._id ? theme.palette.primary.LogoColor : theme.palette.primary.Green,
                                borderBottom: "0",
                                marginTop: "-10px",
                              },
                            }}
                            // key={index}
                            variant="body1"
                            textAlign="left"
                            style={{
                              textAlign:
                                message.senderId._id === userData.user._id
                                  ? "right"
                                  : "left",
                            }}
                          >
                            {message.message}
                          </Typography>
                        </Paper>
                      ))}
                    <Box ref={messagesEndRef} />
                    {/* {isTyping && <p className="typing_text">The other user is typing...</p>} */}
                    {isTyping && <Typography component={"P"} className="typing_text">typing...</Typography>}
                  </Box>

                  <Box
                    sx={{
                      position: "relative",
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
                        display: "block",
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
                        onKeyDown={handleKeyDown}
                        onKeyUp={handleKeyUp}
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
                  {messageList.length === 0 && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: theme.palette.primary.LogoColor,
                          fontFamily: theme.palette.primary.MainFont1,
                        }}
                        component={"p"}
                      >
                        Select a friend to start chat
                      </Typography>
                    </Box>
                  )}
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
