import { baseLogin } from "../api/baseApi";
import qs from "qs";
import cookieService from "./cookieService";
import { gameId } from "./valDefault";
const login = (thisObj, path, params, username) => {
  return baseLogin
    .post(path, qs.stringify({ ...params, gameId: gameId }))
    .then((response) => {
      console.log(response);
      const { data } = response;
      cookieService.setToken({ ...data, username: username }, data.accessToken);
      thisObj.$store.dispatch("login");
      return response;
    })
    .catch((error) => {
      const { status, title, message } = error.response.data;
      const newStatus = {
        val: title.toLowerCase(),
        help: message,
      };
      switch (status) {
        case 1004:
          thisObj.statusUser = newStatus;
          return;
        default:
          thisObj.statusPwd = newStatus;
          return;
      }
    });
};
export { login };
