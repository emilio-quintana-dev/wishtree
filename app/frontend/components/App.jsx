import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import axios from "axios";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Checkout from "../components/Checkout";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import ProfilePage from "../components/ProfilePage";
import ResetPassword from "../components/ResetPassword";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

import theme from "../styles/theme";

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});

  const handleLogin = (data) => {
    setUser(data.user);
    setLoggedInStatus("LOGGED_IN");
  };

  const handleLogout = () => {
    axios
      .delete("/logout", {
        withCredentials: true,
      })
      .then(() => {
        setUser({});
        setLoggedInStatus("NOT_LOGGED_IN");
        window.location.replace("/");
      })
      .catch(handleError);
  };

  const checkLoginStatus = () => {
    axios
      .get("/logged_in", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
          setUser(response.data.user);
          setLoggedInStatus("LOGGED_IN");
        }
      })
      .catch(handleError);
  };

  const handleError = (error) => {
    console.error(error);
  };

  const commonProps = {
    user,
    loggedInStatus,
    handleLogout,
    handleLogin,
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar
        user={user}
        loggedInStatus={loggedInStatus}
        handleLogout={handleLogout}
      />

      <Routes>
        <Route path="/" element={<Landing {...commonProps} />} />

        <Route path="/login" element={<SignIn {...commonProps} />} />

        <Route path="/signup" element={<SignUp {...commonProps} />} />

        <Route path="/reset-password" element={<ResetPassword />} />

        <Route
          path="/users/:userName"
          element={<ProfilePage {...commonProps} />}
        />

        <Route path="/cart/:id" element={<Checkout {...commonProps} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
