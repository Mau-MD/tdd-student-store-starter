import React from "react";
import "./Hero.css";
import HeroImg from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero-img" src={HeroImg} />
      <p className="intro">Welcome!</p>
    </div>
  );
};

export default Hero;
