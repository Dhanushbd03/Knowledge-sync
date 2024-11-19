import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import Contact from "./../components/Contact";
import Footer from './../components/Footer';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <About />
      <Courses />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Home;
