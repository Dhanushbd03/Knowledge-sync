import React from "react";
import tw from "twin.macro";

const Container = ({ children }) => {
  return <div css={tw`px-2 md:max-w-7xl bg-Tuatara mx-auto overflow-hidden`}>{children}</div>;
};

export default Container;
