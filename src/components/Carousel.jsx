import React from "react";
import art1 from "../assets/art1.png";
import art2 from "../assets/art2.png";
import art3 from "../assets/art3.png";

export default function Carousel() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="carousel rounded-box">
          <div className="carousel-item w-1/2">
            <img
              src={art1}
              className="w-full"
            />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src={art2}
              className="w-full"
            />
          </div>
          <div className="carousel-item w-1/2">
            <img
              src={art3}
              className="w-full"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
