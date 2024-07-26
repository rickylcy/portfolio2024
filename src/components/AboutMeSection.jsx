// src/components/AboutMeSection.js
import React from "react";
import { Box, Typography, Button, Grid, Sheet } from "@mui/joy";
import profileImg from "../assets/profile.jpg";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import WorkIcon from "@mui/icons-material/Work";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import DescriptionIcon from "@mui/icons-material/Description";

const AboutMeSection = () => {
  return (
    <Box
      id="about-me"
      sx={{
        padding: { xs: 0, sm: 0, md: 3, lg: 4 },
        minHeight: "100vh",
        height: { xs: "100vh", sm: "100vh", md: "100vh", lg: "100vh" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography level="h2" sx={{ marginBottom: 1, color: "text.secondary" }}>
        About Me
      </Typography>
      <Typography
        level="body2"
        sx={{ marginBottom: 4, color: "text.secondary" }}
      >
        My introduction
      </Typography>
      <Grid container spacing={{ xs: 0, sm: 0, md: 4, lg: 4 }}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Box
            component="img"
            src={profileImg}
            alt="Profile"
            sx={{
              width: { xs: "60%", sm: "80%", md: "100%", lg: "100%" },
              height: "100%",
              borderRadius: "8%",
              display: "block",
              margin: "0 auto", // Centers the image
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7} p={6}>
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              padding: 2,
            }}
          >
            <Sheet
              variant="outlined"
              sx={{
                borderRadius: "md",
                p: 3,
                listStyle: "none",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <LightbulbIcon />
              <Typography level="h6">Experience</Typography>
              <Typography level="body2" sx={{ color: "secondary.main" }}>
                8+ Years
              </Typography>
            </Sheet>

            <Sheet
              variant="outlined"
              sx={{
                borderRadius: "md",
                p: 3,
                listStyle: "none",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <WorkIcon />
              <Typography level="h6">Completed</Typography>
              <Typography level="body2" sx={{ color: "secondary.main" }}>
                48+ Projects
              </Typography>
            </Sheet>

            <Sheet
              variant="outlined"
              sx={{
                borderRadius: "md",
                p: 3,
                listStyle: "none",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <HeadsetMicIcon />
              <Typography level="h6">Support</Typography>
              <Typography level="body2" sx={{ color: "secondary.main" }}>
                Online 24/7
              </Typography>
            </Sheet>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              padding: 0,
            }}
          >
            <Typography
              level="body1"
              p={{ xs: 0, sm: 2, md: 3, lg: 2 }}
              m={{ xs: 2, sm: 2, md: 2, lg: 2 }}
            >
              Frontend developer, I create web pages with UI / UX user
              interface, I have years of experience and many clients are happy
              with the projects carried out.
            </Typography>
            <Button
              variant="solid"
              sx={{
                bgcolor: "primary.main",
                width: "auto",
              }}
            >
              Download CV <DescriptionIcon />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMeSection;
