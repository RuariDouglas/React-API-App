import axios from "axios";
// This is the URL we created which we will pass into the api request
import { popularGamesUrl, upcomingGamesURL, newGamesURL } from "../api";

// ACTION CREATOR
export const loadGames = () => async (dispatch) => {
  // FETCH AXIOS
  const popularData = await axios.get(popularGamesUrl());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upComingGames: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
