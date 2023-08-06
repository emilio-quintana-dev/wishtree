import React from "react";

import HeroImageOne from "../images/hero-1.jpg";
import HeroImageTwo from "../images/hero-2.jpg";
import HeroImageThree from "../images/hero-3.jpg";

function HeroHome() {
  return (
    <section id="hero-home" className="relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 mb-20">
        {/* Hero content */}
        <div className="flex pt-36 pb-12 md:pt-48 md:pb-20">
          {/* Section header */}
          <div className="max-w-[50%] text-left pb-12 md:pb-16">
            <h1
              className="text-4xl text-teal-200 md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Ultimate tool for influencers to get donations from followers.
            </h1>
            <div className="max-w-3xl">
              <p className="text-xl text-teal-200 mb-8">
                Join our community of influencers and start receiving donations
                from your fans today!
              </p>
              <div>
                <button className="text-white px-6 py-4 rounded-full bg-purple-200 hover:bg-purple-200 w-full mb-4 text-lg sm:w-auto sm:mb-0">
                  Create your wishlist
                </button>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex flex-col items-center px-8">
            <img
              className="mx-auto rounded-lg object-cover h-[215px]"
              src={HeroImageTwo}
              width="768"
              height="215"
              alt="Hero"
            />
            <img
              className="mx-auto rounded-lg"
              src={HeroImageOne}
              width="768"
              height="432"
              alt="Hero"
            />
            <img
              className="mx-auto rounded-lg object-cover h-[215px]"
              src={HeroImageThree}
              width="768"
              height="215"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
