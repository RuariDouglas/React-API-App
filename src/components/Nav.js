import React from "react";
// ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { col } from "../Styles/variables";

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <Search>
        <input type="text" />
        <button>Search</button>
      </Search>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  img {
    display: inline;
  }
  padding: 3rem 5rem;
  text-align: center;
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

const Search = styled(motion.div)`
  input {
    width: 40%;
    padding: 0.5rem;
    border: none;
    font-size: 1.5rem;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  }
  button {
    font-family: "Montserrat", sans-serif;
    border: none;
    padding: 0.5rem 2rem;
    background-color: ${col.salm};
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;
export default Nav;
