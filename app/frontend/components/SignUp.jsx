import React, { useState } from "react";
import axios from "axios";

import {
  Box,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import ActivityCard from "../components/ActivityCard";
import ChunkyButton from "../components/ChunkyButton";

import { useTheme } from "@mui/material/styles";

const SignUp = ({ handleLogin }) => {
  const theme = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState(undefined);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState(false);
  const [isGifter, setIsGifter] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmationPassword = () =>
    setShowConfirmationPassword((show) => !show);

  const handleSuccesfulAuth = (data) => {
    handleLogin(data);
    window.location.replace(
      `http://localhost:3000/users/${data.user.username}`,
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `/registrations`,
        {
          email,
          password,
          passwordConfirmation,
          isGifter,
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.status === "created") {
          handleSuccesfulAuth(response.data);
        } else {
          setError("Something went wrong, please try again.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        paddingTop: { xs: 5, md: 20 },
        height: "100vh",
      }}
    >
      <CssBaseline />

      <Container></Container>

      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          sx={{
            color: theme.palette.customPalette.gray,
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: "bold",
            marginBottom: { xs: 3, md: 4 },
          }}
        >
          Join Wishtree
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ActivityCard
              selected={isGifter}
              onClick={() => setIsGifter(!isGifter)}
              title="Receive Gifts"
              subtitle="Sign up as a Wisher to create your wishlist."
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <ActivityCard
              selected={!isGifter}
              onClick={() => setIsGifter(!isGifter)}
              title="Send Gifts"
              subtitle="Sign up as a Gifter to send gifts and tips."
            />
          </Grid>
        </Grid>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            name="email"
            placeholder="email@domain.com"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(error)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Your Password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(error)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="passwordConfirmation"
            placeholder="Confirm Your Password"
            type={showConfirmationPassword ? "text" : "password"}
            id="passwordConfirmation"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            error={Boolean(error)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmationPassword}
                    edge="end"
                  >
                    {showConfirmationPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              marginBottom: 3.0,
            }}
          />

          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}

          <ChunkyButton
            color={theme.palette.primary.main}
            width="100%"
            type="submit"
          >
            Create Account
          </ChunkyButton>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
