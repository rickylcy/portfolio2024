import React from "react";
import Box from "@mui/joy/Box";
import ProfileSection from "../components/ProfileSection";
import AboutMeSection from "../components/AboutMeSection";
import ScrollToTopButton from "../components/ScrollToTopButton";
import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
import QualificationSection from "../components/QualificationSection";
import TestimonialSection from "../components/TestimonialSection";
import PortfolioSection from "../components/PortfolioSection";
import Footer from "../components/Footer";
import ContactMeSection from "../components/ContactMeSection";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        paddingBottom: "4rem",
      }}
    >
      <Box>
        <ProfileSection />
      </Box>
      <Box>
        <AboutMeSection />
      </Box>
      <Box>
        <SkillsSection />
      </Box>
      <Box>
        <ServicesSection />
      </Box>
      <Box>
        <QualificationSection />
      </Box>
      <Box>
        <PortfolioSection />
      </Box>
      <Box>
        <TestimonialSection />
      </Box>
      <Box>
        <ContactMeSection />
      </Box>
      <Box>
        <Footer />
      </Box>
      <ScrollToTopButton />
    </Box>
  );
}

export default Home;
