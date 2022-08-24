import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";

import {
  AppBar,
  IconButton,
  Container,
  Menu,
  Box,
  Toolbar,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";

const pages = ["Inicio", "Perfil", "Habilidades", "Portafolio", "Contacto"];
const pagesIds = ["#", "#about-me", "#skills", "#portfolio", "#contact-me"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            className="name"
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "Montserrat",
              fontWeight: 400,
              letterSpacing: ".1rem",
              textDecoration: "none",
            }}
          >
            Juan Carlos Pineda
          </Typography>

          <Box
            className="navBar"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a href={pagesIds[i]}>{page}</a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            className="navBar"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page, i) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "inherit", display: "block" }}
              >
                <a href={pagesIds[i]}>{page}</a>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
