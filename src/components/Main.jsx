import React from "react";
import {
  Container,
  ContainerCarrusel,
  Carrusel,
} from "../StyleComponent/CarruselStyle";
import { useState } from "react";
import CardMovie from "./CardMovie";
import peliculas from ".././../peliculas.json";

//icons
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Main = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <Container>
        <h1>estrenos</h1>
        <div>
          <AiOutlineArrowLeft
            style={{
              fontSize: "2rem",
              color: "rgba(255,255,255,0.75)",
              cursor: "pointer",
              marginRight: "1rem",
            }}
          />
          <AiOutlineArrowRight
            style={{
              fontSize: "2rem",
              color: "rgba(255,255,255,0.75)",
              cursor: "pointer",
              marginLeft: "1rem",
            }}
          />
        </div>
      </Container>
      <div />
      <ContainerCarrusel>
        <Carrusel>
          {peliculas.map((pelicula) => (
            <CardMovie
              key={pelicula.id}
              titulo={pelicula.titulo}
              categoria={pelicula.categoria}
              puntaje={pelicula.puntaje}
              imagen={pelicula.imagen}
              alt={pelicula.alt}
            />
          ))}
        </Carrusel>
      </ContainerCarrusel>
      <div />;
    </>
  );
};

export default Main;
