import { useState } from "react";
import { Box, Container } from "@mui/joy";
import NavBar from "./components/NavBar";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import Test from "./pages/Test";
import Navigation from "./components/Navigation";
import Team from "./pages/Team";
import Files from "./pages/Files";
import Home from "./pages/Home";
import Grid from "@mui/joy/Grid";

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
          <Route path="/email" element={<Test />} />
          <Route path="/team" element={<Team />} />
          <Route path="/files" element={<Files />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
