import React, { memo } from "react";

import LockIcon from "@mui/icons-material/Lock";
import GradingRoundedIcon from "@mui/icons-material/GradingRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import AddReactionRoundedIcon from "@mui/icons-material/AddReactionRounded";

const Card = ({ title, description, icon }) => {
  const renderIcon = () => {
    if (icon === "lock") {
      return <LockIcon sx={{ fontSize: 40, color: "#fff" }} />;
    }

    if (icon === "list") {
      return <GradingRoundedIcon sx={{ fontSize: 40, color: "#fff" }} />;
    }

    if (icon === "package") {
      return <LocalShippingRoundedIcon sx={{ fontSize: 40, color: "#fff" }} />;
    }

    return <AddReactionRoundedIcon sx={{ fontSize: 40, color: "#fff" }} />;
  };

  return (
    <div className="relative flex flex-col items-center py-12 px-4 bg-white rounded shadow-xl min-h-full text-center">
      <div className="p-2 rounded-full bg-teal-600 mb-8">{renderIcon()}</div>

      <h4 className="text-xl font-bold leading-snug tracking-tight mb-8">
        {title}
      </h4>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default memo(Card);
