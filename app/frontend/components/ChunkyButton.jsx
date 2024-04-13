import React, { memo } from "react";

import { Button } from "@mui/material";

import { alpha, getContrastRatio } from "@mui/material/styles";

// --------------------------------------------------

const ChunkyButton = ({
  children,
  color,
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0,
  marginBottom = 0,
  width = "auto",
  type = "button",
  borderColor = "transparent",
  fontWeight = 500,
  endIcon = null,
  paddingX = 3,
  paddingY = 2,
  onClick,
}) => {
  const mobilePaddingX = paddingX - 1;
  const mobilePaddingY = paddingY - 1;

  return (
    <Button
      variant="contained"
      size="large"
      type={type}
      endIcon={endIcon}
      onClick={onClick}
      sx={{
        fontSize: "1rem",
        boxShadow: "none",
        backgroundColor: color,
        color: getContrastRatio(color, "#fff") > 3 ? "#fff" : "#000",
        textTransform: "none",
        paddingX: { xs: mobilePaddingX, md: paddingX },
        paddingY: { xs: mobilePaddingY, md: paddingY },
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginBottom: marginBottom,
        borderRadius: "2.5rem",
        "&:hover": { backgroundColor: alpha(color, 0.9) },
        width: width,
        border: `2px solid ${borderColor}`,
        fontWeight: fontWeight,
      }}
    >
      {children}
    </Button>
  );
};

export default memo(ChunkyButton);
