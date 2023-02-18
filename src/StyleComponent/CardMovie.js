import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 23%;
  margin: 5% 1%;
  overflow-x: hidden;

  h2 {
    text-transform: uppercase;
    font-size: 1.5rem;
    width: 200%;
    font-weight: 300;
    margin: 0;
    padding: 0;
    text-align: start;
  }
  p {
    font-size: small;
    font-weight: 300;
    text-align: start;
  }
`;

export const Imagen = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;
