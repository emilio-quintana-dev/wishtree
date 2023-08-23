import React, { memo } from "react";

import Placeholder from "../images/card-top.jpg";

const Card = ({ wish, openModal }) => {
  return (
    <div className="shadow-2xl hover:shadow-bright-purple mb-6" key={wish.name}>
      <button
        className="max-w-sm rounded-xl overflow-hidden"
        onClick={(event) => openModal(event, wish)}
      >
        <div>
          <img
            className="md:h-52 md:w-[17rem]"
            src={wish.imageUrl ? wish.imageUrl : Placeholder}
          />
        </div>

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
};

export default memo(Card);
