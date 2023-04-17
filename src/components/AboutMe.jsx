import React from "react";
import alepinchando from "../assets/alepinchando.png";
export default function AboutMe() {
  return (
    <section id="aboutMe">
      <div className="container flex flex-col justify-center p-5 mx-auto">
        <div className="container flex justify-center">
          <img src={alepinchando} className="md:max-w-md" />
          <div className="flex my-auto text-center">
            <p className="text-4xl font-bold text-center">
              Hola! Soy Alexandra, conocí el arte mediante el graffiti a mis 16
              años bajo el tag de FEM, y desde entonces me inspira la letra, las
              flores y las lineas gruesas y fluidas. El tatuaje me permite hacer
              eso en menor escala, y me encanta. Me envuelvo y disfruto mucho en
              los procesos, y el stick and poke no es la excepción.
            </p>
          </div>
          <img src={alepinchando} className="md:max-w-md" />
        </div>
      </div>
    </section>
  );
}
