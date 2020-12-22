// BASE URL
const base_url = "https://api.rawg.io/api/";

// GET DATE FUNCTIONS/VARIABLES
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// HOME GAMESLIST
/* This controls:
- the timeframe in which we're searching (lastYear to currentDate) - games?dates=${lastYear},${currentDate}
- the ordering (highest to lowest rating) - &ordering=-rating
- the amount of results returned - page_size=10
Often, endpoints will be input like this, so it's best to predefine variables to allow for dynamic content changes
*/
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

// GAMES DETAILS
/* This url will be passed into the axios request for game specific detail in the detailAction. */
export const gamesDetailsURL = (gameID) => `${base_url}games/${gameID}`;

// GAME SCREENSHOTS URL
/* This url will be passed into the axios request for game specific detail in the detailAction. */
export const gameScreenshotURL = (gameID) =>
  `${base_url}games/${gameID}/screenshots`;

// SEARCHED GAME
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9`;
