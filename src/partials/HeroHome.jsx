import React from "react";

import Screenshot from "../images/screenshot.jpg";

function HeroHome() {
  return (
    <section id="hero-home" className="h-screen">
      <div className="max-w-5xl h-full pt-36 mx-auto px-6 md:max-w-7xl md:pt-0 sm:px-6">
        {/* Hero content */}
        <div className="flex flex-col justify-between h-full items-center pb-12 md:pt-48 md:pb-20 lg:flex-row">
          {/* Section header */}
          <div className="max-w-full md:max-w-[50%] text-left">
            <h1 className="text-4xl text-white md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
              Everything you want, in a single list.
            </h1>

            <p className="font-normal text-white mb-8 md:text-xl">
              Join our community of influencers and start receiving donations
              from your fans today!
            </p>

            <button className="text-bright-purple px-6 py-4 rounded-full bg-bright-yellow hover:bg-purple-200 mb-4 text-lg sm:w-auto sm:mb-0">
              Create your wishlist
            </button>
          </div>

          {/* Hero image */}
          <div className="flex flex-col md:max-w-[50%] justify-center float-right md:px-8">
            {/* Placeholder */}
            <img className="rounded-lg" src={Screenshot} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
