import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./Theme.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssVarsProvider disableTransitionOnChange theme={theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </CssVarsProvider>
  </React.StrictMode>
);
