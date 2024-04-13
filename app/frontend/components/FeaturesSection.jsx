import React, { memo } from "react";

import { useNavigate } from "react-router-dom";

import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ChunkyButton from "./ChunkyButton";

// --------------------------------------------------

const FeaturesSection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="features"
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.customPalette.lightGray,
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "5xl", lg: "7xl" },
          paddingY: { xs: 9, md: 0 },
          height: "100%",
          marginX: "auto",
          paddingX: { xs: 2.5, md: 10 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
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
                fontSize: { xs: "2.25rem", md: "3.75rem" },
                fontWeight: "bold",
                lineHeight: "tight",
                marginBottom: 1,
                color: theme.palette.customPalette.gray,
                letterSpacing: "-2.5px",
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

            <ChunkyButton
              color={theme.palette.customPalette.melanie}
              onClick={() => navigate("/signup")}
            >
              Create your wishlist
            </ChunkyButton>
          </Box>

          <Grid
            container
            spacing={{ xs: 2, sm: 2, md: 4, lg: 4 }}
            justifyContent="center"
          ></Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(FeaturesSection);
