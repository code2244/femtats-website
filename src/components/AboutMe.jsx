import React from "react";
import femwall from "../assets/femwall.jpg";
export default function AboutMe() {
  return (
    <section id="aboutme">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <p className="mx-auto text-center text-3xl">
              {" "}
              Hola! Soy Alexandra, conocí el arte mediante el graffiti a mis 16
              años bajo el tag de FEM, y desde entonces me inspira la letra, las
              flores y las lineas gruesas y fluidas. El tatuaje me permite hacer
              eso en menor escala, y me encanta. Me envuelvo y disfruto mucho en
              los procesos, y el stick and poke no es la excepción.
            </p>
          </div>
          <img src={femwall} className="max-w-md md:max-w-lg" />
        </div>
      </div>
    </section>
  );
}