import React, { useState } from "react";
import { Box, Button, Typography, Grid, Sheet } from "@mui/joy";
import { styled } from "@mui/system";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import VisaLogo from "../assets/visa-logo.jpg";
import AnyportalLogo from "../assets/anyportal.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ProjectDetails from "./ProjectDetails"; // Import the ProjectDetails component

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  const portfolioItems = [
    {
      title: "Visa Company Website",
      category: ["Web", "Mobile-Web", "Responsive"],
      description: "Web Development for Visa-to-China",
      image: VisaLogo,
      demoLink: "https://visatochina.com.au/",
      status: "Completed",
      skills: ["React", "CSS", "HTML"],
      introduction: "This is a Visa Company Website.",
      tasks: ["Develop UI", "Integrate API", "Deploy"],
      screenshots: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      title: "Anyportal",
      category: ["Self-Learning", "Mobile-Web"],
      description: "Online Forum",
      image: AnyportalLogo,
      demoLink: "https://anyportal.vercel.app/",
      status: "In Progress",
      skills: ["Next.js", "CSS", "JavaScript"],
      introduction: "This is an online forum.",
      tasks: ["Design UI", "Implement Authentication"],
      screenshots: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      title: "2D Barcode Mobile Ordering",
      category: ["Mobile-Web"],
      description: "Company Product",
      image: "https://via.placeholder.com/150",
      demoLink: "Demo",
      status: "In Testing Stage",
      skills: ["React", "Bootstrap", "Express", "REST"],
      introduction: "This is a graphic design project.",
      tasks: ["Develop UI", "Integrate API", "Deploy"],
      screenshots: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      title: "POS Customer Display App",
      category: ["Application", "Responsive"],
      description: "Company Product for POS",
      image: "https://via.placeholder.com/150",
      demoLink: "Demo",
      status: "Completed",
      skills: ["C#", "WPF"],
      introduction:
        "This is a app for the second display for POS on the customer side to let customer see what they have ordered. At the same time, the App is capable of advertising with slideshow images. The app is also responsive to different screen size according to the second display screen resolution. This is my first C# product that uses for user purposes. I have developed a basic skills of C# with WPF through the process.",
      tasks: ["Develop UI", "Responsive UI", "desktop application"],
      screenshots: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      title: "Portfolio (This site)",
      category: ["Web", "Mobile-Web", "Responsive", "Self-Learning"],
      description: "Portfolio for demo",
      image: "https://via.placeholder.com/150",
      demoLink: "https://portfolio2024-ricky.vercel.app/",
      status: "In Progress",
      skills: ["React", "Joy UI", "SMTP EmailJS"],
      introduction: "This is a graphic design project.",
      tasks: ["Develop UI", "Responsive UI", "Deploy"],
      screenshots: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.includes(activeCategory));

  const ButtonWrapper = styled(Box)({
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "2rem",
    flexWrap: "wrap", // Add this line to enable wrapping
  });

  return (
    <Box
      id="portfolio"
      sx={{
        padding: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ top: 0, minHeight: "20vh", textAlign: "center" }}>
        <Typography level="h1" sx={{ marginBottom: "1rem" }}>
          Portfolio
        </Typography>
        <Typography
          level="body2"
          sx={{ marginBottom: "2rem", color: "text.secondary" }}
        >
          Most recent work
        </Typography>
        <ButtonWrapper>
          <Button
            variant="plain"
            onClick={() => handleCategoryChange("All")}
            sx={{
              color: activeCategory === "All" ? "primary.main" : "text.primary",
              borderBottom:
                activeCategory === "All"
                  ? "2px solid"
                  : "2px solid transparent",
              borderRadius: 0,
            }}
          >
            All
          </Button>
          <Button
            variant="plain"
            onClick={() => handleCategoryChange("Web")}
            sx={{
              color: activeCategory === "Web" ? "primary.main" : "text.primary",
              borderBottom:
                activeCategory === "Web"
                  ? "2px solid"
                  : "2px solid transparent",
              borderRadius: 0,
            }}
          >
            Web
          </Button>
          <Button
            variant="plain"
            onClick={() => handleCategoryChange("Mobile-Web")}
            sx={{
              color:
                activeCategory === "Mobile-Web"
                  ? "primary.main"
                  : "text.primary",
              borderBottom:
                activeCategory === "Mobile-Web"
                  ? "2px solid"
                  : "2px solid transparent",
              borderRadius: 0,
            }}
          >
            Mobile-Web
          </Button>
          <Button
            variant="plain"
            onClick={() => handleCategoryChange("Responsive")}
            sx={{
              color:
                activeCategory === "Responsive"
                  ? "primary.main"
                  : "text.primary",
              borderBottom:
                activeCategory === "Responsive"
                  ? "2px solid"
                  : "2px solid transparent",
              borderRadius: 0,
            }}
          >
            Responsive
          </Button>
          <Button
            variant="plain"
            onClick={() => handleCategoryChange("Self-Learning")}
            sx={{
              color:
                activeCategory === "Self-Learning"
                  ? "primary.main"
                  : "text.primary",
              borderBottom:
                activeCategory === "Self-Learning"
                  ? "2px solid"
                  : "2px solid transparent",
              borderRadius: 0,
            }}
          >
            Self-Learning
          </Button>
          <Button
            variant="plain"
            onClick={() => handleCategoryChange("Application")}
            sx={{
              color:
                activeCategory === "Application"
                  ? "primary.main"
                  : "text.primary",
              borderBottom:
                activeCategory === "Application"
                  ? "2px solid"
                  : "2px solid transparent",
              borderRadius: 0,
            }}
          >
            Application
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
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,0.1)",
                  height: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    maxWidth: "6rem",
                    aspectRatio: "1 / 1",
                    borderRadius: "0.5rem",
                    marginBottom: "1rem",
                  }}
                />
                <Typography
                  level="h6"
                  sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
                >
                  {item.title}
                </Typography>
                <Typography level="body2" sx={{ marginBottom: "0.5rem" }}>
                  {item.description}
                </Typography>
                <Button
                  variant="solid"
                  onClick={() => setSelectedProject(item)}
                  sx={{ bgcolor: "text.secondary", mb: "0.5rem" }}
                >
                  <VisibilityIcon />
                  Details
                </Button>
                <Button
                  variant="solid"
                  component="a"
                  href={item.demoLink}
                  target="_blank"
                  sx={{ bgcolor: "text.secondary" }}
                >
                  <OpenInNewIcon />
                  Demo
                </Button>
              </Sheet>
            </Grid>
          ))}
        </Grid>
      </Box>
      {selectedProject && (
        <ProjectDetails
          open={Boolean(selectedProject)}
          onClose={handleCloseDetails}
          title={selectedProject.title}
          status={selectedProject.status}
          skills={selectedProject.skills}
          introduction={selectedProject.introduction}
          tasks={selectedProject.tasks}
          screenshots={selectedProject.screenshots}
        />
      )}
    </Box>
  );
};

export default PortfolioSection;
