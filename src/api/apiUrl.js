const api = {
  ROOT: "https://test.api.cubegame.vn",
  // sliders
  SLIDERS: "/sliders",
  // news
  NEWS: "/news",
  NEWS_DETAIL:"/news/detail/",
  NEWS_ALL: "/news/5A6DC0B0-B02B-40FB-BA2C-3C42EC442B89",
  BANNERS:"/cfg/banners",
  GAMES_INTRO:"/introduction",
  AUTH_LOGIN: "/auth/login",
  AUTH_GG_LOGIN: "/auth/login/gg",
  AUTH_FB_LOGIN: "/auth/login/fb",
  GET_CHARACTER: "/private/characters",
  GET_INFO_SPIN: "/private/info",
  GET_RESULT_SPIN: "/private/spin",
  GET_HISTORY_SPIN: "/private/history",
  REFRESH_TOKEN: "/auth/renew/access",
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
