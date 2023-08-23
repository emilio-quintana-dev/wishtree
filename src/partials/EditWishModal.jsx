import React from "react";
import Uploady from "@rpldy/uploady";

import Modal from "../utils/Modal";
import EditWishForm from "./EditWishForm";

const EditWishModal = ({
  closeModal,
  setCurrentWish,
  showModal,
  showSuccessNotification,
  wish,
}) => {
  return (
    <Modal
      id="modal"
      ariaLabel="modal-headline"
      show={showModal}
      handleClose={closeModal}
    >
      <div className="w-2/6 m-0auto text-center border border-gray-300 bg-white rounded-lg">
        <div className="text-right">
          <button onClick={closeModal}>
            <svg viewBox="0 0 24 24" className="w-8 h-8 p-1">
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </button>
        </div>

        <div className="p-8 pt-0">
          <p className="text-3xl font-extrabold text-bright-purple mb-5">
            Edit Wish
          </p>

          <div className="max-w-sm mx-auto">
            <Uploady
              destination={{ url: `http://localhost:3001/wishes/${wish.id}` }}
              multiple={false}
              clearPendingOnAdd
              method="PUT"
            >
              <EditWishForm
                closeModal={closeModal}
                setCurrentWish={setCurrentWish}
                showSuccessNotification={showSuccessNotification}
                wish={wish}
              />
            </Uploady>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditWishModal;
