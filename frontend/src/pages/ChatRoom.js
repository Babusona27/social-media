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
import ReplyIcon from "@mui/icons-material/Reply";
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const ChatRoom = () => {

  const [activeTab, setActiveTab] = useState(1);

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
                <Tabs orientation="vertical" variant="scrollable">
                  <Button
                    sx={{
                      display: "block",
                      textTransform: "initial",
                      padding: "10px 10px",
                      borderBottom: `2px solid ${theme.palette.primary.Gray}`,
                      "&:hover": {
                        borderBottom: `2px solid ${theme.palette.primary.LogoColor}`,
                      },
                    }}
                    onClick={() => setActiveTab(1)}
                    className={activeTab === 1 ? "ActiveTab" : ""}
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
                            Suraj
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
                  <Button
                    sx={{
                      display: "block",
                      textTransform: "initial",
                      padding: "10px 10px",
                      borderBottom: `2px solid ${theme.palette.primary.Gray}`,
                      "&:hover": {
                        borderBottom: `2px solid ${theme.palette.primary.LogoColor}`,
                      },
                    }}
                    onClick={() => setActiveTab(2)}
                    className={activeTab === 2 ? "ActiveTab" : ""}
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
                        src={process.env.PUBLIC_URL + "/assets/images/pf2.jpg"}
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
                            Suraj
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
                            a hour ago
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
                          {/* <ReplyIcon
                            sx={{
                              fontSize: "15px",
                              color: theme.palette.primary.ParaColor,
                            }}
                          /> */}
                          <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                           height:"18px",
                            width:"16px",
                          lineHeight:"1",
                            borderRadius:"5px",
                            backgroundColor:"red",
                            color:"#fff",
                            fontSize:"14px",
                            fontWeight:"600"

                          }} component={"span"}>1</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Button>

                  <Button
                    sx={{
                      display: "block",
                      textTransform: "initial",
                      padding: "10px 10px",
                      borderBottom: `2px solid ${theme.palette.primary.Gray}`,
                      "&:hover": {
                        borderBottom: `2px solid ${theme.palette.primary.LogoColor}`,
                      },
                    }}
                    onClick={() => setActiveTab(3)}
                    className={activeTab === 3 ? "ActiveTab" : ""}
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
                        src={process.env.PUBLIC_URL + "/assets/images/pf3.jpg"}
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
                            Suraj
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
                            13 hour ago
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
                            Okay fine. thank you{" "}
                          </Typography>
                          <DoneAllIcon
                            sx={{
                              fontSize: "15px",
                              color: theme.palette.primary.ParaColor,
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Button>

                  <Button
                    sx={{
                      display: "block",
                      textTransform: "initial",
                      padding: "10px 10px",
                      borderBottom: `2px solid ${theme.palette.primary.Gray}`,
                      "&:hover": {
                        borderBottom: `2px solid ${theme.palette.primary.LogoColor}`,
                      },
                    }}
                    onClick={() => setActiveTab(4)}
                    className={activeTab === 4 ? "ActiveTab" : ""}
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
                        src={process.env.PUBLIC_URL + "/assets/images/pf4.jpg"}
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
                            Suraj
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
                            13 hour ago
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
                            Okay fine. thank you{" "}
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

                  <Button
                    sx={{
                      display: "block",
                      textTransform: "initial",
                      padding: "10px 10px",
                      borderBottom: `2px solid ${theme.palette.primary.Gray}`,
                      "&:hover": {
                        borderBottom: `2px solid ${theme.palette.primary.LogoColor}`,
                      },
                    }}
                    onClick={() => setActiveTab(5)}
                    className={activeTab === 5 ? "ActiveTab" : ""}
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
                        src={process.env.PUBLIC_URL + "/assets/images/pf2.jpg"}
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
                            Suraj
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
                            13 hour ago
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
                            Okay fine. thank you{" "}
                          </Typography>
                          <ReplyIcon
                            sx={{
                              fontSize: "15px",
                              color: theme.palette.primary.ParaColor,
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Button>

                  <Button
                    sx={{
                      display: "block",
                      textTransform: "initial",
                      padding: "10px 10px",
                      borderBottom: `2px solid ${theme.palette.primary.Gray}`,
                      "&:hover": {
                        borderBottom: `2px solid ${theme.palette.primary.LogoColor}`,
                      },
                    }}
                    onClick={() => setActiveTab(6)}
                    className={activeTab === 6 ? "ActiveTab" : ""}
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
                            Suraj
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
                            13 hour ago
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
                            Okay fine. thank you{" "}
                          </Typography>
                          <DoneAllIcon
                            sx={{
                              fontSize: "15px",
                              color: theme.palette.primary.ParaColor,
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Button>

                  <Button
                    sx={{
                      display: "block",
                      textTransform: "initial",
                      padding: "10px 10px",
                      borderBottom: `2px solid ${theme.palette.primary.Gray}`,
                      "&:hover": {
                        borderBottom: `2px solid ${theme.palette.primary.LogoColor}`,
                      },
                    }}
                    onClick={() => setActiveTab(7)}
                    className={activeTab === 7 ? "ActiveTab" : ""}
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
                        src={process.env.PUBLIC_URL + "/assets/images/pf3.jpg"}
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
                            Suraj
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
                            13 hour ago
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
                            Okay fine. thank you{" "}
                          </Typography>
                          {/* <ReplyIcon
                            sx={{
                              fontSize: "15px",
                              color: theme.palette.primary.ParaColor,
                            }}
                          /> */}
                            <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                           height:"18px",
                            width:"16px",
                          lineHeight:"1",
                            borderRadius:"5px",
                            backgroundColor:"red",
                            color:"#fff",
                            fontSize:"14px",
                            fontWeight:"600"

                          }} component={"span"}>1</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Button>

                  <Button
                    sx={{
                      display: "block",
                      textTransform: "initial",
                      padding: "10px 10px",
                      borderBottom: `2px solid ${theme.palette.primary.Gray}`,
                      "&:hover": {
                        borderBottom: `2px solid ${theme.palette.primary.LogoColor}`,
                      },
                    }}
                    onClick={() => setActiveTab(8)}
                    className={activeTab === 8 ? "ActiveTab" : ""}
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
                        src={process.env.PUBLIC_URL + "/assets/images/pf4.jpg"}
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
                            Suraj
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
                            13 hour ago
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
                            Okay fine. thank you{" "}
                          </Typography>
                          <ReplyIcon
                            sx={{
                              fontSize: "15px",
                              color: theme.palette.primary.ParaColor,
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Button>

                  <Button
                    sx={{
                      display: "block",
                      textTransform: "initial",
                      padding: "10px 10px",
                      borderBottom: `2px solid ${theme.palette.primary.Gray}`,
                      "&:hover": {
                        borderBottom: `2px solid ${theme.palette.primary.LogoColor}`,
                      },
                    }}
                    onClick={() => setActiveTab(9)}
                    className={activeTab === 9 ? "ActiveTab" : ""}
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
                            Suraj
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
                            13 hour ago
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
                            Okay fine. thank you{" "}
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

                  <Button
                    sx={{
                      display: "block",
                      textTransform: "initial",
                      padding: "10px 10px",
                      borderBottom: `2px solid ${theme.palette.primary.Gray}`,
                      "&:hover": {
                        borderBottom: `2px solid ${theme.palette.primary.LogoColor}`,
                      },
                    }}
                    onClick={() => setActiveTab(10)}
                    className={activeTab === 10 ? "ActiveTab" : ""}
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
                        src={process.env.PUBLIC_URL + "/assets/images/pf2.jpg"}
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
                            Suraj
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
                            13 hour ago
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
                            Okay fine. thank you{" "}
                          </Typography>
                          {/* <ReplyIcon
                            sx={{
                              fontSize: "15px",
                              color: theme.palette.primary.ParaColor,
                            }}
                          /> */}
                            <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                           height:"18px",
                            width:"16px",
                          lineHeight:"1",
                            borderRadius:"5px",
                            backgroundColor:"red",
                            color:"#fff",
                            fontSize:"14px",
                            fontWeight:"600"

                          }} component={"span"}>1</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Button>

                  <Button
                    sx={{
                      display: "block",
                      textTransform: "initial",
                      padding: "10px 10px",
                      borderBottom: `2px solid ${theme.palette.primary.Gray}`,
                      "&:hover": {
                        borderBottom: `2px solid ${theme.palette.primary.LogoColor}`,
                      },
                    }}
                    onClick={() => setActiveTab(11)}
                    className={activeTab === 11 ? "ActiveTab" : ""}
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
                        src={process.env.PUBLIC_URL + "/assets/images/pf4.jpg"}
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
                            Suraj
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
                            13 hour ago
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
                            Okay fine. thank you{" "}
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
                </Tabs>
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
                <Box
                  className={activeTab === 6 ? "activeTabContent" : ""}
                  style={{ display: activeTab === 6 ? "block" : "none" }}
                >
                  Item One
                </Box>
                <Box
                  className={activeTab === 7 ? "activeTabContent" : ""}
                  style={{ display: activeTab === 7 ? "block" : "none" }}
                >
                  Item Two
                </Box>
                <Box
                  className={activeTab === 8 ? "activeTabContent" : ""}
                  style={{ display: activeTab === 8 ? "block" : "none" }}
                >
                  Item Three
                </Box>
                <Box
                  className={activeTab === 9 ? "activeTabContent" : ""}
                  style={{ display: activeTab === 9 ? "block" : "none" }}
                >
                  Item Two
                </Box>
                <Box
                  className={activeTab === 10 ? "activeTabContent" : ""}
                  style={{ display: activeTab === 10 ? "block" : "none" }}
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
