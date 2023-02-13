import React from "react";
import { GlobalStyles } from "./StyleComponent/GlobalStyles";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
    </>
  );
}

export default App;
