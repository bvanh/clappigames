import type from "./action_types";
const { GET_LISTGAMES, GET_BANNERS } = type;
export default {
  [GET_LISTGAMES]: (state, listGames) => {
    state.listGames = listGames;
  },
  [GET_BANNERS]: (state, banners) => {
    state.banners = banners;
  },
};
