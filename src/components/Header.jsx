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
  HeaderNav,
  HeaderUl,
} from "../StyleComponent/Header";

const Header = () => {
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <Container>
      <HeaderStyled>
        <HeaderNav>
          <a href="#">
            <img
              src="https://pelispanda.re/wp-content/uploads/2020/07/panda1.png"
              alt="pelispanda"
            />
          </a>
          <HeaderUl menu={menu}>
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
          </HeaderUl>
        </HeaderNav>
        <Containericon>
          <AiOutlineSearch
            onClick={handleClick}
            style={{
              fontSize: "2rem",
              color: "rgba(255,255,255,0.75)",
              cursor: "pointer",
            }}
          />
          <AiOutlineMenu
            onClick={handleMenu}
            style={{
              fontSize: "2rem",
              color: "rgba(255,255,255,0.75)",
              cursor: "pointer",
              marginLeft: "1rem",
            }}
          />
        </Containericon>
        <AiOutlineSearch
          className="search"
          onClick={handleClick}
          style={{
            fontSize: "2rem",
            color: "rgba(255,255,255,0.75)",
            cursor: "pointer",
          }}
        />
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
