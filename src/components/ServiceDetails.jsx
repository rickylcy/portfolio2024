// src/components/ServiceDetails.js
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

const ServiceDetails = ({ open, onClose, title, details }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: 300, sm: 400, md: 500 },
          bgcolor: "background.paper",
          borderRadius: "md",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography level="h4">{title}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography level="body2" sx={{ mb: 2 }}>
          Services with more than 3 years of experience. Providing quality work
          to clients and companies.
        </Typography>
        <List>
          {details.map((detail, index) => (
            <ListItem key={index}>
              <ListItemDecorator>
                <CheckCircleIcon />
              </ListItemDecorator>
              <ListItemContent>{detail}</ListItemContent>
            </ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default ServiceDetails;
