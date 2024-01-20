import React, { memo } from "react";
import { Card as MuiCard, CardContent, Typography, Box } from "@mui/material";
import { getContrastRatio } from "@mui/material/styles";
import LockIcon from "@mui/icons-material/Lock";
import GradingRoundedIcon from "@mui/icons-material/GradingRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import AddReactionRoundedIcon from "@mui/icons-material/AddReactionRounded";

const Card = ({ title, description, icon, backgroundColor }) => {
  const contrastColor =
    getContrastRatio(backgroundColor, "#fff") > 4.5 ? "#fff" : "#111";

  const renderIcon = () => {
    switch (icon) {
      case "lock":
        return <LockIcon sx={{ fontSize: 40, color: contrastColor }} />;
      case "list":
        return (
          <GradingRoundedIcon sx={{ fontSize: 40, color: contrastColor }} />
        );
      case "package":
        return (
          <LocalShippingRoundedIcon
            sx={{ fontSize: 40, color: contrastColor }}
          />
        );
      default:
        return (
          <AddReactionRoundedIcon sx={{ fontSize: 40, color: contrastColor }} />
        );
    }
  };

  return (
    <MuiCard
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100%", // equivalent to min-h-full
        textAlign: "center", // equivalent to text-center
        backgroundColor: backgroundColor,
        borderRadius: "20px", // equivalent to rounded-2xl
        boxShadow: 6, // adjust the shadow level as needed
      }}
    >
      <Box
        sx={{
          padding: 1, // equivalent to p-2
          borderRadius: "50%", // equivalent to rounded-full
          backgroundColor: "darkPurple", // replace 'darkPurple' with actual color value
          marginTop: 3, // adjust as needed
        }}
      >
        {renderIcon()}
      </Box>
      <CardContent>
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.25rem", // equivalent to text-xl
            fontWeight: "bold", // equivalent to font-bold
            lineHeight: "snug", // equivalent to leading-snug
            letterSpacing: "tight", // equivalent to tracking-tight
            marginBottom: 2, // equivalent to mb-8
            color: contrastColor,
          }}
        >
          {title}
        </Typography>

        <Typography color={contrastColor}>{description}</Typography>
      </CardContent>
    </MuiCard>
  );
};

export default memo(Card);
