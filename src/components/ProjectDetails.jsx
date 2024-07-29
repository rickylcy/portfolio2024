import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemDecorator,
  ListItemContent,
} from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ProjectDetails = ({
  open,
  onClose,
  title,
  status,
  skills,
  introduction,
  screenshots,
  tasks,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "80%", md: "70%" },
          maxHeight: "90vh",
          overflowY: "auto",
          bgcolor: "background.paper",
          borderRadius: "md",
          boxShadow: 24,
          p: 4,
          position: "absolute",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography level="h4">{title}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography level="body2" sx={{ mb: 2 }}>
          Status: {status}
        </Typography>
        <Typography level="body2" sx={{ mb: 2 }}>
          Introduction: {introduction}
        </Typography>
        <Typography level="body2" sx={{ mb: 2 }}>
          Skills Used: {skills.join(", ")}
        </Typography>
        <Typography level="body2" sx={{ mb: 2 }}>
          Tasks:
        </Typography>
        <List>
          {tasks.map((task, index) => (
            <ListItem key={index}>
              <ListItemDecorator>
                <CheckCircleIcon />
              </ListItemDecorator>
              <ListItemContent>{task}</ListItemContent>
            </ListItem>
          ))}
        </List>
        <Typography level="body2" sx={{ mt: 2 }}>
          Screenshots:
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {screenshots.map((screenshot, index) => (
            <Box
              key={index}
              component="img"
              src={screenshot}
              alt={`Screenshot ${index + 1}`}
              sx={{
                width: "45%",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                mb: 2,
              }}
            />
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default ProjectDetails;
