import React from "react";
// STYLING & ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
import { col } from "../Styles/variables";
// REDUX
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// MISC
import { smallImage } from "../util";
// IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
// Star images
import ReactStars from "react-rating-stars-component";

const GameDetail = ({ pathId }) => {
  const history = useHistory();

  // EXIT DETAIL
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  // GET PLATFORM IMAGES
  const getPlatform = (platform) => {
    return (
      {
        "PlayStation 4": playstation,
        "PlayStation 5": playstation,
        "Xbox Series S/X": xbox,
        "Xbox S": xbox,
        "Xbox One": xbox,
        "Nintendo Switch": nintendo,
        PC: steam,
        iOS: apple,
      }[platform] || gamepad
    );
  };

  // DATA
  const { game, screenshots, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <motion.h3 className="name">{game.name}</motion.h3>
            <Stats>
              {/* RATING */}
              <div className="rating">
                <h3>Rating: {game.rating}</h3>
                <ReactStars
                  value={game.rating}
                  isHalf={true}
                  count={5}
                  color={"#e28800"}
                  activeColor={"blue"}
                  edit={false}
                  size={40}
                />
              </div>
              {/* INFO */}
              <div className="info">
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                      title={data.platform.name}
                    ></img>
                  ))}
                </Platforms>
              </div>
            </Stats>
            {/* Media */}
            <Media>
              <motion.img
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
                layoutId={`image ${pathId}`}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>

            <div className="gallery">
              {screenshots.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  height: 100vh;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${col.primary};
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const Detail = styled(motion.div)`
  margin-top: 2rem;
  width: 80%;
  border-radius: 1rem 1rem 0 0;
  padding: 2rem 5rem;
  background: ${col.primary};
  position: absolute;
  left: 10%;
  color: black;
  h3 {
    color: ${col.dark};
    &.name {
      text-align: center;
      font-size: 3rem;
    }
  }
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  .rating {
    width: 30%;
    h3 {
      padding-bottom: 0;
    }
  }
  .info {
    width: 16rem;
    img {
      width: 2rem;
      height: 2rem;
      display: inline;
    }
  }
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;

export default GameDetail;
