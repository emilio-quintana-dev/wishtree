import React, { memo } from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";

import { useTheme } from "@mui/material/styles";

// --------------------------------------------------

const Navbar = ({ user, loggedInStatus, handleLogout }) => {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages =
    loggedInStatus === "LOGGED_IN"
      ? [
          { name: "Home", url: "/" },
          { name: "Wishlist", url: `/users/${user.username}` },
          { name: "Sign Out", url: "/" },
        ]
      : [
          { name: "Sign Up", url: "/signup" },
          { name: "Log In", url: "/login" },
        ];

  return (
    <AppBar
      sx={{
        boxShadow: "none",
        borderBottom: "1px solid #eff0ec",
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          {/* Spacer element */}
          <Box sx={{ flexGrow: 1 }}></Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map(({ name, url }) => (
              <Button
                size="large"
                key={name}
                component={Link}
                color="inherit"
                variant="outlined"
                to={url}
                onClick={handleCloseNavMenu}
                sx={{
                  mr: 2,
                  textTransform: "none",
                  borderWidth: 1.5,
                  borderRadius: 5,
                }}
              >
                {name}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
              {pages.map(({ name }) => (
                <MenuItem key={name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default memo(Navbar);
