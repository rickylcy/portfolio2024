import "../App.css";
import React from "react";
import { Box, Typography, Button, Grid, Stack } from "@mui/joy";
import InstagramIcon from "@mui/icons-material/Instagram";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import profileImg from "../assets/profile.jpg";
import MouseIcon from "@mui/icons-material/Mouse";
import { Link as ScrollLink } from "react-scroll";

const ProfileSection = () => {
  return (
    <Box
      id="home"
      sx={{
        height: { xs: "100vh", sm: "100vh", md: "100vh", lg: "100vh" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
      }}
    >
      {/* left hand side social media bar */}
      <Grid container spacing={6}>
        <Grid
          item
          xs={3}
          sm={3}
          md={1}
          lg={1}
          sx={{ order: { xs: 1, sm: 1, md: 1, lg: 1 } }}
        >
          <Box
            sx={{
              height: "100%",
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <InstagramIcon />
            <SportsBasketballIcon />
            <GitHubIcon />
          </Box>
        </Grid>

        {/* basic info */}
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={7}
          sx={{ order: { xs: 3, sm: 3, md: 2, lg: 2 } }}
        >
          <Box
            sx={{
              padding: { sm: 2, lg: 5 },
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack direction="column" spacing={{ xs: 4, sm: 4, md: 6, lg: 6 }}>
              <Typography level="h1" sx={{ color: "text.secondary" }}>
                Ricky Lau
                <span role="img" aria-label="wave">
                  👋
                </span>
              </Typography>
              <Typography level="h4" sx={{ color: "text.secondary" }}>
                Web Developer
              </Typography>
              <Typography level="body-lg">
                I'm a Full Stack Developer based in Brisbane, Australia, and I'm
                very passionate and dedicated to my work.
              </Typography>
              <Button
                sx={{
                  bgcolor: "primary.main",
                  width: "auto",
                  alignSelf: "flex-start",
                  marginBottom: 4,
                }}
              >
                Say Hello
              </Button>
            </Stack>
          </Box>
        </Grid>

        {/* profile image */}
        <Grid
          item
          xs={9}
          sm={9}
          md={4}
          lg={4}
          sx={{ order: { xs: 2, sm: 2, md: 3, lg: 3 } }}
        >
          <img
            className="home_img"
            src={profileImg} // Replace with the actual image path
            alt="Profile Image"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>

        <Grid
          item
          display={{ xs: "block", sm: "block", md: "block", lg: "block" }}
          md={12}
          lg={12}
          sx={{
            order: { xs: 4, sm: 4, md: 4, lg: 4 },
          }}
          align="center"
        >
          <Box
            height={{ xs: "10vh", sm: "10vh", md: "20vh", lg: "10vh" }}
          ></Box>
        </Grid>

        {/* scroll down indicator */}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            order: { xs: 5, sm: 5, md: 5, lg: 5 },
          }}
          align="center"
          display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
        >
          <ScrollLink
            to="about-me"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            style={{ cursor: "pointer" }}
          >
            <MouseIcon />
            <Typography level="body2" sx={{ marginBottom: 1 }}>
              Scroll down
            </Typography>
            <ArrowDownwardIcon />
          </ScrollLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileSection;
