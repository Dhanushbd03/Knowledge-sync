import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={logo}
        alt="Knowledge Sync logo"
        className="size-10 lg:size-20"
      />
      <h1 className="text-sm font-bold leading-tight text-DiSerria lg:text-xl">
        Knowledge <br />
        <span className="text-PuertoRico">Sync</span>
      </h1>
    </div>
  );
};

export default Logo;
