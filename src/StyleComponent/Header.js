import styled from "styled-components";

export const Container = styled.div`
  background-color: #2b2b31;
  height: 100px;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderStyled = styled.header`
  background-color: #2b2b31;
  height: 100px;
  width: 90%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;

  @media (max-width: 768px) {
    justify-content: space-between;
    ul {
      display: none;
    }
    .search {
      display: ${({ search }) => (search ? "flex" : "none")};
    }
  }
`;
export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;

  img {
    height: 2em;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    display: flex;
  }
`;
export const HeaderUl = styled.ul`
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 6.2rem;
    right: 0;
    width: 305px;
    bottom: 0;
    height: 100vh;
    background-color: #28282d;
    z-index: 1;
    box-sizing: border-box;
    transition: 0.4s ease;
    transform: ${(props) =>
      props.menu ? "translateX(0)" : "translateX(200%)"};
    padding: 30px 30px 0;
  }
  li {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;

    a {
      display: block;
      text-decoration: none;
      color: #fff;
      font-size: 1em;
      font-weight: 500;
      letter-spacing: 0.5px;
      font-family: "Open Sans", sans-serif;
      padding: 1em 2em;
      box-sizing: border-box;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const Containericon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin: 0 1em;
    padding: 0;
    box-sizing: border-box;
    cursor: pointer;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-color: #28282d;
  z-index: 1;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  transform: ${(props) =>
    props.show ? "translateY(6.2rem)" : "translateY(0)"};
  z-index: -1;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 90%;
  margin: auto;
  height: 60px;
  max-width: 1200px;

  input {
    width: 100%;
    height: 60px;
    border: none;
    padding: 0 1em;
    box-sizing: border-box;
    outline: none;
    background-color: #28282d;
    color: #fff;
    font-size: 1em;
    font-weight: 500;
    letter-spacing: 0.5px;
    font-family: "Open Sans", sans-serif;
    margin: 0 auto;
    padding: 0 130px 0 50px;
    &::placeholder {
    }
  }
  button {
    height: 40px;
    width: 110px;

    right: 50px;
    -webkit-border-radius: 4px;
    border-radius: 5px;
    background-image: -moz-linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
    background-image: -webkit-linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
    background-image: -ms-linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
    background-image: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
    -webkit-box-shadow: 0 0 20px 0 rgb(255 88 96 / 50%);
    box-shadow: 0 0 20px 0 rgb(255 88 96 / 50%);
    opacity: 0.85;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.6px;
  }
`;
