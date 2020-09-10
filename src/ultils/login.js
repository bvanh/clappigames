import { baseLogin } from "../api/baseApi";
import { api } from "../api/apiUrl";
import qs from "qs";
import cookieService from "./cookieService";
import { gameId } from "./valDefault";
const { LOGIN_GG } = api;
const login = (thisObj, path, params, username) => {
  return baseLogin
    .post(path, qs.stringify({ ...params, gameId: gameId }))
    .then((response) => {
      // console.log(response);
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
const ggLogin = (thisObj, token, username) => {
  baseLogin
    .post(LOGIN_GG, qs.stringify({ accessToken: token, gameId: gameId }))
    .then((res) => {
      const { data } = res;
      cookieService.setToken({ ...data, username: username }, data.accessToken);
      thisObj.$store.dispatch("login");
      return res;
    })
    .catch((err) => {
      console.log(err.response);
    });
};
export { login, ggLogin };
