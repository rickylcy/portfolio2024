import { useState } from "react";
import { Box, Container } from "@mui/joy";
import NavBar from "./components/NavBar";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Grid from "@mui/joy/Grid";
import BottomNavBar from "./components/BottomNavBar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const showDrawerOnPaths = ["/email", "/team", "/files"];

  return (
    <Box
      sx={{ fontFamily: "Poppins, sans-serif" }}
      /* sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }} */
    >
      <Container>
        <NavBar
          display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <BottomNavBar />
      </Container>
    </Box>
  );
}

export default App;
