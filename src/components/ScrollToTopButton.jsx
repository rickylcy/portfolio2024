// src/components/ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/joy";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        display: visible ? "flex" : "none",
        zIndex: 1000,
      }}
    >
      <IconButton onClick={scrollToTop} sx={{ bgcolor: "primary.main" }}>
        <ArrowUpwardIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
};

export default ScrollToTopButton;
