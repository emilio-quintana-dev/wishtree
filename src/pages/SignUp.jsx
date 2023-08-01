import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../partials/Navbar";
import Input from "../utils/components/Input";

const SignUp = ({ handleLogin, handleLogout, loggedInStatus, user }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(undefined);

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
        } else {
          setError("Something went wrong, please try again.");
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
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
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

                      <Input
                        name="first-name"
                        handleChange={(event) =>
                          setFirstName(event.target.value)
                        }
                        placeholder="Enter your first name"
                        required={true}
                        type="first-name"
                        error={error}
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

                      <Input
                        name="last-name"
                        handleChange={(event) =>
                          setLastName(event.target.value)
                        }
                        placeholder="Enter your last name"
                        required={true}
                        type="last-name"
                        error={error}
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

                      <Input
                        name="email"
                        handleChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email"
                        required={true}
                        type="email"
                        error={error}
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

                      <Input
                        name="username"
                        handleChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your preferred username"
                        required={true}
                        type="username"
                        error={error}
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

                      <Input
                        name="password"
                        handleChange={(event) =>
                          setPassword(event.target.value)
                        }
                        placeholder="Enter your password"
                        required={true}
                        type="password"
                        error={error}
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

                      <Input
                        name="password"
                        handleChange={(event) =>
                          setPasswordConfirmation(event.target.value)
                        }
                        placeholder="Enter your password a second time"
                        required={true}
                        type="password"
                        error={error}
                      />
                    </div>
                  </div>

                  {error && <p className="text-red-600">{error}</p>}

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
