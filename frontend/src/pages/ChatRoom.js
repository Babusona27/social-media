import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Tabs,
  Typography,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import HeaderNew from "../components/HeaderNew";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import theme from "../Theme";
import { EditNote, Map, Photo, Videocam } from "@mui/icons-material";
import RightBar from "../components/RightBar";
import Footer from "../components/Footer";
const ChatRoom = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <HeaderNew />
      <Container>
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
                sx={{
                  flex: "1",
                  background: "yellow",
                  padding: "20px 10px",
                  maxHeight: "400px",
                  width: "100%",
                  overflowY: "scroll",
                  height: "400px",
                }}
              >
                <Tabs orientation="vertical" variant="scrollable">
                  <Button
                    onClick={() => setActiveTab(1)}
                    className={activeTab === 1 ? "ActiveTab" : ""}
                  >
                    Tab 1
                  </Button>
                  <Button
                    onClick={() => setActiveTab(2)}
                    className={activeTab === 2 ? "ActiveTab" : ""}
                  >
                    Tab 2
                  </Button>
                  <Button
                    onClick={() => setActiveTab(3)}
                    className={activeTab === 3 ? "ActiveTab" : ""}
                  >
                    Tab 3
                  </Button>
                  <Button
                    onClick={() => setActiveTab(4)}
                    className={activeTab === 4 ? "ActiveTab" : ""}
                  >
                    Tab 4
                  </Button>
                  <Button
                    onClick={() => setActiveTab(5)}
                    className={activeTab === 5 ? "ActiveTab" : ""}
                  >
                    Tab 5
                  </Button>
                </Tabs>
              </Box>
              <Box
                sx={{
                  flex: "2",
                  background: "#f22",
                  paddingX: "10px",
                  maxHeight: "400px",
                  width: "100%",
                  overflowY: "scroll",
                  height: "400px",
                }}
              >
                <Box
                  className={activeTab === 1 ? "activeTabContent" : ""}
                  style={{ display: activeTab === 1 ? "block" : "none" }}
                >
                  Item One
                </Box>
                <Box
                  className={activeTab === 2 ? "activeTabContent" : ""}
                  style={{ display: activeTab === 2 ? "block" : "none" }}
                >
                  Item Two
                </Box>
                <Box
                  className={activeTab === 3 ? "activeTabContent" : ""}
                  style={{ display: activeTab === 3 ? "block" : "none" }}
                >
                  Item Three
                </Box>
                <Box
                  className={activeTab === 4 ? "activeTabContent" : ""}
                  style={{ display: activeTab === 4 ? "block" : "none" }}
                >
                  Item Two
                </Box>
                <Box
                  className={activeTab === 5 ? "activeTabContent" : ""}
                  style={{ display: activeTab === 5 ? "block" : "none" }}
                >
                  Item Three
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
