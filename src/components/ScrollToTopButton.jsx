// src/components/ScrollToTopButton.js
import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/joy";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
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
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        bottom: { xs: "10vh" },

        display: { xs: isVisible ? "block" : "none" },
        zIndex: 1000,
      }}
    >
      <Button
        onClick={scrollToTop}
        variant="solid"
        sx={{
          borderRadius: "20%",
          height: "5vh",
          width: { xs: "10vw", md: "5vw" },
          minWidth: "3vw",
          minHeight: "5vh",
          padding: 0,
          bgcolor: "primary.main",
        }}
      >
        <ArrowUpwardIcon />
      </Button>
    </Box>
  );
};

export default ScrollToTopButton;
