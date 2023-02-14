import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerSection = styled.section`
  height: 200px;
  width: 70%;
  margin: 0 auto;
  padding: 70px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  z-index: -99;
  h1 {
    color: rgba(255, 255, 255, 0.75);
    text-transform: uppercase;
    font-weight: 300;
    font-size: 28px;
    margin: 0;
    padding-right: 70px;
  }
`;
