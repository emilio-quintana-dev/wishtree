import React from "react";

import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ChunkyButton from "./ChunkyButton";
import Card from "../utils/components/Card";

// --------------------------------------------------

const FeaturesBlocks = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="feature-blocks"
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.customPalette.lightGray,
        paddingTop: { xs: 9, md: 0 },
        paddingBottom: 3,
        maxWidth: { xs: "100%", md: "5xl", lg: "7xl" },
        marginX: "auto",
        paddingX: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "5xl", lg: "7xl" },
          paddingTop: { xs: 9, md: 0 },
          height: "100%",
          marginX: "auto",
          paddingX: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", lg: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            paddingX: 10,
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
                fontSize: { xs: "2.25rem", md: "3.75rem" },
                fontWeight: "bold",
                lineHeight: "tight",
                marginBottom: 1,
                color: theme.palette.customPalette.gray,
              }}
            >
              A free and safe way to share wishlists.
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

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={8}>
              <Card
                title="Privacy"
                description="Secure deliveries, keep personal info confidential."
                icon="lock"
                backgroundColor={theme.palette.customPalette.blue}
              />
            </Grid>

            <Grid item xs={4}>
              <Card
                title="One Stop Wishlist"
                description="Shop online or create custom cash funds for college, travel, and more"
                icon="list"
                backgroundColor={theme.palette.customPalette.melanie}
              />
            </Grid>

            <Grid item xs={4}>
              <Card
                title="Control Orders"
                description="Decide when your orders get placed, add to orders, or keep the cash."
                icon="package"
                backgroundColor={theme.palette.customPalette.darkTan}
              />
            </Grid>

            <Grid item xs={8}>
              <Card
                title="Non-Judgmental"
                description="WishTree is built to help you no matter what content you create."
                backgroundColor={theme.palette.customPalette.militaryGreen}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturesBlocks;
