import React, { useState } from "react";
import tw from "twin.macro";
import { MdMenuBook } from "react-icons/md";
import Logo from "./Logo";
import selfie from "./../assets/selfiw.jpg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const GoTo = tw.div`text-white hover:lg:text-PuertoRico hover:lg:bg-transparent  cursor-pointer px-6 py-2 hover:bg-PuertoRico focus:bg-PuertoRico rounded-lg`;
const Header = () => {
  const [menu, setmenu] = useState(false);

  return (
    <div className="flex items-center justify-between py-2 font-poppins">
      <Link to={`/`}><Logo /></Link>
      <div
        className={`${menu ? "opacity-100" : "opacity-0"} absolute left-0 top-14 z-50 flex w-full flex-col divide-y-2 divide-white bg-DiSerria px-4 shadow-xl transition-all duration-150 lg:relative lg:left-0 lg:top-0 lg:w-fit lg:flex-row lg:divide-y-0 lg:bg-transparent lg:opacity-100`}
      >
        <HashLink to="/#about" smooth="true" ><GoTo>About</GoTo></HashLink>
        <HashLink to="/#courses" smooth="true" ><GoTo>Courses</GoTo></HashLink>
        <Link to="/career" smooth="true" ><GoTo>Career</GoTo></Link>
        <Link to="/projects" smooth="true"><GoTo>Projects</GoTo></Link>
        <HashLink to="/#contact" smooth="true" ><GoTo>Contact</GoTo></HashLink>
      </div>
      <div>
        <button className="hidden rounded-lg bg-PuertoRico px-4 py-2 text-white">
          Sign In / Sign Up
        </button>
        <div className="hidden items-center gap-2 text-white lg:flex">
          <img
            src={selfie}
            alt=""
            className="size-10 rounded-full border border-PuertoRico object-cover"
          />
          <h3>Sophia</h3>
        </div>
      </div>
      <button
        className="text-white focus:text-PuertoRico lg:hidden"
        onClick={() => setmenu(!menu)}
      >
        <MdMenuBook className="ml-auto size-8 lg:hidden" />
      </button>
    </div>
  );
};

export default Header;
