import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/joy";
import { Link as ScrollLink } from "react-scroll";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        padding: { xs: "1rem", sm: "1.5rem", md: "2rem" },
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <Typography level="h2" sx={{ marginBottom: "1rem", fontWeight: "bold" }}>
        Ricky Lau
      </Typography>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Typography level="body">About</Typography>
          </ScrollLink>
        </Grid>
        <Grid item>
          <ScrollLink
            to="portfolio"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Typography level="body">Projects</Typography>
          </ScrollLink>
        </Grid>
        <Grid item>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Typography level="body">Services</Typography>
          </ScrollLink>
        </Grid>
      </Grid>
      <Box sx={{ marginY: "2rem" }}>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          target="_blank"
          aria-label="Twitter"
        >
          <TwitterIcon />
        </IconButton>
      </Box>
      <Typography level="body2" sx={{ color: "text.secondary" }}>
        © Crypticalcoder. All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
