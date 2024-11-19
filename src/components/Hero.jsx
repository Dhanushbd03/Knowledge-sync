import React from "react";
import tw, { styled } from "twin.macro";
import img1 from "./../assets/hero/1.jpg";
import img2 from "./../assets/hero/2.jpg";
import img3 from "./../assets/hero/3.jpg";
import img4 from "./../assets/hero/4.jpg";
import img5 from "./../assets/hero/5.jpg";
import { FaPlay } from "react-icons/fa6";
import InputH from './InputH';
import ButtonH from './ButtonH';
import { HashLink } from 'react-router-hash-link';

const Title = styled.h1`
  ${tw`text-3xl z-10 font-bold text-transparent bg-clip-text relative bg-gradient-to-r from-white via-DiSerria to-DiSerria py-4 text-center md:text-left md:max-w-lg lg:text-4xl`}
`;

const Hero = () => {
  return (
    <div className="flex flex-col py-10 md:flex-row md:justify-center lg:gap-60">
      <div className="flex flex-col gap-3 md:order-1">
        <div className="flex w-full justify-center gap-5">
          <div className="space-y-2 md:space-y-4 lg:space-y-6">
            <img
              src={img1}
              alt=""
              className="size-28 rounded-b-full rounded-tr-full object-cover md:size-36 lg:size-40"
            />
            <img
              src={img3}
              alt=""
              className="size-28 rounded-full object-cover md:size-36 lg:size-40"
            />
          </div>
          <div>
            <img
              src={img2}
              alt=""
              className="h-60 w-28 rounded-b-full rounded-t-full object-cover md:h-80 md:w-36 lg:h-[350px] lg:w-40"
            />
          </div>
        </div>
        <div className="flex w-full justify-center gap-5">
          <div>
            <img
              src={img4}
              alt=""
              className="size-28 rounded-t-2xl rounded-bl-[10rem] rounded-br-2xl object-cover md:size-36 lg:size-40"
            />
          </div>
          <div className="">
            <img
              src={img5}
              alt=""
              className="size-28 rounded-t-full rounded-bl-full object-cover md:size-36 lg:size-40"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-2 py-4 md:items-start">
        {/* circle */}
        <div className="absolute left-2 top-0 size-10 rounded-full border-4 border-PuertoRico"></div>
        {/* title */}
        <Title className="">
          Empowering Minds, Syncing Knowledge <br /> Your Gateway to Expert
          Learning and Growth
        </Title>
        {/* diamond */}
        <div className="absolute bottom-20 right-20 size-8 rotate-45 rounded-sm border-4 border-Lynch"></div>
        {/* buttons  */}
        <div className="flex gap-5 lg:mt-10">
          <HashLink to="/#contact"><ButtonH /></HashLink>
          <InputH />          
        </div>
        {/* video button */}
        <div className="flex items-center py-10 lg:mt-10">
          <div className="rounded-full bg-gradient-to-tr from-white to-Tuatara p-2">
            <div className="flex items-center justify-center rounded-full bg-DiSerria p-1">
              <FaPlay className="text-white" />
            </div>
          </div>
          <div className="flex flex-col pl-2 leading-tight text-Lynch">
            <p>Get Started</p>
            <p className="">Watch Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
