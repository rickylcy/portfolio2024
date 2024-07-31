import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Input,
  Button,
  Sheet,
  Link,
  Alert,
} from "@mui/joy";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import emailjs from "emailjs-com";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const contactOptions = [
  {
    icon: <EmailIcon sx={{ fontSize: "2rem" }} />,
    title: "Email",
    contact: "rickylcy8183@gmail.com",
    button: (
      <Button
        component={Link}
        href="mailto:rickylcy8183@gmail.com"
        target="_blank"
        variant="outlined"
        size="sm"
        sx={{
          textTransform: "none",
          borderRadius: "20px",
          border: "1px solid",
          color: "primary.main",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <EmailIcon />
        Send Email
      </Button>
    ),
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: "2rem" }} />,
    title: "Linkedin",
    contact: "Ching Yin (Ricky) Lau",
    button: (
      <Button
        component={Link}
        href="https://www.linkedin.com/in/ching-yin-lau-457825206/"
        target="_blank"
        variant="outlined"
        size="sm"
        sx={{
          textTransform: "none",
          borderRadius: "20px",
          border: "1px solid",
          color: "primary.main",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <PersonAddIcon />
        Connect
      </Button>
    ),
  },
];

const ContactMeSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailStatus, setEmailStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_8f1rcgn", // Replace with your EmailJS service ID
        "template_hjuqk19", // Replace with your EmailJS template ID
        formData,
        "L06ZrGdQMtZiN067E" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmailStatus("success");
          setTimeout(() => setEmailStatus(""), 5000); // Clear message after 5 seconds
        },
        (error) => {
          console.log("FAILED...", error);
          setEmailStatus("error");
          setTimeout(() => setEmailStatus(""), 5000); // Clear message after 5 seconds
        }
      );
  };

  return (
    <Box
      id="contact"
      sx={{
        padding: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
        minHeight: "100vh",
        minWidth: "60vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          level="h1"
          sx={{ marginBottom: "1rem", fontWeight: "bold" }}
        >
          Contact Me
        </Typography>
        <Typography
          level="body2"
          sx={{
            marginBottom: "2rem",
            color: "text.secondary",
            textAlign: "center",
          }}
        >
          Get in touch
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Box
            sx={{ minWidth: "20vw", textAlign: "center", marginBottom: "1rem" }}
          >
            <Typography level="h4" sx={{ marginBottom: "1rem" }}>
              Stay Connected
            </Typography>
            {contactOptions.map((option, index) => (
              <Sheet
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,0.1)",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                {option.icon}
                <Typography
                  level="h6"
                  sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
                >
                  {option.title}
                </Typography>
                <Typography level="body2" sx={{ marginBottom: "0.5rem" }}>
                  {option.contact}
                </Typography>
                {option.button}
              </Sheet>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{ minWidth: "20vw", textAlign: "center", marginBottom: "1rem" }}
          >
            <Typography level="h4" sx={{ marginBottom: "1rem" }}>
              Send me a message
            </Typography>
            <Box
              component="form"
              sx={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Input
                name="name"
                placeholder="Insert your name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                name="email"
                placeholder="Insert your email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                name="message"
                placeholder="Write your message"
                fullWidth
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                sx={{
                  bgcolor: "primary.main",
                  width: "auto",
                  alignSelf: "flex-start",
                  marginBottom: 4,
                }}
              >
                Send Message
              </Button>
              {emailStatus === "success" && (
                <Alert severity="success">
                  Your message has been sent successfully!
                </Alert>
              )}
              {emailStatus === "error" && (
                <Alert severity="error">
                  There was an error sending your message. Please try again.
                </Alert>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactMeSection;
