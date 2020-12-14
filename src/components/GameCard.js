import React from "react";
// STYLES
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
// ACTIONS
import { loadDetail } from "../Actions/detailAction";

const Game = ({ name, released, image, id }) => {
  // Here we call on our specific game detail when someone clicks on the game, this fires up our API request.
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
