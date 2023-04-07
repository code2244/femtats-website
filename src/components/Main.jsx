import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import logo from "../assets/logo.png";

export default function Main() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">FemTats</h1>
          <p className="py-6"></p>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-primary">
              Saca Cita!
            </div>
          </div>
          <Datepicker value={value} onChange={handleValueChange} />
        </div>
      </div>
    </div>
  );
}
