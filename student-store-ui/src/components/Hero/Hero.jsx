import React from "react";
import "./Hero.css";
import HeroImg from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-img-container">
        <img className="hero-img" src={HeroImg} />
      </div>
      <p className="intro">Welcome!</p>
    </div>
  );
};

export default Hero;
