import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./Actions/gamesAction";

function App() {
  /* Here we are using useEffect to dispatch our API request upon app mounting. We pass in loadGames which is our API Action Creator. When the loadGames function has attained the API data, it is then dispatched where the gamesReducer checks for a match ("FETCH_GAMES") in the Switch Tree and modifies the state to reflect. */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div className="App">
      <h1>Our App</h1>
    </div>
  );
}

export default App;
