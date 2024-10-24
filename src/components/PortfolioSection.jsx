import React, { useState } from "react";
import { Box, Button, Typography, Grid, Sheet } from "@mui/joy";
import { styled } from "@mui/system";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import VisaLogo from "../assets/visa-logo.jpg";
import AnyportalLogo from "../assets/anyportal.png";
import anyportal from "../assets/anyportal-1.png";
import anyportal1 from "../assets/anyportal-2.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ProjectDetails from "./ProjectDetails"; // Import the ProjectDetails component
import secondDisplayImage from "../assets/second-display.jpg";
import chatapp1 from "../assets/chat-app-1.png";
import chatapp2 from "../assets/chat-app-2.png";
import report from "../assets/report.png";
import report1 from "../assets/report-1.png";
import IMDB from "../assets/IMDB.png";
import movie from "../assets/movie.png";
import movie1 from "../assets/movie1.png";
import weather from "../assets/weather.jpg";
import weather1 from "../assets/weather-1.png";

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
      introduction:
        "This is a Visa Company Website which I have done it with an actual client in Brisbane. Developed a responsive web application, 'Visa to China,' designed to provide comprehensive information and assistance for individuals and businesses in Australia seeking visas to China. The project includes sections for news, FAQs, visa types, and application guidelines. It integrates social media elements like Facebook and highlights important travel tips and policies.",
      technologies: [
        "React: For building dynamic and interactive user interfaces.",
        "Material-UI: For responsive and aesthetically pleasing UI components.",
        "JavaScript: For implementing dynamic functionality.",
        "HTML/CSS: For structuring and styling the application.",
        "Facebook SDK: For embedding social media widgets.",
      ],
      tasks: [
        "Develop UI: Designed and developed the user interface using React and Material-UI. Ensured responsive design for both web and mobile views.",
        "Integrate API: Integrated various APIs to enhance functionality and user experience.",
        "Deploy: Deployed and hosted the application and ensured its smooth operation.",
      ],
      screenshots: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      title: "IMDb Clone Movie Portal",
      category: ["Web", "Mobile-Web", "Responsive", "Self-Learning"],
      description: "Responsive Movie Searching Platform",
      image: IMDB,
      demoLink: "https://ricky-movie-portal.vercel.app/",
      status: "Completed",
      introduction:
        "This project is built with Next.js and Tailwind CSS. It is the first practicing project for me to learn Next.js and Tailwind CSS. It is designed to help user to browse movie catergorised by either Trending or Top Rated. Or the use could even search movies with keyword with the search filter. The app list out the release date and rating of each movie. It integrates with TMDB api to fetch all the data.",
      technologies: [
        "Nextjs: For building app router and create the web appliation with React components.",
        "TailwindCSS: For responsive and aesthetically pleasing UI components.",
      ],
      tasks: [
        "Develop UI: Designed and developed the user interface using React components and TailwindCSS. Ensured responsive design for both web and mobile views.",
        "Integrate API: Integrated with TMDb API to enhance functionality and user experience.",
        "Deploy: Deployed and hosted the application on Vercel",
      ],
      screenshots: [movie, movie1],
    },
    {
      title: "Weather App",
      category: ["Web", "Self-Learning"],
      description: "Weather Comparison App",
      image: weather,
      demoLink: "https://ricky-weather-app.vercel.app/",
      status: "Completed",
      introduction:
        "This project is built with React and Redux. It is one of my practicing app to learn Redux. It is designed to compare the weather of two cities, one is default to be Hong Kong and the other one is any cities in Australia that can be chosen by user. The app also shows the time zone difference of the cities. It integrates with OpenWeatherMap api to fetch all the data.",
      technologies: [
        "Redux: For managing state across different parts of the application.",
      ],
      tasks: [
        "Develop UI: Designed and developed the user interface using React components and SCSS.",
        "Integrate API: Integrated with OpenWeatherMap API to show weather data.",
        "Deploy: Deployed and hosted the application on Vercel",
      ],
      screenshots: [weather1],
    },
    {
      title: "Sales Report Website",
      category: ["Web", "Mobile-Web", "Responsive"],
      description: "Company Product",
      image: "https://via.placeholder.com/150",
      demoLink: "", // Update this with the actual link if available
      status: "Completed",
      introduction:
        "This Sales Report Website was developed to provide an intuitive and responsive platform for visualizing sales data. The project involved creating dynamic charts, detailed reports, and dashboards tailored for different user roles within the company. The site is fully responsive, ensuring seamless access from both desktop and mobile devices.",
      technologies: [
        "React: For building dynamic and interactive user interfaces.",
        "Material-UI: For responsive and aesthetically pleasing UI components.",
        "JavaScript: For implementing dynamic functionality.",
        "Chart.js: For creating dynamic and interactive data visualizations.",
        "HTML/CSS: For structuring and styling the application.",
      ],
      tasks: [
        "Develop UI: Designed and developed the user interface using React and Material-UI. Ensured responsive design for both web and mobile views.",
        "Integrate API: Integrated various APIs to fetch and display sales data in real-time.",
        "Data Visualization: Implemented dynamic charts and graphs using Chart.js to visualize sales trends and performance metrics.",
        "Deploy: Deployed and hosted the application, ensuring its smooth operation and quick access to sales data.",
      ],
      screenshots: [report, report1],
    },
    {
      title: "2D Barcode Mobile Ordering",
      category: ["Mobile-Web"],
      description: "Company Product",
      image: "https://via.placeholder.com/150",
      demoLink: "",
      status: "In Testing Stage",
      introduction:
        "This is a company product designed for mobile ordering using 2D barcodes in restaurants.",
      technologies: [
        "React: For building dynamic and interactive user interfaces.",
        "Bootstrap: For responsive and aesthetically pleasing UI components.",
        "Express: For building server-side applications.",
        "REST: For implementing RESTful APIs.",
      ],
      tasks: [
        "Develop UI: Designed and developed the user interface using React and Bootstrap.",
        "Integrate API: Integrated various APIs to enhance functionality and user experience.",
        "Deploy: Deployed and hosted the application and ensured its smooth operation.",
      ],
      screenshots: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      title: "POS Customer Display App",
      category: ["Application", "Responsive"],
      description: "Company Product for POS",
      image: secondDisplayImage,
      demoLink: "",
      status: "Completed",
      introduction:
        "This is an app for the second display for POS on the customer side to let customers see what they have ordered. It is capable of advertising with slideshow images and is responsive to different screen sizes according to the second display screen resolution.",
      technologies: [
        "C#: For building dynamic and interactive user interfaces.",
        "WPF: For responsive and aesthetically pleasing UI components.",
      ],
      tasks: [
        "Develop UI: Designed and developed the user interface using C# and WPF.",
        "Responsive UI: Ensured the app is responsive to different screen sizes.",
        "Desktop Application: Developed a desktop application to display customer orders and advertisements.",
      ],
      screenshots: [secondDisplayImage],
    },
    {
      title: "Realtime Chat App",
      category: ["Web", "Mobile-Web", "Responsive", "Self-Learning"],
      description: "Responsive Chat App with Firebase",
      image: "https://via.placeholder.com/150",
      demoLink: "https://ricky-chat-app.vercel.app/",
      status: "Completed",
      introduction:
        "Developed a responsive Realtime Chat App using Firebase and React, designed to provide real-time communication between users. This project demonstrates my ability to integrate Firebase for authentication and Firestore for real-time data handling. The application is fully responsive, ensuring a seamless user experience across desktop and mobile devices. It includes features like Google authentication, real-time message updates, and a dark mode toggle, making it both functional and user-friendly.",
      technologies: [
        "React: Built the user interface and managed state efficiently with React hooks.",
        "Firebase (Firestore & Authentication): Implemented real-time database updates and user authentication for secure login and messaging.",
        "Joy UI: Utilized for modern, responsive, and aesthetically pleasing UI components.",
      ],
      tasks: [
        "UI Development: Designed and developed a responsive user interface with React and Joy UI, ensuring compatibility across web and mobile platforms.",
        "Firebase Integration: Set up Firebase for user authentication, real-time data storage, and message retrieval using Firestore.",
        "Dark Mode Implementation: Added a dark mode toggle to enhance user experience and accessibility.",
        "Google Authentication: Integrated Google sign-in to allow users to authenticate easily and securely.",
        "Deployment: Deployed the application on Vercel, ensuring smooth performance and availability.",
      ],
      screenshots: [chatapp1, chatapp2],
    },
    {
      title: "Anyportal",
      category: ["Self-Learning", "Mobile-Web"],
      description: "Online Forum",
      image: AnyportalLogo,
      demoLink: "https://anyportal.vercel.app",
      status: "In Progress",
      introduction:
        "This is an online forum project developed to facilitate discussions and information sharing among users.(Currently there is a unknown 404 issue. please close the tab and click the link again)",
      technologies: [
        "Next.js: For server-rendered React applications.",
        "CSS: For styling the application.",
        "JavaScript: For implementing dynamic functionality.",
      ],
      tasks: [
        "Design UI: Created user-friendly and responsive designs.",
        "Implement Authentication: Integrated authentication systems to secure user data.",
        "Database Design and Implementation: Setup database with MongoDB to store and fetch data.",
      ],
      screenshots: [anyportal, anyportal1],
    },

    {
      title: "Portfolio (This site)",
      category: ["Web", "Mobile-Web", "Responsive", "Self-Learning"],
      description: "Portfolio for demo",
      image: "https://via.placeholder.com/150",
      demoLink: "https://portfolio2024-ricky.vercel.app/",
      status: "In Progress",
      introduction:
        "This is a personal portfolio site designed to introduction myself and showcase various projects and skills.",
      technologies: [
        "React: For building dynamic and interactive user interfaces.",
        "Joy UI: For responsive and aesthetically pleasing UI components.",
        "SMTP EmailJS: For integrating email functionality.",
      ],
      tasks: [
        "Develop UI: Designed and developed the user interface using React and Joy UI.",
        "Responsive UI: Ensured the site is responsive to different screen sizes.",
        "Deploy: Deployed and hosted the application and ensured its smooth operation.",
      ],
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
                {item.demoLink !== "" && (
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
                )}
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
          technologies={selectedProject.technologies} // Added this line
          tasks={selectedProject.tasks}
          screenshots={selectedProject.screenshots}
        />
      )}
    </Box>
  );
};

export default PortfolioSection;
