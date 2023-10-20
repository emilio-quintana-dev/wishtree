import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";

const HERO_TITLE = "Everything you want, in a single list.";
const HERO_SUBTITLE =
  "Join our community of influencers and start receiving donations from your fans today!";
const BUTTON_TEXT = "Create your wishlist";
const IMAGE_SRC = "https://source.unsplash.com/random?influencer";

function HeroHome() {
  return (
    <section id="hero-home" className="h-screen bg-gray-800">
      <div className="container mx-auto h-full pt-8 px-6 md:pt-36">
        {/* Hero content */}
        <HeroContent />
      </div>
    </section>
  );
}

const HeroContent = () => (
  <div className="flex flex-col md:flex-row justify-between h-full items-center pb-8 md:pb-12 lg:pb-20">
    {/* Section header */}
    <HeroHeader />
    {/* Hero image */}
    <HeroImage />
  </div>
);

const HeroHeader = () => (
  <div className="text-left mb-8 md:mb-0 md:max-w-[45%]">
    <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
      {HERO_TITLE}
    </h1>

    <p className="font-normal text-white mb-8 text-lg md:text-xl">
      {HERO_SUBTITLE}
    </p>

    <button className="px-4 py-2 md:px-6 md:py-4 rounded-full bg-bright-yellow hover:bg-purple-200 text-lg">
      {BUTTON_TEXT}
    </button>
  </div>
);

const HeroImage = () => {
  const [hovered, setHovered] = useState(false);
  const [{ xys }, set] = useSpring(() => ({
    xys: [0, 0, 1],
  }));

  const imgRef = useRef(null);

  const handleMouseMove = (event) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateX = (y - 0.5) * 20;
    const rotateY = (x - 0.5) * -20;
    set({ xys: [rotateY, rotateX, 1.1] });
  };

  const handleMouseLeave = () => {
    set({ xys: [0, 0, 1] });
    setHovered(false);
  };

  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <div
      className="flex justify-center md:justify-end md:max-w-[45%]"
      onMouseMove={hovered ? handleMouseMove : undefined}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
    >
      <animated.img
        ref={imgRef}
        className="rounded-lg w-full max-w-md md:max-w-lg"
        src={IMAGE_SRC}
        alt="Hero Image"
        style={{ transform: xys.interpolate(trans) }}
      />
    </div>
  );
};

export default HeroHome;
