import { Avatar, Box, List, Typography, Badge, Tooltip } from '@mui/material'
import React from 'react'
import { PersonAdd } from '@mui/icons-material'
import { Chat, Feed, Groups, PeopleOutline, PermMedia, Videocam } from '@mui/icons-material'
import theme from '../Theme'
import styled from '@mui/material/styles/styled'

const Sidebar = () => {


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
            background: `${theme.palette.primary.SidebarBgGredient}, url(${process.env.PUBLIC_URL + "/assets/images/sidebarHeaderBg.jpg"}) no-repeat`,
            backgroundSize: "cover",
            width: "100%",
            minHeight: "90px",
            borderRadius: "4px",
            padding: "10px 20px",
            color: "#fff",
            marginBottom: "40px",
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
              <Typography component={"a"} href='#' sx={{
                fontSize: "20px",
                color: theme.palette.primary.White,
                lineHeight: "0",
                "&:hover": {
                  textDecoration: "underline",
                }
              }}
              >Sarah Cruiz</Typography>
            </Box>
            <Box sx={{
              display: "flex",
              alignItems: "center",
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
                    textDecoration: "underline",
                  }
                }}
              >
                1,299 followers
              </Typography>
            </Box>

          </Box>
        </Box>

        {/*-------------- Sidebar List *-------------*/}

        <List>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            padding: "0 15px",
            marginBottom: "10px",
          }}>
            <Feed sx={{
              color: theme.palette.secondary.main,
              fontSize: "18px",
              marginRight: "10px",
              marginBottom: "10px",
            }} />
            <Typography component={"a"} href='#' sx={{
              color: theme.palette.secondary.contrastText,
              fontSize: "16px",
              borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
              width: "100%",
              paddingBottom: "10px",
            }}>
              My Newsfeed</Typography>
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            padding: "0 15px",
            marginBottom: "10px",
          }}>
            <Groups sx={{
              color: theme.palette.primary.main,
              fontSize: "18px",
              marginRight: "10px",
              marginBottom: "10px",
            }} />
            <Typography component={"a"} href='#' sx={{
              color: theme.palette.secondary.contrastText,
              fontSize: "16px",
              borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
              width: "100%",
              paddingBottom: "10px",
            }}>
              People Nearby</Typography>
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            padding: "0 15px",
            marginBottom: "10px",
          }}>
            <PeopleOutline sx={{
              color: theme.palette.secondary.black,
              fontSize: "18px",
              marginRight: "10px",
              marginBottom: "10px",
            }} />
            <Typography component={"a"} href='#' sx={{
              color: theme.palette.secondary.contrastText,
              fontSize: "16px",
              borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
              width: "100%",
              paddingBottom: "10px",
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
              color: theme.palette.secondary.black,
              fontSize: "18px",
              marginRight: "10px",
              marginBottom: "10px",
            }} />
            <Typography component={"a"} href='#' sx={{
              color: theme.palette.secondary.contrastText,
              fontSize: "16px",
              borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
              width: "100%",
              paddingBottom: "10px",
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
              color: theme.palette.secondary.black,
              fontSize: "18px",
              marginRight: "10px",
              marginBottom: "10px",
            }} />
            <Typography component={"a"} href='#' sx={{
              color: theme.palette.secondary.contrastText,
              fontSize: "16px",
              borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
              width: "100%",
              paddingBottom: "10px",
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
              color: theme.palette.secondary.black,
              fontSize: "18px",
              marginRight: "10px",
              marginBottom: "10px",
            }} />
            <Typography component={"a"} href='#' sx={{
              color: theme.palette.secondary.contrastText,
              fontSize: "16px",
              borderBottom: `1px solid ${theme.palette.primary.LightGray}`,
              width: "100%",
              paddingBottom: "10px",
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
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          // Gap: "20px",

        }}>
          <Tooltip title="Linda Lohan">
            <Box component={"a"} href='#'>
              <StyledBadge sx={{
                marginRight: "10px",
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
          <Tooltip title="Linda Lohan">
            <Box component={"a"} href='#'>
              <StyledBadge sx={{
                marginRight: "10px",
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
          <Tooltip title="Linda Lohan">
            <Box component={"a"} href='#'>
              <StyledBadge sx={{
                marginRight: "10px",
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
          <Tooltip title="Linda Lohan">
            <Box component={"a"} href='#'>
              <StyledBadge sx={{
                marginRight: "10px",
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
          <Tooltip title="Linda Lohan">
            <Box component={"a"} href='#'>
              <StyledBadge sx={{
                marginRight: "10px",
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
          <Tooltip title="Linda Lohan">
            <Box component={"a"} href='#'>
              <StyledBadge sx={{
                marginRight: "10px",
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
          <Tooltip title="Linda Lohan">
            <Box component={"a"} href='#'>
              <StyledBadge sx={{
                marginRight: "10px",
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
          <Tooltip title="Linda Lohan">
            <Box component={"a"} href='#'>
              <StyledBadge sx={{
                marginRight: "10px",
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
          <Tooltip title="Linda Lohan">
            <Box component={"a"} href='#'>
              <StyledBadge sx={{
                marginRight: "10px",
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

        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar