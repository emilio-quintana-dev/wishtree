import React from "react";

import Card from "../utils/components/Card";

const FeaturesBlocks = () => {
  return (
    <section id="feature-blocks" className="md:h-screen">
      <div className="max-w-5xl h-full pt-36 mx-auto px-6 md:max-w-7xl md:pt-0 sm:px-6">
        <div className="flex flex-col h-full items-center pb-12 md:pt-40 md:pb-20 lg:flex-row">
          <div>
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h1 mb-4 text-white">
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
      </div>
    </section>
  );
};

export default FeaturesBlocks;
