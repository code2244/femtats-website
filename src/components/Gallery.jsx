import React from "react";
import art1 from "../assets/flowerbags.png";
import art2 from "../assets/ornamentsbwbluebg.png";
import art3 from "../assets/flowerflash.png";
import art5 from "../assets/art5.png";
import art6 from "../assets/art6.png";
import art7 from "../assets/art7.png";
import art8 from "../assets/art8.png";
import art9 from "../assets/art9.png";
import art10 from "../assets/art10.png";

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="container p-5 mx-auto min-h-screen my-3">
        <div className="grid grid-cols-1 gap-2 justify-items-center md:grid-cols-3">
          <div className="max-w-sm md:min-w-md">
            <img src={art1} />
          </div>
          <div className="max-w-sm md:min-w-md">
            <img src={art3} />
          </div>
          <div className="max-w-sm md:min-w-md">
            <img src={art2} />
          </div>
          <div className="max-w-sm md:min-w-md">
            <img src={art5} />
          </div>
          <div className="max-w-sm md:min-w-md">
            <img src={art6} />
          </div>
          <div className="max-w-sm md:min-w-md">
            <img src={art7} />
          </div>
          <div className="max-w-sm md:min-w-md">
            <img src={art8} />
          </div>
          <div className="max-w-sm md:min-w-md">
            <img src={art9} />
          </div>
          <div className="max-w-sm md:min-w-md">
            <img src={art10} />
          </div>
        </div>
      </div>
    </section>
  );
}
