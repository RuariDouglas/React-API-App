/* Here we have set up an initial state for our games data. initState = an object of arrays with corresponding keys. When we retrieve the data from our API call, using Payload we can assign specific data to each of these categories.

We can then access this data and update the state like shown below in gamesReducer.
*/
const initState = {
  popular: [],
  newGames: [],
  upComingGames: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

export default gamesReducer;

/*
ABOVE WE HAVE USED SHORTHAND
case "FETCH_GAMES":
      return { ...state, ...action.payload };

We can simply attribute each payload property automatically to the corresponding state property this way without having to explicitly do this like below.

THIS IS EQUIVALENT TO WRITING THE BELOW CODE:
  case "FETCH_GAMES":
        return {
          ...state,
          popular: action.payload.popular,
          upComingGames: action.payload.upComingGames,
        };
*/
