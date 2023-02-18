import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Imagen = styled.img`
  width: 100px;
  object-fit: cover;
  border-radius: 10px;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
