import { baseLogin } from "../api/baseApi";
import qs from "qs";
import cookieService from "./cookieService";
const login = (thisObj, path, params, username) => {
  const gameId = "5A6DC0B0-B02B-40FB-BA2C-3C42EC442B89";
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
