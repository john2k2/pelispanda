import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 100px;
  margin: 0 auto;
  padding: 1rem;

  h1 {
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
  }
`;

export const ContainerCarrusel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
  width: 70%;
  margin: 0 auto;
`;

export const Carrusel = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
