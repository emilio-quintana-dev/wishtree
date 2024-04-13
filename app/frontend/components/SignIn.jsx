import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Box,
  Container,
  CssBaseline,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import ChunkyButton from "../components/ChunkyButton";

import { useTheme } from "@mui/material/styles";

// --------------------------------------------------

const SignIn = ({ handleLogin }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSuccesfulAuth = (data) => {
    handleLogin(data);
    navigate(`/users/${data.user.username}`);
  };

  const handleSubmit = (event) => {
    axios
      .post(
        `/sessions`,
        {
          email: email,
          password: password,
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.status === "created") {
          handleSuccesfulAuth(response.data);
        } else {
          setError("Invalid email or password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
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
          Login
        </Typography>

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
            id="password"
            placeholder="Your Password"
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

          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}

          <ChunkyButton
            color={theme.palette.primary.main}
            marginTop={2}
            width="100%"
            type="submit"
          >
            Login
          </ChunkyButton>
        </Box>
      </Box>
    </Container>
  );
};

export default memo(SignIn);
