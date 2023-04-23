import React from "react";
import alepinchando from "../assets/alepinchando.png";
export default function AboutMe() {
  return (
    <section id="aboutme">
      <div className="container p-5 mx-auto">
        <div className=" grid md:grid-cols-2 justify-items-center">
          <div className="grid m-5 p-5">
            <p className="text-center text-2xl">
              Hola! Soy Alexandra, conocí el arte mediante el graffiti a mis 16
              años bajo el tag de FEM, y desde entonces me inspira la letra, las
              flores y las lineas gruesas y fluidas. El tatuaje me permite hacer
              eso en menor escala, y me encanta. Me envuelvo y disfruto mucho en
              los procesos, y el stick and poke no es la excepción.
            </p>
          </div>
          <div className="grid">
            <img src={alepinchando} className="max-w-sm md:max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
