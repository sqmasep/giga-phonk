import { Button, Container, Stack } from "@mui/material";
import React from "react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Stack direction='row' justifyContent='space-between' py={2}>
        <Logo />
        <Stack direction='row' gap={2}>
          <Button variant='contained'>Se connecter</Button>
          <Button variant='outlined'>S'inscrire</Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
