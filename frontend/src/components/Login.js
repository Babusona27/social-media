import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import theme from "../Theme";
import { LOGIN } from "../Url";
import axios from "axios";
import AlertMessage from "./AlertMessage";
import { useDispatch } from "react-redux";
import { userDetails } from "../redux/reducers/UserReducer";
const Login = ({ onChildClick }) => {
  const dispatch = useDispatch();
  const [messageType, setMessageType] = useState("");
  const [message, setMessage] = useState("");
  // State to manage form inputs
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  // State to manage validation errors
  const [errors, setErrors] = useState({
    phone: "",
    password: "",
  });
  // Function to handle the click event in the child
  const handleClick = (valueToSend) => {
    // Invoke the callback function with the desired value
    onChildClick(valueToSend);
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset the corresponding validation error when the user types
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.phone.trim()) {
      isValid = false;
      newErrors.phone = "Phone is required";
    }
    if (!formData.password.trim()) {
      isValid = false;
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    // If form is valid, submit the data
    if (isValid) {
      //   console.log("Form submitted:", formData);
      // logic to submit data, e.g., make an API call
      axios.post(LOGIN, formData).then((res) => {
        setMessageType("success");
        setMessage(res.data.message);
        dispatch(userDetails(res.data.data));
      }).catch((err) => {
        console.log(err.response);
        if (err.response) {
          setMessageType("error");
          setMessage(err.response.data.message);
        }
      });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ height: "100%" }}>
      <Box
        sx={{
          minHeight: {
            xs: "600px",
            sm: "600px",
            md: "600px",
            lg: "550px",

          },
          width: {
            xs: "90%",
            sm: "70%",
            md: "80%",
            lg: "340px",
          },
          background: theme.palette.primary.BackGredient,
          position: "absolute",
          top: "0",
          left: {
            xs: "5%",
            sm: "15%",
            md: "10%",
            lg: "15%",
          },
          padding: {
            xs: "40px 30px",
            sm: "40px 30px",
            md: "40px 30px",
            lg: "20px",
          },
          zIndex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: {
            xs: "flex-start",
            sm: "flex-start",
            md: "flex-start",
            lg: "space-between",
          },
          "&::after": {
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
            },
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
              margin: {
                xs: "120px 0 0",
                sm: "100px 0 0",
                md: "100px 0 0",
                lg: "0",
              }
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

            {messageType !== "" && (
              <AlertMessage type={messageType} message={message} />
            )}
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
              onSubmit={handleSubmit}
            >
              <TextField
                sx={{
                  padding: "0",
                }}
                className="form_imput"
                fullWidth
                placeholder="Enter phone number"
                // label="Enter phone number"
                variant="outlined"
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                error={Boolean(errors.phone)}
                helperText={errors.phone}
              />
              <TextField
                sx={{
                  padding: "0",
                }}
                className="form_imput"
                fullWidth
                // label="Enter a password"
                placeholder="Enter a password"
                variant="outlined"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                error={Boolean(errors.password)}
                helperText={errors.password}

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
              fontWeight: "500",
              lineHeight: "1.5",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              fontFamily: theme.palette.primary.MainFont1,
              alignItems: "center",
              margin: {
                xs: "50px auto 0",
                sm: "50px auto 0",
                md: "10px auto 0",
                lg: "10px auto 0",
              },
              background: "transparent",
              color: theme.palette.primary.White,
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
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
              },
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
