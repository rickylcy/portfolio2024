import React from "react";
import { Box, Typography, Sheet, Avatar, Grid } from "@mui/joy";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "A really good job, all aspects of the project were followed step by step and with good results.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Harry Clinton",
    feedback:
      "A really good job, all aspects of the project were followed step by step and with good results.",
    image: "https://via.placeholder.com/150",
  },
];

const TestimonialSection = () => {
  return (
    <Box
      id="testimonial"
      sx={{
        padding: { xs: 2, sm: 3, md: 4, lg: 4 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography level="h1" sx={{ marginBottom: 2, textAlign: "center" }}>
        Testimonial
      </Typography>
      <Typography
        level="body2"
        sx={{ marginBottom: 4, color: "text.secondary", textAlign: "center" }}
      >
        My client saying
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Sheet
              variant="outlined"
              sx={{
                borderRadius: "md",
                padding: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                src={testimonial.image}
                sx={{ width: 80, height: 80, marginBottom: 2 }}
              />
              <Typography level="h6" sx={{ fontWeight: "bold" }}>
                {testimonial.name}
              </Typography>
              <Typography
                level="body2"
                sx={{ color: "text.secondary", textAlign: "center" }}
              >
                {testimonial.feedback}
              </Typography>
            </Sheet>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialSection;
