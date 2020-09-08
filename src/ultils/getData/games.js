import { baseApi } from "../../api/baseApi";
import { api } from "../../api/apiUrl";
const {GAMES_INTRO} = api;
const getGamesIntro = () => {
 return baseApi
    .get(GAMES_INTRO)
    .then((response) => {
      return response;
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};

export { getGamesIntro };
