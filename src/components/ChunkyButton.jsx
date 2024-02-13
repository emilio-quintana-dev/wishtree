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
}) => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        backgroundColor: color,
        color: getContrastRatio(color, "#fff") > 3 ? "#fff" : "#000",
        textTransform: "none",
        paddingX: { xs: 3, md: 3 },
        paddingY: { xs: 2, md: 2 },
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginBottom: marginBottom,
        borderRadius: "2.5rem",
        "&:hover": { backgroundColor: alpha(color, 0.9) },
      }}
    >
      {children}
    </Button>
  );
};

export default memo(ChunkyButton);
