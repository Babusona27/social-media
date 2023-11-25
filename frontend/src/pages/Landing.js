import { Box, Container, } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import theme from "../Theme";

const Landing = () => {
  return (
    <>
      <Box>
        <Header />
      </Box>
      <Box
        sx={{
          height: "500px",
          width: "100%",
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/bg.jpg"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          padding: "0 20px",
          position: "relative",
          "&::before": {
            content: "''",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        component={"section"}
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Box
            sx={{
              minHeight: "600px",
              width: "340px",
              background: theme.palette.primary.BackGredient,
              position: "absolute",
              top: "0",
              left: "15%",
              padding: "15px",
              zIndex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
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
            <Box sx={{
              display: "flex",
            }} href="#" component={"a"}>
              <Box
                component={"img"}
                src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                sx={{
                  width: "190px",
                  height: "50px",
                }}
              />
            </Box>
            
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Landing;