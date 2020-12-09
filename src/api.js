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

// POPULAR GAMES
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
/* This controls:
- the timeframe in which we're searching (lastYear to currentDate) - games?dates=${lastYear},${currentDate}
- the ordering (highest to lowest rating) - &ordering=-rating
- the amount of results returned - page_size=10
Often, endpoints will be input like this, so it's best to predefine variables to allow for dynamic content changes
*/

const popularGamesUrl = () => `${base_url}${popular_games}`;

console.log(popularGamesUrl());
