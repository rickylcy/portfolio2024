// src/components/BackgroundModal.js
import React from "react";
import { Box, Typography, Grid, Modal } from "@mui/joy";

const BackgroundModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "80%", md: "60%" },
          maxWidth: { sm: "80vw", lg: "60vw" },
          bgcolor: "background.paper",
          borderRadius: "md",
          boxShadow: 24,
          p: 2,
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        <Typography variant="h4" component="h2">
          My Background
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus
                diam.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                component="img"
                src="https://via.placeholder.com/300"
                alt="Background Image 1"
                sx={{
                  width: "100%",
                  borderRadius: "8%",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                component="img"
                src="https://via.placeholder.com/300"
                alt="Background Image 2"
                sx={{
                  width: "100%",
                  borderRadius: "8%",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                Paragraph 2: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus
                diam.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default BackgroundModal;
