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
                    className="btn text-white bg-bright-purple w-full text-base rounded-lg"
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
      <div>
        <UploadButton>
          <button className="btn text-white bg-bright-purple hover:bg-dark-purple rounded-lg">
            Update Profile Picture
          </button>
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
