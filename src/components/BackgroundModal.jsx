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
                I’m originally from Hong Kong. My adventure in Australia started
                in 2016 when I came here on a working holiday visa at 19. I
                worked on a few farms, did some traveling, and lived in Brisbane
                for about six months. It was an amazing experience that really
                opened my eyes to the Australian way of life.
              </Typography>

              <Typography variant="body1">
                In 2017, I went back to Hong Kong to see my family, but I
                couldn’t stay away from Australia for long. In 2018, I returned
                to study Computer Science at Queensland University of Technology
                (QUT). That’s when my real journey in Australia began.
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
                <Typography variant="body1">
                  My time at QUT was fantastic. I learned a lot about technology
                  and web development, and it made me even more passionate about
                  creating great things. From working on farms to studying at
                  QUT, my journey has been full of learning and growth, and I’m
                  excited to keep moving forward in my career as a developer.
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default BackgroundModal;
