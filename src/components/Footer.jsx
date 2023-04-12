import React from "react";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About me</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Gallery</a>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by FemTats</p>
      </div>
    </footer>
  );
}
