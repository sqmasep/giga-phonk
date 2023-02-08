import { createTheme } from "@mui/material";
import { deepPurple, indigo } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    background: {
      default: "#070933",
    },
    primary: {
      main: deepPurple[300],
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Neue Plak",
      fontSize: "1.125rem",
    },
  },
});

export default theme;
