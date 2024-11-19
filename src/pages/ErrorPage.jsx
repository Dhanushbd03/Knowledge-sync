import React from "react";
import Container from "./../components/Container";
import Header from "./../components/Header";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import Footer from './../components/Footer';

const ErrorPage = () => {
  return (
    <Container>
      <Header />
      <div className="flex flex-col items-center border-b-2 border-PuertoRico py-5">
        <BiError className="text-9xl text-white" />
        <h1 className="text-9xl text-white">404</h1>
        <p className="text-5xl leading-loose text-white">Page not Found</p>
        <Link className="flex items-center gap-5 text-xl text-DiSerria">
          <IoArrowBackOutline />
          Go Back
        </Link>
      </div>
      <Footer />
    </Container>
  );
};

export default ErrorPage;
