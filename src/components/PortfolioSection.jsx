import React, { useState } from "react";
import { Box, Button, Typography, Grid, Sheet } from "@mui/joy";
import { styled } from "@mui/system";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const portfolioItems = [
    {
      title: "Web Design",
      category: "Web",
      description: "Web Design",
      demoLink: "Demo",
    },
    {
      title: "App Movil",
      category: "App",
      description: "App Movil",
      demoLink: "Demo",
    },
    {
      title: "Graphic Design",
      category: "Design",
      description: "Graphic Design",
      demoLink: "Demo",
    },
    {
      title: "Website Redesign",
      category: "Web",
      description: "Website Redesign",
      demoLink: "Demo",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const ButtonWrapper = styled(Box)({
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 3, md: 4, lg: 4 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ top: "0px", minHeight: "20vh" }}>
        <Typography level="h1" sx={{ marginBottom: 2 }}>
          Portfolio
        </Typography>
        <Typography
          level="body2"
          sx={{ marginBottom: 4, color: "text.secondary" }}
        >
          Most recent work
        </Typography>
        <ButtonWrapper>
          <Button
            variant="plain"
            onClick={() => handleCategoryChange("All")}
            sx={{ color: "primary.main" }}
          >
            All
          </Button>
          <Button
            variant="plain"
            onClick={() => handleCategoryChange("Web")}
            sx={{ color: "primary.main" }}
          >
            Web
          </Button>
          <Button
            variant="plain"
            onClick={() => handleCategoryChange("App")}
            sx={{ color: "primary.main" }}
          >
            App
          </Button>
          <Button
            variant="plain"
            onClick={() => handleCategoryChange("Design")}
            sx={{ color: "primary.main" }}
          >
            Design
          </Button>
        </ButtonWrapper>
      </Box>
      <Box
        sx={{
          width: "100%",
          minHeight: "80vh",
          minWidth: "60vw",
          maxWidth: "800px",
        }}
      >
        <Grid container spacing={2}>
          {filteredItems.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Sheet
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  height: "100%",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src="https://via.placeholder.com/150"
                  alt={item.title}
                  style={{
                    borderRadius: "8px",
                    marginBottom: "10px",
                    maxWidth: "100%",
                  }}
                />
                <Typography level="h6" sx={{ marginBottom: 1 }}>
                  {item.title}
                </Typography>
                <Typography level="body2" sx={{ marginBottom: 1 }}>
                  {item.description}
                </Typography>
                <Button
                  variant="solid"
                  component="a"
                  href={item.demoLink}
                  target="_blank"
                  sx={{ bgcolor: "text.secondary" }}
                >
                  <OpenInNewIcon />
                  {item.demoLink}
                </Button>
              </Sheet>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PortfolioSection;
