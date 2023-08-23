import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Tooltip } from "@material-tailwind/react";

import Logo from "../images/logo.png";
import IconLogo from "../images/icon-logo.png";

const Navbar = ({ loggedInStatus, handleLogout, user }) => {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="bg-transparent mt-5 md:mt-10 fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out">
      <div className="max-w-8xl mx-auto px-5 md:px-10 xl:px-20">
        <div className="bg-white py-2 px-4 flex items-center justify-between h-[78px] md:h-[88px] rounded-full">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4 flex items-center">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img
                src={Logo}
                alt="logo"
                width="200"
                height="200"
                className="hidden md:block"
              />

              <img
                src={IconLogo}
                alt="logo"
                width="50"
                height="50"
                className="md:hidden"
              />
            </Link>
          </div>

          {/* Site navigation */}
          {loggedInStatus === "LOGGED_IN" && (
            <nav className="flex flex-grow">
              <ul className="flex flex-grow justify-end items-center">
                <li>
                  <Tooltip content="Home">
                    <Link
                      to="/"
                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                    </Link>
                  </Tooltip>
                </li>

                <li>
                  <Tooltip content="Wishlist">
                    <Link
                      to={`/users/${user.username}`}
                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                        />
                      </svg>
                    </Link>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="Sign Out">
                    <button
                      onClick={() => handleLogout()}
                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>
                    </button>
                  </Tooltip>
                </li>
              </ul>
            </nav>
          )}

          {loggedInStatus === "NOT_LOGGED_IN" && (
            <nav className="flex flex-grow">
              <ul className="flex flex-grow justify-end items-center">
                <li className="py-1 md:py-3 px-2 bg-gray-100 rounded-md hover:bg-gray-200">
                  <Link
                    to="/login"
                    className="text-black leading-6 font-semibold px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Login
                  </Link>
                </li>

                <li className="py-1 md:py-3 px-2 bg-black rounded-full hover:bg-gray-800 ml-2">
                  <Link
                    to="/signup"
                    className="font-medium text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    <span>Sign up</span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
