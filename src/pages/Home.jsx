import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Autocomplete from "@mui/joy/Autocomplete";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import Stack from "@mui/joy/Stack";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import RadioGroup from "@mui/joy/RadioGroup";
import Radio from "@mui/joy/Radio";
import Slider from "@mui/joy/Slider";
import Sheet from "@mui/joy/Sheet";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";
import ProjectCard from "../components/ProjectCard";

import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ProfileSection from "../components/ProfileSection";
import AboutMeSection from "../components/AboutMeSection";
import ScrollToTopButton from "../components/ScrollToTopButton";
import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
import QualificationSection from "../components/QualificationSection";

function Home() {
  const jobExperience = [
    {
      role: "Senior designer",
      name: "Dribbble",
      logo: "https://www.vectorlogo.zone/logos/dribbble/dribbble-icon.svg",
      years: "2015-now",
    },
    {
      role: "Designer",
      name: "Pinterest",
      logo: "https://www.vectorlogo.zone/logos/pinterest/pinterest-icon.svg",
      years: "2012-2015",
    },
  ];

  const project = {
    title: "CAR RENTAL 🚗",
    description:
      "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
    imageUrl: "/path/to/car-rental-image.jpg", // Replace with the actual image path
    technologies: ["React", "SCSS"],
    codeLink: "https://github.com/your-repo", // Replace with the actual GitHub link
    liveDemoLink: "https://your-live-demo-link.com", // Replace with the actual live demo link
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
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
      <ScrollToTopButton />

      <ProjectCard
        title={project.title}
        description={project.description}
        imageUrl={project.imageUrl}
        technologies={project.technologies}
        codeLink={project.codeLink}
        liveDemoLink={project.liveDemoLink}
      />
    </Box>
  );
}

export default Home;
