import React, { useEffect, useState } from "react";

import axios from "axios";

import Cropper from "react-easy-crop";

import {
  Avatar,
  Box,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
  Modal,
  TextField,
  FormLabel,
  Button,
} from "@mui/material";

// import ImgDialog from "../components/imgDialog";

import { useTheme } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import WishCard from "../components/WishCard";
import ChunkyButton from "../components/ChunkyButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

const ProfilePage = ({ user }) => {
  console.log(user);
  const [fetchedUser, setFetchedUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const emptyWishObject = {
    id: "",
    imageUrl: "",
    name: "",
    price: "",
    url: "",
  };
  const [childModalOpen, setChildModalOpen] = useState(false);
  const [currentWish, setCurrentWish] = useState(emptyWishObject);
  const [imageSrc, setImageSrc] = React.useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };
  const [croppedImage, setCroppedImage] = useState(null);

  const theme = useTheme();

  const usernameFromURL = window.location.pathname.split("/")[2];
  const handleClose = () => setCreateModalOpen(false);
  async function getCroppedImg(
    imageSrc,
    pixelCrop,
    rotation = 0,
    flip = { horizontal: false, vertical: false },
  ) {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return null;
    }

    const rotRad = getRadianAngle(rotation);

    // calculate bounding box of the rotated image
    const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
      image.width,
      image.height,
      rotation,
    );

    // set canvas size to match the bounding box
    canvas.width = bBoxWidth;
    canvas.height = bBoxHeight;

    // translate canvas context to a central location to allow rotating and flipping around the center
    ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
    ctx.rotate(rotRad);
    ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
    ctx.translate(-image.width / 2, -image.height / 2);

    // draw rotated image
    ctx.drawImage(image, 0, 0);

    const croppedCanvas = document.createElement("canvas");

    const croppedCtx = croppedCanvas.getContext("2d");

    if (!croppedCtx) {
      return null;
    }

    // Set the size of the cropped canvas
    croppedCanvas.width = pixelCrop.width;
    croppedCanvas.height = pixelCrop.height;

    // Draw the cropped image onto the new canvas
    croppedCtx.drawImage(
      canvas,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height,
    );

    // As Base64 string
    // return croppedCanvas.toDataURL('image/jpeg');

    // As a blob
    return new Promise((resolve, reject) => {
      croppedCanvas.toBlob((file) => {
        resolve(URL.createObjectURL(file));
      }, "image/png");
    });
  }
  const showCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation,
      );
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  };

  const onClose = () => {
    setCroppedImage(null);
  };

  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);

      setImageSrc(imageDataUrl);
      setChildModalOpen(true);
    }
  };

  // Load user's data on page load.
  useEffect(() => {
    axios.get(`/api/users/${usernameFromURL}`).then((response) => {
      if (response.data) {
        console.log(response.data);
        setFetchedUser(response.data);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Box
        component="img"
        src="https://source.unsplash.com/random?color"
        sx={{
          height: 400,
          width: "100%",
        }}
      />

      <Container sx={{ backgroundColor: "#edeff1" }} maxWidth="100%">
        <Container
          component="main"
          maxWidth="xl"
          sx={{
            paddingTop: { xs: 5, md: 10 },
            paddingBottom: { xs: 5, md: 20 },
          }}
        >
          <Grid container spacing={2}>
            <Grid item md={4}>
              <Box sx={{ position: "sticky", transform: "translateY(-250px)" }}>
                <Paper
                  elevation={2}
                  sx={{
                    padding: "2rem 1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 5,
                    maxWidth: "75%",
                    margin: "0 auto",
                  }}
                >
                  <Box sx={{ borderRadius: 5 }}>
                    <Avatar
                      src="https://source.unsplash.com/random?profile"
                      sx={{ width: 200, height: 200 }}
                    />
                  </Box>

                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      component="h1"
                      sx={{ fontWeight: 600, fontSize: "1.5rem" }}
                    >
                      Emilio Quintana
                    </Typography>

                    <Typography
                      sx={{
                        color: theme.palette.customPalette.midGray,
                        fontWeight: 400,
                      }}
                    >
                      @emilioquintana
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: theme.palette.customPalette.midGray,
                        fontWeight: 600,
                        marginBottom: 1,
                      }}
                    >
                      SOCIALS
                    </Typography>

                    <IconButton
                      component="a"
                      href="https://www.instagram.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon
                        fontSize="large"
                        sx={{ padding: 1, borderRadius: 5 }}
                      />
                    </IconButton>
                  </Box>
                </Paper>
              </Box>
            </Grid>

            <Grid item md={8}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  marginTop: 2,
                  marginBottom: 2,
                }}
              >
                <ChunkyButton
                  color={theme.palette.customPalette.purple}
                  fontWeight={600}
                  endIcon={<AddCircleOutlineIcon />}
                  paddingY={1}
                  onClick={() => setCreateModalOpen(true)}
                  textColor="#f2f2f2"
                >
                  Add a Wish
                </ChunkyButton>
              </Box>

              <Grid container spacing={2}>
                {fetchedUser.wishes.map((wish, index) => (
                  <Grid item sm={4} md={3} key={index}>
                    <WishCard wish={wish} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>

      <Modal
        open={createModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            Add Wish
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, mb: 2, fontWeight: 600 }}
          >
            Wish Information
          </Typography>

          <Box component="form" onSubmit={() => {}} noValidate sx={{ mt: 1 }}>
            <FormLabel sx={{ fontWeight: 500 }}>Wish Name</FormLabel>

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              name="name"
              placeholder="Give the wish a name"
              onChange={(e) =>
                setCurrentWish({ ...currentWish, name: e.target.value })
              }
              sx={{ marginTop: 1, marginBottom: 2 }}
            />

            <FormLabel sx={{ fontWeight: 500 }}>Price</FormLabel>

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="price"
              name="price"
              onChange={(e) =>
                setCurrentWish({ ...currentWish, price: e.target.value })
              }
              sx={{ marginTop: 1, marginBottom: 2 }}
            />

            <FormLabel sx={{ fontWeight: 500 }}>URL (Optional)</FormLabel>

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              placeholder="Paste a product URL here"
              id="url"
              name="url"
              onChange={(e) =>
                setCurrentWish({ ...currentWish, url: e.target.value })
              }
              sx={{ marginTop: 1, marginBottom: 2 }}
            />

            <FormLabel sx={{ fontWeight: 500 }}>Upload Image</FormLabel>

            {childModalOpen ? (
              <React.Fragment>
                <Modal
                  open={childModalOpen}
                  aria-labelledby="child-modal-title"
                  aria-describedby="child-modal-description"
                >
                  <Box sx={{ ...style, width: 400 }}>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2, mb: 2, fontWeight: 600 }}
                    >
                      Crop your image
                    </Typography>

                    <Box>
                      <Cropper
                        image={imageSrc}
                        crop={crop}
                        aspect={4 / 3}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                      />
                    </Box>

                    <Button>Crop Image</Button>
                  </Box>
                </Modal>
              </React.Fragment>
            ) : (
              <Box
                component="input"
                type="file"
                onChange={onFileChange}
                accept="image/*"
                sx={{ mt: 2.5, mb: 2.5 }}
              />
            )}

            <ChunkyButton
              type="submit"
              width="100%"
              color={theme.palette.customPalette.purple}
              fontWeight={600}
              endIcon={<AddCircleOutlineIcon />}
              paddingY={1}
              textColor="#f2f2f2"
            >
              Add a Wish
            </ChunkyButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ProfilePage;
