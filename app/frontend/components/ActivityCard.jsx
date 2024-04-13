import React from "react";

import { Typography, Card, CardContent, CardActionArea } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

import { useTheme } from "@mui/material/styles";

const ActivityCard = ({ selected, onClick, title, subtitle }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 5,
        minHeight: "100%",
        backgroundColor: `${selected ? "#f2fafd" : "#fff"}`,
        border: `2px solid ${
          selected
            ? theme.palette.primary.main
            : theme.palette.customPalette.lightGray
        }`,
      }}
    >
      <CardActionArea onClick={() => onClick()}>
        <CardContent sx={{ padding: 2.5 }}>
          <Typography
            gutterBottom
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
            }}
          >
            {title}
            {selected ? (
              <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
          </Typography>

          <Typography color="text.secondary" gutterBottom>
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActivityCard;
