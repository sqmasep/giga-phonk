import { Button, Container, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Stack direction='row' justifyContent='space-between' py={2}>
        <Logo
          component={Link}
          to='/'
          sx={{ color: "white", textDecoration: "none" }}
        />
        <Stack direction='row' gap={2}>
          <Button component={Link} to='/playlists' variant='contained'>
            Playlists
          </Button>
          <Button component={Link} to='/' variant='outlined'>
            oai
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
