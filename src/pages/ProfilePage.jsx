import React, { useEffect, useState } from "react";
import axios from "axios";

import AddToCartModal from "../components/AddToCartModal";

// import Card from "../components/Card";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import CreateWishModal from "../components/CreateWishModal";
import EditWishModal from "../components/EditWishModal";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import Spinner from "../components/Spinner";
import { Tooltip } from "@material-tailwind/react";
import ProfileUploadButton from "../components/UploadButton";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const ProfilePage = ({ user }) => {
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
  }, []);

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

  if (!fetchedUser.username) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
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
          <div>
            <div className="pt-48 w-full mx-auto max-w-[85%]">
              <div className="flex flex-col pb-16 w-full md:pt-30 items-center">
                {/*  Profile Pic */}
                {fetchedUser.avatarUrl && (
                  <img
                    className="rounded-full border-4 border-bright-purple w-[152px] h-[152px] mb-4"
                    src={fetchedUser.avatarUrl}
                    alt="profile-image"
                  />
                )}

                <h1 className="text-3xl font-extrabold mb-1">
                  {fetchedUser.firstName} {fetchedUser.lastName}
                </h1>

                <div className="flex items-center mb-4">
                  <p className="mr-2">@{fetchedUser.username}</p>

                  <Tooltip content="Copy list link" placement="bottom">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `https://wishtree.io/users/${fetchedUser.username}`,
                        );
                      }}
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
                          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                        />
                      </svg>
                    </button>
                  </Tooltip>
                </div>

                {lookingAtOwnProfile && (
                  <ProfileUploadButton fetchedUser={fetchedUser} />
                )}
              </div>
            </div>
          </div>

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

              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {fetchedUser.wishes.map((wish, index) => {
                    return (
                      <Grid item xs={2} sm={4} md={4} key={index}>
                        <Card>
                          <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            width="140"
                            image={wish.imageUrl}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {wish.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {wish.price}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small">Donate</Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </div>
          </div>
        </section>
      </main>

      <AddToCartModal
        showModal={addToCartModalOpen}
        closeModal={closeAddToCartModal}
        wish={currentWish}
        user={user}
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

export default ProfilePage;
