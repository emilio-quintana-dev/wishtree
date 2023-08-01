import React, { useRef, useState, useCallback, useEffect } from "react";
import Uploady, { withRequestPreSendUpdate } from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import Modal from "../utils/Modal";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const ItemPreviewWithCrop = withRequestPreSendUpdate(
  ({ url, updateRequest, requestData }) => {
    const cropperRef = useRef(null);
    const [isCropped, setCropped] = useState(null);
    const [croppedImg, setCroppedImg] = useState(null);
    const [editProfilePicModalOpen, setEditProfilePicModal] = useState(false);

    const onCropEnd = () => {
      setCropped(true);
    };

    useEffect(() => {
      setEditProfilePicModal(true);
      setCropped(true);
    }, []);

    const onUpload = useCallback(() => {
      const cropper = cropperRef.current.cropper;

      cropper.getCroppedCanvas().toBlob((blob) => {
        blob.name = requestData.items[0].file.name;
        requestData.items[0].file = blob;
        updateRequest({ items: requestData.items });
      }, requestData.items[0].file.type);

      setCroppedImg(cropper.getCroppedCanvas().toDataURL());
    }, [requestData, updateRequest]);

    return (
      <>
        {!croppedImg && (
          <Modal
            id="profile-modal"
            ariaLabel="modal-headline"
            show={editProfilePicModalOpen}
            handleClose={() => setEditProfilePicModal(false)}
          >
            <div className="w-2/6 m-0auto text-center border border-gray-300 bg-white rounded-lg">
              {/* Modal Top */}
              <div className="text-right">
                <button onClick={() => setEditProfilePicModal(false)}>
                  <svg viewBox="0 0 24 24" className="w-8 h-16 p-1 -mt-1 mb-2">
                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
              </div>

              <div className="p-8">
                <div className="mb-5">
                  <Cropper
                    aspectRatio={1 / 1}
                    autoCrop={true}
                    background={false}
                    cropBoxResizable={false}
                    cropend={onCropEnd}
                    ref={cropperRef}
                    guides={true}
                    rotatable={false}
                    toggleDragModeOnDblclick={false}
                    scalable={false}
                    style={{ height: 400, width: "100%" }}
                    src={url}
                    zoomable={false}
                  />
                </div>

                {isCropped && !croppedImg ? (
                  <button
                    className="btn text-white bg-teal-600 w-full text-base rounded-lg"
                    onClick={onUpload}
                  >
                    Upload Selection
                  </button>
                ) : null}
              </div>
            </div>
          </Modal>
        )}
      </>
    );
  }
);

const ProfileUploadButton = ({ fetchedUser }) => {
  return (
    <Uploady
      method="PUT"
      multiple={false}
      destination={{
        url: `http://localhost:3001/users/${fetchedUser.username}`,
      }}
    >
      <div className="flex justify-center">
        <UploadButton>
          <div className="flex p-2 rounded-full bg-teal-400 hover:bg-teal-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
              <path
                fillRule="evenodd"
                d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </UploadButton>

        <br />

        <UploadPreview
          rememberPreviousBatches
          PreviewComponent={ItemPreviewWithCrop}
          fallbackUrl="https://icon-library.net/images/image-placeholder-icon/image-placeholder-icon-6.jpg"
        />
      </div>
    </Uploady>
  );
};

export default ProfileUploadButton;
