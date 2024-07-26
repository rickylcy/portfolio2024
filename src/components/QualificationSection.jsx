import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Sheet,
  List,
  ListItem,
  ListItemDecorator,
  ListItemContent,
} from "@mui/joy";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

const studyData = [
  {
    role: "Bachelor of Computer Science",
    name: "Queensland University of Technology",
    logo: "https://www.myequals.net/organisations/getLogo/c76b7b51-de81-4447-95dd-c74815c6a83a",
    years: "2019 - 2022",
  },
  {
    role: "Diploma of Information Technology",
    name: "Queensland University of Technology",
    logo: "https://www.myequals.net/organisations/getLogo/c76b7b51-de81-4447-95dd-c74815c6a83a",
    years: "2018 - 2019",
  },
];

const workData = [
  {
    role: "Software Developer",
    name: "POS Republic",
    logo: "https://www.vectorlogo.zone/logos/pinterest/pinterest-icon.svg",
    years: "2022 - Present",
  },
  {
    role: "Internship",
    name: "Leap In!",
    logo: "https://www.vectorlogo.zone/logos/dribbble/dribbble-icon.svg",
    years: "2020 - 2021",
  },
];

const QualificationSection = () => {
  const [selectedContent, setSelectedContent] = useState("work");

  const renderList = (data) => (
    <List sx={{ "--ListItemDecorator-size": "40px", gap: 2 }}>
      {data.map((item, index) => (
        <ListItem key={index} sx={{ alignItems: "flex-start" }}>
          <ListItemDecorator
            sx={{
              "&::before": {
                content: '""',
                position: "absolute",
                height: "100%",
                width: "1px",
                bgcolor: "divider",
                left: "calc(var(--ListItem-paddingLeft) + 12px)",
                top: "50%",
              },
            }}
          >
            <img
              src={item.logo}
              alt={`${item.name} logo`}
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "10%",
                objectFit: "cover",
              }}
            />
          </ListItemDecorator>
          <ListItemContent>
            <Box
              key={item.title}
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography level="h6" sx={{ fontWeight: "bold" }}>
                  {item.role}
                </Typography>
                <Typography level="body2" sx={{ color: "text.secondary" }}>
                  {item.name}
                </Typography>
                <Typography level="body2" sx={{ color: "text.secondary" }}>
                  <CalendarTodayIcon fontSize="small" /> {item.years}
                </Typography>
              </Box>
            </Box>
          </ListItemContent>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box
      id="qualification"
      sx={{
        padding: { xs: 2, sm: 3, md: 4, lg: 4 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        level="h1"
        sx={{ marginBottom: 2, color: "text.secondary", textAlign: "center" }}
      >
        Qualification
      </Typography>
      <Typography
        level="body2"
        sx={{ marginBottom: 4, color: "text.secondary", textAlign: "center" }}
      >
        My personal journey
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        <Button
          onClick={() => setSelectedContent("work")}
          variant="plain"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "primary.main",
          }}
        >
          <WorkIcon />
          Experience
        </Button>
        <Button
          onClick={() => setSelectedContent("study")}
          variant="plain"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "primary.main",
          }}
        >
          <SchoolIcon />
          Education
        </Button>
      </Box>
      <Box sx={{ width: "100%", maxWidth: "100vw", display: "flex" }}>
        {selectedContent === "work"
          ? renderList(workData)
          : renderList(studyData)}
      </Box>
    </Box>
  );
};

export default QualificationSection;
