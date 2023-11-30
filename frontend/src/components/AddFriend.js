import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../Theme";
import axios from "axios";
import { FRIEND_REQUEST_LIST, ACCEPT_FRIEND_REQUEST } from "../Url";
import { useSelector } from "react-redux";
import CustomAlert from "./CustomAlert";

const AddFriend = () => {
  const { showAlert, AlertComponent } = CustomAlert();
  const userData = useSelector((state) => state.UserReducer.value);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const getUserList = async () => {
      axios
        .get(FRIEND_REQUEST_LIST, {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        })
        .then((res) => {
         // console.log(res.data);
          setUserList(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUserList();
  }, [userData.token]);

  const _acceptFriendRequest = async (id) => {
    axios.put(ACCEPT_FRIEND_REQUEST, {
      user_id_1: id,
      status: "accepted",
    },
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }).then((res) => {
       //console.log(res.data);
        // setUserList(res.data.data);
        showAlert("success", res.data.message);
      }).catch((err) => {
        console.log(err);
        showAlert("error", err.response.data.message);
      })
  }

  return (
    <>
      {userList.map((item, key) => (
        <Box
          sx={{
            display: "flex",
            borderBottom: `1px solid ${theme.palette.primary.Gray}`,
            paddingBottom: "20px",
            marginBottom: "20px",
          }}
          key={key}
        >
          <Box flex={"1"} padding={"0 10px"}>
            <Avatar
              alt="Remy Sharp"
              src={process.env.PUBLIC_URL + "/assets/images/profileImg.jpg"}
              sx={{
                marginRight: "5px",
                height: "80px",
                width: "80px",
                borderRadius: "50%",
              }}
            />
          </Box>
          <Box flex={"5"} padding={"0 10px"}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
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
              {item.user_id_1.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                lineHeight: "26px",
                color: theme.palette.primary.ParaColor,
              }}
            >
              N/A
            </Typography>

          </Box>
          <Box flex={"2"} margin={"0 10px"}>
            <Box >
              <Typography
                component={"button"}
                sx={{
                  color: theme.palette.primary.White,
                  fontSize: "14px",
                  fontFamily: theme.palette.primary.MainFont1,
                  fontWeight: "600",
                  lineHeight: "26px",
                  backgroundColor: theme.palette.primary.LogoColor,
                  borderRadius: "30px",
                  padding: "7px 12px",
                  marginLeft: "10px",
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.LogoColor,
                  },
                }}
                onClick={() => {
                  _acceptFriendRequest(item.user_id_2._id);
                }}
              >
                Accept Request
              </Typography>
            </Box>
          </Box>
          <AlertComponent />
        </Box>
      ))}
    </>

  );
};

export default AddFriend;
