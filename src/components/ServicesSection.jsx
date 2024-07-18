// src/components/ServicesSection.js
import React, { useState } from "react";
import { Box, Typography, Grid, Sheet, Button } from "@mui/joy";
import ServiceDetails from "./ServiceDetails";

const services = [
  {
    title: "Web Designer",
    description: "View More",
    details: [
      "I develop the user interface.",
      "Web page development.",
      "I create UX element interactions.",
      "I position your company brand.",
      "Design and mockups of products for companies.",
    ],
  },
  {
    title: "UI/UX Designer",
    description: "View More",
    details: [
      "I design user interfaces.",
      "User experience improvements.",
      "Wireframes and mockups.",
      "User testing and feedback.",
      "Continuous design iteration.",
    ],
  },
  {
    title: "Branding Designer",
    description: "View More",
    details: [
      "Brand identity design.",
      "Logo creation.",
      "Brand guidelines.",
      "Marketing materials.",
      "Brand strategy.",
    ],
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => setSelectedService(service);
  const handleClose = () => setSelectedService(null);

  const renderService = (service) => (
    <Grid item xs={12} sm={6} md={4} key={service.title}>
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: "md",
          padding: 4,
          listStyle: "none",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography level="h4" sx={{ marginBottom: 2 }} align="center">
            {service.title}
          </Typography>
        </Box>
        <Box sx={{ mt: "auto" }}>
          <Button
            variant="solid"
            sx={{
              bgcolor: "primary.main",
              width: "auto",
            }}
            onClick={() => handleOpen(service)}
          >
            View More
          </Button>
        </Box>
      </Sheet>
    </Grid>
  );

  return (
    <Box
      id="services"
      sx={{
        padding: { xs: 0, sm: 0, md: 3, lg: 4 },
        height: { xs: "100vh", sm: "100vh", md: "100vh", lg: "100vh" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography level="h1" sx={{ marginBottom: 2 }}>
        Services
      </Typography>
      <Typography
        level="body2"
        sx={{ marginBottom: 4, color: "text.secondary" }}
      >
        What I offer
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map(renderService)}
      </Grid>
      {selectedService && (
        <ServiceDetails
          open={Boolean(selectedService)}
          onClose={handleClose}
          title={selectedService.title}
          details={selectedService.details}
        />
      )}
    </Box>
  );
};

export default ServicesSection;
