import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg";
import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImage" />
      </div>
      <div className="content">
        <p>HI , I am MaryAnn Kanyike</p>
        <h1>A Civil & Structural Engineer</h1>
        <div>
          <Link to="/projects" className="btn"> Projects</Link>
          <Link to="/contact" className="btn btn-light"> Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
