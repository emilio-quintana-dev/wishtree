import React from "react";

import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Footer from "../partials/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow bg-bright-purple">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default Home;
