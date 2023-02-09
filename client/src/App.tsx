import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import theme from "./lib/mui/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Playlist from "./pages/Playlist";
import Profile from "./pages/Profile";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import NewUser from "./pages/users/NewUser";
import Home from "./pages/Home";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const element = useRoutes([
    { path: "/", element: <Home /> },

    {
      path: "/playlist/:playlistId",
      element: <Playlist />,
    },

    {
      path: "/songs/:songId",
      element: <Playlist />,
    },
    {
      path: "/songs/new",
      element: <Playlist />,
    },

    {
      path: "/users/new",
      element: <NewUser />,
    },
    {
      path: "/users/:userId",
      element: <Profile />,
    },
    // outlet?
    {
      path: "/users/:userId/songs",
      element: <Profile />,
    },
  ]);
  const location = useLocation();

  if (!element) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <AnimatePresence>
          {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
