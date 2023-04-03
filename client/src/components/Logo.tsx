import { Typography } from "@mui/material";
import React from "react";

interface LogoProps {}

const Logo: React.FC<LogoProps & React.ComponentProps<typeof Typography>> = ({...props}) => {
  return (
    <Typography
      {...props}
      variant='h4'
      // component='p'
      fontWeight={900}
    >
      giga-phonk
    </Typography>
  );
};

export default Logo;
