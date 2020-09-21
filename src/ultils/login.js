import { baseLogin } from "../api/baseApi";
import qs from "qs";
import cookieService from "./cookieService";
import { gameId } from "./valDefault";

const login = (thisObj, path, params, userIndex) => {
  return baseLogin
    .post(path, qs.stringify({ ...params, gameId: gameId }))
    .then((response) => {
      // console.log(response);
      const { data } = response;
      cookieService.setToken(
        { ...data, ...userIndex, noSocial: true },
        data.accessToken
      );
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
const socialLogin = (thisObj, path, token, socialIndex) => {
  return baseLogin
    .post(path, qs.stringify({ accessToken: token, gameId: gameId }))
    .then((res) => {
      const { data } = res;
      cookieService.setToken(
        { ...data, ...socialIndex, noSocial: false },
        data.accessToken
      );
      thisObj.$store.dispatch("login");
      return res;
    })
    .catch((err) => {
      console.log(thisObj);
      console.log(err.response);
    });
};
export { login, socialLogin };
