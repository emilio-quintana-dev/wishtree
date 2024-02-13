import React, { memo } from "react";

import { Link as RouterLink } from "react-router-dom";

import { Box, Grid, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ChunkyButton from "./ChunkyButton";

// --------------------------------------------------

function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.customPalette.melanie,
        maxWidth: { xs: "100%", md: "5xl", lg: "7xl" },
        paddingX: { xs: 2.5, md: 10 },
        paddingY: 5,
      }}
    >
      <Box
        sx={{
          padding: 4,
          backgroundColor: "white",
          marginTop: { md: 5 },
          marginBottom: { md: 5 },
          borderRadius: { xs: 5, md: 5 },
        }}
      >
        <Grid
          container
          spacing={2}
          py={2}
          sx={{ borderColor: theme.palette.customPalette.gray }}
        >
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" component="h2" fontWeight="bold" mb={1}>
              Company
            </Typography>

            <Typography mb={1} color="gray.200">
              About Us
            </Typography>

            <Typography mb={1} color="gray.600">
              What's New
            </Typography>

            <Typography mb={1} color="gray.600">
              Contact
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" component="h2" fontWeight="bold" mb={1}>
              Community
            </Typography>

            <Typography mb={1} color="gray.600">
              About Us
            </Typography>

            <Typography mb={1} color="gray.600">
              What's New
            </Typography>

            <Typography mb={1} color="gray.600">
              Contact
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" component="h2" fontWeight="bold" mb={1}>
              Support
            </Typography>

            <Typography mb={1} color="gray.600">
              About Us
            </Typography>

            <Typography mb={1} color="gray.600">
              What's New
            </Typography>

            <Typography mb={1} color="gray.600">
              Contact
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" component="h2" fontWeight="bold" mb={1}>
              Legal
            </Typography>

            <Typography mb={1} color="gray.600">
              About Us
            </Typography>

            <Typography mb={1} color="gray.600">
              What's New
            </Typography>

            <Typography mb={1} color="gray.600">
              Contact
            </Typography>
          </Grid>
        </Grid>

        <ChunkyButton
          color={theme.palette.customPalette.lightGray}
          marginRight={2}
        >
          <Link
            component={RouterLink}
            to="/login"
            sx={{ color: "black", textDecoraction: "none" }}
          >
            Login
          </Link>
        </ChunkyButton>

        <ChunkyButton color={theme.palette.customPalette.gray}>
          <Link
            component={RouterLink}
            to="/signup"
            sx={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Sign up
          </Link>
        </ChunkyButton>
      </Box>
    </Box>
  );
}

export default memo(Footer);
