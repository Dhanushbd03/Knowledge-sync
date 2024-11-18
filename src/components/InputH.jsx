import React from "react";
import { FaSearchengin } from "react-icons/fa";

const InputH = () => {
  return (
    <div className="relative w-40">
      {/* Icon */}
      <FaSearchengin className="absolute right-3 top-1/2 -translate-y-1/2 transform text-xl text-white bg-black rounded-full" />
      {/* Input */}
      <input
        type="text"
        className="w-full rounded-b-full rounded-r-full bg-gradient-to-tr from-Lynch to-black p-4 pl-12 text-left placeholder:text-white text-white"
        placeholder="Search"
      />
    </div>
  );
};

export default InputH;
