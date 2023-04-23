import React from "react";
import logo from "../assets/femlogo.png";

export default function Navbar() {
  return (
    <div>
      <nav class="relative container mx-auto p-6">
        <div class="flex items-center justify-center">
          <div class="space-x-6 md:flex">
            <a href="#hero" class="hover:text-darkGreyishBlue">
              Home
            </a>
            <a href="#gallery" class="hover:text-darkGreyishBlue">
              Gallery
            </a>
            <a href="#aboutme" class="hover:text-darkGreyishBlue">
              About Me
            </a>
            <a href="#citas" class="hover:text-darkGreyishBlue">
             Citas
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
