import React, { useEffect } from "react";

// REDUX
import { loadGames } from "../Actions/gamesAction";
import { useDispatch, useSelector } from "react-redux";
// COMPONENTS
import Game from "../components/GameCard";
// STYLES
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  // FETCH GAMES DATA //
  /* Here we are using useEffect to dispatch our API request upon app mounting. We pass in loadGames which is our API Action Creator. When the loadGames function has attained the API data, it is then dispatched where the gamesReducer checks for a match ("FETCH_GAMES") in the Switch Tree and modifies the state to reflect. */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]); // We have to pass dispatch in to tell useEffect only to run when the dispatch happens.
  // EXTRACT DATA
  const { popular, newGames, upComingGames } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      {/* UPCOMING GAMES */}
      <h2>Upcoming Games</h2>
      <Games>
        {upComingGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>
      {/* POPULAR GAMES */}
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>
      {/* NEW GAMES */}
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0%;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 3rem;
`;

export default Home;
