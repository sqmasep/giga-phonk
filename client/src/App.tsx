import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import theme from "./lib/mui/theme";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "react-query-devtools";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const element = useRoutes([{ path: "/", element: <Home /> }]);
  const location = useLocation();

  if (!element) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {React.cloneElement(element, { key: location.pathname })}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
