import React, { memo } from "react";

import Box from "@mui/material/Box";

import HeroSection from "../components/HeroSection";
import JoinSection from "../components/JoinSection";
import FeaturesSection from "../components/FeaturesSection";

// --------------------------------------------------

const Landing = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <HeroSection />
        <JoinSection />
        <FeaturesSection />
      </Box>
    </Box>
  );
};

export default memo(Landing);
