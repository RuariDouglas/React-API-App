import axios from "axios";
// Import the URL created in api.js, we will use this to make the API request.
import { gamesDetailsURL, gameScreenshotURL } from "../api";

/* This is what's called an action creator */
export const loadDetail = (id) => async (dispatch) => {
  dispatch({ type: "LOADING_DETAIL" });
  const detailData = await axios.get(gamesDetailsURL(id));
  const screenshotData = await axios.get(gameScreenshotURL(id));
  // Using the action creator, we are able to pass in, via payload, the returned data from our API request
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screenshots: screenshotData.data,
    },
  });
};
