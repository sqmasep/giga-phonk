import { Typography } from "@mui/material";
import React from "react";

interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <Typography variant='h5' component='p' fontWeight={900}>
      giga-phonk
    </Typography>
  );
};

export default Logo;
