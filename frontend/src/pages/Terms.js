
import HeaderNew from "../components/HeaderNew";
import { Box, Container, Typography } from "@mui/material";
import Footer from "../components/Footer";
import BreadcrumbBanner from "../components/BreadcrumbBanner";
import theme from "../Theme";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Terms = () => {
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
                boxShadow: theme.palette.primary.BoxShadow,
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
              <InfoOutlinedIcon /> Terms of Service
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: theme.palette.primary.ParaColor,
                marginTop: "10px",
              }}
              component={"p"}
            >
           1) In consideration of your use of the beCoditive API, you represent that you are of legal age to form a binding contract and are not a person barred from receiving services under the laws of the Indian Constitution or other applicable jurisdiction. You also agree to:
           <br/>

• provide true, accurate, current and complete information about yourself as prompted by beCoditive API's registration form and;
<br/>
• maintain and promptly update the Registration Data to keep it true, accurate, current and complete. If you provide any information that is untrue, inaccurate, not current or incomplete, or beCoditive has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, beCoditive has the right to suspend or terminate your account and refuse any and all current or future use of the beCoditive API (or any portion thereof).
<br/>

2) Any kind of abusing, harassment using beCoditive API is strictly prohibited. If anyone is found conducting such acts, they will be banned from the beCoditive API and legal action will be taken against them.
<br/>

3) beCoditive API provides ONE API key to each person. Trying to generate fakes API keys is strictly prohibited and this act will result in banning of the person.

<br/>
4) beCoditive API is copyrighted and if any acts of plagiarism are discovered, legal action will be taken against the offender.

<br/>
5) Flooding beCoditive API with false requests and false complains is strictly prohibited
<br/>

6) Registration Data and certain other information about you is subject to our Privacy Policy.

<br/>
7) You expressly understand and agree that beCoditive and its subsidiaries, affiliates, officers, employees, agents, partners and licensors shall not be liable to you for any direct, indirect, incidental, special, consequential or exemplary damages, including, but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses (even if beCoditive has been advised of the possibility of such damages), resulting from the use or the inability to use beCoditive API.
<br/>

8) You agree that beCoditive may terminate your access to beCoditive API for violations of the TOS and/or requests by authorized law enforcement or other government agencies.
<br/>

9) You acknowledge that beCoditive may establish general practices and limits concerning use of beCoditive API, including without limitation the maximum number of days that email messages, message board postings or other uploaded Content will be retained by beCoditive API. You further acknowledge that beCoditive reserves the right to modify these general practices and limits from time to time. beCoditive reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, beCoditive API (or any part thereof) with or without notice. You agree that beCoditive shall not be liable to you or to any third party for any modification, suspension or discontinuance of beCoditive API.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Terms;
