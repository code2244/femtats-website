import React from "react";
import logo from "../assets/logo.png";

export default function Main() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold"></h1>
          <p className="py-6"></p>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-accent btn">
             <p> <a href="https://www.instagram.com/fem.tats/">SACA CITA!</a></p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
