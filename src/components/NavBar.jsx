// src/components/NavBar.js
import React from "react";
import { Box, Typography } from "@mui/joy";
import { Link as ScrollLink } from "react-scroll";

const NavBar = ({ display }) => {
  return (
    <Box
      display={display}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        padding: "10px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <Typography
          level="body"
          sx={{ fontWeight: "bold", paddingLeft: "10vw" }}
        >
          Smith
        </Typography>
        <Box sx={{ display: "flex", gap: "20px", paddingRight: "10vw" }}>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            <Typography level="body" sx={{ cursor: "pointer" }}>
              Home
            </Typography>
          </ScrollLink>
          <ScrollLink
            to="about-me"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            <Typography level="body" sx={{ cursor: "pointer" }}>
              About
            </Typography>
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            <Typography level="body" sx={{ cursor: "pointer" }}>
              Skills
            </Typography>
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            <Typography level="body" sx={{ cursor: "pointer" }}>
              Services
            </Typography>
          </ScrollLink>
          <ScrollLink
            to="portfolio"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            <Typography level="body" sx={{ cursor: "pointer" }}>
              Portfolio
            </Typography>
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            <Typography level="body" sx={{ cursor: "pointer" }}>
              Contact
            </Typography>
          </ScrollLink>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
