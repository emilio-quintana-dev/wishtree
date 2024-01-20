import React, { useState, useMemo, forwardRef } from "react";
import axios from "axios";
import {
  useBatchAddListener,
  useBatchFinishListener,
  useUploady,
} from "@rpldy/uploady";
import { asUploadButton } from "@rpldy/upload-button";

import Input from "../utils/components/Input";

const UploadField = asUploadButton(
  forwardRef(({ onChange, showSuccessNotification, ...props }, ref) => {
    const [text, setText] = useState("Upload Custom Photo");

    useBatchAddListener((batch) => {
      setText(batch.items[0].file.name);
      onChange(batch.items[0].file.name);
    });

    useBatchFinishListener(() => {
      setText("Upload Custom Photo");
      onChange(null);
      showSuccessNotification();
    });

    return (
      <div
        {...props}
        ref={ref}
        id="form-upload-button"
        title={text}
        className="text-xs underline cursor-pointer mb-6"
      >
        {text}
      </div>
    );
  })
);

const CreateWishForm = ({
  setCurrentWish,
  wish,
  closeModal,
  user,
  showSuccessNotification,
}) => {
  const [error, setError] = useState(undefined);
  const { processPending } = useUploady();

  const emptyWishObject = {
    id: "",
    imageUrl: "",
    name: "",
    price: "",
    url: "",
  };

  const onSubmit = (event) => {
    if (fileName) {
      processPending({
        params: {
          ...wish,
          userId: user.id,
        },
      });

      setCurrentWish(emptyWishObject);
    } else {
      axios
        .post(`http://localhost:3001/wishes`, {
          name: wish.name,
          price: wish.price,
          url: wish.url,
          userId: user.id,
        })
        .then((response) => {
          if (response.data.status === "created") {
            closeModal();
            showSuccessNotification();
          }
        });
    }

    event.preventDefault();
    closeModal();
  };

  const [fileName, setFileName] = useState(null);

  const buttonExtraProps = useMemo(
    () => ({
      onChange: setFileName,
      showSuccessNotification: showSuccessNotification,
    }),
    [setFileName]
  );

  return (
    <form onSubmit={onSubmit}>
      <img src={wish.imageUrl} />

      <UploadField autoUpload={false} extraProps={buttonExtraProps} />
      {/* Product Name */}
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label
            className="block text-gray-800 text-sm font-medium mb-1"
            htmlFor="name"
          >
            Product Name <span className="text-red-600">*</span>
          </label>
          <Input
            name="name"
            handleChange={(event) =>
              setCurrentWish({
                ...wish,
                name: event.target.value,
              })
            }
            placeholder="Enter your wish's name"
            required={true}
            type="name"
            error={error}
          />
        </div>
      </div>

      {/* Product Price */}
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label
            className="block text-gray-800 text-sm font-medium mb-1"
            htmlFor="price"
          >
            Product Price <span className="text-red-600">*</span>
          </label>

          <Input
            name="price"
            handleChange={(event) =>
              setCurrentWish({
                ...wish,
                price: event.target.value,
              })
            }
            placeholder="Enter your wish's price"
            required={true}
            type="price"
            error={error}
          />
        </div>
      </div>

      {/* Product's URL */}

      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label
            className="block text-gray-800 text-sm font-medium mb-1"
            htmlFor="url"
          >
            Product URL{" "}
          </label>

          <Input
            name="link"
            handleChange={(event) =>
              setCurrentWish({
                ...wish,
                url: event.target.value,
              })
            }
            placeholder="Enter your wish's URL"
            required={false}
            type="link"
            error={error}
          />
        </div>
      </div>

      {/* Sign Up Button */}
      <div className="flex flex-wrap -mx-3 mt-6">
        <div className="w-full px-3">
          <button
            className="btn text-white bg-bright-purple w-full text-base rounded-lg"
            type="submit"
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateWishForm;
