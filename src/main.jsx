import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/inter";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </CssVarsProvider>
  </React.StrictMode>
);
