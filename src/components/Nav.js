import React, { useState } from "react";
// ANIMATION & STYLING
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { col } from "../Styles/variables";
import { fadeIn } from "../animations";
// REDUX AND ROUTES
import { fetchSearched } from "../Actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearched(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>GAMEAGE</h1>
      </Logo>
      <Search>
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </Search>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    display: inline;
  }
  padding: 3rem 5rem;
  text-align: center;
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  cursor: pointer;
  img {
    height: 4rem;
    width: 4rem;
    margin-right: 0.2rem;
  }
  h1 {
    font-size: 4rem;
    color: ${col.primary};
  }
`;

const Search = styled(motion.form)`
  input {
    width: 40rem;
    padding: 1rem;
    border: none;
    font-size: 1.5rem;
    color: ${col.accent};
    background-color: #111111;
    border-radius: 1rem 0 0 1rem;
    transition: box-shadow 1s ease;
    &:focus {
      box-shadow: 0 0 20px rgb(255, 152, 0, 0.7);
    }
  }
  button {
    position: relative;
    font-family: "Ubuntu Mono", monospace;
    font-weight: bolder;
    border: none;
    padding: 1rem 2rem;
    background-color: ${col.blue};
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    transition: background-color 1s ease;
    &:hover {
      background-color: #0000a1;
    }
  }
`;
export default Nav;
