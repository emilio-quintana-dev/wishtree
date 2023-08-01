import React, { useState } from "react";
import Modal from "../utils/Modal";
import Navbar from "../partials/Navbar";

import WishImagePlaceholder from "../images/card-top.jpg";

const VisitorsProfile = ({
  wishes,
  fetchedUser,
  handleLogout,
  loggedInStatus,
}) => {
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);

  const openAddToCartModal = () => {
    setShowAddToCartModal(true);
  };

  const userInitials = () => {
    return "EQ";
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Navbar loggedInStatus={loggedInStatus} handleLogout={handleLogout} />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="relative">
          <div className="mb-20 bg-gray-100 ">
            <div className="pt-32 pb-12 md:pt-30 flex place-content-around w-3/4 items-center">
              {/*  Profile Pic */}
              <div className="rounded-full p-16 border-2 text-2xl">
                {userInitials()}
              </div>
              {/*  Username */}
              <div>
                <h1 className="text-4xl">
                  {fetchedUser.first_name}'s Wishlist
                </h1>
                <h3>@{fetchedUser.username}</h3>
              </div>
            </div>
          </div>

          {/*  Wishes Section */}
          <div className="pl-32 pr-32 items-start">
            {/*  Dashboard Toolbar */}
            <div className="flex w-full justify-between">
              <p className="mb-10">{wishes.length} Wishes</p>
            </div>

            <div className="mt-6 flex">
              {wishes.map((wish) => {
                return (
                  <div key={wish.id}>
                    <button
                      className="max-w-sm rounded overflow-hidden shadow-lg mr-6"
                      onClick={(event) => openAddToCartModal(event, wish)}
                    >
                      <img
                        className="w-full"
                        src={WishImagePlaceholder}
                        alt="Sunset in the mountains"
                      />
                      <div className="px-6 pt-4">
                        <div className="font-bold text-xl">{wish.name}</div>
                      </div>
                      <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          ${wish.price}
                        </span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VisitorsProfile;
