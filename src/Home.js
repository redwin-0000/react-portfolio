import React from "react";
import "./components/Header";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home =()=> {
  return (
    <>
    <Header />
    <HeroSection />
    <About />
    <Project />
    <Contact />
    <Footer />
    </>
    
  );
}

export default Home;