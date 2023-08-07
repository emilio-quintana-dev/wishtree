import React from "react";

function HeroHome() {
  return (
    <section id="hero-home" className="relative">
      <div className="max-w-5xl md:max-w-7xl mx-auto px-6 sm:px-6">
        {/* Hero content */}
        <div className="flex flex-col pt-36 pb-12 md:pt-48 md:pb-20 lg:flex-row">
          {/* Section header */}
          <div className="max-w-full md:max-w-[50%] text-left">
            <h1
              className="text-4xl text-teal-200 md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Everything you want, in a single list.
            </h1>

            <p className="font-normal text-teal-200 mb-8 md:text-xl">
              Join our community of influencers and start receiving donations
              from your fans today!
            </p>

            <button className="text-white px-6 py-4 rounded-full bg-purple-200 hover:bg-purple-200 mb-4 text-lg sm:w-auto sm:mb-0">
              Create your wishlist
            </button>
          </div>

          {/* Hero image */}
          <div className="flex flex-col max-w-[40%] justify-center float-right md:px-8">
            {/* Placeholder */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
