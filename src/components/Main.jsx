import React from "react";
import logo from '../assets/logo.png'

export default function Main() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={logo}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">FemTats</h1>
          <p className="py-6">
           
          </p>
          <button className="btn btn-primary">Saca Cita!</button>
        </div>
      </div>
    </div>
  );
}
