import React from "react";
import femwall from "../assets/femwall.jpg";
export default function AboutMe() {
  return (
    <section id="aboutme">
      <div className="container grid place-content-center p-5 mx-auto min-h-screen">
        <div className="grid gap-4 md:grid-flow-col">
          <div className="flex items-center">
            <p className="text-center text-xl">
              Hola! Soy Alexandra, conocí el arte mediante el graffiti a mis 16
              años bajo el tag de FEM, y desde entonces me inspira la letra, las
              flores y las lineas gruesas y fluidas. El tatuaje me permite hacer
              eso en menor escala, y me encanta. Me envuelvo y disfruto mucho en
              los procesos, y el stick and poke no es la excepción.
            </p>
          </div>
          <img className="" src={femwall} alt="Modern building architecture" />
        </div>
      </div>
    </section>
  );
}
