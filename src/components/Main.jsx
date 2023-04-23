import React from "react";
import logo from "../assets/logo.png";
import alepinchando from "../assets/alepinchando1.png";

export default function Main() {
  return (
    <section id="hero">
      <div className="container flex flex-col justify-center p-5 mx-auto min-h-screen">
        <div className="container flex flex-col justify-center max-w-sm md:max-w-md md:flex-row mx-auto" >
          <img src={logo} />
          <img src={alepinchando} className="" />
        </div>
      </div>
    </section>
  )
}