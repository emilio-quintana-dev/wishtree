import React, { memo } from "react";

import { Box, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import ChunkyButton from "./ChunkyButton";

import HeroImage from "../images/Happy.svg";

// --------------------------------------------------

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="hero-home"
      sx={{
        height: "100vh",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "5xl", lg: "7xl" },
          paddingTop: 0,
          height: "100%",
          marginX: "auto",
          paddingX: { xs: 2.5, md: 10 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "space-evenly", md: "space-between" },
            height: "100%",
            alignItems: "center",
            paddingBottom: { xs: 2, md: 3, lg: 5 },
          }}
        >
          <Box
            sx={{
              textAlign: "left",
              marginBottom: { xs: 2, md: 0 },
              maxWidth: { md: "50%" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.25rem", md: "3rem", lg: "5rem" },
                fontWeight: "bold",
                lineHeight: "tight",
                marginBottom: 1,
                color: theme.palette.customPalette.gray,
              }}
            >
              Everything you want, in a single list.
            </Typography>

            <Typography
              sx={{
                fontWeight: "normal",
                marginBottom: 2,
                fontSize: { xs: "1.125rem", md: "1.25rem" },
                color: theme.palette.customPalette.gray,
              }}
            >
              Join our community of influencers and start receiving donations
              from your fans today!
            </Typography>

            <ChunkyButton color={theme.palette.customPalette.melanie}>
              Create your wishlist
            </ChunkyButton>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box component="img" src={HeroImage} sx={{ maxWidth: "80%" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(HeroSection);
