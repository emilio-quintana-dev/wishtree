import React, { memo } from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { useTheme } from "@mui/material/styles";

const WishCard = ({ wish, openModal }) => {
  const theme = useTheme();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 225 }}
          image="https://source.unsplash.com/random?profile"
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            sx={{
              color: theme.palette.customPalette.midGray,
              marginBottom: 2.5,
              height: 48,
            }}
          >
            {wish.name}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              color: theme.palette.customPalette.gray,
              fontWeight: 600,
            }}
          >
            $ {wish.price}
          </Typography>
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "right" }}>
          <IconButton target="_blank" rel="noopener noreferrer">
            <ContentCopyIcon fontSize="small" sx={{ borderRadius: 5 }} />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default memo(WishCard);
