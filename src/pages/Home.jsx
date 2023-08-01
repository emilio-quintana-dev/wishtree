import React from "react";

import Navbar from "../partials/Navbar";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";

const Home = ({ user, loggedInStatus, handleLogout }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Navbar
        user={user}
        loggedInStatus={loggedInStatus}
        handleLogout={handleLogout}
      />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default Home;
