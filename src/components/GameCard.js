import React from "react";
// STYLES
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
// ACTIONS
import { loadDetail } from "../Actions/detailAction";
import { Link } from "react-router-dom";
// MISC
import { smallImage } from "../util";

const Game = ({ name, released, image, id }) => {
  // Load Details - Here we call on our specific game detail when someone clicks on the game, this fires up our API request.
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <Link to={`/game/${id}`}>
      <StyledGame onClick={loadDetailHandler}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </StyledGame>
    </Link>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
