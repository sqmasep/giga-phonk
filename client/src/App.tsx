import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import theme from "./lib/mui/theme";
import Home from "./pages/Home";

const App: React.FC = () => {
  const element = useRoutes([{ path: "/", element: <Home /> }]);
  const location = useLocation();

  if (!element) return null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {React.cloneElement(element, { key: location.pathname })}
    </ThemeProvider>
  );
};

export default App;
