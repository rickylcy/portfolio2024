// src/components/AboutMeSection.js
import React from "react";
import { Box, Typography, Button, Grid, Sheet } from "@mui/joy";
import profileImg from "../assets/profile.jpg";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

const AboutMeSection = () => {
  return (
    <Box
      id="about-me"
      sx={{
        height: { md: "100vh", lg: "100vh" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f7f1ed",
        textAlign: "center",
      }}
    >
      <Typography level="h2" sx={{ marginBottom: 1 }}>
        About Me
      </Typography>
      <Typography
        level="body2"
        sx={{ marginBottom: 4, color: "text.secondary" }}
      >
        My introduction
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4} md={3}>
          <img
            src={profileImg}
            alt="Profile"
            style={{
              width: "100%",
              borderRadius: "10%",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={7}>
          <Box
            sx={{ display: "flex", justifyContent: "center", marginBottom: 4 }}
          >
            <Sheet
              variant="outlined"
              sx={{
                borderRadius: "md",
                p: 3,
                listStyle: "none",
              }}
            >
              <MilitaryTechIcon />
              <Typography level="h6">Experience</Typography>
              <Typography level="body2">8+ Years</Typography>
            </Sheet>
            <Box sx={{ margin: 2 }}>
              <Typography level="h6">Completed</Typography>
              <Typography level="body2">48+ Projects</Typography>
            </Box>
            <Box sx={{ margin: 2 }}>
              <Typography level="h6">Support</Typography>
              <Typography level="body2">Online 24/7</Typography>
            </Box>
          </Box>
          <Typography level="body1" sx={{ marginBottom: 4 }}>
            Frontend developer, I create web pages with UI / UX user interface,
            I have years of experience and many clients are happy with the
            projects carried out.
          </Typography>
          <Button variant="solid" color="primary">
            Download CV
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMeSection;
