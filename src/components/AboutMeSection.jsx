// src/components/AboutMeSection.js
import React, { useState } from "react";
import { Box, Typography, Button, Grid, Sheet } from "@mui/joy";
import profileImg from "../assets/profile.jpg";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import WorkIcon from "@mui/icons-material/Work";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import DescriptionIcon from "@mui/icons-material/Description";
import BackgroundModal from "./BackgroundModal";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import profileImage from "../assets/ricky2.jpg";

const AboutMeSection = () => {
  const [openBackground, setOpenBackground] = useState(false);

  const handleOpenBackground = () => setOpenBackground(true);
  const handleCloseBackground = () => setOpenBackground(false);

  return (
    <Box
      id="about-me"
      sx={{
        padding: { xs: 0, sm: 0, md: 3, lg: 4 },
        minHeight: "100vh",
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
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box
            component="img"
            src={profileImage}
            alt="Profile"
            sx={{
              width: { xs: "80%", sm: "80%", md: "100%", lg: "100%" },
              height: "auto",
              borderRadius: "8%",
              display: "block",
              margin: "0 auto", // Centers the image
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} p={6}>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Sheet
                variant="outlined"
                sx={{
                  borderRadius: "md",
                  p: 3,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <LightbulbIcon />
                <Typography level="h6">Junior Developer</Typography>
                <Typography level="body2" sx={{ color: "secondary.main" }}>
                  2+ Years
                </Typography>
              </Sheet>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Sheet
                variant="outlined"
                sx={{
                  borderRadius: "md",
                  p: 3,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <WorkIcon />
                <Typography level="h6">Completed</Typography>
                <Typography level="body2" sx={{ color: "secondary.main" }}>
                  10+ Projects
                </Typography>
              </Sheet>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Sheet
                variant="outlined"
                sx={{
                  borderRadius: "md",
                  p: 3,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <HeadsetMicIcon />
                <Typography level="h6">Continuous Learning</Typography>
                <Typography level="body2" sx={{ color: "secondary.main" }}>
                  Always Evolving
                </Typography>
              </Sheet>
            </Grid>
          </Grid>
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
              m={{ xs: 1, sm: 2, md: 2, lg: 2 }}
            >
              Frontend developer passionate about creating intuitive and
              user-friendly web pages using React and modern UI frameworks like
              Material UI and Bootstrap. Although still at the junior level, I
              am eager to learn and constantly improving my skills through
              self-learning and hands-on projects. My journey includes
              developing a mobile ordering app and various other projects that
              showcase my dedication and growth as a developer.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: 0,
                margin: 1,
              }}
            >
              <Button
                variant="solid"
                onClick={handleOpenBackground}
                sx={{
                  bgcolor: "primary.main",
                  width: "auto",
                  marginRight: 2,
                }}
              >
                My Background
                <ChildCareIcon sx={{ marginLeft: 1, fontSize: "1.5rem" }} />
              </Button>
              <Button
                variant="solid"
                sx={{
                  bgcolor: "primary.main",
                  width: "auto",
                }}
              >
                Download CV
                <DescriptionIcon sx={{ marginLeft: 1, fontSize: "1.5rem" }} />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <BackgroundModal open={openBackground} onClose={handleCloseBackground} />
    </Box>
  );
};

export default AboutMeSection;
