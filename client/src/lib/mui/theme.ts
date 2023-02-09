import { createTheme } from "@mui/material";
import { deepPurple, indigo } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    background: {
      default: "#070933",
    },
    mode: "dark",
    primary: {
      main: deepPurple[300],
    },
  },
  typography: {
    fontFamily: "Neue Plak",
    allVariants: {
      fontStretch: "semi-expanded",
    },
  },
});

export default theme;
