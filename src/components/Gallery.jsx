import React from "react";
import art1 from "../assets/flowerbags.png";
import art2 from "../assets/flowerbagsbw.png";
import art3 from "../assets/flowerflash.png";
import art4 from "../assets/flowerflashpink.png";
import art5 from "../assets/mariposavuela.png";
import art6 from "../assets/ornaments.png";
import art7 from "../assets/ornamentsbw.png";
import art8 from "../assets/ornamentsbwbluebg.png";

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="container p-5 mx-auto">
        <div className="grid grid-cols-2 gap-2">
          <div className="max-w-sm">
            <img src={art1} />
          </div>
          <div className="max-w-sm">
            <img src={art3} />
          </div>
          <div className="max-w-sm">
            <img src={art4} />
          </div>
          <div className="max-w-sm">
            <img src={art2} />
          </div>
        </div>
      </div>
    </section>
  );
}
