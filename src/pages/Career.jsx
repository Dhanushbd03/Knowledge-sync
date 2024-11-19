import React from 'react'
import Container from './../components/Container'
import Header from './../components/Header';
import CareerHero from './../components/CareerHero';
import Jobs from './../components/Jobs';
import Footer from './../components/Footer';

const Career = () => {
  return (
    <Container>
        <Header />
        <CareerHero />
        <Jobs />
        <Footer />
    </Container>
  )
}

export default Career