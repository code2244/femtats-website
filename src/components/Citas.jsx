import React from "react";
import logo from "../assets/logo.png";
import tatuandophoto from "../assets/alextatuando.png";


export default function Citas() {
  return (
    <div id="citas">
      <div className="container flex flex-col justify-center p-5 mx-auto">
        <div className="container flex flex-col justify-center md:w-1/2 md:flex-row mx-auto">
          <img src={logo} />
          <img src={tatuandophoto} />
        </div>
      </div>
    </div>
  );
}
