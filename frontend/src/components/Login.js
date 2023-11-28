import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import theme from "../Theme";

const Login = ({ onChildClick }) => {
  // Function to handle the click event in the child
  const handleClick = (valueToSend) => {
    // Invoke the callback function with the desired value
    onChildClick(valueToSend);
  };
  return (
    <Container maxWidth="lg" sx={{ height: "100%" }}>
      <Box
        sx={{
          minHeight: "550px",
          width: "340px",
          background: theme.palette.primary.BackGredient,
          position: "absolute",
          top: "0",
          left: "15%",
          padding: "20px",
          zIndex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          "&::after": {
            content: "''",
            position: "absolute",
            bottom: "-40px",
            left: "0",
            width: "0",
            height: "0",
            borderWidth: " 40px 170px 0",
            borderStyle: " solid",
            borderColor:
              theme.palette.primary.LogoColor + " transparent transparent",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
          href="#"
          component={"a"}
        >
          <Box
            component={"img"}
            src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
            sx={{
              width: "190px",
              height: "50px",
            }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              color: theme.palette.primary.White,
              fontWeight: "500",
              fontSize: "30px",
              textAlign: "center",
            }}
            variant="h6"
            component={"h2"}
          >
            Find My Friends
          </Typography>
          <Divider
            sx={{
              borderTop: "1px solid",
              borderColor: "rgba(255, 255, 255, .20)",
              width: "180px",
              margin: "auto",
              borderBottom: "none",
            }}
          />
          <Box
            sx={{
              padding: "20px 20px 0",
              border: "1px solid rgba(255, 255, 255, .2)",
              borderTop: "none",
              marginBottom: "30px",
              color: theme.palette.primary.White,
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "1.5",
              }}
              variant="body"
              component={"p"}
            >
              Sign now and meet awesome people around the world
            </Typography>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <TextField
                sx={{
                  padding: "0",
                }}
                className="form_imput"
                fullWidth
                label="Enter email"
                variant="outlined"
              />
              <TextField
                sx={{
                  padding: "0",
                }}
                className="form_imput"
                fullWidth
                label="Enter a password"
                variant="outlined"
                type="password"
              />
              <Button
                sx={{
                  marginBottom: "-20px",
                  color: theme.palette.primary.White,
                  fontWeight: "bold",
                  fontSize: "18px",
                  letterSpacing: "1px",
                  textTransform: "capitalize",
                  background: theme.palette.primary.deepBlue,
                  borderRadius: "5px",
                  padding: "7px 0",
                  minHeight: "40px",
                  "&:hover": {
                    background: theme.palette.primary.White,
                    color: theme.palette.primary.deepBlue,
                  },
                }}
                variant="contained"
                type="submit"
              >
                Sign In
              </Button>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "1.5",
              textAlign: "center",
              color: theme.palette.primary.White,
              display: "block",
              transition: "all .3s ease",
              "&:hover": {
                color: theme.palette.primary.deepBlue,
              },
            }}
            component={"button"}
            onClick={(event) => {
              event.preventDefault();
              handleClick(2);
            }}
          >
            don't have an account? Sign Up now
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: "100%",
              left: "0",
              width: "100%",
              height: "100px",
            }}
            src={process.env.PUBLIC_URL + "/assets/images/bottom-shadow.png"}
            component={"img"}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
