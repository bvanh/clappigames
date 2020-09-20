const api = {
  ROOT: "https://test.api.cubegame.vn",
  // upload img feedbacks
  ROOT_UPLOAD: "http://localhost:3002",
  UPLOAD: "/upload",
  DELETE: "/delete",
  // login
  LOGIN: "/auth/login",
  LOGIN_FB: "/auth/login/facebook",
  LOGIN_GG: "/auth/login/google",
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
  GET_INFO: "/users/info",
  UPDATE_USER: "/users/update",
  UPDATE_USER_PWD: "/users/update/password",
  REGISTER_USER: "/auth/register",
  // token
  REFRESH_TOKEN: "/auth/token",
  // feedbacks
  SEND_FEEDBACKS: "/feedbacks/post",
  GET_FEEDBACKS:"/feedbacks",
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
