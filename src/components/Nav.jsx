import React from "react";
import femlogo from "../assets/femlogo.png";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="https://www.instagram.com/fem.tats/" target="_blank">
            <img src={femlogo} className="logo" alt="Femtats logo" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
