import React from "react";
import tatuandophoto from "../assets/alextatuando.png";

export default function Citas() {
  return (
    <div id="citas">
      <div className="container flex flex-col justify-center p-5 mx-auto min-h-screen">
        <div className="container flex flex-col justify-center md:flex-row mx-auto">
          <img src={tatuandophoto} />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.982238621301!2d-66.07584873387633!3d18.451330451536442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036f844480b6f1%3A0x350f636f2e37d110!2sTAT%C3%9A%20PARI!5e0!3m2!1sen!2spr!4v1682213891342!5m2!1sen!2spr"
            width={576}
            height={695}
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
