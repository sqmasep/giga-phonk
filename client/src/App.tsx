import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import theme from "./lib/mui/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Playlist from "./pages/Playlist";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import SignUp from "./pages/users/SignUp";
import Home from "./pages/Home";
import MusicPlayer from "./components/MusicPlayer";
import SignIn from "./pages/users/SignIn";
import Playlists from "./pages/Playlists";
import Artist from "./pages/Artist";

const queryClient = new QueryClient();

const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{
        y: 50,
        scale: 0.95,
        transformOrigin: "top",
        opacity: 0,
      }}
      animate={{
        y: 0,
        scale: 1,
        transformOrigin: "top",
        opacity: 1,
      }}
      exit={{
        y: -50,
        scale: 0.95,
        transformOrigin: "top",
        opacity: 0,
        transition: { duration: 0.1 },
      }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
};

const App: React.FC = () => {
  const element = useRoutes([
    {
      path: "/",
      element: (
        <AnimatedPage>
          <Home />
        </AnimatedPage>
      ),
    },
    {
      path: "/playlists",
      element: (
        <AnimatedPage>
          <Playlists />
        </AnimatedPage>
      ),
    },
    {
      path: "/playlists/:playlistId",
      element: (
        <AnimatedPage>
          <Playlist />
        </AnimatedPage>
      ),
    },

    {
      path: "/songs/:songId",
      element: (
        <AnimatedPage>
          <Playlist />
        </AnimatedPage>
      ),
    },
    {
      path: "/artists/:artistName",
      element: (
        <AnimatedPage>
          <Artist />
        </AnimatedPage>
      ),
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
        <Box py={16}>
          <AnimatePresence mode='wait'>
            {React.cloneElement(element, { key: location.pathname })}
          </AnimatePresence>
        </Box>
        <MusicPlayer />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
