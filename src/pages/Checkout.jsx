import React, { memo } from "react";
import axios from "axios";

import Navbar from "../partials/Navbar";

const Checkout = ({ handleLogout, loggedInStatus, user, wishesInCart }) => {
  const cartTotal = () => {
    return cartSubtotal() + comissionFee();
  };

  const cartSubtotal = () => {
    let total = 0;

    wishesInCart.forEach((wish) => (total += wish.price));

    return total;
  };

  const comissionFee = () => {
    return cartSubtotal() * 0.1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:3001/create-checkout-session`, {});
  };

  // Look into adding Wish/Product data to POST request

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
                {wishesInCart.map((wish) => {
                  return (
                    <div className="rounded-lg md:w-2/3">
                      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <img
                          src={wish.imageUrl}
                          alt="product-image"
                          className="w-full rounded-lg sm:w-40"
                        />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold text-gray-900">
                              {wish.name}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                  <div className="mb-2 flex justify-between">
                    <p className="text-gray-700">Subtotal</p>
                    <p className="text-gray-700">${cartSubtotal()}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-700">10% Fee</p>
                    <p className="text-gray-700">${comissionFee()}</p>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between">
                    <p className="text-lg font-bold">Total</p>
                    <div className="">
                      <p className="mb-1 text-lg font-bold">
                        ${cartTotal()} USD
                      </p>
                    </div>
                  </div>
                  <form
                    action="http://localhost:3001/create-checkout-session"
                    method="POST"
                  >
                    <input type="hidden" name="name" value="Car" />
                    <input type="hidden" name="price" value={100} />
                    <input
                      type="hidden"
                      name="imageUrl"
                      value={wishesInCart[0].imageUrl}
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
