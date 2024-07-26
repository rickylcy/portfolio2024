// src/components/NavBar.js
import React, { useState } from "react";
import { Box, Button, IconButton, Typography, Sheet, Grid } from "@mui/joy";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";
import BookIcon from "@mui/icons-material/Book";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100vw",
          backgroundColor: "#fff",
          boxShadow: "0 -5px 8px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
          padding: "10px 0",
          display: { xs: "flex", sm: "none" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography level="h4" sx={{ fontWeight: "bold", paddingLeft: "10px" }}>
          Ricky
        </Typography>
        <IconButton onClick={toggleNav} sx={{ paddingRight: "10px" }}>
          {expanded ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      {expanded && (
        <Sheet
          sx={{
            margin: "0px",
            borderRadius: "20%",
            position: "fixed",
            bottom: "50px",
            left: 0,
            width: "100vw",
            backgroundColor: "#fff",
            boxShadow: "0 -8px 20px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            padding: "10px 10px",
            display: { xs: "flex", sm: "none" },
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <Button
                  variant="plain"
                  sx={{
                    display: "flex",
                    color: "primary.main",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <HomeIcon />
                  Home
                </Button>
              </ScrollLink>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ScrollLink
                to="about-me"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <Button
                  variant="plain"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "primary.main",
                  }}
                >
                  <InfoIcon />
                  About
                </Button>
              </ScrollLink>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <Button
                  variant="plain"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "primary.main",
                  }}
                >
                  <BuildIcon />
                  Skills
                </Button>
              </ScrollLink>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <Button
                  variant="plain"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "primary.main",
                  }}
                >
                  <WorkIcon />
                  Services
                </Button>
              </ScrollLink>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ScrollLink
                to="portfolio"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <Button
                  variant="plain"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "primary.main",
                  }}
                >
                  <BookIcon />
                  Portfolio
                </Button>
              </ScrollLink>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <Button
                  variant="plain"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "primary.main",
                  }}
                >
                  <ContactMailIcon />
                  Contact
                </Button>
              </ScrollLink>
            </Grid>
          </Grid>
        </Sheet>
      )}
    </>
  );
};

export default NavBar;
