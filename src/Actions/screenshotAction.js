import axios from "axios";
import { gameScreenshotURL } from "../api";

export const loadScreenShot = (id) => async (dispatch) => {
  const screenshotData = await axios.get(gameScreenshotURL(id));
  dispatch({
    type: "GET_SCREENSHOTS",
    payload: {
      screenshots: screenshotData.data,
    },
  });
};
