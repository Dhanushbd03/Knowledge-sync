import React from "react";
import Logo from "./Logo";
import tw, { styled } from "twin.macro";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const GoTo = styled.div`
  ${tw`text-PuertoRico hover:bg-DiSerria hover:text-white px-2  md:px-5  rounded-full`}
`;
const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center py-10">
        <Link to={`/`}><Logo /></Link>
        <div>
          <h1 className="leading-1 text-center text-xl text-Lynch md:text-4xl">
            Level up your skills with <br />
            Knowledge Sync—start today!
          </h1>
        </div>
        <div className="flex flex-col gap-5 py-10 md:flex-row">
          <input
            type="text"
            className="h-10 rounded-full border border-PuertoRico bg-transparent px-2 text-PuertoRico placeholder:text-Lynch focus:outline-PuertoRico"
            placeholder="Enter your email"
          />
          <button className="h-10 rounded-full bg-PuertoRico px-3 text-white hover:bg-DiSerria">
            Start Now
          </button>
        </div>
        <div className="flex md:w-full md:justify-center md:gap-20 md:py-5">
          <HashLink to="/#about" smooth="true" >
            <GoTo>About</GoTo>
          </HashLink>
          <HashLink to="/#courses" smooth="true" >
            <GoTo>Courses</GoTo>
          </HashLink>
          <Link to="/career" smooth="true" >
            <GoTo>Career</GoTo>
          </Link>
          <Link to="/projects" smooth="true" >
            <GoTo>Projects</GoTo>
          </Link>
          <HashLink to="/#contact" smooth="true" >
            <GoTo>Contact Us</GoTo>
          </HashLink>
        </div>
      </div>
      <div className="absolute left-0 h-2 w-full bg-PuertoRico"></div>
    </>
  );
};

export default Footer;
