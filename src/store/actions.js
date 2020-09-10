import { getGamesIntro } from "../ultils/getData/games";
import { getBanners } from "../ultils/getData/sliders";
import type from "./action_types";
const { GET_LISTGAMES, GET_BANNERS, LOGIN, LOGOUT, SET_CONTENT_ACCOUNT } = type;
export default {
  getListGames({ commit }) {
    getGamesIntro().then((response) => {
      commit(GET_LISTGAMES, response.data);
    });
  },
  getDataBanners({ commit }) {
    getBanners().then((response) => {
      commit(GET_BANNERS, response.data);
    });
  },
  login({ commit }) {
    commit(LOGIN);
  },
  logout({ commit }) {
    commit(LOGOUT);
  },
  setContentAccount({ commit }, isContent) {
    commit(SET_CONTENT_ACCOUNT, isContent);
  },
};
