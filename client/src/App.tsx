import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import theme from "./lib/mui/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Playlist from "./pages/Playlist";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import SignUp from "./pages/users/SignUp";
import Home from "./pages/Home";
import MusicPlayer from "./components/MusicPlayer";
import SignIn from "./pages/users/SignIn";
import Playlists from "./pages/Playlists";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/playlists", element: <Playlists /> },
    {
      path: "/playlists/:playlistId",
      element: <Playlist />,
    },

    {
      path: "/songs/:songId",
      element: <Playlist />,
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
          <MusicPlayer />
        </AnimatePresence>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
