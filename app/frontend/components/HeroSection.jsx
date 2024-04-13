import React, { memo } from "react";

import { useNavigate } from "react-router-dom";

import { Box, Typography, Button, Avatar, Stack } from "@mui/material";

import RedeemIcon from "@mui/icons-material/Redeem";
import StarIcon from "@mui/icons-material/Star";

import { useTheme } from "@mui/material/styles";

import ChunkyButton from "./ChunkyButton";

import HeroImage from "../assets/hero.svg";

// --------------------------------------------------

const HeroSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

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
                fontWeight: 700,
                lineHeight: "tight",
                marginBottom: 2.5,
                color: theme.palette.customPalette.gray,
                letterSpacing: "-5px",
              }}
            >
              Everything you want, in a single list.
            </Typography>

            <ChunkyButton
              color={theme.palette.customPalette.melanie}
              marginBottom={5}
              onClick={() => navigate("/signup")}
            >
              Create your Wishlist
            </ChunkyButton>

            <Stack direction="row" spacing={2}>
              <Stack direction="row" spacing={-2}>
                <Avatar
                  src={`https://source.unsplash.com/random?profile&sig=${Date.now() + 1}`}
                  sx={{ width: 50, height: 50 }}
                />
                <Avatar
                  src={`https://source.unsplash.com/random?profile&sig=${Date.now() + 2}`}
                  sx={{ width: 50, height: 50 }}
                />
                <Avatar
                  src={`https://source.unsplash.com/random?profile&sig=${Date.now() + 3}`}
                  sx={{ width: 50, height: 50 }}
                />
                <Avatar
                  src={`https://source.unsplash.com/random?profile&sig=${Date.now() + 4}`}
                  sx={{ width: 50, height: 50 }}
                />
                <Avatar
                  src={`https://source.unsplash.com/random?profile&sig=${Date.now() + 5}`}
                  sx={{ width: 50, height: 50 }}
                />
              </Stack>

              <Stack direction="column" spacing={0.5}>
                <Stack direction="row" spacing={0}>
                  <StarIcon
                    sx={{ color: theme.palette.customPalette.yellow }}
                  />
                  <StarIcon
                    sx={{ color: theme.palette.customPalette.yellow }}
                  />
                  <StarIcon
                    sx={{ color: theme.palette.customPalette.yellow }}
                  />
                  <StarIcon
                    sx={{ color: theme.palette.customPalette.yellow }}
                  />
                  <StarIcon
                    sx={{ color: theme.palette.customPalette.yellow }}
                  />
                </Stack>

                <Typography>Over 100 users have already joined!</Typography>
              </Stack>
            </Stack>
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
