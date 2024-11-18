import React from "react";
import { FaHandsHelping } from "react-icons/fa";

const ButtonH = () => {
  return (
    <div className="relative w-40">
      {/* Icon */}
      <FaHandsHelping className="absolute right-3 top-1/2 -translate-y-1/2 transform text-xl text-white bg-DiSerria rounded-full" />
      {/* Input */}
      <button className="text-white w-40 rounded-l-full rounded-t-full bg-gradient-to-tr from-PuertoRico via-PuertoRico to-DiSerria p-4 px-2">
        Need help?
      </button>
    </div>
  );
};

export default ButtonH;
