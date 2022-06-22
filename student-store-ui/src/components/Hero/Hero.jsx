import React from "react";
import "./Hero.css";
import HeroImg from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-img-container">
        <img
          className="hero-img"
          src={HeroImg}
          alt="Hero Image"
          title="Hero Image"
        />
      </div>
      <p className="intro">Welcome!</p>
    </div>
  );
};

export default Hero;
