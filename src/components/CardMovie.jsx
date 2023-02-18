import React from "react";
import { Container, Imagen } from "../StyleComponent/CardMovie";

const CardMovie = ({ titulo, categoria, puntaje, imagen, alt }) => {
  return (
    <Container>
      <div style={{}}>
        <Imagen src={imagen} alt={alt} />
        <h2>{titulo}</h2>
      </div>
      <div>
        <p>{categoria}</p>
        <span>{puntaje}</span>
      </div>
    </Container>
  );
};

export default CardMovie;
