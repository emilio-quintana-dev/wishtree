import React, { useState, useMemo, forwardRef } from "react";
import Input from "../utils/components/Input";
import axios from "axios";
import {
  useBatchAddListener,
  useBatchFinishListener,
  useUploady,
} from "@rpldy/uploady";
import { asUploadButton } from "@rpldy/upload-button";

const UploadField = asUploadButton(
  forwardRef(({ onChange, showSuccessNotification, ...props }, ref) => {
    const [text, setText] = useState("Upload Custom Photo");

    useBatchAddListener((batch) => {
      setText(batch.items[0].file.name);
      onChange(batch.items[0].file.name);
    });

    useBatchFinishListener(() => {
      console.log("Inside end batch listener");
      setShowNotification(true);
      setText("Upload Custom Photo");
      onChange(null);
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

const EditWishForm = ({
  closeModal,
  setCurrentWish,
  showSuccessNotification,
  wish,
}) => {
  const { processPending } = useUploady();
  const [error, setError] = useState(undefined);
  const [fileName, setFileName] = useState(null);

  const onSubmit = (event) => {
    if (fileName) {
      processPending({ params: wish });
    } else {
      axios
        .put(`http://localhost:3001/wishes/${wish.id}`, {
          name: wish.name,
          price: wish.price,
          url: wish.url,
        })
        .then((response) => {
          if (response.data.status === "ok") {
            showSuccessNotification();
          }
        });
    }

    event.preventDefault();
    closeModal();
  };

  const onDelete = () => {
    axios.delete(`http://localhost:3001/wishes/${wish.id}`).then((response) => {
      if (response.data.status === "ok") {
        console.log("Wish deleted");
      }
    });
  };

  const buttonExtraProps = useMemo(
    () => ({
      onChange: setFileName,
      showSuccessNotification: showSuccessNotification,
    }),
    [setFileName, showSuccessNotification]
  );

  return (
    <form onSubmit={onSubmit}>
      {/* Product Image */}
      {wish.imageUrl && <img src={wish.imageUrl} alt="product image" />}

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
            error={error}
            required={false}
            type="name"
            value={wish.name}
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
            error={error}
            placeholder="Enter your wish's price"
            required={false}
            type="price"
            value={wish.price}
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
            name="url"
            handleChange={(event) =>
              setCurrentWish({
                ...wish,
                url: event.target.value,
              })
            }
            placeholder="Enter your wish's URL"
            error={error}
            required={false}
            type="url"
            value={wish.url}
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
            Update{" "}
          </button>
        </div>
      </div>

      <button onClick={onDelete} className="underline mt-3 text-xs">
        Or delete wish
      </button>
    </form>
  );
};

export default EditWishForm;
