// src/components/ProjectBox.js
import React from "react";
import { Box, Typography, Button } from "@mui/joy";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ProjectBox = ({
  title,
  description,
  imageUrl,
  technologies,
  codeLink,
  liveDemoLink,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        maxWidth: 800,
        m: 1,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        sx={{
          width: { xs: "100%", md: 300 },
          height: "auto",
        }}
        src={imageUrl}
        alt={title}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          padding: 2,
        }}
      >
        <Typography level="h4" sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ marginBottom: 2 }}
        >
          {description}
        </Typography>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", gap: 1, marginBottom: 2 }}
        >
          {technologies.map((tech, index) => (
            <Typography
              key={index}
              sx={{
                backgroundColor: "neutral.light",
                padding: 0.5,
                borderRadius: 1,
              }}
            >
              {tech}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button
            component="a"
            href={codeLink}
            target="_blank"
            sx={{ bgcolor: "text.secondary" }}
          >
            <GitHubIcon />
            Code
          </Button>
          <Button
            variant="solid"
            component="a"
            href={liveDemoLink}
            target="_blank"
            sx={{ bgcolor: "text.secondary" }}
          >
            <OpenInNewIcon />
            Live Demo
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectBox;
