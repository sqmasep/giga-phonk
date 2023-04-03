import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        backgroundColor: theme => theme.palette.background.default,
        zIndex: theme => theme.zIndex.appBar,
      }}
      py={1}
      borderBottom={theme => `1px solid ${theme.palette.primary.main}`}
    >
      <Container>
        <Stack direction='row' justifyContent='space-between' py={2}>
          <Logo
            // @ts-ignore
            component={Link}
            to='/'
            sx={{ color: "white", textDecoration: "none" }}
          />
          <Stack direction='row' gap={2}>
            <Button
              size='large'
              component={Link}
              to='/playlists'
              variant='outlined'
            >
              Playlists
            </Button>
            <Button size='large' component={Link} to='/' variant='contained'>
              Populaire
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
