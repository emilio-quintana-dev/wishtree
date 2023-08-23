import React, { useEffect, useState } from "react";
import axios from "axios";

import AddToCartModal from "../partials/AddToCartModal";
import Card from "../partials/Card";
import CreateWishModal from "../partials/CreateWishModal";
import EditWishModal from "../partials/EditWishModal";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import Notification from "../partials/Notification";
import ProfileHeader from "../partials/ProfileHeader";
import Spinner from "../partials/Spinner";

const Dashboard = ({
  user,
  handleLogout,
  loggedInStatus,
  wishesInCart,
  setWishesInCart,
}) => {
  const [fetchedUser, setFetchedUser] = useState({});
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [addToCartModalOpen, setAddToCartModalOpen] = useState(false);
  const emptyWishObject = {
    id: "",
    imageUrl: "",
    name: "",
    price: "",
    url: "",
  };
  const [currentWish, setCurrentWish] = useState(emptyWishObject);
  const userName = window.location.pathname.split("/")[2];
  const lookingAtOwnProfile = userName === user.username;

  // Load user's data on page load.
  useEffect(() => {
    axios.get(`http://localhost:3001/users/${userName}`).then((response) => {
      setFetchedUser(response.data);
    });
  }, [showNotification]);

  // Notification Helper Functions
  const showSuccessNotification = () => {
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, "4000");
  };

  // Edit Wish Modal Helper Functions.
  const openEditModal = (event, wish) => {
    event.preventDefault();
    event.stopPropagation();

    if (wish.url) {
      setCurrentWish({
        ...currentWish,
        id: wish.id,
        imageUrl: wish.imageUrl,
        name: wish.name,
        price: wish.price,
        url: wish.url,
      });
    } else {
      setCurrentWish({
        ...currentWish,
        id: wish.id,
        imageUrl: wish.imageUrl,
        name: wish.name,
        price: wish.price,
        url: emptyWishObject.url,
      });
    }

    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setCurrentWish(emptyWishObject);
    setEditModalOpen(false);
  };

  // Add to Cart Modal Helper Functions.
  const openAddToCartModal = (event, wish) => {
    event.preventDefault();
    event.stopPropagation();

    if (wish.url) {
      setCurrentWish({
        ...currentWish,
        id: wish.id,
        imageUrl: wish.imageUrl,
        name: wish.name,
        price: wish.price,
        url: wish.url,
      });
    } else {
      setCurrentWish({
        ...currentWish,
        id: wish.id,
        imageUrl: wish.imageUrl,
        name: wish.name,
        price: wish.price,
        url: emptyWishObject.url,
      });
    }

    setAddToCartModalOpen(true);
  };

  const closeAddToCartModal = () => {
    setCurrentWish(emptyWishObject);
    setAddToCartModalOpen(false);
  };

  // Create Wish Modal Helper Functions.
  const openCreateModal = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentWish(emptyWishObject);
    setCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setCurrentWish(emptyWishObject);
    setCreateModalOpen(false);
  };

  // Wish Card Helper Functions.
  const handleCardClick = (event, wish) => {
    if (lookingAtOwnProfile) {
      openEditModal(event, wish);
    } else {
      openAddToCartModal(event, wish);
    }
  };

  // TODO: Create Spinner component to render
  // while we are fetching the user data.
  if (!fetchedUser.username) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Navbar */}
      {/*  TODO: Rename to Navbar.jsx */}
      <Navbar
        loggedInStatus={loggedInStatus}
        handleLogout={handleLogout}
        user={user}
      />

      <Notification
        showNotification={showNotification}
        type="success"
        title="Changes saved"
        text="Your product changes have been saved."
      />

      {/*  Page content */}
      <main>
        <section className="bg-gray-100 w-full">
          {/*  User's information section. */}
          <ProfileHeader
            fetchedUser={fetchedUser}
            lookingAtOwnProfile={lookingAtOwnProfile}
          />

          {/*  Wishes section. */}
          <div className="bg-gray-200">
            <div className="mx-auto items-start pt-16 pb-16 max-w-[75%]">
              <div className="flex w-full justify-between">
                <p className="mb-10 hidden md:block">
                  {fetchedUser.wishes.length} Wishes
                </p>

                {lookingAtOwnProfile && (
                  <button
                    className="btn text-white bg-bright-purple hover:bg-dark-purple text-base rounded-lg"
                    onClick={(event) => openCreateModal(event)}
                  >
                    Create Wish
                  </button>
                )}
              </div>

              <div className="mt-6 flex flex-wrap justify-between">
                {fetchedUser.wishes.map((wish) => {
                  return (
                    <Card
                      openModal={(event) => handleCardClick(event, wish)}
                      key={wish.id}
                      wish={wish}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <AddToCartModal
        showModal={addToCartModalOpen}
        closeModal={closeAddToCartModal}
        wish={currentWish}
        setWishesInCart={setWishesInCart}
        wishesInCart={wishesInCart}
      />

      <EditWishModal
        showModal={editModalOpen}
        closeModal={closeEditModal}
        wish={currentWish}
        setCurrentWish={setCurrentWish}
        showSuccessNotification={showSuccessNotification}
      />

      <CreateWishModal
        showModal={createModalOpen}
        closeModal={closeCreateModal}
        wish={currentWish}
        setCurrentWish={setCurrentWish}
        user={user}
        showSuccessNotification={showSuccessNotification}
      />

      <Footer />
    </div>
  );
};

export default Dashboard;
