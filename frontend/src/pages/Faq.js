import React, { useState } from 'react'
import HeaderNew from "../components/HeaderNew";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material';
import Footer from "../components/Footer";
import BreadcrumbBanner from '../components/BreadcrumbBanner';
import theme from '../Theme';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Faq = () => {

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };
  return (
    <>
      <HeaderNew />
      <BreadcrumbBanner />
      <Box
        sx={{
          padding: "70px 0PX",
        }}
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Box
            sx={{
              padding: "30px",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "30px",
                gap: "10px",
                fontWeight: "bold",
                color: theme.palette.primary.LogoColor,
              }}
              component={"h2"}
            >
              <InfoOutlinedIcon /> General Questions
            </Typography>
           
            <Typography
              sx={{
                fontSize: "14px",
                color: theme.palette.primary.ParaColor,
                marginTop: "10px",
              }}
              component={"p"}
            >
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias.
            </Typography>

            <Box
              sx={{
                display: "grid",
                gap: "30px",
                marginTop: "40px",
              }}
            >
              <Accordion
                sx={{
                  boxShadow: theme.palette.primary.BoxShadow,
                  borderRadius: "10px",
                  border: "none",
                }}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  sx={{}}
                  expandIcon={<ExpandMoreIcon sx={{
                    color: theme.palette.primary.LogoColor,
                  }} />}
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography sx={{
fontSize: "24px",
fontWeight: "600",
color: theme.palette.primary.LogoColor,
lineHeight: "1.2",
                  }} component={"h3"}>Q: What is Lorem Ipsum?</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    position: "relative",
                    marginTop: "20px",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-20px",
                      left: "15px",
                      padding: "5px 10px",
                      borderRadius: "10px",
                      color: theme.palette.primary.LogoColor,
                      border: `1px solid ${theme.palette.primary.LogoColor}`,
                      fontSize: "14px",
                      fontFamily: theme.palette.primary.MainFont1,
                      letterSpacing: "1px",
                      lineHeight: "1.2",
                    }}
                    component={"span"}
                  >
                    answer
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,
                      marginTop: "10px",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  boxShadow: theme.palette.primary.BoxShadow,
                  borderRadius: "10px",
                  border: "none",
                }}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  sx={{}}
                  expandIcon={<ExpandMoreIcon sx={{
                    color: theme.palette.primary.LogoColor,
                  }} />}
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                 <Typography sx={{
fontSize: "24px",
fontWeight: "600",
color: theme.palette.primary.LogoColor,
lineHeight: "1.2",
                  }} component={"h3"}>Q: Why do we use it?</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    position: "relative",
                    marginTop: "20px",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-20px",
                      left: "15px",
                      padding: "5px 10px",
                      borderRadius: "10px",
                      color: theme.palette.primary.LogoColor,
                      border: `1px solid ${theme.palette.primary.LogoColor}`,
                      fontSize: "14px",
                      fontFamily: theme.palette.primary.MainFont1,
                      letterSpacing: "1px",
                      lineHeight: "1.2",
                    }}
                    component={"span"}
                  >
                    answer
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,
                      marginTop: "10px",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  boxShadow: theme.palette.primary.BoxShadow,
                  borderRadius: "10px",
                  border: "none",
                }}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  sx={{}}
                  expandIcon={<ExpandMoreIcon sx={{
                    color: theme.palette.primary.LogoColor,
                  }} />}
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                 <Typography sx={{
fontSize: "24px",
fontWeight: "600",
color: theme.palette.primary.LogoColor,
lineHeight: "1.2",
                  }} component={"h3"}>Q: What is Lorem Ipsum?</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    position: "relative",
                    marginTop: "20px",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-20px",
                      left: "15px",
                      padding: "5px 10px",
                      borderRadius: "10px",
                      color: theme.palette.primary.LogoColor,
                      border: `1px solid ${theme.palette.primary.LogoColor}`,
                      fontSize: "14px",
                      fontFamily: theme.palette.primary.MainFont1,
                      letterSpacing: "1px",
                      lineHeight: "1.2",
                    }}
                    component={"span"}
                  >
                    answer
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,
                      marginTop: "10px",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  boxShadow: theme.palette.primary.BoxShadow,
                  borderRadius: "10px",
                  border: "none",
                }}
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  sx={{}}
                  expandIcon={<ExpandMoreIcon sx={{
                    color: theme.palette.primary.LogoColor,
                  }} />}
                  aria-controls="panel4d-content"
                  id="panel4d-header"
                >
                <Typography sx={{
fontSize: "24px",
fontWeight: "600",
color: theme.palette.primary.LogoColor,
lineHeight: "1.2",
                  }} component={"h3"}>Q: Why do we use it?</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    position: "relative",
                    marginTop: "20px",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-20px",
                      left: "15px",
                      padding: "5px 10px",
                      borderRadius: "10px",
                      color: theme.palette.primary.LogoColor,
                      border: `1px solid ${theme.palette.primary.LogoColor}`,
                      fontSize: "14px",
                      fontFamily: theme.palette.primary.MainFont1,
                      letterSpacing: "1px",
                      lineHeight: "1.2",
                    }}
                    component={"span"}
                  >
                    answer
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,
                      marginTop: "10px",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  boxShadow: theme.palette.primary.BoxShadow,
                  borderRadius: "10px",
                  border: "none",
                }}
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  sx={{}}
                  expandIcon={<ExpandMoreIcon sx={{
                    color: theme.palette.primary.LogoColor,
                  }} />}
                  aria-controls="pane51d-content"
                  id="panel5d-header"
                >
                  <Typography sx={{
fontSize: "24px",
fontWeight: "600",
color: theme.palette.primary.LogoColor,
lineHeight: "1.2",
                  }} component={"h3"}>Q: What is Lorem Ipsum?</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    position: "relative",
                    marginTop: "20px",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-20px",
                      left: "15px",
                      padding: "5px 10px",
                      borderRadius: "10px",
                      color: theme.palette.primary.LogoColor,
                      border: `1px solid ${theme.palette.primary.LogoColor}`,
                      fontSize: "14px",
                      fontFamily: theme.palette.primary.MainFont1,
                      letterSpacing: "1px",
                      lineHeight: "1.2",
                    }}
                    component={"span"}
                  >
                    answer
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,
                      marginTop: "10px",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  boxShadow: theme.palette.primary.BoxShadow,
                  borderRadius: "10px",
                  border: "none",
                }}
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  sx={{}}
                  expandIcon={<ExpandMoreIcon sx={{
                    color: theme.palette.primary.LogoColor,
                  }} />}
                  aria-controls="panel6d-content"
                  id="panel6d-header"
                >
                 <Typography sx={{
fontSize: "24px",
fontWeight: "600",
color: theme.palette.primary.LogoColor,
lineHeight: "1.2",
                  }} component={"h3"}>Q: Why do we use it?</Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    position: "relative",
                    marginTop: "20px",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-20px",
                      left: "15px",
                      padding: "5px 10px",
                      borderRadius: "10px",
                      color: theme.palette.primary.LogoColor,
                      border: `1px solid ${theme.palette.primary.LogoColor}`,
                      fontSize: "14px",
                      fontFamily: theme.palette.primary.MainFont1,
                      letterSpacing: "1px",
                      lineHeight: "1.2",
                    }}
                    component={"span"}
                  >
                    answer
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: theme.palette.primary.ParaColor,
                      marginTop: "10px",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

export default Faq