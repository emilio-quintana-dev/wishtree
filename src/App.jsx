import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Checkout from "./pages/Checkout";
import ProfilePage from "./pages/ProfilePage";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import Navbar from "./partials/Navbar";

import "./css/style.css";

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});

  const handleLogin = (data) => {
    setUser(data.user);
    setLoggedInStatus("LOGGED_IN");
  };

  const handleLogout = () => {
    axios
      .delete(`${import.meta.env.VITE_API_ENDPOINT}/logout`, {
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
    console.log(import.meta);
    axios
      .get(`${import.meta.env.VITE_API_ENDPOINT}/logged_in`, {
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
    // TODO: Implement a user-friendly error handling mechanism.
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
    <>
      <Navbar
        user={user}
        loggedInStatus={loggedInStatus}
        handleLogout={handleLogout}
      />

      <Routes>
        <>
          <Route path="/" element={<Home {...commonProps} />} />
          <Route path="/login" element={<SignIn {...commonProps} />} />
          <Route path="/signup" element={<SignUp {...commonProps} />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/users/:userName"
            element={<ProfilePage {...commonProps} />}
          />
          <Route path="/cart/:id" element={<Checkout {...commonProps} />} />
          <Route path="/landing" element={<Landing />} />
        </>
        )
      </Routes>
    </>
  );
}

export default App;
