import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="ABOUT."
        text="Civil and Structural Engineer with expertise in infrastructure design and project management, focused on sustainable, cost-effective solutions for Africa's infrastructure."
      />
      <AboutContent/>
      <Footer />
    </div>
  );
};

export default About;
