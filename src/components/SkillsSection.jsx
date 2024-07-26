// src/components/SkillsSection.js
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Sheet,
  List,
  ListItem,
  ListItemDecorator,
  ListItemContent,
} from "@mui/joy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SkillsSection = () => {
  const frontendSkills = [
    { name: "React", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Material UI", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "REST API", level: "Intermediate" },
    { name: "Bootstrap", level: "Basic" },
  ];

  const backendSkills = [
    { name: "NodeJS", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "REST", level: "Intermediate" },
    { name: "GraphQL", level: "Basic" },
    { name: "MSSQL Server", level: "Basic" },
    { name: "MongoDB", level: "Basic" },
  ];

  const renderSkill = (skill) => (
    <ListItem key={skill.name}>
      <ListItemDecorator>
        <CheckCircleIcon />
      </ListItemDecorator>
      <ListItemContent>
        <Typography level="body1" fontWeight="bold">
          {skill.name}
        </Typography>
        <Typography level="body2" sx={{ color: "text.secondary" }}>
          {skill.level}
        </Typography>
      </ListItemContent>
    </ListItem>
  );

  return (
    <Box
      id="skills"
      sx={{
        padding: { xs: 0, sm: 0, md: 3, lg: 4 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "text.secondary",
      }}
    >
      <Typography level="h1" sx={{ marginBottom: 2 }}>
        Skills
      </Typography>
      <Typography
        level="body2"
        sx={{ marginBottom: 4, color: "text.secondary" }}
      >
        My technical level
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Sheet
            variant="outlined"
            sx={{
              borderRadius: "md",
              padding: 4,
              listStyle: "none",
              height: "100%",
            }}
          >
            <Typography level="h3" sx={{ marginBottom: 2 }} align="center">
              Frontend developer
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <List>{frontendSkills.slice(0, 3).map(renderSkill)}</List>
              </Grid>
              <Grid item xs={6}>
                <List>{frontendSkills.slice(3).map(renderSkill)}</List>
              </Grid>
            </Grid>
          </Sheet>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Sheet
            variant="outlined"
            sx={{
              borderRadius: "md",
              padding: 4,
              listStyle: "none",
              height: "100%",
            }}
          >
            <Typography level="h3" sx={{ marginBottom: 2 }} align="center">
              Backend developer
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <List>{backendSkills.slice(0, 3).map(renderSkill)}</List>
              </Grid>
              <Grid item xs={6}>
                <List>{backendSkills.slice(3).map(renderSkill)}</List>
              </Grid>
            </Grid>
          </Sheet>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsSection;
