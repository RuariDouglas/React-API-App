import React from "react";
// STYLES &  ANIMATIONS
import styled from "styled-components";
import { popIn } from "../animations";
import { motion } from "framer-motion";
import { col } from "../Styles/variables";
// REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../Actions/detailAction";
import { Link } from "react-router-dom";
// MISC
import { smallImage } from "../util";

const Game = ({ name, released, image, id }) => {
  // We need to convert the id to string in order for our IDs to match for the Framer Motion animation.
  const stringPathId = id.toString();
  // Load Details - Here we call on our specific game detail when someone clicks on the game, this fires up our API request.
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    //  Here we need to add corresponding IDs to the elements we wish to animate between. Because we already have
    <StyledGame
      variants={popIn}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <div className="cont">
          <motion.h3>{name}</motion.h3>
          <p>{released}</p>
        </div>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  .cont {
    background-color: ${col.primary};
    padding: 1rem;
    line-height: 180%;
    h3 {
      padding: 0;
      font-weight: bolder;
      color: ${col.dark};
    }
  }
  min-height: 30vh;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
  text-align: center;
  border-radius: 1rem;

  p {
    color: ${col.dark};
    margin-top: 2px;
    line-height: 100%;
  }
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
