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
  // We need to convert the id to string in order for our IDs to match for the Framer Motion animation
  const stringPathId = id.toString();
  // Load Details - Here we call on our specific game detail when someone clicks on the game, this fires up our API request.
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <Link to={`/game/${id}`}>
      {/* Here we need to add corresponding IDs to the elements we wish to animate between. Because we already have  */}
      <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
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
