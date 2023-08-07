import React from "react";

import Card from "../utils/components/Card";

const FeaturesBlocks = () => {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-60 md:mt-24 lg:mt-0 pt-60 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-white">
              A free and safe way to share wishlists.
            </h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <Card
              title="Privacy"
              description="Secure deliveries, keep personal info confidential."
              icon="lock"
            />

            {/* 2nd item */}
            <Card
              title="One Stop Wishlist"
              description="
Shop online or create custom cash funds for college, travel, and more
              "
              icon="list"
            />

            {/* 3rd item */}
            <Card
              title="Control Orders"
              description="
Decide when your orders get placed, add to orders, or keep the cash.
              "
              icon="package"
            />

            {/* 3rd item */}
            <Card
              title="Non-Judgmental"
              description="
WishTree is built to help you no matter what content you create.
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBlocks;
