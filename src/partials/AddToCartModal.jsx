import React from "react";
import { useNavigate } from "react-router-dom";

import Placeholder from "../images/card-top.jpg";

import Modal from "../utils/Modal";

const AddToCartModal = ({
  showModal,
  closeModal,
  wish,
  setWishesInCart,
  wishesInCart,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setWishesInCart(wishesInCart.concat(wish));

    navigate("/checkout");
  };

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

        <div className="p-8">
          <p className="text-lg text-teal-600 mb-5">Add to Cart</p>

          <div className="max-w-sm mx-auto">
            <img
              src={wish.imageUrl ? wish.imageUrl : Placeholder}
              alt="product image"
              className="mb-5 rounded"
            />

            <p className="text-gray-600 mb-2">{wish.name}</p>

            <p className="mb-5">${wish.price}</p>

            <button
              className="btn text-white bg-teal-600 w-full text-base rounded-lg"
              onClick={handleClick}
            >
              Add to cart and checkout
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddToCartModal;
