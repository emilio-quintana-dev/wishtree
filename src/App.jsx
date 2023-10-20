import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";

import "./css/style.css";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});
  const [wishesInCart, setWishesInCart] = useState([]);

  const handleLogin = (data) => {
    setUser(data.user);
    setLoggedInStatus("LOGGED_IN");
  };

  const handleLogout = () => {
    axios
      .delete(`${BASE_URL}/logout`, { withCredentials: true })
      .then(() => {
        setUser({});
        setLoggedInStatus("NOT_LOGGED_IN");
        window.location.replace("/");
      })
      .catch(handleError);
  };

  const checkLoginStatus = () => {
    axios
      .get(`${BASE_URL}/logged_in`, { withCredentials: true })
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
    setWishesInCart,
    wishesInCart,
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <Routes>
      {/* Routes for development environment only */}
      {process.env.NODE_ENV === "development" && (
        <>
          <Route path="/" element={<Home {...commonProps} />} />
          <Route path="/login" element={<SignIn {...commonProps} />} />
          <Route path="/signup" element={<SignUp {...commonProps} />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/users/:userName"
            element={<Dashboard {...commonProps} />}
          />
          <Route path="/checkout" element={<Checkout {...commonProps} />} />
        </>
      )}
      {/* Routes available in all environments */}
      <Route path="/landing" element={<Landing />} />
    </Routes>
  );
}

export default App;
