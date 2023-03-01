import { createTheme } from "@mui/material";
import { deepPurple, indigo } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    background: {
      // default: "#070933",
      default: "#222",
    },
    mode: "dark",
    primary: {
      // main: deepPurple[300],
      main: "#048ffa",
    },
  },
  typography: {
    fontFamily: "Neue Plak",
    allVariants: {
      fontStretch: "semi-expanded",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { fontWeight: 700 },
      },
    },
  },
});

export default theme;
