import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure Better Education for a Better World</h1>
        <p>
          Our cutting-edge curriculum empowers students with the knowledge,
          skills, and experience needed to excel in the dynamic field of education.
        </p>

        <button className="btn" onClick={() => navigate("/explore")}>
          Explore more <img src={dark_arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
