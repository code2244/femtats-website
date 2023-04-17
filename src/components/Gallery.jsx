import React from "react";
import art1 from "../assets/flowerbags.png";
import art2 from "../assets/flowerbagsbw.png";
import art3 from "../assets/flowerflash.png";
import art4 from "../assets/flowerflashpink.png"
import art5 from "../assets/mariposavuela.png"
import art6 from "../assets/ornaments.png"
import art7 from "../assets/ornamentsbw.png"
import art8 from "../assets/ornamentsbwbluebg.png"

export default function Gallery() {
  return (
    <div className="grid grid-cols-3">
      <img src={art1}/>
      <img src={art2}/>
      <img src={art3}/>
      <img src={art4}/>
    </div>
  );
}
