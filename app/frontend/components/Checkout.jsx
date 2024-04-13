import React, { memo, useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";

import { useParams } from "react-router-dom";

const Checkout = ({ handleLogout, loggedInStatus, user }) => {
  const { id } = useParams();

  const [cart, setCart] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_ENDPOINT}/carts/${id}`)
      .then((response) => {
        if (response.data) {
          setCart(response.data);
        }
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!cart) {
    return <p>Loading...</p>;
  }

  const subtotal = cart.cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.price,
    0,
  );

  const comission = subtotal * 0.1;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar
        loggedInStatus={loggedInStatus}
        handleLogout={handleLogout}
        user={user}
      />

      <main>
        <section className="bg-gray-100 w-full">
          <div className="py-20">
            <div className="h-screen bg-gray-100 pt-20">
              <h1 className="text-center text-3xl font-extrabold text-bright-purple mb-5">
                Cart Items
              </h1>

              <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                {cart.cartItems.map((cartItem) => {
                  return (
                    <div className="rounded-lg md:w-2/3">
                      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <img
                          src={cartItem.imageUrl}
                          alt="product-image"
                          className="w-full rounded-lg sm:w-40"
                        />

                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold text-gray-900">
                              {cartItem.name}
                            </h2>
                          </div>

                          <div>
                            <p className="text-lg text-gray-900">Each</p>

                            <p className="text-lg text-gray-900">
                              {`$ ${cartItem.price}`}
                            </p>
                          </div>

                          <div>
                            <p className="text-lg text-gray-900">Quantity</p>

                            <p className="text-lg text-gray-900">
                              {`${cartItem.quantity}`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                  <div className="mb-2 flex justify-between">
                    <p className="text-gray-700">Subtotal</p>
                    <p className="text-gray-700">{`$ ${subtotal}`}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-700">10% Fee</p>
                    <p className="text-gray-700">{`$ ${comission}`}</p>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between">
                    <p className="text-lg font-bold">Total</p>
                    <div className="">
                      <p className="mb-1 text-lg font-bold">
                        {`$ ${subtotal + comission}`}
                      </p>
                    </div>
                  </div>

                  <form
                    action={`${
                      import.meta.env.VITE_API_ENDPOINT
                    }/create-checkout-session`}
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="name"
                      value={cart.cartItems.map((cartItem) => cartItem.name)}
                    />

                    <input
                      type="hidden"
                      name="price"
                      value={cart.cartItems.map((cartItem) => cartItem.price)}
                    />

                    <input
                      type="hidden"
                      name="imageUrl"
                      value={cart.cartItems.map(
                        (cartItem) => cartItem.imageUrl,
                      )}
                    />

                    <input
                      type="hidden"
                      name="quantity"
                      value={cart.cartItems.map(
                        (cartItem) => cartItem.quantity,
                      )}
                    />

                    <button
                      type="submit"
                      className="btn text-white mt-3 bg-bright-purple w-full text-base rounded-lg"
                    >
                      Check out
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default memo(Checkout);
