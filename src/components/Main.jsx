import React from "react";
import { MainStyled } from "../StyleComponent/Main";
import { useState } from "react";

const Main = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return <MainStyled></MainStyled>;
};

export default Main;
