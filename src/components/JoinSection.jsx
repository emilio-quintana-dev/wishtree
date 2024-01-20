import React, { memo } from "react";

import { Box, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import ChunkyButton from "./ChunkyButton";

// --------------------------------------------------

const Features = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="features"
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.customPalette.melanie,
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
            maxWidth: "50%",
            paddingRight: { md: 2 },
            width: "100%",
            marginBottom: { xs: 2, md: 0 },
          }}
        ></Box>

        <Box
          sx={{
            maxWidth: "100%",
            textAlign: "left",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.25rem", md: "3.75rem" },
              fontWeight: "bold",
              lineHeight: "tighter",
              letterSpacing: "tighter",
              marginBottom: 1,
              color: theme.palette.customPalette.honeyFlower,
            }}
          >
            Join. Create. Earn.
          </Typography>

          <Typography
            sx={{
              fontWeight: "normal",
              color: theme.palette.customPalette.honeyFlower,
              marginBottom: 2,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Share your Wishtree profile with your followers and wait for your
            donations to come!
          </Typography>

          <ChunkyButton color={theme.palette.customPalette.honeyFlower}>
            Join for free
          </ChunkyButton>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(Features);
