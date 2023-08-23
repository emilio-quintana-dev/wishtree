import React, { useState, useRef, useEffect } from "react";

import Screenshot from "../images/create_screenshot.jpg";

const Features = () => {
  return (
    <section id="features" className="h-screen bg-gray-100">
      {/* Section Container */}
      <div className="max-w-5xl pt-36 h-full mx-auto px-6 md:pt-0 sm:px-6 md:max-w-7xl">
        {/* Content Container */}
        <div className="flex justify-between md:flex-col h-full items-center max-auto lg:flex-row pb-12">
          {/* Left Panel */}
          <div className="max-w-full md:max-w-[50%] md:pr-8">
            {/* Placeholder */}
            <img className="rounded-lg" src={Screenshot} />
          </div>

          {/* Right Panel */}
          <div className="max-w-full md:max-w-[50%] text-left">
            <h1 className="text-4xl text-dark-purple md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
              Join. Create. Earn.
            </h1>

            <p className="font-normal text-dark-purple mb-8 md:text-xl">
              Share your Wishtree profile with your followers and wait for your
              donations to come!
            </p>

            <button className="bg-bright-purple text-white px-6 py-4 rounded-full hover:bg-purple-200 mb-4 text-lg sm:w-auto sm:mb-0">
              Join for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
