const api = {
  ROOT: "https://test.api.cubegame.vn",
  // login
  LOGIN: "/auth/login",
  LOGIN_FB: "/facebook",
  LOGIN_GG: "/google",
  // sliders
  SLIDERS: "/sliders",
  // news
  NEWS: "/news",
  NEWS_DETAIL: "/news/detail/",
  NEWS_ALL: "/news/5A6DC0B0-B02B-40FB-BA2C-3C42EC442B89",
  // banners
  BANNERS: "/cfg/banners",
  // intro
  GAMES_INTRO: "/introduction",
  // users
  GET_INFO:"/users/info",
  UPDATE_USER:'/users/update',
  GET_CHARACTER: "/private/characters",
  GET_INFO_SPIN: "/private/info",
  GET_RESULT_SPIN: "/private/spin",
  GET_HISTORY_SPIN: "/private/history",
  // token
  REFRESH_TOKEN: "/auth/token/refresh",
};
const type = {
  news: {
    ALL: "/all",
    NEWS: "/news",
    EVENT: "/event",
    GUIDE: "/guide",
  },
  sliders: {
    HOME: "HOME",
    NEWS: "NEWS",
    GAME: "GAME",
  },
};
export { api, type };
