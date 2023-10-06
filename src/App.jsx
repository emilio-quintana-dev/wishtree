import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";

function App() {
  const location = useLocation();
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});
  const [wishesInCart, setWishesInCart] = useState([]);

  const handleLogin = (data) => {
    setUser(data.user);
    setLoggedInStatus("LOGGED_IN");
  };

  const handleLogout = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((_response) => {
        setUser({});
        setLoggedInStatus("NOT_LOGGED_IN");
        window.location.replace(`http://localhost:3000/`);
      })
      .catch((error) => console.log(error));
  };

  const checkLoginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
          setUser(response.data.user);
          setLoggedInStatus("LOGGED_IN");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Home
            user={user}
            loggedInStatus={loggedInStatus}
            handleLogout={handleLogout}
          />
        }
      />

      <Route
        path="/login"
        element={
          <SignIn
            handleLogout={handleLogout}
            user={user}
            loggedInStatus={loggedInStatus}
            handleLogin={handleLogin}
          />
        }
      />

      <Route
        path="/signup"
        element={
          <SignUp
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            loggedInStatus={loggedInStatus}
            user={user}
          />
        }
      />

      <Route path="/reset-password" element={<ResetPassword />} />

      <Route
        path="/users/:userName"
        element={
          <Dashboard
            handleLogout={handleLogout}
            loggedInStatus={loggedInStatus}
            setWishesInCart={setWishesInCart}
            user={user}
            wishesInCart={wishesInCart}
          />
        }
      />

      <Route
        path="/checkout"
        element={
          <Checkout
            handleLogout={handleLogout}
            loggedInStatus={loggedInStatus}
            setWishesInCart={setWishesInCart}
            user={user}
            wishesInCart={wishesInCart}
          />
        }
      />

      <Route path="/landing" element={<Landing />} />
    </Routes>
  );
}

export default App;
