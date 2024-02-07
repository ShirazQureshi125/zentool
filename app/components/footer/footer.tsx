import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      component="footer"
      bgcolor="#f1f3f4"
      maxWidth="100%"
     
      color="common.black"
      py={6}
      mt={30}
    >
      <Container maxWidth="xl" >
        <Typography
          gutterBottom
          fontWeight={550}
          mb={8}
          ml={4}
          style={{ opacity: "0.8", display: "flex" }}
        >
          Follow us <FaYoutube size={30} style={{ marginLeft: "1rem" }} />{" "}
          <FaTwitter size={30} style={{ marginLeft: "1rem" }} />{" "}
          <FaFacebookF size={30} style={{ marginLeft: "1rem" }} />
        </Typography>
        <Grid container spacing={1}  maxWidth={1200}>
          {/* Column 1 */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography gutterBottom fontWeight={600}>
              Internal Links
            </Typography>
            <Typography>Documentaries</Typography>
            <Typography>Themes</Typography>
            <Typography>Chrome casts</Typography>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={2} ml={1}>
            <Typography fontWeight={600} gutterBottom>
              Enterprise
            </Typography>
            <Typography>Download Chrome Browser</Typography>
            <Typography>Download Browser for Enterprise</Typography>
            <Typography>Chrome Browser Devices</Typography>
            <Typography>Chrome OS</Typography>
            <Typography>Google Cloud</Typography>
            <Typography>Google Workspace</Typography>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={6} md={2} ml={7}>
            <Typography fontWeight={600} gutterBottom>
              Internal Links
            </Typography>
            <Typography>Documentaries</Typography>
            <Typography>Themes</Typography>
            <Typography>Chrome casts</Typography>
          </Grid>

          {/* Column 4 */}
          <Grid item xs={12} sm={6} md={2} ml={1}>
            <Typography fontWeight={600} gutterBottom>
              Internal Links
            </Typography>
            <Typography>Documentaries</Typography>
            <Typography>Themes</Typography>
            <Typography>Chrome casts</Typography>
          </Grid>

          {/* Column 5 */}
          <Grid item xs={12} sm={6} md={2} ml={1}>
            <Typography fontWeight={600} gutterBottom>
              Enterprise
            </Typography>
            <Typography>Download Chrome Browser</Typography>
            <Typography>Download Browser for Enterprise</Typography>
            <Typography>Chrome Browser Devices</Typography>
            <Typography>Chrome OS</Typography>
            <Typography>Google Cloud</Typography>
            <Typography>Google Workspace</Typography>
          </Grid>
        </Grid>
        <Box
          borderTop="1px solid rgba(4,4,4,0.2)"
          marginLeft="1.5rem"
          marginTop="2rem"
          paddingTop="2rem"
          display="flex"

          flexDirection={{ xs: 'column', md: 'row' }}
          
          alignItems={{ xs: 'center', md: 'flex-start' }}
          justifyContent={{ xs: 'center', md: 'space-between' }}
        >
          <Typography fontWeight={600} fontSize={25} marginRight={{ xs: 0, md: '2rem' }} display="flex" alignItems="center">
            Similar{" "}
            <span
              style={{
                border: "1px solid",
                background: "black",
                color: "white",
                height: "70px",
                maxWidth: "200px",
                padding: "0.7rem",
                borderRadius: "20px",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Watch
            </span>
          </Typography>
          <div style={{ display: "flex", gap: "2rem", opacity: "0.9", flexWrap: 'wrap', alignItems:'center' }}>
            <Typography>Privacy Policy</Typography>
            <Typography>Terms and conditions</Typography>
            <Typography>Cookies Policies</Typography>
            <Typography>About us</Typography>
            <Typography>EULA</Typography>
            <Typography>Contact</Typography>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
