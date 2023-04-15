import React from "react";
import art1 from "../assets/flowerbags.png";
import art2 from "../assets/flowerbagsbw.png";
import art3 from "../assets/flowerflash.png";
import art4 from "../assets/flowerflashpink.png"
import art5 from "../assets/mariposavuela.png"
import art6 from "../assets/ornaments.png"
import art7 from "../assets/ornamentsbw.png"
import art8 from "../assets/ornamentsbwbluebg.png"

export default function Carousel() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="w-96 carousel rounded-box md:w-full">
          <div className="carousel-item w-full md:w-1/2">
            <img
              src={art1}
              className="w-full"
            />
          </div>
          <div className="carousel-item w-full md:w-1/2">
            <img
              src={art2}
              className="w-full"
            />
          </div>
          <div className="carousel-item w-full md:w-1/2">
            <img
              src={art3}
              className="w-full"
            />
          </div>
          <div className="carousel-item w-full md:w-1/2">
            <img
              src={art4}
              className="w-full"
            />
          </div>
          <div className="carousel-item w-full md:w-1/2">
            <img
              src={art5}
              className="w-full"
            />
          </div>
          <div className="carousel-item w-full md:w-1/2">
            <img
              src={art6}
              className="w-full"
            />
          </div>
          <div className="carousel-item w-full md:w-1/2">
            <img
              src={art7}
              className="w-full"
            />
          </div>
          <div className="carousel-item w-full md:w-1/2">
            <img
              src={art8}
              className="w-full"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
