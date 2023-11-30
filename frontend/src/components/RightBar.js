import { Avatar, Box, Typography, } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../Theme";
import axios from "axios";
import { SEND_FRIEND_REQUEST, USER_LIST } from "../Url";
import { useSelector } from "react-redux";
import CustomAlert from "./CustomAlert";

const RightBar = () => {
  const userData = useSelector((state) => state.UserReducer.value);
  const [userList, setUserList] = useState([]);
  const { showAlert, AlertComponent } = CustomAlert();

  useEffect(() => {
    const getUserList = async () => {
      axios
        .get(USER_LIST, {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        })
        .then((res) => {
           console.log("==>>>",res.data);
          setUserList(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUserList();
  }, [userData]);

const _sendFriendRequest = async (id) => {
    axios
      .post(
        SEND_FRIEND_REQUEST,{user_id_1: id},
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      )
      .then((res) => {
        //console.log(res.data);     
        
        showAlert("error", res.data.message);   
        
      })
      .catch((err) => {
        console.log("==>",err);
        if (err.response) {
          //console.log(err.response.data);
     
        }       
      });
  }

  return (
    <Box>
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "500",
          marginBottom: "20px",
          color: theme.palette.primary.ParaColor,
        }}
      >
        Who to Follow
      </Typography>
   
      {userList.map((item, index) => (
        <Box
          sx={{
            display: "flex",
          }}
          key={index}
        >
          <Avatar
            alt="Remy Sharp"
            src="/assets/images/profileImg.jpg"
            sx={{
              float: "left",
              marginRight: "15px",
              position: "relative",
              height: "40px",
              width: "40px",
              borderRadius: "50%",
            }}
          />

          <Box
            sx={{
              width: "100%",
              marginBottom: "10px",
              paddingBottom: "10px",
              borderBottom: `1px solid ${theme.palette.primary.Gray}`,
            }}
          >
            <Box
              sx={{
                margin: "0 0 10px 0",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: theme.palette.primary.LogoColor,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                component={"a"}
                href="#"
                variant="body2"
                color="text.secondary"
              >
                {item.name}
              </Typography>
            </Box>
            <Box 
            onClick={() =>{                
                _sendFriendRequest(item._id)
            }}
            >
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: theme.palette.primary.Green,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                component={"a"}
                href="#"
                variant="body2"
                color="text.secondary"
              >
                Add friend
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    <AlertComponent/>
    </Box>
  );
};

export default RightBar;
