import React, { memo } from "react";

import { useNavigate } from "react-router-dom";

import { Box, Typography, Button } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import ChunkyButton from "./ChunkyButton";

// --------------------------------------------------

const JoinSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      id="join"
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.customPalette.melanie,
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "5xl", lg: "7xl" },
          paddingTop: { xs: 9, md: 0 },
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
                color: theme.palette.customPalette.honeyFlower,
                fontSize: { xs: "2.25rem", md: "3.75rem" },
                fontWeight: "bold",
                letterSpacing: "-2.5px",
                lineHeight: "tighter",
                marginBottom: 2.5,
              }}
            >
              Join. Create. Earn.
            </Typography>

            <Typography
              sx={{
                color: theme.palette.customPalette.honeyFlower,
                fontSize: { xs: "1rem", md: "1.25rem" },
                fontWeight: "normal",
                marginBottom: 3,
              }}
            >
              Share your Wishtree profile with your followers and wait for your
              donations to come!
            </Typography>

            <ChunkyButton
              color={theme.palette.customPalette.honeyFlower}
              onClick={() => navigate("/signup")}
            >
              Join for free
            </ChunkyButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(JoinSection);
