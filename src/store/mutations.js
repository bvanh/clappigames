import type from "./action_types";
const { GET_LISTGAMES, GET_BANNERS, LOGOUT, LOGIN, SET_CONTENT_ACCOUNT } = type;
export default {
  [GET_LISTGAMES]: (state, listGames) => {
    state.listGames = listGames;
  },
  [GET_BANNERS]: (state, banners) => {
    state.banners = banners;
  },
  [LOGIN]: (state) => {
    state.isLogin = true;
  },
  [LOGOUT]: (state) => {
    state.isLogin = false;
  },
  [SET_CONTENT_ACCOUNT]: (state, isContent) => {
    state.isContentAccount = isContent;
  },
};
