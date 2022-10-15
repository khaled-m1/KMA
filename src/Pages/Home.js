import React from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import About from '../Components/About';
import Gallery from '../Components/Gallery.js';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
