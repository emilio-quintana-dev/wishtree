import React, { memo, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

import axios from "axios";

import Logo from "../images/logo_new_white.png";

const Landing = () => {
  const [state, handleSubmit] = useForm("mvojvddp");
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow bg-bright-purple">
        <div className="max-w-5xl h-full pt-36 mx-auto px-6 md:max-w-7xl md:pt-0 sm:px-6">
          {/* Hero content */}
          <div className="flex flex-col justify-between h-full items-center pb-12 md:pt-48 md:pb-20 lg:flex-row">
            {/* Section header */}
            <div className="w-full text-center">
              <div className="flex w-full justify-center">
                <img src={Logo} width={200} height={200} />
              </div>

              <h1 className="text-4xl text-white md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
                Monetize Your Influence!
              </h1>

              <p className="font-normal text-white mb-8 md:text-xl">
                Connect with fans who value your content. We're building the
                next big thing for creators like you.
              </p>

              <form onSubmit={handleSubmit} className="w-full">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>

                <div className="flex">
                  <input
                    className="form-input w-full text-gray-800 focus:border-bright-yellow rounded-l-full px-4 py-2 "
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />

                  <button
                    className="text-bright-purple px-4 py-2 rounded-r-full bg-bright-yellow hover:bg-purple-200 text-md sm:w-auto sm:mb-0 min-w-max text-right"
                    type="submit"
                    disabled={state.submitting}
                  >
                    Get Early Access
                  </button>
                </div>

                {state.submitting ? (
                  <p className="font-normal text-white mt-4">Submitting...</p>
                ) : null}

                {state.succeeded ? (
                  <p className="font-normal text-white mt-4">
                    Thanks for joining!
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default memo(Landing);
