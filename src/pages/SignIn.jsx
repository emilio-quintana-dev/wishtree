import React, { useState, memo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Input from "../utils/components/Input";

const SignIn = ({ handleLogout, user, loggedInStatus, handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);

  const handleSuccesfulAuth = (data) => {
    handleLogin(data);
    window.location.replace(
      `http://localhost:3000/users/${data.user.username}`,
    );
  };

  const handleSubmit = (event) => {
    axios
      .post(
        `${import.meta.env.VITE_API_ENDPOINT}/sessions`,
        {
          email: email,
          password: password,
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.status === "created") {
          handleSuccesfulAuth(response.data);
        } else {
          setError("Invalid email or password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white pt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12">
                <h1 className="h1 text-dark-purple">Welcome back.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email
                      </label>

                      <Input
                        name="email"
                        handleChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email address"
                        required={true}
                        type="email"
                        error={error}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label
                          className="block text-gray-800 text-sm font-medium mb-1"
                          htmlFor="password"
                        >
                          Password
                        </label>
                      </div>
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

                  {error && <p className="text-red-600">{error}</p>}

                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-bright-purple hover:bg-dark-purple w-full">
                        Sign in
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
                  Don’t you have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-bright-purple hover:underline transition duration-150 ease-in-out"
                  >
                    Sign up
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

export default memo(SignIn);
