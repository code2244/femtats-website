import React from "react";
import art1 from "../assets/art1.png";
import art2 from "../assets/art2.png";
import art3 from "../assets/art3.png";

export default function Carousel() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="carousel rounded-box h- w-full">
          <div className="carousel-item ">
            <img src={art1} alt="sorted tattoos" />
          </div>
          <div className="carousel-item">
            <img src={art2} alt="sorted tattoos" />
          </div>
          <div className="carousel-item">
            <img src={art3} alt="sorted tattoos" />
          </div>
          <div className="carousel-item">
            <img src={art1} alt="sorted tattoos" />
          </div>
          <div className="carousel-item">
            <img src={art2} alt="sorted tattoos" />
          </div>
          <div className="carousel-item">
            <img src={art3} alt="sorted tattoos" />
          </div>
        </div>
      </div>
    </div>
  );
}
