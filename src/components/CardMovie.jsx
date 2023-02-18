import React from "react";
import { Container, Imagen } from "../StyleComponent/CardMovie";

const CardMovie = ({ titulo, categoria, puntaje, imagen, alt }) => {
  return (
    <Container>
      <Imagen src={imagen} alt={alt} />
      <h2>{titulo}</h2>
      <p>{categoria}</p>
      <span>{puntaje}</span>
    </Container>
  );
};

export default CardMovie;
