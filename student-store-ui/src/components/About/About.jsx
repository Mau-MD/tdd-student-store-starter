import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text-container">
        <h2 className="about-heading">About Us</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
        aut. Ducimus ipsa illo saepe similique porro consequuntur, reiciendis
        cumque deserunt fuga rem fugit nisi harum minima ex perspiciatis odio
        nemo!
      </div>
      <div className="about-image-container">
        <img
          className="about-image"
          src="http://localhost:3000/src/assets/hero.jpg"
        />
      </div>
    </div>
  );
};

export default About;
