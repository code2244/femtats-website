import React from "react";
import logo from "../assets/logo.png";
import tatuandophoto from "../assets/alextatuando.png"

export default function Main() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={logo} className="max-w-sm shadow-2xl" />
        <img src={tatuandophoto} className="max-w-sm  shadow-2xl" />
        <div>
        
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-accent btn border-none">
             <p> <a href="https://www.instagram.com/fem.tats/">SACA CITA!</a></p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
