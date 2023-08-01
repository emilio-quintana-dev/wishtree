import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../partials/Navbar";

const SignUp = ({ handleLogin, handleLogout, loggedInStatus, user }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [userName, setUserName] = useState("");

  const handleSuccesfulAuth = (data) => {
    handleLogin(data);
    window.location.replace(
      `http://localhost:3000/users/${data.user.username}`
    );
  };

  const handleSubmit = (event) => {
    axios
      .post(
        "http://localhost:3001/registrations",
        {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          passwordConfirmation: passwordConfirmation,
          userName: userName,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          handleSuccesfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Navbar
        user={user}
        loggedInStatus={loggedInStatus}
        handleLogout={handleLogout}
      />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                  Welcome. We exist to make entrepreneurism easier.
                </h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleSubmit}>
                  {/* First Name */}
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        First Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        className="form-input w-full text-gray-800"
                        type="first-name"
                        name="first-name"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        Last Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        className="form-input w-full text-gray-800"
                        type="last-name"
                        name="last-name"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        className="form-input w-full text-gray-800"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Username */}
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="username"
                      >
                        Username <span className="text-red-600">*</span>
                      </label>
                      <input
                        className="form-input w-full text-gray-800"
                        name="email"
                        placeholder="Enter your username"
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="password"
                      >
                        Password <span className="text-red-600">*</span>
                      </label>
                      <input
                        className="form-input w-full text-gray-800"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Password Confirmation */}
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="password"
                      >
                        Password Confirmation{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        className="form-input w-full text-gray-800"
                        type="password"
                        name="password"
                        placeholder="Enter your password again"
                        value={passwordConfirmation}
                        onChange={(event) =>
                          setPasswordConfirmation(event.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  {/* Sign Up Button */}
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button
                        className="btn text-white bg-teal-600 hover:bg-teal-800 w-full"
                        type="submit"
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the{" "}
                    <a className="underline" href="#0">
                      terms & conditions
                    </a>
                    , and our{" "}
                    <a className="underline" href="#0">
                      privacy policy
                    </a>
                    .
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div
                    className="border-t border-gray-300 flex-grow mr-3"
                    aria-hidden="true"
                  ></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div
                    className="border-t border-gray-300 flex-grow ml-3"
                    aria-hidden="true"
                  ></div>
                </div>
                <div className="text-gray-600 text-center mt-6">
                  Already using Wishtree?{" "}
                  <Link
                    to="/login"
                    className="text-teal-600 hover:underline transition duration-150 ease-in-out"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignUp;
