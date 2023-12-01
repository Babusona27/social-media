import { Avatar, Box, List, Typography, Badge, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { PersonAdd } from '@mui/icons-material'
import { Chat, Groups, PermMedia, Videocam } from '@mui/icons-material'
import theme from '../Theme'
import styled from '@mui/material/styles/styled'
import GroupIcon from '@mui/icons-material/Group';
import axios from "axios";
import { FRIEND_LIST } from "../Url";
import { useDispatch, useSelector } from "react-redux";
import { friendList } from "../redux/reducers/FriendListReducer";
import { Link } from 'react-router-dom';
import io from "socket.io-client";
const Sidebar = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.UserReducer.value);
  const [friend, setFriend] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    // get online users
    const socket = io('http://localhost:4000');
    socket.emit('online users', { user: userData.user });
    socket.on('online users', (users) => {

      // filter out current user
      users = users.filter((user) => user._id !== userData.user._id);

      // filter out duplicate users
      users = users.filter((user, index, self) =>
        index === self.findIndex((t) => (
          t._id === user._id
        ))
      );

      console.log('online users', users);
      setOnlineUsers(users);
    });

    // get friend list
    const getUserList = async () => {
      axios
        .get(FRIEND_LIST, {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        })
        .then((res) => {
          dispatch(friendList(res.data.data));
          setFriend(res.data.data);

          // filter out online friends
          if (onlineUsers.length === 0) return setOnlineFriends([]);
          const onlineFriends = res.data.data.filter((friend) =>
            onlineUsers.find((user) => user._id === friend._id)
          );
          setOnlineFriends(onlineFriends);

        })
        .catch((err) => {
          console.log(err);
        });
    }
    getUserList();
    return () => {
      socket.disconnect();
    };
  }, [userData, dispatch]);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: -1,
        left: -1,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
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
    },
  }))

  return (
    <Box position={"relative"}>
      <Box>
        {/*----------------- SidebarHeader--------------- */}

        <Box sx={{
          display: "flex",
        }}>
          <Box className="sideHeader" sx={{
            background: `url(${process.env.PUBLIC_URL + "/assets/images/fb6.jpg"}) center no-repeat`,
            backgroundSize: "cover",
            width: "100%",
            minHeight: "90px",
            borderRadius: "4px",
            padding: "10px 20px",
            color: "#fff",
            marginBottom: "40px",
            position: "relative",
            zIndex: "0",
            "&::after": {
              content: "''",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: theme.palette.primary.bgProfile,
              borderRadius: "4px",
              zIndex: "-1",
            }
          }}>
            <Avatar
              alt="Remy Sharp"
              src={
                process.env.PUBLIC_URL + "/assets/images/profileImg.jpg"
              }
              sx={{
                border: "7px solid #fff",
                float: "left",
                marginRight: "20px",
                position: "relative",
                top: "-30px",
                height: "70px",
                width: "70px",
                borderRadius: "50%",
              }}
            />

            <Box margin={"10px 0"}>
              <Typography component={"a"} href='/editprofile'  sx={{
                fontSize: "20px",
                color: theme.palette.primary.White,
                lineHeight: "0",
                "&:hover": {
                  color: theme.palette.primary.dark,
                  cursor: "pointer",
                }
              }}

              >{userData && userData.user.name}</Typography>

          

            </Box>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <PersonAdd sx={{
                fontSize: "14px",
                color: theme.palette.primary.White,
              }}
              />
              <Typography component={"a"} href='#'
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.White,
                  "&:hover": {
                    color: theme.palette.primary.dark,
                  }
                }}
              >
                {(friend ? friend.length : 0) + ' Friends'}
              </Typography>
            </Box>

          </Box>
        </Box>

        {/*-------------- Sidebar List *-------------*/}

        <List>
          {/* <Box sx={{
            display: "flex",
            alignItems: "center",
            padding: "0 15px",
            marginBottom: "10px",
          }}>
            <Feed sx={{
              color: "#00b8d4",
              fontSize: "18px",
              marginRight: "10px",
              marginBottom: "10px",
            }} />
            <Typography component={"a"} href='#' sx={{
              color: theme.palette.primary.ParaColor,
              fontSize: "16px",
              borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
              width: "100%",
              fontWeight: "600",
              paddingBottom: "10px",
              transition: "all .3s ease",
              "&:hover": {
                 color: theme.palette.primary.LogoColor,
                 borderBottom: `1px solid ${theme.palette.primary.LogoColor }`,
                 paddingLeft:"15px"
              },
            }}>
              My Newsfeed</Typography>
          </Box> */}
          <Box sx={{
            display: "flex",
            alignItems: "center",
            padding: "0 15px",
            marginBottom: "10px",
          }}>
            <Groups sx={{
              color: "#6200ea",
              fontSize: "18px",
              marginRight: "10px",
              marginBottom: "10px",
            }} />



            <Typography component={"a"} href='/nearbypeople' sx={{
              color: theme.palette.primary.ParaColor,
              fontSize: "16px",
              borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
              width: "100%",
              fontWeight: "600",
              paddingBottom: "10px",
              transition: "all .3s ease",
              "&:hover": {
                color: theme.palette.primary.LogoColor,
                borderBottom: `1px solid ${theme.palette.primary.LogoColor}`,
                paddingLeft: "15px"
              },

            }}>
              Friend Request</Typography>
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            padding: "0 15px",
            marginBottom: "10px",
          }}>
            <GroupIcon sx={{
              color: "#aa00ff",
              fontSize: "18px",
              marginRight: "10px",
              marginBottom: "10px",
            }} />

            <Typography component={"a"} href='/friendlist' sx={{
              color: theme.palette.primary.ParaColor,
              fontSize: "16px",
              borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
              width: "100%",
              fontWeight: "600",
              paddingBottom: "10px",
              transition: "all .3s ease",
              "&:hover": {
                color: theme.palette.primary.LogoColor,
                borderBottom: `1px solid ${theme.palette.primary.LogoColor}`,
                paddingLeft: "15px"
              },

            }}>
              Friends</Typography>
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            padding: "0 15px",
            marginBottom: "10px",
          }}>
            <Chat sx={{
              color: "#1a237e",
              fontSize: "18px",
              marginRight: "10px",
              marginBottom: "10px",
            }} />
            <Typography component={"a"} href='/chatroom' sx={{
              color: theme.palette.primary.ParaColor,
              fontSize: "16px",
              borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
              width: "100%",
              fontWeight: "600",
              paddingBottom: "10px",
              transition: "all .3s ease",
              "&:hover": {
                color: theme.palette.primary.LogoColor,
                borderBottom: `1px solid ${theme.palette.primary.LogoColor}`,
                paddingLeft: "15px"
              },
            }}>
              Messages</Typography>
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            padding: "0 15px",
            marginBottom: "10px",
          }}>
            <PermMedia sx={{
              color: "#00c853",
              fontSize: "18px",
              marginRight: "10px",
              marginBottom: "10px",
            }} />
            <Typography component={"a"} href='#' sx={{
              color: theme.palette.primary.ParaColor,
              fontSize: "16px",
              borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
              width: "100%",
              fontWeight: "600",
              paddingBottom: "10px",
              transition: "all .3s ease",
              "&:hover": {
                color: theme.palette.primary.LogoColor,
                borderBottom: `1px solid ${theme.palette.primary.LogoColor}`,
                paddingLeft: "15px"
              },
            }}>
              Images</Typography>
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            padding: "0 15px",
            marginBottom: "10px",
          }}>
            <Videocam sx={{
              color: "#dd2c00",
              fontSize: "18px",
              marginRight: "10px",
              marginBottom: "10px",
            }} />
            <Typography component={"a"} href='#' sx={{
              color: theme.palette.primary.ParaColor,
              fontSize: "16px",
              borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
              width: "100%",
              fontWeight: "600",
              paddingBottom: "10px",
              transition: "all .3s ease",
              "&:hover": {
                color: theme.palette.primary.LogoColor,
                borderBottom: `1px solid ${theme.palette.primary.LogoColor}`,
                paddingLeft: "15px"
              },
            }}>
              Videos</Typography>
          </Box>
        </List>
      </Box>

      {/*--------------Chat Online------------  */}

      <Box position={"sticky"}>
        <Box mt={"25px"}>
          <Typography
            sx={{
              backgroundColor: theme.palette.primary.Green,
              padding: "2px 20px",
              width: "70%",
              height: "32px",
              borderRadius: "15px",
              margin: "0 auto 20px",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "26px",
              textAlign: "center",
            }}
          >
            Chat online
          </Typography>
        </Box>
        <Box sx={{
          paddingX: "30px",
          display: {
            xs: "flex",
            sm: "flex",
            md: "grid",
            lg: "grid",
          },
          gridTemplateColumns: "repeat(3, 1fr)",
          flexWrap: "wrap",
          justifyContent: "center",
          // Gap: "20px",

        }}>
          {onlineFriends.map((item, index) => (

            <Tooltip title="Linda Lohan" key={index}>
              <Box component={"a"} href='#'>
                <StyledBadge sx={{
                  marginRight: {
                    xs: "17px",
                    sm: "22px",
                    md: "10px",
                    lg: "10px",
                  },
                  marginBottom: "20px",
                }}
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar sx={{
                    width: "58px",
                    height: "58px",
                  }} alt="Remy Sharp"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/userFace.jpg"
                    }
                  />
                </StyledBadge>
              </Box>
            </Tooltip>
          ))}

        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar