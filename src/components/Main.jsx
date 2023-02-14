import React from "react";
import { Container, ContainerSection } from "../StyleComponent/Main";
import { useState } from "react";

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
        <ContainerSection>
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
        </ContainerSection>
      </Container>
      ;
    </>
  );
};

export default Main;
