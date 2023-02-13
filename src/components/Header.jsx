import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import {
  HeaderStyled,
  Containericon,
  Input,
  Container,
  InputContainer,
} from "../StyleComponent/Header";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Container>
      <HeaderStyled>
        <a href="#">
          <img
            src="https://pelispanda.re/wp-content/uploads/2020/07/panda1.png"
            alt="pelispanda"
          />
        </a>
        <Containericon>
          <AiOutlineSearch
            onClick={handleClick}
            style={{
              fontSize: "2rem",
              color: "white",
              cursor: "pointer",
            }}
          />
          <AiOutlineMenu
            style={{
              fontSize: "2rem",
              color: "white",
              cursor: "pointer",
              marginLeft: "1rem",
            }}
          />
          <ul>
            <li>
              <a href="#">peliculas</a>
            </li>
            <li>
              <a href="#">series</a>
            </li>
            <li>
              <a href="#">genero</a>
            </li>
            <li>
              <a href="#">año</a>
            </li>
            <li>
              <a href="#">calidad</a>
            </li>
          </ul>
        </Containericon>
      </HeaderStyled>
      <InputContainer show={show}>
        <Input>
          <input type="text" placeholder="buscar pelicula" />
          <button>buscar</button>
        </Input>
      </InputContainer>
    </Container>
  );
};

export default Header;
