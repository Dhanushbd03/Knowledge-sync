import React from "react";
import tw, { styled } from "twin.macro";
const Title = styled.h1`
  ${tw`text-3xl z-10 font-bold text-transparent bg-clip-text relative bg-gradient-to-r from-white via-DiSerria to-DiSerria py-6  lg:text-5xl md:text-nowrap w-80  md:w-full`}
`;
const CareerHero = () => {
  return (
    <div className="py-5">
      <p className="w-fit rounded-full border-2 border-PuertoRico px-3 text-PuertoRico">
        We're hiring
      </p>
      <div className="border-b-2 border-PuertoRico py-4">
        <Title>Be part of our Team</Title>
        <p className="text-balance text-lg leading-tight text-white">We're looking for passionate people to join us on our mission.we value flat hierarchies , clear communication, and full ownership and responsibility</p>
      </div>
    </div>
  );
};

export default CareerHero;
